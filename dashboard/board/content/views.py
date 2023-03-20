import requests
import schedule
import pandas as pd
from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

from .models import Sidebar, Notes, Employees, \
    Weather, WeatherImage, Modal

from .serializers import NotesSerializer, EmployeesSerializer, \
    SidebarSerializer

from .weather_def import save_weather_bd, update_weather_bd
from .config import API_ID, URL


def index(request):
    if not API_ID and URL:
        return 'Не переданы URL или API_ID'
    appid = API_ID
    url = URL
    params = {'q': 'Moscow', 'appid': appid, 'units': 'metric'}
    r = requests.get(url=url, params=params)
    result = r.json()
    schedule.every().day.at('00:00').do(save_weather_bd, res=result)
    schedule.every(90).minutes.do(update_weather_bd, res=result)

    table = pd.DataFrame({
        'Data': [getattr(Weather.objects.first(), 'created_at').strftime("%d-%m-%Y")],
        'Temperature': [getattr(Weather.objects.first(), 'temperature')],
        'Wind': [getattr(Weather.objects.first(), 'wind')],
        'Humidity': [getattr(Weather.objects.first(), 'humidity')],
        'Pressure': [getattr(Weather.objects.first(), 'pressure')]
    })
    table.to_excel('static/weatherfile/weather_data.xlsx')

    context = {
        'sidebar': Sidebar.objects.all(),
        'notes': Notes.objects.all(),
        'employees': Employees.objects.all(),
        'weather': Weather.objects.all(),
        'weatherimage': WeatherImage.objects.all(),
        'modal': Modal.objects.all(),
        'description': result['weather'][0]['description'],
        'humidity': result['main']['humidity'],
        'wind': result['wind']['speed'],
        'icon': result['weather'][0]['icon'],
        'temp': result['main']['temp'],
        'pressure': result['main']['pressure'],
    }

    return render(request, 'content/index.html', context)


@api_view(['GET'])
def get_queryset(request, table=None):
    params = request.query_params
    list_id = params.getlist("id")
    ans_dict = {}

    if not list_id:
        return Response(ans_dict)

    for pk in list_id:
        if table == 'notes':
            notes = NotesSerializer(Notes.objects.filter(id=pk), many=True).data
            ans_dict[pk] = notes
        if table == 'employees':
            employees = EmployeesSerializer(Employees.objects.filter(id=pk), many=True).data
            ans_dict[pk] = employees
        if table == 'sidebar':
            sidebar = SidebarSerializer(Sidebar.objects.filter(id=pk), many=True).data
            ans_dict[pk] = sidebar

    queryset = {
        table: ans_dict
    }

    return Response(queryset)


class NotesAPIList(generics.ListCreateAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer
    filter_backends = [SearchFilter]
    filterset_fields = ['id']
    search_fields = ['name', 'id']
    permission_classes = (IsAuthenticatedOrReadOnly,)


class NotesAPIView(generics.DestroyAPIView, generics.UpdateAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer
    permission_classes = (IsAuthenticated,)


class EmployeesAPIList(generics.ListCreateAPIView):
    queryset = Employees.objects.all()
    serializer_class = EmployeesSerializer
    filter_backends = [SearchFilter]
    search_fields = ['employee', 'id', 'phone']
    permission_classes = (IsAuthenticatedOrReadOnly,)


class EmployeesAPIView(generics.DestroyAPIView, generics.UpdateAPIView):
    queryset = Employees.objects.all()
    serializer_class = EmployeesSerializer
    permission_classes = (IsAuthenticated,)


class SidebarAPIList(generics.ListCreateAPIView):
    queryset = Sidebar.objects.all()
    serializer_class = SidebarSerializer
    filter_backends = [SearchFilter]
    search_fields = ['name', 'id', 'image']
    permission_classes = (IsAuthenticatedOrReadOnly,)


class SidebarAPIView(generics.DestroyAPIView, generics.UpdateAPIView):
    queryset = Sidebar.objects.all()
    serializer_class = SidebarSerializer
    permission_classes = (IsAuthenticated,)


@api_view(['GET'])
def search_table(request, pk=None):
    notes = NotesSerializer(Notes.objects.all(), many=True).data
    employees = EmployeesSerializer(Employees.objects.all(), many=True).data
    sidebar = SidebarSerializer(Sidebar.objects.all(), many=True).data

    if pk:
        notes = NotesSerializer(Notes.objects.filter(id=pk), many=True).data
        employees = EmployeesSerializer(Employees.objects.filter(id=pk), many=True).data
        sidebar = SidebarSerializer(Sidebar.objects.filter(id=pk), many=True).data

    queryset = {
        'notes': notes,
        'employees': employees,
        'sidebar': sidebar
    }

    return Response(queryset)