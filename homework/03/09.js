/*
物件操作

建立一個物件 person = { name: "Alice", age: 25, city: "Taipei" }。
將 person 的 age 增加 1，並輸出更新後的 person 物件。
*/

let person = { name: "Alice", age: 25, city: "Taipei" };
person.age =person.age + 1 ;
console.log(person);

/*
解釋：
let person = { name: "Alice", age: 25, city: "Taipei" }; 定義了一個物件 person，包含 name、age 和 city 三個屬性。
person.age = person.age + 1; 這行代碼將 person 物件的 age 屬性值增加 1。
console.log(person); 輸出更新後的 person 物件。
*/
