//დავალება

//1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for (let i = 5; i < 100; i++) {
  console.log(i);
}

//2. მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let item of array1) {
  if (item > 0 && item < 10) {
    console.log(item);
  }
}

// 3. მოცემულია მასივი
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let item of array2) {
  if (item == 5) {
    console.log("არის");
    break;
  }
}

// 4. მოცემულია მასივი:
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let item of array3) {
  sum += item;
}
console.log(sum);

// 5. მოცემულია მასივი:
// let array4= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

let array4 = [1, 2, 3, 4, 5];
let sum = 0;
for (let item of array4) {
  sum += item;
}
let average = sum / array4.length;
console.log(average);

// 6. მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
//  let array5 = [1, 2, 3, 7, 6, 9];

let array5 = [1, 2, 3, 7, 6, 9];
for (let item of array5) {
  if (item === 7) {
    continue;
  }
  console.log(item);
}

// 7. მოცემულია ობიექტი ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

console.log(user.studentstatus);

// 8. მოცემულია ობიექტი
let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

//თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

// ეს ამოცანა უდნა შეასრულოთ ორივე if- ის ჩანაწერით;

if (user2.age < 18 && user2.studentstatus === "active") {
  console.log("hello user");
} else if (user2.name === "levan") {
  console.log("hello levani");
} else if (user2.studentstatus === "active" || user2.age < 25) {
  console.log("hello anna");
} else {
  console.log("error");
}

// 9. მოცემულია მასივი:
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
// ამოიღეთ მხოლოდ ლუწი რიცხვები

for (let item of array6) {
  if (item % 2 === 0) {
    console.log(item);
  }
}

// 10.  მოცემულია მასივი კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

for (let item of Object.values(users)) {
  if (item.status === true) {
    console.log(item);
  }
}

// 11.Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:

let array7 = [32, 14, 10, "hello", null, "40", 50];
for (let item of array7) {
  if (typeof item === "number" && item % 5 === 0) {
    console.log(item);
  }
}

// 12. Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];
for (let i = 0; i < array8.length; i++) {
  for (let nestedarray = 0; nestedarray < array8[i].length; nestedarray++) {
    if (array8[i][nestedarray] > 0) {
      console.log(array8[i][nestedarray]);
    }
  }
}
