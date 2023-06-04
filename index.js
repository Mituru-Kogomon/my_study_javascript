/* 複数行のコメントアウト */
// 一行のコメントアウト

/*
  1 変数の定義
    var  : グローバルスコープまたは関数スコープの変数を宣言。再代入可。一般的にブロックスコープ変数let,constの使用を推奨。
    let  : ブロックスコープの変数を宣言。再代入可。
    const: ブロックスコープの読み取り専用の定数を宣言。再代入不可。
    ブロックスコープ（Block Scope）:
      中括弧 {} で囲まれた領域。
      そのブロック内でのみ変数へアクセス可能。
      外部のブロックや関数からはアクセス不可。
    グローバルスコープ（Global Scope）:
      ブロックや関数の外部で宣言された変数。
      プログラムのどこからでも変数へアクセス可能。
      他のライブラリやAPIなどで同じ変数名を使用している場合、変数名の競合が発生する。
      一般的にブロックスコープ変数let,constの使用を推奨。

  2 データの型
    JavaScriptではデータの方は自動的に判断される
    数字型 = number型の1種類
    文字型 = string型
    ブール型 = Boolean型 True or False の値を取る
    typeof(変数名)と記載するとデータの型を取得できる

  3 配列操作
    一次元配列の作り方
      var arr = Array("str1","str2","str3")
      var arr = ["str1","str2","str3"]
      var arr(0) = "str1"
    二次元配列の作り方
      var arr = [["str1","str2"],["str3","str4"]]
      var arr[0][0] = "str1"
    配列の要素数
      arr.length

  4 条件分岐
    複合演算子 and条件の場合&&、or条件の場合||(shift+\)
    複合演算子 (x => 5 && x =< 10)、(x == 5 || x == 10)
    インクリメント x = x + 1 又は x++
    デクリメント   y = y - 1 又は y--

  5 ループ処理
    for文書き方
      for (スタート値;継続条件;増減式) {
        ループ処理
      }
      arrayの最初の要素から最後の要素までelementに代入し、ループ処理を行う
      for (let element(要素) of array(配列)) {
        ループ処理
      }
      基本的に for (let element of array) と同じ。順番通りに出力したいならfor of文のループを使用。
      for (let key in object) {
        ループ処理
      }
      conditionがTrueの場合ループする
      while (condition) {
        ループ処理
      }
      do {
        ループ処理
      } while (condition);

    continue; = ループ処理をスキップし、次のループへ

  6 関数の定義
    関数宣言:function キーワードを使用して関数を宣言。
    こちらの方法では、関数の宣言がスコープの先頭にあるとして実行されるため、
    関数の定義よりも、上部に関数の呼び出す式を記載することができる。
      function 関数名(引数名,引数名, ...) {
        実行したい処理;
        return 戻り値;
      }

    関数式:関数を変数に代入する
    関数を無名関数として定義し、変数に代入。
    関数の呼び出しよりも先に関数の宣言をする必要がある。
    この方法では、変数のスコープのルールが適用される。
      const(var,let) 関数名 = function(引数1, 引数2, ...) {
        実行したい処理;
        return 戻り値;
      };

    関数式:関数を変数に代入する
    関数を無名関数として定義し、変数に代入。
    関数の呼び出しよりも先に関数の宣言をする必要がある。
    この方法では、変数のスコープのルールが適用される。
    Arrow 関数式:
      const(var,let) 関数名 = (引数1, 引数2, ...) => {
        実行したい処理;
        return 戻り値;
      };

    上記3つの方法の使い分け
      JavaScriptで、一番上の方法の関数宣言はグローバルスコープの宣言となる。
      他のスクリプトや外部のAPIとの競合となる場合は、二、三番目の関数式、Arrow関数式を使用する。
      関数式とArrow関数式の違い = Arrow関数式は暗黙的に this の値が変わらずに保持される。

  7 クラス
    クラスとはデータと処理をまとめたもの。
    JavaScriptでは
      データ = プロパティ = クラス内で定義された変数
      変数 = クラス外で定義された変数
      処理 = メソッド = クラス内で定義された関数
      関数 = クラス外で定義された関数

    クラスの使い方
      記述順 クラスの定義→初期化式→メソッド処理→クラスのインスタンス化→クラスの呼び出し
      実行順 クラスの定義→クラスのインスタンス化→クラスの呼び出し→初期化式の実行→メソッド処理実行
      解説順 初期化式→クラスの定義→メソッド処理→クラスのインスタンス化→クラスの呼び出し
    初期化式の解説
      インスタンス化されるたびに実行される初期化式
      初期化式ではクラスプロパティの定義等を行う
        インスタンス名.name = "str1"
      this にはインスタンス名が代入されるので下記のように記述する
      constructor(引数名1,引数名2, ...) {
        this.name = (引数名1)
      }
    クラスの定義
      classの書き方:クラス名の頭一文字を大文字にする
      class クラス名 {
        初期化式(引数名1,引数名2, ...)
        メソッド名(引数名,引数名, ...) {
          メソッド処理;
        }
      }
    クラスのインスタンス化(一般的に再代入がないのでconstが使用される)
      インスタンス化時の引数が初期化式に代入される
      const 変数名 = new クラス名(引数1,引数2, ...);
    クラスの使用
      クラス使用時の引数はメソッド処理に代入される
      変数名.メソッド名(引数名,引数名, ...)
*/

