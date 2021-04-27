c = list(input())
for i in range(1,len(c)):
    if(ord(c[i])<96 and ord(c[i])!=32):
        c[i]=chr(ord(c[i])+32)
if(ord(c[0])>96):
    c[0]=chr(ord(c[0])-32)


print(''.join(c))