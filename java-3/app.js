var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)

// １～１０偶数のみ出力
for(let num = 1; num <=10; num++){
  if(num % 2 === 0){
    const li = `<li>${num}</li>`;
    console.log(num);
    document.getElementById('list').insertAdjacentHTML('beforeend', li);
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
console.log(count);
console.log(total);

//1～10までの整数をカンマ区切りで横並びに表示させる。10の後ろにはカンマ付けない
// let num = ['1','2','3','4','5','6','7','8','9','10'];
// for(let date of num){
//   console.log(date);
// }