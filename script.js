'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//todo 隠れミラクルワードで画面エフェクト->背景画像切り替えしたい
const miracleWord = [{
  path: "",
  name: "アルセウス"
},{
  path: "",
  name: "ピカチュウ"
},{
  path: "",
  name: "イーブイ"
},{
  path: "",
  name: "バンギラス"
}];

// 濁点・半濁点の許容シリーズ


// テキストボックスでEnter押したらGOアクション起動
let textBox = document.getElementById("inputText");
document.onkeydown = function(event) {
  
  // アラートメッセージ欄(赤字)
  const divAlert = document.getElementById("alertMessage");

  if (event.key === "Enter") {
    divAlert.innerText !== "" ? alertReset(): true;
    onPokeGoButton();
    // testEnterGo();
  }
}

// テキストボックスEnterキー発火をテスト
function testEnterGo(){
  console.log("Enter発火成功");
}

// 濁点・半濁点の許容対応(ハ→パ・バでも可)
const arrayOfWordSeries = [
  ["ア"], ["イ"], ["ウ"], ["エ"], ["オ"], ["ナ"], ["ニ"], ["ヌ"], ["ネ"], ["ノ"],
  ["マ"], ["ミ"], ["ム"], ["メ"], ["モ"], ["ヤ"], ["ユ"], ["ヨ"], ["ラ"], ["リ"], ["ル"], ["レ"], ["ロ"], ["ワ"],
  ["カ", "ガ"], ["キ", "ギ"], ["ク", "グ"], ["ケ", "ゲ"], ["コ", "ゴ"],
  ["サ", "ザ"], ["シ", "ジ"], ["ス", "ズ"], ["セ", "ゼ"], ["ソ", "ゾ"],
  ["タ", "ダ"], ["チ"], ["ツ"], ["テ", "デ"], ["ト", "ド"],
  ["ハ", "パ", "バ"], ["ヒ", "ピ", "ビ"], ["フ", "プ", "ブ"], ["ヘ", "ペ", "ベ"], ["ホ", "ポ", "ボ"]
];
// 次のGOまで覚えておく
let chainedLastWord = [];
function getArrayOKvariation () {
  // 文字入力欄
  // 文字を入力できる
  const getIdInputText = document.getElementById("inputText");
  console.log('getIdInputText: ', getIdInputText.value);
  
  // 入力値の最後の１文字を取得する
  let chainedLastOne = "";
  // 最後の１文字が伸ばし棒だったときの処理
  let checkLastOne = getIdInputText.value.slice(-1);
  if (checkLastOne === "ー" || checkLastOne === "ャ" || checkLastOne === "ュ" || checkLastOne === "ョ") {
    chainedLastOne = getIdInputText.value.slice(-2, 1);
  } else {
    chainedLastOne = getIdInputText.value.slice(-1);
  }
  let checkLastTwo =getIdInputText.value.slice(-2);
  if (checkLastTwo === "ャー" || checkLastTwo === "ュー" || checkLastTwo === "ョー") {
    chainedLastOne = getIdInputText.value.slice(-3, 1);
  }

  return arrayOfWordSeries.forEach(function(arrayOfConvert) {
    for (const aWord of arrayOfConvert) {
      if (aWord === chainedLastOne) {
        chainedLastWord = arrayOfConvert;
        break;
      }
    }
  })
}

