const obj = {
  name: "Pratham",
  role: "App Development",
};

const myArray = ["hello", "there", true, undefined];

const date = new Date();

console.log(date);
console.log(myArray[2]);
console.log(obj["role"]);

const newObj = {
  name: "Pratham",
  role: "Dev",
  dateOfJoining: new Date(),
  interests: ["reading", "music", "coding"],
  trainingCompleted: false,
};

console.log("Data about Pratham");
console.log(newObj["name"]);
console.log(
  newObj["dateOfJoining"].getFullYear() +
    " " +
    newObj["dateOfJoining"].getMonth()
);


// HW --> TYPE CONVERSIONS......IN_DEPTH