let shoppingList = ["Milk","Eggs","Bread",["Apples","Banana","Orange"],["Potatoes","Tomatoes","Onion"]]

console.log(shoppingList[0])

shoppingList.push("carrots")

console.log(shoppingList)

shoppingList.pop()

console.log("js",shoppingList)

shoppingList[4].splice(1,3,"cucumber","carrot","ballpeper")
console.log("js 2",shoppingList)


let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

console.log(student["name"])

student["phone"]="9639389090"
delete student["grade"]
student.age=21
console.log(student)


function f1(number){
    if(number>0){
        return "positive"
    }
    else if(number===0){
        return "zero"
    }
    else{
      return "Negative"
    }
}

function checkGrade(marks){
if(marks>90 && marks<=100){
    return "A"
}
else if(marks>80 && marks<89){
    return "B"
}
else if(marks>70 && marks<79){
    return "C"
}
else if(marks>60 && marks<69){
    return "D"
}
else if(marks<60){
return "F"
}
}

console.log(f1(0))

console.log(checkGrade(5))


function truthy(str){
if(str===""){
    return "false"
}
else{
 return    "truthy"
}
}

console.log(truthy("aman"))