// 変数の型宣言 変数 = document.querySelectorAll('クラス名')
// 変数にクラスのvalue値が全て代入される
// つまり numbers = [0,1,2,3,4,5,6,7,8,9]
// 変数の型宣言 変数 = document.querySelector('クラス名')
// 変数にクラスのvalue値が代入される
// つまり result = 計算結果欄の値

// <input type="text"' id="text1" value="赤" maxlength="5">
// 変数 = 要素.getAttribute(属性)
// document.getElementById("text1").getAttribute("type") → textを取得
// document.getElementById("text1").getAttribute("value") → 赤を取得
// document.getElementById("text1").getAttribute("maxlength") → 5を取得

//function checkResultLength() {
//  resultValue = JSON.stringify(resultValue);

//  if(resultValue.length >= 8) {
//    resultValue = JSON.parse(resultValue);
//    result.innerHTML = resultValue.toFixed(5);
//    }
//}

// if 〇〇 else if △△で記載しても、
// 〇○がTrueで処理後、△△がTrueなら△△を処理しに行く
// 複数条件分岐 switch文は、処理後にいちいち、
// break;行を挿入しないと直下のcaseから再開する

// 残記述
// 計算結果が大きくなりすぎると、 1.2345e10 のように対数表示を行う
// first,secondValueが埋まっているときに四則演算を押したら、計算結果を表示させるおよび firstValue = resultValue
// PC画面でもレイアウトが崩れないように変更する
// PC画面の場合、左右の余白には適当な画像を挿入する

// 変数の定義
const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const comma = document.querySelector('.comma');

// 初期値設定
let firstValue = 0; // ひとつ目の値
let secondValue = 0; // ふたつ目の値
let resultValue = 0; // 計算結果
let sign = ""; // 演算子
let isFirstValue = true; // 入力中フラグ
let isSecondValue = false; // 入力中フラグ

// numberクリック動作
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', (e) => {
    let atr = e.target.getAttribute('value');
    switch (true) {
      case isFirstValue === true && (Object.is(firstValue, 0) === true || String(firstValue) == '0'): //number,string型で0の場合
        firstValue = atr;
        firstValue = +firstValue;
        result.innerHTML = firstValue.toLocaleString();
        break;
      case isFirstValue === true && (Object.is(firstValue, -0) === true || String(firstValue) == '-0'): //number,string型で-0の場合
        firstValue = -atr;
        firstValue = +firstValue;
        result.innerHTML = firstValue.toLocaleString();
        break;
      case isFirstValue === true && String(firstValue).indexOf('.') < 0: //number,string型で .無しの場合
        firstValue += atr;
        firstValue = +firstValue;
        result.innerHTML = firstValue.toLocaleString();
        break;
      case isFirstValue === true && String(firstValue).indexOf('.') >= 0: //小数点以下の場合
        firstValue += atr;
        result.innerHTML = firstValue;
        break;
      case isSecondValue === true && (Object.is(secondValue, 0) === true || String(secondValue) == '0'): //number,string型で0の場合
        secondValue = atr;
        secondValue = +secondValue;
        result.innerHTML = secondValue.toLocaleString();
        break;
      case isSecondValue === true && (Object.is(secondValue, -0) === true || String(secondValue) == '-0'): //number,string型で-0の場合
        secondValue = -atr;
        secondValue = +secondValue;
        result.innerHTML = secondValue.toLocaleString();
        break;
      case isSecondValue === true && String(secondValue).indexOf('.') < 0: //number,string型で .無しの場合
        secondValue += atr;
        secondValue = +secondValue;
        result.innerHTML = secondValue.toLocaleString();
        break;
      case isSecondValue === true && String(secondValue).indexOf('.') >= 0: //小数点以下の場合
        secondValue += atr;
        result.innerHTML = secondValue;
        break;
    };
    clear.textContent = 'C';
  });
}

// 演算子クリック動作
for (let i = 0; i < signs.length; i++) {
  signs[i].addEventListener('click', (e) => {
    if (isFirstValue === false && isSecondValue === true && secondValue != 0) {
      callEquals();
    };

    // 演算子ボタンの背景色と文字色をリセット
    for (let j = 0; j < signs.length; j++) {
      signs[j].style.backgroundColor = '';
      signs[j].style.color = '';
    };

    e.target.style.backgroundColor = '#FFFFFF'; // クリックされたボタンの背景色を設定
    e.target.style.color = '#FF9F0A'; // クリックされたボタンの文字の色を設定
    sign = e.target.getAttribute('value');
    isFirstValue = false;
    isSecondValue = true;
  });
}

