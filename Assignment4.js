//1.For the given JSON iterate over all the for loops(for, forin, forof,forEach)
//A) For loop:
var numbers =[10,20,30,40,50];
for (var i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}
//B). Forin Loop:
var person = {
    fname: "vignesh",
    lname: "Ahamed",
    Age: 33
};
for (let X in person) {
    console.log(X + ": "+ person[X])
}
//C). ForEach Loop:
var names = ["jerry","tom","pluto","micky","mini"];
names.forEach(function1);
function function1(currentValue, index) {
    console.log("Index in array is:"+index +"::Value is:"+currentValue);
}
//2.Create your own resume data in JSON format:
{
    "basics" {
        "name" "VIGNESH BL"
        "email" "vignesh123@gmail.com"
"phone" "123456789"
"degree" "MBA"
"website" "www.vignesh.bl.com"
"summary" "resume"
"location" "jayaprakash nagar"
"Postal code" "641006"
"City" "Coimbatore"
"coutrycode" "India"
"region" "Tamilnadu"
    }
"Education" [
    {
        "Institution" "KPR school of business"
        "area" "Coimbatore"
        "Study type" "regular"
        "year passing" "2013"
        "gpa" "65%"
        "course" "MBA"    
    }
]
}
"skills" [
    { 
        "name" "programming skills"
        "level" "Beginner"
        "keywords" "javascript, html,css,react"
        "designation" "full stack developer" 
}  
]
"languages" [
    {
        "language known" "english, tamil, hindi"
    "fluency" "english, tamil"
    }
]
"Interests" [
    {
        "name" "sports"
    "keywords" "cricket, football"    
    }
]