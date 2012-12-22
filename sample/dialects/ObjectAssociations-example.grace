dialect "ObjectAssociations"
def Attends = Relationship<Student, Course>
def Teaches = Relationship<Course, Faculty>
def Prerequisites = ReflexiveRelationship<Course>
method student(name) {
    // For simplicity's sake, represent students just by their name
    name
}
method course(code) {
    // And the same for courses
    code
}
// Set up or obtain our data objects
def james = student "james"
def cs102 = course "cs102"
...
Attends.add(james, cs102)
...
for (Attends.to(cs102)) do { each -> print(each) }