// =クリック動作呼び出し
equals.addEventListener('click', () => {
  callEquals();
})

// =クリック動作
function callEquals() {
  firstValue = +String(firstValue).replace(/,/g, '');
  secondValue = +String(secondValue).replace(/,/g, '');
  switch (sign) {
    case "+":
      resultValue = firstValue + secondValue;
      break;
    case "-":
      resultValue = firstValue - secondValue;
      break;
    case "x":
      resultValue = firstValue * secondValue;
      break;
    case "/":
      resultValue = firstValue / secondValue;
      break;
  }
  result.innerHTML = resultValue.toLocaleString();
  firstValue = resultValue;
  secondValue = 0;
  sign = "";
  isFirstValue = true;
  isSecondValue = false;

  // 演算子ボタンの背景色と文字色をリセット
  for (let j = 0; j < signs.length; j++) {
    signs[j].style.backgroundColor = '';
    signs[j].style.color = '';
  };
}

// +/-クリック動作
negative.addEventListener('click', () => {
  switch (true) {
    case isFirstValue === true && typeof(firstValue) == 'number' && String(firstValue).indexOf('-') < 0: //number型で正の数字
      firstValue = '-' + firstValue.toLocaleString();
      result.innerHTML = firstValue;
      break;
    case isFirstValue === true && typeof(firstValue) == 'number' && String(firstValue).indexOf('-') >= 0: //number型で負の数字
      firstValue = firstValue.toLocaleString().replace(/-/g, '');
      result.innerHTML = firstValue;
      break;
    case isFirstValue === true && typeof(firstValue) == 'string' && String(firstValue).indexOf('-') < 0: //string型で正の数字
      firstValue = "-" + firstValue;
      result.innerHTML = firstValue.toLocaleString();
      break;
    case isFirstValue === true && typeof(firstValue) == 'string' && String(firstValue).indexOf('-') >= 0: //string型で負の数字
      firstValue = firstValue.replace(/-/g, '');
      result.innerHTML = firstValue.toLocaleString();
      break;
    case isSecondValue === true && typeof(secondValue) == 'number' && String(secondValue).indexOf('-') < 0: //number型で正の数字
      secondValue = '-' + secondValue.toLocaleString();
      result.innerHTML = secondValue;
      break;
    case isSecondValue === true && typeof(secondValue) == 'number' && String(secondValue).indexOf('-') >= 0: //number型で負の数字
      secondValue = secondValue.toLocaleString().replace(/-/g, '');
      result.innerHTML = secondValue;
      break;
    case isSecondValue === true && typeof(secondValue) == 'string' && String(secondValue).indexOf('-') < 0: //string型で正の数字
      secondValue = "-" + secondValue;
      result.innerHTML = secondValue.toLocaleString();
      break;
    case isSecondValue === true && typeof(secondValue) == 'string' && String(secondValue).indexOf('-') >= 0: //string型で負の数字
      secondValue = secondValue.replace(/-/g, '');
      result.innerHTML = secondValue.toLocaleString();
      break;
  };
})

// %クリック動作
percent.addEventListener('click', () => {
  switch (true) {
    case isFirstValue === true:
      firstValue = String(firstValue).replace(/,/g, '') / 100;
      result.innerHTML = firstValue.toLocaleString();
      break;
    case isSecondValue === true:
      secondValue = String(secondValue).replace(/,/g, '') / 100;
      result.innerHTML = secondValue.toLocaleString();
      break;
  };
})

// AC,Cクリック動作
clear.addEventListener('click', () => {
  switch (clear.textContent) {
    case 'AC': // ACクリック動作
      result.innerHTML = 0;
      firstValue = 0;
      secondValue = 0;
      resultValue = 0;
      sign = "";
      isFirstValue = true;
      isSecondValue = false;

      // 演算子ボタンの背景色と文字色をリセット
      for (let j = 0; j < signs.length; j++) {
        signs[j].style.backgroundColor = '';
        signs[j].style.color = '';
      };
      break;
    case 'C': // Cクリック動作
      clear.textContent = 'AC';
      result.innerHTML = 0;
      switch (true) {
        case isFirstValue === true:
          firstValue = 0;
          break;
        case isSecondValue === true:
          secondValue = 0;
          break;
      };
      break;
  };
});

// コンマクリック動作
comma.addEventListener('click', () => {
  switch (true) {
    case isFirstValue === true && String(firstValue).indexOf('.') < 0:
      firstValue = firstValue.toLocaleString() + '.';
      result.innerHTML = firstValue;
      break;
    case isSecondValue === true && String(secondValue).indexOf('.') < 0:
      secondValue = secondValue.toLocaleString() + '.';
      result.innerHTML = secondValue;
      break;
  };
})