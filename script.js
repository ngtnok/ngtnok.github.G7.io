'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//todo 隠れミラクルワード-->背景画像切り替えしたい
const miracleWord = [{
  path: "",
  name: "クリスマス"
},{
  path: "",
  name: "ハロウィン"
},{
  path: "",
  name: "あつたか"
},{
  path: "",
  name: "こうた"
}];

// 与えられた文字列が全てひらがなか判定する
const kanaCheck = /^[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]+$/mu;
// test(kanaCheck.test("あいうえお"),true);
// test(kanaCheck.test("亜いうえお"), false);
// test(kanaCheck.test("亜いうえ尾"), false);
// test(kanaCheck.test("あ1いうえ尾"), false);
// testOK

// アラートメッセージ欄(赤字)
// const divAlert = document.getElementById("alertMessage");
// しりとりテキスト表示欄(ページ中央部 GOボタンより下)
// const divPreviewTextChain = document.getElementById("memory");
// 文字入力欄
// const getIdInputText = document.getElementById("inputText");


const chainedText = [];
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

  // 前の言葉の最後の文字から始まっているか判別する
    // false -->ドボン

  // しりとり成功
  // 入力値をPタグで挿入
  //todo 成功エフェクト
  const p = document.createElement("p");
  p.textContent = getIdInputText.value;
  divPreviewTextChain.appendChild(p); //todo appendChildだと下に追加される
  // 入力欄をクリア
  getIdInputText.value = "";
  // 入力欄にフォーカス
  getIdInputText.focus();
}

// さいしょからボタンでリスタート
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
    //todo テキスト入力欄にフォーカスする
    getIdInputText.focus();
    return false;
  }
}