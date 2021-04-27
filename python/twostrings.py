def twoStrings(s1, s2):
    if set(s1).intersection(s2):
        return 'Yes'
    else:
        return 'No'

q = int(input())

for q_itr in range(q):
    s1 = input()

    s2 = input()

    result = twoStrings(s1, s2)
    print(result)