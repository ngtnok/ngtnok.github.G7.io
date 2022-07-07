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

// 既出ポケモンを覚えておく用
const chainedMonsters = [];

// 次のGOまで覚えておく(文字の繋がりを判定する用)
let chainedLastWord = [];
function getArrayOKvariation () {
  // 文字入力欄
  // 文字を入力できる
  const getIdInputText = document.getElementById("inputText");
  console.log('getIdInputText: ', getIdInputText.value);
  
  // 入力値の最後の１文字を取得する
  let chainedLastOne = "";
  // 最後の１文字が伸ばし棒だったときの処理 
    // 前回値の最後の文字が伸ばし棒だったときの処理<-伸ばし棒の１字前で判定
    // 前回値の最後の文字が小さい文字(ァィゥェォャュョ)だったときの処理
  let checkLastOne = getIdInputText.value.slice(-1);
  console.log('checkLastOne: ', checkLastOne);
  if (checkLastOne === "ー" || checkLastOne === "ャ"
   || checkLastOne === "ュ" || checkLastOne === "ョ" || checkLastOne === "ァ"
   || checkLastOne === "ィ" || checkLastOne === "ゥ" || checkLastOne === "ェ" || checkLastOne === "ォ") {
    chainedLastOne = getIdInputText.value.slice(-2, -1);  // 後ろから2字目を取得
  } else {
    chainedLastOne = getIdInputText.value.slice(-1);
  }
  // 前回値の最後の文字が伸ばし棒＋小さい字だったときの処理<-伸ばし棒の2字前で判定
  let checkLastTwo =getIdInputText.value.slice(-2);
  if (checkLastTwo === "ャー" || checkLastTwo === "ュー" || checkLastTwo === "ョー") {
    chainedLastOne = getIdInputText.value.slice(-3, -2);  // 後ろから3字目を取得
  }

  // 濁点・半濁点を許容する
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
    
  // 存在するポケモンか判別する-->メッセージ表示「あたらしいポケモンにであったんだね」
  isPokemon();
  if (isPokemonSeries === false) {
    return false;
  }

  // 最後に[ン]が付くか判別する-->ドボン
  if (dobonN() === true) {
    return false;
  }

  // 文字が繋がらなかったら=>再入力を促すメッセージ表示
  // inputTextの最初の１文字がchainedLastWordに含まれるか判別
  isChained();
  if (isChainedOK === false) {
    return false;
  }

  //todo memoryをオブジェクトで覚えておく(ポケモン名前をhtmlのidとしてcreate)
  //todo 既出のポケモンか判別する-->memoryにて赤字(id取得でcss操作)-->ドボン
  isAlready();

  // 最後の文字を取得
  // chainedLastWordに再代入
  chainedLastWord = [];
  getArrayOKvariation();
  console.log('chainedLastWord: ', chainedLastWord);

  // 以下、しりとり成功処理

  // 既出ポケモンに追加
  chainedMonsters.push(getIdInputText.value);

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
    getIdInputText.style.visibility = "hidden";
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
// 存在するポケモンか判別する-->メッセージ表示「あたらしいポケモンにであったんだね」
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
    divAlert.innerHTML = "あたらしいポケモンかな・・・？<br>ほかのポケモンをおしえてね";

  }
}

// 文字がつながっているか判定用
let isChainedOK = false;
// inputTextの最初の１文字がchainedLastWordに含まれるか判別
function isChained() {

  // 文字入力欄
  // 文字を入力できる
  const getIdInputText = document.getElementById("inputText");
  const firstOne = getIdInputText.value.slice(0,1);
  console.log('firstOne: ', firstOne);
  
  // アラートメッセージ欄(赤字)
  const divAlert = document.getElementById("alertMessage");

  // 判定用変数を初期化
  isChainedOK = false
  console.log(chainedLastWord.length);
  // 今回が初期値か判別する
  if (chainedLastWord.length === 0) {
    console.log('chainedLastWord.length: ', chainedLastWord.length);
    return isChainedOK = true;
  } else {
    // inputTextの最初の１文字がchainedLastWordに含まれるか判別
    for (const aWord of chainedLastWord) {
      if (firstOne === aWord) {
        return isChainedOK = true;
      }
    }
  }
  if (isChainedOK === false) {
    // アラートメッセージを表示
    divAlert.innerHTML = "もじがつながってないよ..."
    // 入力欄にフォーカス
    getIdInputText.focus();

  }
}

//todo 既出のポケモンか判別する(chainedMonstersに含まれたらドボン)
function isAlready() {
  // アラートメッセージ欄(赤字)
  const divAlert = document.getElementById("alertMessage");
  // 文字入力欄
  const getIdInputText = document.getElementById("inputText");
  // Go!ボタン
  const goButton = document.getElementById("textGo");
  // しりとりテキスト表示欄(ページ中央部 GOボタンより下)
  const divPreviewTextChain = document.getElementById("memory");

  let isAlreadyMonster = [];
  console.log('chainedMonsters: ', chainedMonsters);

  if (chainedMonsters.length !== 0) {
    isAlreadyMonster = chainedMonsters.filter(monster => monster === getIdInputText.value)
    console.log('isAlreadyMonster: ', isAlreadyMonster);
  }
  console.log('isAlreadyMonster.length: ', isAlreadyMonster.length);
  if (isAlreadyMonster.length === 1) {
    const p = document.createElement("p");
    p.textContent = getIdInputText.value;
    divPreviewTextChain.insertBefore(p, divPreviewTextChain.firstChild);
    // divPreviewTextChain.appendChild(p);
    // 入力欄をクリア
    getIdInputText.value = "";
    // 入力欄にフォーカス
    getIdInputText.focus();
    // ドボンメッセージ表示
    divAlert.innerHTML = "ざんねん！さっききいたよ🐊<br>またあそんでね🐊";
    // Goボタン非表示-->最初から始める
    getIdInputText.style.visibility = "hidden";
    goButton.style.visibility = "hidden";
    // dobonN();
  }
}

//todo -->memoryにて赤字(id取得でcss操作)-->ドボン

console.log('pokemons: ', pokemons.length);
