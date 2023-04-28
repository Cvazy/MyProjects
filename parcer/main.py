import os
import shutil
import requests
import lxml.html
from os import walk
from random import randint
from collections import Counter
from bs4 import BeautifulSoup as BS
from openpyxl import load_workbook as lw


headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 YaBrowser/23.3.2.806 Yowser/2.5 Safari/537.36'
}


def get_artic(url):
    lst = []
    s = requests.Session()
    response = s.get(url=url, headers=headers)

    with open('site.txt', 'w', encoding="utf-8") as file:
        file.write(response.text)

    with open('site.txt', encoding="utf-8") as file:
        scr = file.read()

    soup = BS(scr, 'lxml')
    articuls = soup.find_all(class_='dark_link option-font-bold font_sm')
    for i in articuls:
        atr = i.text.partition('Арт. ')[2].strip(')').strip('/a')
        lst.append(atr)

    with open('mitools.txt', 'a', encoding="utf-8") as file:
        for item in lst:
            file.write(f'{item} \n')


def pars_artic_excel(path):
    book = lw(filename=path)
    sheet = book['Прайс MILWAUKEE®']

    for i in range(10, 5755):
        with open('milwaukee.txt', 'a', encoding="utf-8") as file:
            file.write(f'{sheet["I" + str(i)].value} \n')


def comparison(path1, path2):
    art1 = []
    art2 = []

    with open(path1, 'r') as file:
        for i in file.readlines():
            art1.append(i)
            art1 = list(map(lambda x: x.strip(), art1))

    with open(path2, 'r') as file:
        for i in file.readlines():
            art2.append(i)
            art2 = list(map(lambda x: x.strip(), art2))

    coincidences = (set(art1) & set(art2))
    different = list(set(art2) - coincidences)

    with open('different.txt', 'a', encoding="utf-8") as file:
        for item in different:
            file.write(f'{item} \n')


def add_excel(path):
    book = lw(filename=path)
    sheet1 = book['Прайс MILWAUKEE®']
    sheet2 = book['MITOOLS']

    for i in range(10, 5756):
        with open('different.txt', 'r', encoding="utf-8") as file:
            for item in file.readlines():
                if int(item) == sheet1["I" + str(i)].value:
                    print('Good!')
                    sheet2.append([
                        sheet1["C" + str(i)].value,
                        sheet1["I" + str(i)].value,
                        sheet1["J" + str(i)].value,
                        sheet1["P" + str(i)].value
                    ])
                    book.save(filename=path)
    book.close()


