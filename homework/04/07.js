/*
7. 請寫一個向量物件，要包含加減與內積運算
實作 class Vector {...}

let a = new Vector([1,2,3])
let b = new Vector([4,5,6])

console.log(a.add(b).sub(b).dot(b))
*/

class Vector {
    constructor(components){
        this.components = components;
    }

    add(other) {
        return new Vector(this.components.map((val, i) => val + other.components[i]));
    }

    sub(other) {
        return new Vector(this.components.map((val, i) => val - other.components[i]));
    }

    dot(other) {
        return this.components.reduce((sum, val, i)=> sum + val * other.components[i], 0);
    }
}

let a = new Vector([1,2,3])
let b = new Vector([4,5,6])

console.log(a.add(b).sub(b).dot(b))


/*
class Vector {
    // 建構函式，接收一個陣列作為向量的分量
    constructor(components) {
        this.components = components;
    }

    // 向量加法：對應索引的分量相加
    add(other) {
        return new Vector(this.components.map((val, i) => val + other.components[i]));
    }

    // 向量減法：對應索引的分量相減
    sub(other) {
        return new Vector(this.components.map((val, i) => val - other.components[i]));
    }

    // 向量內積（點積）：對應索引的分量相乘後加總
    dot(other) {
        return this.components.reduce((sum, val, i) => sum + val * other.components[i], 0);
    }
}

// 測試向量運算
let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);

// 計算 (a + b) - b 的內積與 b
console.log(a.add(b).sub(b).dot(b)); // 結果應該是 32


add(other)：向量加法（逐項相加）。
sub(other)：向量減法（逐項相減）。
dot(other)：向量內積（計算對應項的乘積總和）。


constructor(components) 是建構子函式，接收一個數字陣列作為向量的成分（components）。
this.components = components; 會將這個陣列儲存到 Vector 物件中，代表該向量的座標。\


向量 a = (1,2,3)
向量 b = (4,5,6)


this.components.map((val, i) => val + other.components[i]) 會 逐項相加 兩個向量的對應元素。
new Vector(...) 會建立並回傳新的 Vector 物件，代表新的向量。

map((val, i) => val - other.components[i]) 會 逐項相減 兩個向量的對應元素。
new Vector(...) 會建立新的 Vector 物件，代表新的向量。

a.dot(b); // (1×4) + (2×5) + (3×6) = 4 + 10 + 18 = 32


let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);

console.log(a.add(b)); // Vector { components: [ 5, 7, 9 ] }
console.log(a.sub(b)); // Vector { components: [ -3, -3, -3 ] }
console.log(a.dot(b)); // 32
console.log(a.add(b).sub(b).dot(b)); // 32

add(other)：向量加法（逐項相加）。
sub(other)：向量減法（逐項相減）。
dot(other)：向量內積（計算對應項的乘積總和）。

*/