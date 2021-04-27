
import math
import os
import random
import re
import sys


a = []
for _ in range(6):
    a.append(list(map(int,input().rstrip().split())))
max=0

for i in range(4):
    for j in range(4):
        sum=a[i+1][j+1]+a[i][j]+a[i+2][j+2]+a[i][j+1]+a[i+2][j+1]+a[i][j+2]+a[i+2][j]
        if sum>max:
            max=sum
print(max)