def get_products_url():
    cookies = {
        'CMSPreferredCulture': 'ru-RU',
        '_gcl_au': '1.1.2110588256.1681992669',
        '_ga': 'GA1.3.2136548200.1681992669',
        '_fbp': 'fb.1.1681992670224.1657359684',
        'ASP.NET_SessionId': 'ozpjdvumaiwhcgsncp1vwy4s',
        '__cflb': '02DiuDzLcwpvFkz94eYGzGiUgvy2atVg2qApb3vFXrjjJ',
        'OptanonAlertBoxClosed': '2023-04-22T09:38:16.029Z',
        '_gid': 'GA1.2.168824221.1682156296',
        '_gid': 'GA1.3.168824221.1682156296',
        'CMSCookieLevel': '200',
        'CurrentContact': '3aa63d61-10a7-4d55-9790-d1ef1a6fd08d',
        'Milwaukeetool_ApplicationCookie': 'loggedin=1',
        '_ga_7Q3RS7H93C': 'GS1.1.1682169051.1.1.1682169181.0.0.0',
        '_hjSessionUser_979983': 'eyJpZCI6Ijk0MWNjZjMwLWJjMTYtNWQzYi1hYTA1LTliZmM4YWM4MmQ2MiIsImNyZWF0ZWQiOjE2ODIxNjkyMjA1MzQsImV4aXN0aW5nIjp0cnVlfQ==',
        'sg_cookies': '{%225620350%22:{%22rf%22:%22%22%2C%22lv%22:1682172639592%2C%22pv%22:9%2C%22pv_p%22:{}%2C%22tv%22:2%2C%22tv_p%22:{}}%2C%22_g%22:1}',
        '_ga_964DTTVY8S': 'GS1.1.1682172639.2.1.1682173631.0.0.0',
        'CMSLandingPageLoaded': 'true',
        '_ga': 'GA1.2.2136548200.1681992669',
        '_gat': '1',
        '_ga_EKS2TPWSMT': 'GS1.1.1682173300.6.1.1682178903.0.0.0',
        '_ga_6RR0WK74K4': 'GS1.1.1682172639.6.1.1682178903.0.0.0',
        'OptanonConsent': 'isGpcEnabled=0&datestamp=Sat+Apr+22+2023+18%3A55%3A03+GMT%2B0300+(%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)&version=6.21.0&isIABGlobal=false&hosts=&consentId=dd1d01f1-9838-4dda-bb07-28900449605b&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&geolocation=RU%3BMOW&AwaitingReconsent=false',
    }

    headers = {
        'authority': 'ru.milwaukeetool.eu',
        'accept': 'application/json',
        'accept-language': 'ru,en;q=0.9',
        'content-type': 'application/json; charset=utf-8',
        # 'cookie': 'CMSPreferredCulture=ru-RU; _gcl_au=1.1.2110588256.1681992669; _ga=GA1.3.2136548200.1681992669; _fbp=fb.1.1681992670224.1657359684; ASP.NET_SessionId=ozpjdvumaiwhcgsncp1vwy4s; __cflb=02DiuDzLcwpvFkz94eYGzGiUgvy2atVg2qApb3vFXrjjJ; OptanonAlertBoxClosed=2023-04-22T09:38:16.029Z; _gid=GA1.2.168824221.1682156296; _gid=GA1.3.168824221.1682156296; CMSCookieLevel=200; CurrentContact=3aa63d61-10a7-4d55-9790-d1ef1a6fd08d; Milwaukeetool_ApplicationCookie=loggedin=1; _ga_7Q3RS7H93C=GS1.1.1682169051.1.1.1682169181.0.0.0; _hjSessionUser_979983=eyJpZCI6Ijk0MWNjZjMwLWJjMTYtNWQzYi1hYTA1LTliZmM4YWM4MmQ2MiIsImNyZWF0ZWQiOjE2ODIxNjkyMjA1MzQsImV4aXN0aW5nIjp0cnVlfQ==; sg_cookies={%225620350%22:{%22rf%22:%22%22%2C%22lv%22:1682172639592%2C%22pv%22:9%2C%22pv_p%22:{}%2C%22tv%22:2%2C%22tv_p%22:{}}%2C%22_g%22:1}; _ga_964DTTVY8S=GS1.1.1682172639.2.1.1682173631.0.0.0; CMSLandingPageLoaded=true; _ga=GA1.2.2136548200.1681992669; _gat=1; _ga_EKS2TPWSMT=GS1.1.1682173300.6.1.1682178903.0.0.0; _ga_6RR0WK74K4=GS1.1.1682172639.6.1.1682178903.0.0.0; OptanonConsent=isGpcEnabled=0&datestamp=Sat+Apr+22+2023+18%3A55%3A03+GMT%2B0300+(%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)&version=6.21.0&isIABGlobal=false&hosts=&consentId=dd1d01f1-9838-4dda-bb07-28900449605b&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&geolocation=RU%3BMOW&AwaitingReconsent=false',
        'origin': 'https://ru.milwaukeetool.eu',
        'referer': 'https://ru.milwaukeetool.eu/range/ppe/?pageindex=0',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "YaBrowser";v="23"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 YaBrowser/23.3.2.806 Yowser/2.5 Safari/537.36',
    }

    json_data = {
        'allFilters': {
            'technologies': [],
            'ProductTypes': [],
            'trades': [],
            'orderby': [
                'relevance',
            ],
        },
        'culture': 'ru-RU',
        'filterWhitelist': [
            'productTypes',
            'technologies',
            'trades',
            'orderBy',
        ],
        'groupByCategory': False,
        'includeAllCategories': False,
        'pageIndex': 3,
        'pageSize': 28,
        'productListGuid': '06b2faa0-1c9b-4a69-86cd-d2914511ef2d',
        'promoCards': None,
        'published': True,
        'showCards': False,
        'includePreviousPages': False,
        'searchTerm': None,
        'url': '/range/ppe/',
    }

    response = requests.post(
        'https://ru.milwaukeetool.eu/api/productlisting/listingproductmodels',
        cookies=cookies,
        headers=headers,
        json=json_data,
    ).json()

    with open('prod_url.txt', 'a', encoding="utf-8") as file:
        for i in response['products']:
            file.write(f'{i["url"]} \n')


def get_page_ingo():
    urls = []

    with open('prod_url.txt', 'r', encoding='utf-8') as file:
        urls.append(file.readlines())

    for url in urls[0]:
        prod_data = []
        page = f'https://ru.milwaukeetool.eu{"".join(url.split())}'
        response = requests.get(page, headers=headers)
        root = lxml.html.fromstring(response.text)

        with open('items.json', 'w', encoding='utf-8') as file:
            file.write('\n'.join(str(root.xpath('(//*[text()])[last()]/text()')[0]).split('"reduxContext":')))

        with open('items.json', 'r', encoding='utf-8') as file:
            data = file.readlines()

        count = 0
        for i in data:
            count += 1
            if count == 4:
                prod_data.append(i)

        a = prod_data[0].find('"articleNumber":')
        b = prod_data[0].find('"articleNumberDisplayValues"')

        arc = []

        start = a + 17
        end = b - 2

        for i in range(start, end):
            arc.append(list(prod_data[0])[i])

        name = ''.join(arc).replace('",', '')

        num = 0

        if not os.path.exists(f'pars_products/{name}'):
            os.mkdir(f'pars_products/{name}', mode=0o777)
        else:
            name += f'_{randint(1, 1000000)}'
            os.mkdir(f'pars_products/{name}', mode=0o777)
            num += 1

        with open(f'pars_products/{name}/{name}.json', 'a', encoding='utf-8') as file:
            for i in prod_data:
                file.write(str(i))

        print(f'Отработал {name}')


