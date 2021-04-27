
def checkMagazine(magazine, note):
    m={}
    for i in magazine:
        if i in m:
            m[i]=m[i]+1
        else:
            m[i]=1
    
    for i in note:
        if i in m:
            m[i]=m[i]-1
            if m[i]== -1:
                print('No')
                return
        else:
            print('No')
            return
    print('Yes')
    # for i in note:
    #     if 
    # words={}
    # for i in magazine:
    #     if i==words():
    #         words[i]=words[i]+1
    #     else:
    #         words[i]=1



magazine = input().rstrip().split()

note = input().rstrip().split()

checkMagazine(magazine, note)