n=input()
s=0
l=len(n)
odd=0
even=0
for i in n:
    v=int(i)
    s+=v**l
    if v%2==0:
        even+=v
    else:
        odd+=v

if s==int(n) :
    print(even)
else:
    print(odd)
    
    