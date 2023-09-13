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

//pokemonクラスを用意
class pokemon {
  constructor(a,b,c){
    this.name = a;
    this.type = b;
    this.hp = c;
  }
}
//satoshinopokemonたちを配列を用意
let satoshinopokemon = [];
//satoshinopokemonに新しいインスタンスを生成
satoshinopokemon[0] = new pokemon("pikachu", "denki", 30);
satoshinopokemon[1] = new pokemon("pikachu2", "denki", 30);
satoshinopokemon[2] = new pokemon("pikachu3", "denki", 30);

for(let pokemons of satoshinopokemon){
  console.log(pokemons);
}

let teki = new pokemon("myuu", "mizu", 90);
console.log(teki);



// for(let max = 20; max<= number.length;){
// 	if(){

// 	}
// }


// int number[] = new int[20]; //20の要素を作成
// 			String str ="";
// 			number[0] = 0;
// 			for(int i = 1; i < number.length; i++) {
// 				number[i] = number[i - 1] + 5; //0から5ずつnumber[i]に加算
// 			}

// 			System.out.print("奇数 : ");
// 			for (int i = 0; i < 11; i++) {
// 				if (number[i] % 2 != 0) {
// 					str += String.valueOf(number[i]) + ",";
// 				}
// 			}

// 			System.out.println(str.substring(0, str.length() - 1));
// 			System.out.print("偶数 : ");
// 			str = "";
// 			for (int i = 11; i < 20; i++) {
// 				if (number[i] % 2 == 0) {
// 					str += String.valueOf(number[i]) + ",";
// 				}
// 			}
// 			System.out.println(str.substring(0, str.length() - 1));