def sort_items_in_file():
    pars_items = []
    mitools = []
    file_path = r'C:\Users\79967\Desktop\freelance\parcer\pars_products'

    with open('mitools.txt', 'r', encoding='utf-8') as file:
        for i in file.readlines():
            mitools.append(i.strip('\n'))

    for (dirpath, dirnames, filenames) in walk(file_path):
        for i in dirnames:
            pars_items.append(i)

    result = list(set(mitools) - set(pars_items))

    array_3 = list((Counter(mitools) - Counter(result)).elements())

    with open('dif.txt', 'w', encoding='utf-8') as dif:
        for i in array_3:
            dif.write(f'{i} \n')

    for i in pars_items:
        if i in array_3:
            shutil.rmtree(f'{file_path}\{i}')
            print(f'Удалил {i}')


def del_desc():
    mitools_dirs = []
    file_path = r'C:\Users\79967\Desktop\freelance\parcer\pars_products'

    for (dirpath, dirnames, filenames) in walk(file_path):
        mitools_dirs.extend(dirnames)
        break

    for dir in mitools_dirs:
        with open(fr'C:\Users\79967\Desktop\freelance\parcer\pars_products\{dir}\{dir}.json', 'r', encoding='utf-8') as file:
            line = file.readline()

    for dir in mitools_dirs:
        with open(fr'C:\Users\79967\Desktop\freelance\parcer\pars_products\{dir}\{dir}.json', 'w', encoding='utf-8') as file:
            file.write(line)


