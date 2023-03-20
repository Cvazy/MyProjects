import requests
from bs4 import BeautifulSoup

url = "https://pogoda33.com/погода-москва/14-дней"

bs = BeautifulSoup(requests.get(url).text, "html.parser")

temp = bs.find('div', class_='current-weather-temperature').text
wind = bs.find('div', title_='unit_pressure_mm_hg_atm').text
hum = bs.find('span', class_='VaOz d2qU').text

print(temp)