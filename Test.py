# Open a file in read mode
file_path = 'K:\JavaScript\smallProjectsJs\KHALID\projects\project2\Test.html'
openFile = open(file_path, 'r')
content = openFile.read()
object = "<object>"
print(len(content))
if object in content :
    print("OK")