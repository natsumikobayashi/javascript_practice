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

console.log(pokemon);

		console.log("Q1");
		for(let i = 0; i<5; i++) {
				console.log("■");
		}

		console.log("Q2");
		for(let i = 0; i < 5; i++) {
			console.log("■");
		}

		console.log("Q3");
		let v = 10;
		for(let i = 0; i < v; i++) {
			console.log("★");
		}

		console.log("Q4");
		let n = 10;
		for(let i = 0; i < n; i++) {
			console.log("★");
		}

		console.log("Q5");
		let a = 5;
		let b = 5;
		for(let i = 0; i < a; i++) {
			for(let c = 0; c < b; c++) {
				console.log("●");
			}
		}

		console.log("Q6");
		let d = 10;
		for(let i = 1; i <= d; i++) {
			if(i % 2 != 0) {
				console.log("◇");
			} else {
				console.log("◆");
			}
		}
		console.log("Q14");
		let e = 7;
		for(let i = 1; i <= e; i++) {
			console.log(i);
		}

		console.log("Q15");
		let f = 7;
		for(let i = 1; i <= f; i++) {
			let g = i * 10;
			console.log(g);
		}

		console.log("Q16");
		let h = 20;
		let bai = 4;
		for(let i = 1; i <= h; i++) {
			if(i % bai == 0) {
				console.log(i);
			}
		}

		console.log("Q18");
		let j = 10;
		for(let i = j; i >= 1; i--) {
			console.log(i);
		}

		console.log("Q19");
		let k = 7;
		for(let i = 1; i<= k; i++) {
			if(i != k) {
				console.log(i+",");
			} else {
				console.log(i);
			}
		}
		console.log("Q21");
		let l = 20;
		for(let i = 1; i <= l; i++) {
			if(i % 3 != 0) {
				console.log(i);
			} else {
				console.log("?");
			}

			if(i != l) {
				console.log(",");
			}
		}
		console.log("Q22");
		let m = 9;
		for(let i = 1; i <= m; i++) {
			for(let o = 1; o <= m; o++) {
				let ans = i * o;
				if(ans < 10) {
					console.log(" ");
				}
				console.log(ans+" ");
			}
		}


		let number = [20];
		number[0] = 0;
		for(let i = 0; i < number.length; i++) {
			number[i] = (i+1)*5;
		}

		console.log("[0]～[10]の中の奇数は、");
		for(let i = 0; i <= 10; i++) {
			if(i<10 && number[i] % 2 != 0) {
				console.log(number[i]+",");
			}else if(i == 10 && number[i] % 2 != 0) {
					console.log(number[i]);
			}
		}

		console.log("[11]～[19]の中の偶数は、");
		for(let i = 11; i <= 19; i++) {
			if(i<19 && number[i] % 2 == 0) {
				console.log(number[i]+",");
			}else if(i == 19 && number[i] % 2 == 0) {
				console.log(number[i]);
			}
}