def pars_description():
    cookies = {
        'CMSPreferredCulture': 'ru-RU',
        '_gcl_au': '1.1.2110588256.1681992669',
        '_ga': 'GA1.3.2136548200.1681992669',
        '_fbp': 'fb.1.1681992670224.1657359684',
        '_gid': 'GA1.2.168824221.1682156296',
        '_gid': 'GA1.3.168824221.1682156296',
        'CMSCookieLevel': '200',
        'CurrentContact': '3aa63d61-10a7-4d55-9790-d1ef1a6fd08d',
        '_ga_7Q3RS7H93C': 'GS1.1.1682169051.1.1.1682169181.0.0.0',
        '_hjSessionUser_979983': 'eyJpZCI6Ijk0MWNjZjMwLWJjMTYtNWQzYi1hYTA1LTliZmM4YWM4MmQ2MiIsImNyZWF0ZWQiOjE2ODIxNjkyMjA1MzQsImV4aXN0aW5nIjp0cnVlfQ==',
        'sg_cookies': '{%225620350%22:{%22rf%22:%22%22%2C%22lv%22:1682172639592%2C%22pv%22:9%2C%22pv_p%22:{}%2C%22tv%22:2%2C%22tv_p%22:{}}%2C%22_g%22:1}',
        '_ga_964DTTVY8S': 'GS1.1.1682172639.2.1.1682173631.0.0.0',
        '_ga_REL11FC3F5': 'GS1.1.1682515093.3.1.1682516147.0.0.0',
        '__cflb': '0H28uywC6wvc1fsNpdHuufToMKYRqML4xzmwGcE6hd6',
        'OptanonAlertBoxClosed': '2023-04-26T19:07:32.484Z',
        'ASP.NET_SessionId': 'gkbpy4aqxw3dgxajxi2or5ll',
        'CMSLandingPageLoaded': 'true',
        '_ga': 'GA1.2.2136548200.1681992669',
        '_gat': '1',
        'OptanonConsent': 'isGpcEnabled=0&datestamp=Thu+Apr+27+2023+03%3A01%3A55+GMT%2B0300+(%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)&version=6.21.0&isIABGlobal=false&hosts=&consentId=dd1d01f1-9838-4dda-bb07-28900449605b&interactionCount=5&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&geolocation=RU%3BMOW&AwaitingReconsent=false',
        '_ga_EKS2TPWSMT': 'GS1.1.1682549376.33.1.1682553715.0.0.0',
        '_ga_6RR0WK74K4': 'GS1.1.1682549377.33.1.1682553715.0.0.0',
    }

    headers = {
        'authority': 'ru.milwaukeetool.eu',
        'accept': 'application/json',
        'accept-language': 'ru,en;q=0.9',
        'content-type': 'application/json; charset=utf-8',
        # 'cookie': 'CMSPreferredCulture=ru-RU; _gcl_au=1.1.2110588256.1681992669; _ga=GA1.3.2136548200.1681992669; _fbp=fb.1.1681992670224.1657359684; _gid=GA1.2.168824221.1682156296; _gid=GA1.3.168824221.1682156296; CMSCookieLevel=200; CurrentContact=3aa63d61-10a7-4d55-9790-d1ef1a6fd08d; _ga_7Q3RS7H93C=GS1.1.1682169051.1.1.1682169181.0.0.0; _hjSessionUser_979983=eyJpZCI6Ijk0MWNjZjMwLWJjMTYtNWQzYi1hYTA1LTliZmM4YWM4MmQ2MiIsImNyZWF0ZWQiOjE2ODIxNjkyMjA1MzQsImV4aXN0aW5nIjp0cnVlfQ==; sg_cookies={%225620350%22:{%22rf%22:%22%22%2C%22lv%22:1682172639592%2C%22pv%22:9%2C%22pv_p%22:{}%2C%22tv%22:2%2C%22tv_p%22:{}}%2C%22_g%22:1}; _ga_964DTTVY8S=GS1.1.1682172639.2.1.1682173631.0.0.0; _ga_REL11FC3F5=GS1.1.1682515093.3.1.1682516147.0.0.0; __cflb=0H28uywC6wvc1fsNpdHuufToMKYRqML4xzmwGcE6hd6; OptanonAlertBoxClosed=2023-04-26T19:07:32.484Z; ASP.NET_SessionId=gkbpy4aqxw3dgxajxi2or5ll; CMSLandingPageLoaded=true; _ga=GA1.2.2136548200.1681992669; _gat=1; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Apr+27+2023+03%3A01%3A55+GMT%2B0300+(%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)&version=6.21.0&isIABGlobal=false&hosts=&consentId=dd1d01f1-9838-4dda-bb07-28900449605b&interactionCount=5&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&geolocation=RU%3BMOW&AwaitingReconsent=false; _ga_EKS2TPWSMT=GS1.1.1682549376.33.1.1682553715.0.0.0; _ga_6RR0WK74K4=GS1.1.1682549377.33.1.1682553715.0.0.0',
        'origin': 'https://ru.milwaukeetool.eu',
        'referer': 'https://ru.milwaukeetool.eu/ru-ru/%D0%BF%D1%80%D0%B8%D0%BD%D0%B0%D0%B4%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8/?pageindex=23',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "YaBrowser";v="23"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 YaBrowser/23.3.3.719 Yowser/2.5 Safari/537.36',
    }

    json_data = {
        'allFilters': {
            'systems': [],
            'technologies': [],
            'trades': [],
            'orderby': [
                'relevance',
            ],
        },
        'culture': 'ru-RU',
        'filterWhitelist': [
            'childCategories',
            'systems',
            'technologies',
            'trades',
            'orderBy',
        ],
        'groupByCategory': False,
        'includeAllCategories': False,
        'pageIndex': 23,
        'pageSize': 28,
        'productListGuid': None,
        'promoCards': None,
        'published': True,
        'showCards': True,
        'includePreviousPages': False,
        'searchTerm': None,
        'url': '/ru-ru/%D0%BF%D1%80%D0%B8%D0%BD%D0%B0%D0%B4%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8/',
        'productViewModelOptions': None,
    }

    response = requests.post(
        'https://ru.milwaukeetool.eu/api/productlisting/listingproductmodels',
        cookies=cookies,
        headers=headers,
        json=json_data,
    ).json()

    mitools_dirs = []
    file_path = r'C:\Users\79967\Desktop\freelance\parcer\pars_products'

    for (dirpath, dirnames, filenames) in walk(file_path):
        mitools_dirs.extend(dirnames)
        break

    with open('test.json', 'w', encoding='utf-8') as file:
        data = response
        file.write(str(response))

    for dir in mitools_dirs:
        for i in range(0, 28):
            artic = str(data['products'][i]['nodeId'])
            with open(fr'C:\Users\79967\Desktop\freelance\parcer\pars_products\{dir}\{dir}.json', 'r+', encoding='utf-8') as file:
                with open('work.txt', 'r+', encoding='utf-8') as work_file:
                    if artic in file.read() and artic not in work_file.read():
                        file.write(f'"description": {str(data["products"][i]["productFeatures"])}')
                        work_file.write(f"{artic} \n")
                        print(f"Отработал  {artic}")


def main():
    sort_items_in_file()


if __name__ == '__main__':
    main()