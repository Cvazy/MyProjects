st = int(input("Укажите стартовый граф: "))
fin = int(input("Укажите конечный граф: "))

M = [
    # 0 #1 #2 #3 #4 #5 #6 #7
    [0, 1, 1, 0, 0, 1, 1, 1],  # 0
    [1, 0, 0, 0, 0, 0, 0, 1],  # 1
    [1, 0, 0, 0, 0, 0, 0, 1],  # 2
    [0, 0, 0, 0, 1, 1, 0, 0],  # 3
    [0, 0, 0, 1, 0, 1, 1, 0],  # 4
    [1, 0, 0, 1, 1, 0, 0, 0],  # 5
    [1, 0, 0, 0, 1, 0, 0, 0],  # 6
    [1, 1, 1, 0, 1, 0, 0, 0]  # 7
]

lst = []

def way(graf, start, finish):
    import sys
    count = -1
    while True:
        if finish == 3 and start == 0:
            M[0][1] = 0
            M[1][0] = 0
            M[0][2] = 0
        if len(lst) != 0 and lst[-1] == finish:
            print(f"Вернул список: {lst}")
            sys.exit(0)
        if M[start][finish] == 1:
            lst.append(start)
            lst.append(finish)
            print(f"Вернул список: {lst}")
            sys.exit(0)
        for i in graf[start]:
            count += 1
            if i > 0 and start not in lst:
                M[start][count] = 0
                M[count][start] = 0
                lst.append(start)
                print(lst)
                way(graf, count, finish)

way(M, st, fin)
