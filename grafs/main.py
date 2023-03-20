from collections import defaultdict
import os.path

class Graph:
    def __init__(self):
        self.graf = defaultdict(list)
    def add(self, count):
        listStart = []
        if os.path.exists(os.getcwd()) == True:
            with open('grafs.txt', 'r+') as file:
                startGraf = [[int(num) for num in line.split(' ')] for line in file]
            for i in startGraf:
                listStart.append(i)
            for j in listStart[count]:
                self.graf[count].append(j)
        else:
            print('Заданного файла нет в исходной директории, введите адресс: ')
            adress = input('Введите новый путь к файлу: ')
            os.replace(adress, os.getcwd())
    def BreadthFirstSearch(self, startPoint, finishPoint):
        visited: list[bool] = [False] * (len(self.graf))
        queue = []
        resultList = []
        queue.append(startPoint)
        visited[startPoint] = True

        while queue:
            count = -1
            start = queue.pop(0)
            if len(resultList) != 0 and resultList[-1] == finishPoint:
                self.result = resultList
                break
            if self.graf[start][finishPoint] == 1:
                resultList.extend([start, finishPoint])
                self.result = resultList
                break
            for i in self.graf[start]:
                count += 1
                if i > 0 and visited[count] == False and start not in resultList:
                    self.graf[start][count] = 0
                    self.graf[count][start] = 0
                    resultList.append(start)
                    queue.append(count)
                    visited[count] = True
    def fileEnter(self):
        with open('result.txt', 'w+') as file:
            file.write(str(self.result))
            file.write('\n\r')
    def clear(self):
        os.remove('result.txt')
    def addGraf(self):
        with open('grafs.txt', 'r+') as file:
            startGraf = [[int(num) for num in line.split(' ')] for line in file]
        for i in startGraf:
            counter = len(i)
        number = 0
        while number < counter:
            self.add(number)
            number += 1


point = Graph()
point.addGraf()

while True:
    startPoint = int(input('Введите начальную точку: '))
    finishPoint = int(input('Введите конечную точку: '))
    count = 0
    if count == 0:
        point.BreadthFirstSearch(startPoint, finishPoint)
        point.fileEnter()
        word = input('Хотите продолжить: ')
        if word == 'stop':
            print('Результат в файле: result.txt')
            break