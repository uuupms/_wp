PS C:\pms> irm https://deno.land/install.ps1 | iex
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 39.2M  100 39.2M    0     0  1018k      0  0:00:39  0:00:39 --:--:-- 1137k
Deno was installed successfully to C:\Users\yuen5\.deno\bin\deno.exe
Run 'deno --help' to get started
Stuck? Join our Discord https://discord.gg/deno
PS C:\pms> deno
Deno 2.2.3
exit using ctrl+d, ctrl+c, or close()
REPL is running with all permissions allowed.
To specify permissions, run `deno repl` with allow flags.
> let x = 5
undefined
> let y = 8
undefined
> x+y
13
> console.log('hello')
hello
undefined
> let z = x*y
undefined
> z
40
> x+'hello'
"5hello"
> x+'hello'+y
"5hello8"
> let a = true
undefined
> let b = false
undefined
> a&&b
false
> a&b
0
> a||b
true
> a|b
1
> !a
false
> ~a
-2
> let f = 3.14
undefined
> let e = 2.71828
undefined
> let pi = 3.14189
undefined
> e+pi
5.86017
> x+pi
8.14189
> let a = [1,2,3]
undefined
> a
[ 1, 2, 3 ]
> a.length
3
> let person = {name:'ccc', age: 55 }
undefined
> person
{ name: "ccc", age: 55 }
> person.name
"ccc"
> person.age
55
> a = [ ]
[]
> a.push(5)
1
> a
[ 5 ]
> a.push(3)
2
> a
[ 5, 3 ]
> a.push("hello")
3
> a
[ 5, 3, "hello" ]
> deno run hello.js
