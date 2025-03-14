/*
遞迴函數

定義一個遞迴函數 factorial(n)，計算 n 的階乘（n!）。
例如 factorial(5) 應該回傳 120。
*/

function factorial(n){
    if (n === 0) {
        return 1;
      }

    return n * factorial(n-1);
}

console.log(factorial(5));

/*
階乘的定義：
n! = n * (n - 1) * (n - 2) * ... * 1
特別地，0! = 1（這是遞迴結束的條件）


function factorial(n) 定義了一個名為 factorial 的遞迴函式。
if (n === 0) 是基本情況，當 n 等於 0 時，返回 1，這是階乘的定義。
return n * factorial(n - 1) 是遞迴情況，它會調用自己來計算 (n - 1)!，然後再乘上 n。

執行過程：
當你呼叫 factorial(5) 時，這是如何運作的：

factorial(5) 會計算 5 * factorial(4)
factorial(4) 會計算 4 * factorial(3)
factorial(3) 會計算 3 * factorial(2)
factorial(2) 會計算 2 * factorial(1)
factorial(1) 會計算 1 * factorial(0)
factorial(0) 會返回 1（基本情況）
然後這些結果會回傳並累積起來：
1 * 1 = 1
2 * 1 = 2
3 * 2 = 6
4 * 6 = 24
5 * 24 = 120
因此，factorial(5) 的結果是 120。

這樣的遞迴函式就可以正確計算任何非負整數的階乘！
*/