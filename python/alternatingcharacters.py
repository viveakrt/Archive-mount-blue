s=input()
d=0
if s[0]=='B':
    f=1
else :
    f=0
for i in s:
    if i=='A':
        if f==0:
            f=1
        else :
            d=d+1
    else :
        if f==1:
            f=0
        else:
            d=d+1
print(d)