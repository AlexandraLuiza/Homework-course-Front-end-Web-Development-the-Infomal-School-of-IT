var person1 = {
    "firstName": "John",
    "lastName": "Doe",
    "gender": "M",
    "bmi": 0,
    "height": 1.85,
    "weight": 75,
}

var person2 = {
    "firstName": "Mary",
    "lastName": "Anne",
    "gender": "F",
    "bmi": 0,
    "height": 1.70,
    "weight": 70
}

function bmi(person) {
    var bmi = person.weight / (Math.pow(person.height, 2));
    console.log(bmi);
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "normal";
    } else if (bmi >= 25 && bmi < 30) {
        return "overweight";
    } else {
        return "obese";
    }
}

console.log(bmi(person2))