a='cde'
b='abc'

aa=set(a)
bb=set(b)
s=0
for i in aa.union(bb) :
    if a.count(i)>b.count(i):
        s=a.count(i)-b.count(i)+s
    elif a.count(i)==b.count(i):
        s=s+0
    else:
        s=b.count(i)-a.count(i)+s
print(s)