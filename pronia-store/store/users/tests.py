from http import HTTPStatus

from django.test import TestCase
from django.urls import reverse

from .models import User


class UserRegistrationViewTestCase(TestCase):
    fixtures = ['users.json']

    def setUp(self):
        self.path = reverse('users:register')

        self.data = {
            'first_name': 'Pavel',
            'last_name': 'Murakhtanov',
            'username': 'PavelUser',
            'password1': 'TestPassword7712',
            'password2': 'TestPassword7712'
        }

    def test_registration_get(self):
        response = self.client.get(self.path)

        self.assertEquals(response.status_code, HTTPStatus.OK)
        self.assertTemplateUsed(response, 'users/register.html')

    def test_registration_post(self):
        self.assertFalse(User.objects.filter(username=self.data['username']).exists())
        response = self.client.post(self.path, self.data)

        self.assertEquals(response.status_code, HTTPStatus.FOUND)
        self.assertTrue(User.objects.filter(username=self.data['username']).exists())


class UserLoginViewTestCase(TestCase):
    fixtures = ['users.json']

    def setUp(self):
        self.path = reverse('users:login')

        self.data = {
            'username': 'admin',
            'password': '1234'
        }

    def test_login_post(self):
        response = self.client.post(self.path, self.data)
        self.assertEquals(response.status_code, HTTPStatus.FOUND)
        self.assertTrue(User.objects.filter(username=self.data['username']).exists())
