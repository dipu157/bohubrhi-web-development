
myList = [1,2,3,4,5,6]
newList = []

for i in myList:
    newList.append(i*i)
    
comList = [i*i for i in myList]
    
print("MyList :", myList)
print("New List : ", newList)
print("Com List : ", comList)