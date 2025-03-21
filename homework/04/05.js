/*
5. 類別與繼承
定義一個 Animal 類別，具有 name 屬性與 speak() 方法。
建立 Dog 類別，繼承 Animal 並覆寫 speak() 方法，使其回傳 "Woof! I am <name>"。

const dog = new Dog("Buddy");
console.log(dog.speak()); 
// "Woof! I am Buddy"
*/


class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        return `${this.name} makes a sound.`;
    }
}
class Dog extends Animal {
    speak() {
        return `Woof! I am ${this.name}`;
    }
}

const dog = new Dog("Buddy");

console.log(dog.speak());


/*
// 定義 Animal 類別
class Animal {
    // 定義建構子 constructor，初始化 name 屬性
    constructor(name) {
        this.name = name;
    }

    // 定義 speak() 方法，返回基本的聲音訊息
    speak() {
        return `${this.name} makes a sound.`;
    }
}

// 定義 Dog 類別，繼承 Animal 類別
class Dog extends Animal {
    // 覆寫 speak() 方法，返回 "Woof! I am <name>"
    speak() {
        return `Woof! I am ${this.name}`;
    }
}

// 創建 Dog 類別的實例，並傳入 "Buddy" 作為 name 屬性的值
const dog = new Dog("Buddy");

// 呼叫 dog 物件的 speak() 方法並輸出結果
console.log(dog.speak());  // "Woof! I am Buddy"
*/

/*
詳細解析
class Animal：

使用 class 關鍵字定義了一個名為 Animal 的類別。
類別中有一個 constructor(name) 方法，它是一個建構子，當你創建 Animal 類別的實例時，會傳入一個 name 參數並將其賦值給 this.name。
speak() 方法是一個基本的方法，返回動物發出聲音的訊息，格式是 "<name> makes a sound."。
class Dog extends Animal：

Dog 類別繼承了 Animal 類別，這意味著 Dog 類別會擁有 Animal 類別中的所有屬性和方法。
Dog 類別覆寫了 speak() 方法，使其返回 "Woof! I am <name>"，因此 Dog 物件的 speak() 方法會有不同的行為。
const dog = new Dog("Buddy");：

我們創建了一個 Dog 類別的實例 dog，並傳遞 "Buddy" 作為 name 屬性的值。
這會調用 Dog 類別的建構子（由於 Dog 繼承了 Animal，實際上會執行 Animal 類別的 constructor(name)），並將 "Buddy" 存儲為 dog 物件的 name 屬性。
console.log(dog.speak());：

最後，我們呼叫 dog 物件的 speak() 方法。由於 Dog 類別覆寫了 speak() 方法，這會返回 "Woof! I am Buddy"，並將結果輸出到控制台。
*/