// version POKEMONS
function onPokeGoButton() {
  
  // 文字入力欄
  // 文字を入力できる
  const getIdInputText = document.getElementById("inputText");
  // しりとりテキスト表示欄(ページ中央部 GOボタンより下)
  const divPreviewTextChain = document.getElementById("memory");
  // アラートメッセージ欄(赤字)
  const divAlert = document.getElementById("alertMessage");

  // アラートメッセージからドボン直後か判別-->memoryリセット

  // アラートメッセージをリセットする
  alertReset();
  // Go!ボタン表示する<-ドボン直後想定
  const goButton = document.getElementById("textGo");
  goButton.style.visibility ="visible";

  // 入力文字がない(空白)=>入力を促すメッセージ表示
  if (checkIsNotEmpty() === false) {
    console.log("入力値：空白");
    return false;
  }

  // カタカナだけの文字か判別する
  if (katakanaCheck.test(getIdInputText.value) === false) {
    // アラートメッセージを表示
    divAlert.innerHTML = "カタカナでかいてほしいな..."

    // 入力欄をクリア
    getIdInputText.value = "";
    // 入力欄にフォーカス
    getIdInputText.focus();

    return false;
  }
  
  // 最後に[ン]が付くか判別する-->ドボン
  if (dobonN() === true) {
    return false;
  }


  //todo 文字が繋がらなかったらドボン
    //todo 濁点・半濁点を許容する
    //todo 前回値の最後の文字が伸ばし棒だったときの処理<-伸ばし棒の１字前で判定
    //todo 前回値の最後の文字が小さい文字(ァィゥェォャュョ)だったときの処理

  
  //todo 存在するポケモンか判別する-->メッセージ表示「あたらしいポケモンにであったんだね」
  isPokemon();
  if (isPokemonSeries === false) {
    return false;
  }

  //todo memoryをオブジェクトで覚えておく(Noをidとしてcreate)
  //todo 既出のポケモンか判別する-->memoryにて赤字(id取得でcss操作)-->ドボン

  //todo 最後の文字を取得
  // chainedLastWordに再代入
  chainedLastWord = [];
  getArrayOKvariation();
  console.log('chainedLastWord: ', chainedLastWord);

  // 以下、しりとり成功処理

  //todo GOボタンで入力した文字を確定する
  const p = document.createElement("p");
  p.textContent = getIdInputText.value;
  divPreviewTextChain.insertBefore(p, divPreviewTextChain.firstChild);
  // divPreviewTextChain.appendChild(p);
  // 入力欄をクリア
  getIdInputText.value = "";
  // 入力欄にフォーカス
  getIdInputText.focus();
  
  //todo 入力した名前のポケモン画像表示
  
}

//todo タイトル・テキストボックス・メッセージ欄を上部固定

//todo 10コンボごとにエフェクト追加
//todo 頭文字ヒントを文字色薄くふんわり表示<--未出からランダム

// 入力文字がカタカナ+伸ばし棒か判別
const katakanaCheck = /^[\u30A0-\u30FF]+$/;
// test(katakanaCheck.test("ラッキー"), true);
// test(katakanaCheck.test("イーブイ"), true);
// test(katakanaCheck.test("イーブい"), false);
// test(katakanaCheck.test("いーブい"), false);
// test(katakanaCheck.test("亜いうえ尾"), false);

// 最初から始めるボタン=>ページ再読み込み
function onRestartClick() {
  window.location.reload();
}

// アラートメッセージをリセットする
function alertReset() {
  // アラートメッセージ欄(赤字)
  const divAlert = document.getElementById("alertMessage");
  divAlert.innerHTML = "";
}
// テキスト入力欄が空白でないことを判定する
function checkIsNotEmpty() {
  
  // アラートメッセージ欄(赤字)
  const divAlert = document.getElementById("alertMessage");
  // 文字入力欄
  const getIdInputText = document.getElementById("inputText");

  // テキスト入力欄が空白ではなければ
  if (getIdInputText.value !== "") {
    // 空白ではないときの処理(正常)
    return true;
  } else {
    // アラートメッセージで、文字入力を促す
    divAlert.innerHTML = "もじをかいてから、GOボタンをおしてね";
    // テキスト入力欄にフォーカスする
    getIdInputText.focus();
    return false;
  }
}

// 最後に[ン]が付くか判別する-->ドボン
function dobonN() {
  
  // アラートメッセージ欄(赤字)
  const divAlert = document.getElementById("alertMessage");
  // 文字入力欄
  const getIdInputText = document.getElementById("inputText");
  // Go!ボタン
  const goButton = document.getElementById("textGo");
  // しりとりテキスト表示欄(ページ中央部 GOボタンより下)
  const divPreviewTextChain = document.getElementById("memory");


  // 最後の１文字を取得して[ん]と一致するか判別する
  let text = getIdInputText.value.substr(-1, 1);
  if (text === "ン") {
    const p = document.createElement("p");
    p.textContent = getIdInputText.value;
    divPreviewTextChain.insertBefore(p, divPreviewTextChain.firstChild);
    // divPreviewTextChain.appendChild(p);
    // 入力欄をクリア
    getIdInputText.value = "";
    // 入力欄にフォーカス
    getIdInputText.focus();
    // ドボンメッセージ表示
    divAlert.innerText = "ざんねん！また あそんでね🐊";
    // Goボタン非表示-->最初から始める
    goButton.style.visibility = "hidden";
    // goButton.style.display = "none";
    return true;
  } else {
    // [ン]は付いてない-->しりとり成功
    return false;
  }
}


