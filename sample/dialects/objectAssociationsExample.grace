dialect "objectAssociations"

def attends = relationship⟦Student, Course⟧
def teaches = relationship⟦Course, Faculty⟧
def prerequisites = reflexiveRelationship⟦Course⟧

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
attends.add(james, cs102)
...
for (attends.to(cs102)) do { each -> print(each) }
