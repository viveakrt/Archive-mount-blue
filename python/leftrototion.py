nd = input().split()
n = int(nd[0])
d = int(nd[1])
a = list(map(int, input().rstrip().split()))
l=len(a)
b = []
for i in range(l):
    t=(d+i)%l
    b.append(a[t])
            
print(b)