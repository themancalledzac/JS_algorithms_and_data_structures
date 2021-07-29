# if __name__ == '__main__':
#     n = int(input())
#     arr = map(int, input().split())

arr = [1, -1, -2, -1]

first = None
second = None

for number in arr:
    if first is None:
        first = number
    elif number > first:
        if second is None:
            second = first
            first = number
        else:
            second = first
            first = number
    elif number < first:
        if second is None:
            second = number
        if number > second:
            second = number
    # print(number)
    # print(first)
    # print(second)
    # print("-----")

print(second)


i = int(input())
lis = list(map(int, input().strip().split()))[:i]
z = max(lis)
while max(lis) == z:
    lis.remove(max(lis))

print max(lis)
