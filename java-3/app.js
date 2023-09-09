var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)

// １～１０偶数のみ出力
for(let num = 1; num <=10; num++){
  if(num % 2 === 0){
    console.log(num);
  }
}

// 1～10の偶数をcountして出力、偶数の合計額を出力

let count = 0;
let total = 0;
for(let i = 1; i <= 10; i++){
  if(i % 2 === 0){
    total = total+i;
    count++;
  }
}
console.log("1～10までの中の偶数の数は"+count+"個です");
console.log("1～10までの中の偶数の合計は"+total+"です");

//1～10までの整数をカンマ区切りで横並びに表示させる。10の後ろにはカンマ付けない
for(var num = 1; num <= 10; num++) {
      if(num != 10) {
        console.log(num+",");
      } else {
        console.log(num);
      }
    }