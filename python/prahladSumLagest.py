a,b,c=map(list,input().split())
p=int(max(a))+int(max(b))+int(max(c))
a.remove(max(a))
b.remove(max(b))
c.remove(max(c))
n=int(max(a))+int(max(b))+int(max(c))
print(p-n)