//todo ドボンしたら最初から始める
// ドボンからのリスタートだったら
function onGoButtonRetry() {
  
  // アラートメッセージ欄(赤字)
  const divAlert = document.getElementById("alertMessage");

  // アラートメッセージが「ざんねん！またあそんでね🐊」だったら
  if (divAlert.innerText === "ざんねん！また あそんでね🐊") {
    // さいしょから始める(アラートメッセージ・memoryリセット)
    onRestartClick();
  }
}

let isPokemonSeries = false;
//todo 存在するポケモンか判別する-->メッセージ表示「あたらしいポケモンにであったんだね」
function isPokemon() {
  // 文字入力欄
  const getIdInputText = document.getElementById("inputText");
  // アラートメッセージ欄(赤字)
  const divAlert = document.getElementById("alertMessage");
  // 判定ブーリアン初期化
  isPokemonSeries = false;

  pokemons.forEach(function(objMonster) {
    for (const key in objMonster) {
      if (objMonster[key] === getIdInputText.value) {
        isPokemonSeries = true;
        break;
      }
    }
  })

  // 存在しないポケモンだったら-->メッセージ表示
  if (isPokemonSeries === false) {
    // 入力欄にフォーカス
    getIdInputText.focus();
    // メッセージ表示
    divAlert.innerText = "あたらしいポケモンかな・・・？ほかのポケモンをおしえてね";

  }
}


//// テキストボックス内にカタカナ推奨を薄く表示する-->index.htmlで実装済み

// let monsterNo = "";

// pokemon-no-name-types.jsよりname値とinnerTextを照合して、番号noを返す
// for (const monster of pokemons) {
//   if (monster.name === getIdInputText.value) {
//     monsterNo = monster.no.toString().padStart(3, '0');
//     break;
//   }
// }

// console.log(monsterNo, getIdInputText.value);

// monsterNoで画像表示挿入
// const pokeElem = document.createElement("div");
// pokeElem.classList.add("pokemon");
// const pokeInnerHTML = `
//   <p>${getIdInputText.value}</p><img src="https://pokeres.bastionbot.org/images/pokemon/${monsterNo}.png">
// `;
// pokeElem.innerHTML = pokeInnerHTML;
// divPreviewTextChain.insertBefore(pokeElem, divPreviewTextChain.firstChild);




// 以下、旧バージョン仕様含む


// 与えられた文字列が全てひらがなか判定する
const kanaCheck = /^[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]+$/mu;
// test(kanaCheck.test("あいうえお"),true);
// test(kanaCheck.test("亜いうえお"), false);
// test(kanaCheck.test("亜いうえ尾"), false);
// test(kanaCheck.test("あ1いうえ尾"), false);
// testOK
//// 伸ばし棒がNG判定->仕様変更カタカナ縛りで解消

// アラートメッセージ欄(赤字)
// const divAlert = document.getElementById("alertMessage");
// しりとりテキスト表示欄(ページ中央部 GOボタンより下)
// const divPreviewTextChain = document.getElementById("memory");
// 文字入力欄
// const getIdInputText = document.getElementById("inputText");


let chainedCnt = 0;


// GO!ボタンが押されたときのアクション
function onGoButtonClick() {
  
  // アラートメッセージ欄(赤字)
  const divAlert = document.getElementById("alertMessage");
  // しりとりテキスト表示欄(ページ中央部 GOボタンより下)
  const divPreviewTextChain = document.getElementById("memory");
  // 文字入力欄
  const getIdInputText = document.getElementById("inputText");

  // アラートメッセージをリセットする
  alertReset();

  // 文字入力欄が空白じゃないか判別する
  if (checkIsNotEmpty() === false) {
    return false;
  }

  // ひらがなだけの文字か判別する
  if (kanaCheck.test(getIdInputText.value) === false) {
    // アラートメッセージを表示
    divAlert.innerHTML = "ひらがなでかいてほしいな..."

    // 入力欄をクリア
    getIdInputText.value = "";
    // 入力欄にフォーカス
    getIdInputText.focus();

    return false;
  }

  // 最後に[ん]が付くか判別する-->ドボン
  if (dobonN() === true) {
    return false;
  }

  // 前の言葉の最後の文字から始まっているか判別する
    // false -->ドボン

  // しりとり成功
  // 入力値をPタグで挿入
  //todo 成功エフェクト
  const p = document.createElement("p");
  p.textContent = getIdInputText.value;
  divPreviewTextChain.insertBefore(p, divPreviewTextChain.firstChild);
  // divPreviewTextChain.appendChild(p);
  // 入力欄をクリア
  getIdInputText.value = "";
  // 入力欄にフォーカス
  getIdInputText.focus();
}
