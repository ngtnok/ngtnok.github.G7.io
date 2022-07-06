const pokemons = [
  {
    "no": 1,
    "name": "フシギダネ",
    "types": ["くさ", "どく"],
  },
  {
    "no": 2,
    "name": "フシギソウ",
    "types": ["くさ", "どく"],
  },
  {
    "no": 3,
    "name": "フシギバナ",
    "types": ["くさ", "どく"],
  },
  {
    "no": 3,
    "name": "メガフシギバナ",
    "types": ["くさ", "どく"],
  },
  {
    "no": 4,
    "name": "ヒトカゲ",
    "types": ["ほのお"],
  },
  {
    "no": 5,
    "name": "リザード",
    "types": ["ほのお"],
  },
  {
    "no": 6,
    "name": "リザードン",
    "types": ["ほのお", "ひこう"],
  },
  {
    "no": 6,
    "name": "メガリザードンX",
    "types": ["ほのお", "ドラゴン"],
  },
  {
    "no": 6,
    "name": "メガリザードンY",
    "types": ["ほのお", "ひこう"],
  },
  {
    "no": 7,
    "name": "ゼニガメ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [8],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["あめうけざら"],
    "stats": {
      "hp": 44,
      "attack": 48,
      "defence": 65,
      "spAttack": 50,
      "spDefence": 64,
      "speed": 43
    }
  },
  {
    "no": 8,
    "name": "カメール",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [9],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["あめうけざら"],
    "stats": {
      "hp": 59,
      "attack": 63,
      "defence": 80,
      "spAttack": 65,
      "spDefence": 80,
      "speed": 58
    }
  },
  {
    "no": 9,
    "name": "カメックス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["あめうけざら"],
    "stats": {
      "hp": 79,
      "attack": 83,
      "defence": 100,
      "spAttack": 85,
      "spDefence": 105,
      "speed": 78
    }
  },
  {
    "no": 9,
    "name": "メガカメックス",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["メガランチャー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 79,
      "attack": 103,
      "defence": 120,
      "spAttack": 135,
      "spDefence": 115,
      "speed": 78
    }
  },
  {
    "no": 10,
    "name": "キャタピー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [11],
    "types": ["むし"],
    "abilities": ["りんぷん"],
    "hiddenAbilities": ["にげあし"],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defence": 35,
      "spAttack": 20,
      "spDefence": 20,
      "speed": 45
    }
  },
  {
    "no": 11,
    "name": "トランセル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [12],
    "types": ["むし"],
    "abilities": ["だっぴ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defence": 55,
      "spAttack": 25,
      "spDefence": 25,
      "speed": 30
    }
  },
  {
    "no": 12,
    "name": "バタフリー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "ひこう"],
    "abilities": ["ふくがん"],
    "hiddenAbilities": ["いろめがね"],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defence": 50,
      "spAttack": 90,
      "spDefence": 80,
      "speed": 70
    }
  },
  {
    "no": 13,
    "name": "ビードル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [14],
    "types": ["むし", "どく"],
    "abilities": ["りんぷん"],
    "hiddenAbilities": ["にげあし"],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defence": 30,
      "spAttack": 20,
      "spDefence": 20,
      "speed": 50
    }
  },
  {
    "no": 14,
    "name": "コクーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [15],
    "types": ["むし", "どく"],
    "abilities": ["だっぴ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 45,
      "attack": 25,
      "defence": 50,
      "spAttack": 25,
      "spDefence": 25,
      "speed": 35
    }
  },
  {
    "no": 15,
    "name": "スピアー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "どく"],
    "abilities": ["むしのしらせ"],
    "hiddenAbilities": ["スナイパー"],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defence": 40,
      "spAttack": 45,
      "spDefence": 80,
      "speed": 75
    }
  },
  {
    "no": 15,
    "name": "メガスピアー",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["むし", "どく"],
    "abilities": ["てきおうりょく"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 65,
      "attack": 150,
      "defence": 40,
      "spAttack": 15,
      "spDefence": 80,
      "speed": 145
    }
  },
  {
    "no": 16,
    "name": "ポッポ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [17],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ", "ちどりあし"],
    "hiddenAbilities": ["はとむね"],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defence": 40,
      "spAttack": 35,
      "spDefence": 35,
      "speed": 56
    }
  },
  {
    "no": 17,
    "name": "ピジョン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [18],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ", "ちどりあし"],
    "hiddenAbilities": ["はとむね"],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defence": 55,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 71
    }
  },
  {
    "no": 18,
    "name": "ピジョット",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ", "ちどりあし"],
    "hiddenAbilities": ["はとむね"],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defence": 75,
      "spAttack": 70,
      "spDefence": 70,
      "speed": 101
    }
  },
  {
    "no": 18,
    "name": "メガピジョット",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["ノーガード"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defence": 80,
      "spAttack": 135,
      "spDefence": 80,
      "speed": 121
    }
  },
  {
    "no": 19,
    "name": "コラッタ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [20],
    "types": ["ノーマル"],
    "abilities": ["にげあし", "こんじょう"],
    "hiddenAbilities": ["はりきり"],
    "stats": {
      "hp": 30,
      "attack": 56,
      "defence": 35,
      "spAttack": 25,
      "spDefence": 35,
      "speed": 72
    }
  },
  {
    "no": 19,
    "name": "コラッタ",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [20],
    "types": ["あく", "ノーマル"],
    "abilities": ["くいしんぼう", "はりきり"],
    "hiddenAbilities": ["あついしぼう"],
    "stats": {
      "hp": 30,
      "attack": 56,
      "defence": 35,
      "spAttack": 25,
      "spDefence": 35,
      "speed": 72
    }
  },
  {
    "no": 20,
    "name": "ラッタ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["にげあし", "こんじょう"],
    "hiddenAbilities": ["はりきり"],
    "stats": {
      "hp": 55,
      "attack": 81,
      "defence": 60,
      "spAttack": 50,
      "spDefence": 70,
      "speed": 97
    }
  },
  {
    "no": 20,
    "name": "ラッタ",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "ノーマル"],
    "abilities": ["くいしんぼう", "はりきり"],
    "hiddenAbilities": ["あついしぼう"],
    "stats": {
      "hp": 75,
      "attack": 71,
      "defence": 70,
      "spAttack": 40,
      "spDefence": 80,
      "speed": 77
    }
  },
  {
    "no": 21,
    "name": "オニスズメ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [22],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ"],
    "hiddenAbilities": ["スナイパー"],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defence": 30,
      "spAttack": 31,
      "spDefence": 31,
      "speed": 70
    }
  },
  {
    "no": 22,
    "name": "オニドリル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ"],
    "hiddenAbilities": ["スナイパー"],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defence": 65,
      "spAttack": 61,
      "spDefence": 61,
      "speed": 100
    }
  },
  {
    "no": 23,
    "name": "アーボ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [24],
    "types": ["どく"],
    "abilities": ["いかく", "だっぴ"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 35,
      "attack": 60,
      "defence": 44,
      "spAttack": 40,
      "spDefence": 54,
      "speed": 55
    }
  },
  {
    "no": 24,
    "name": "アーボック",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく"],
    "abilities": ["いかく", "だっぴ"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defence": 69,
      "spAttack": 65,
      "spDefence": 79,
      "speed": 80
    }
  },
  {
    "no": 25,
    "name": "ピカチュウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [26],
    "types": ["でんき"],
    "abilities": ["せいでんき"],
    "hiddenAbilities": ["ひらいしん"],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defence": 40,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 90
    }
  },
  {
    "no": 26,
    "name": "ライチュウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["せいでんき"],
    "hiddenAbilities": ["ひらいしん"],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defence": 55,
      "spAttack": 90,
      "spDefence": 80,
      "speed": 110
    }
  },
  {
    "no": 26,
    "name": "ライチュウ",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "エスパー"],
    "abilities": ["サーフテール"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defence": 50,
      "spAttack": 95,
      "spDefence": 85,
      "speed": 110
    }
  },
  {
    "no": 27,
    "name": "サンド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [28],
    "types": ["じめん"],
    "abilities": ["すながくれ"],
    "hiddenAbilities": ["すなかき"],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defence": 85,
      "spAttack": 20,
      "spDefence": 30,
      "speed": 40
    }
  },
  {
    "no": 27,
    "name": "サンド",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [28],
    "types": ["こおり", "はがね"],
    "abilities": ["ゆきがくれ"],
    "hiddenAbilities": ["ゆきかき"],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defence": 90,
      "spAttack": 10,
      "spDefence": 35,
      "speed": 40
    }
  },
  {
    "no": 28,
    "name": "サンドパン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん"],
    "abilities": ["すながくれ"],
    "hiddenAbilities": ["すなかき"],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defence": 110,
      "spAttack": 45,
      "spDefence": 55,
      "speed": 65
    }
  },
  {
    "no": 28,
    "name": "サンドパン",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり", "はがね"],
    "abilities": ["ゆきがくれ"],
    "hiddenAbilities": ["ゆきかき"],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defence": 120,
      "spAttack": 25,
      "spDefence": 65,
      "speed": 65
    }
  },
  {
    "no": 29,
    "name": "ニドラン♀",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [30],
    "types": ["どく"],
    "abilities": ["どくのトゲ", "とうそうしん"],
    "hiddenAbilities": ["はりきり"],
    "stats": {
      "hp": 55,
      "attack": 47,
      "defence": 52,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 41
    }
  },
  {
    "no": 30,
    "name": "ニドリーナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [31],
    "types": ["どく"],
    "abilities": ["どくのトゲ", "とうそうしん"],
    "hiddenAbilities": ["はりきり"],
    "stats": {
      "hp": 70,
      "attack": 62,
      "defence": 67,
      "spAttack": 55,
      "spDefence": 55,
      "speed": 56
    }
  },
  {
    "no": 31,
    "name": "ニドクイン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく", "じめん"],
    "abilities": ["どくのトゲ", "とうそうしん"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defence": 87,
      "spAttack": 75,
      "spDefence": 85,
      "speed": 76
    }
  },
  {
    "no": 32,
    "name": "ニドラン♂",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [33],
    "types": ["どく"],
    "abilities": ["どくのトゲ", "とうそうしん"],
    "hiddenAbilities": ["はりきり"],
    "stats": {
      "hp": 46,
      "attack": 57,
      "defence": 40,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 50
    }
  },
  {
    "no": 33,
    "name": "ニドリーノ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [34],
    "types": ["どく"],
    "abilities": ["どくのトゲ", "とうそうしん"],
    "hiddenAbilities": ["はりきり"],
    "stats": {
      "hp": 61,
      "attack": 72,
      "defence": 57,
      "spAttack": 55,
      "spDefence": 55,
      "speed": 65
    }
  },
  {
    "no": 34,
    "name": "ニドキング",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく", "じめん"],
    "abilities": ["どくのトゲ", "とうそうしん"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 81,
      "attack": 102,
      "defence": 77,
      "spAttack": 85,
      "spDefence": 75,
      "speed": 85
    }
  },
  {
    "no": 35,
    "name": "ピッピ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [36],
    "types": ["フェアリー"],
    "abilities": ["メロメロボディ", "マジックガード"],
    "hiddenAbilities": ["フレンドガード"],
    "stats": {
      "hp": 70,
      "attack": 45,
      "defence": 48,
      "spAttack": 60,
      "spDefence": 65,
      "speed": 35
    }
  },
  {
    "no": 36,
    "name": "ピクシー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["フェアリー"],
    "abilities": ["メロメロボディ", "マジックガード"],
    "hiddenAbilities": ["てんねん"],
    "stats": {
      "hp": 95,
      "attack": 70,
      "defence": 73,
      "spAttack": 95,
      "spDefence": 90,
      "speed": 60
    }
  },
  {
    "no": 37,
    "name": "ロコン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [38],
    "types": ["ほのお"],
    "abilities": ["もらいび"],
    "hiddenAbilities": ["ひでり"],
    "stats": {
      "hp": 38,
      "attack": 41,
      "defence": 40,
      "spAttack": 50,
      "spDefence": 65,
      "speed": 65
    }
  },
  {
    "no": 37,
    "name": "ロコン",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [38],
    "types": ["こおり"],
    "abilities": ["ゆきがくれ"],
    "hiddenAbilities": ["ゆきふらし"],
    "stats": {
      "hp": 38,
      "attack": 41,
      "defence": 40,
      "spAttack": 50,
      "spDefence": 65,
      "speed": 65
    }
  },
  {
    "no": 38,
    "name": "キュウコン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお"],
    "abilities": ["もらいび"],
    "hiddenAbilities": ["ひでり"],
    "stats": {
      "hp": 73,
      "attack": 76,
      "defence": 75,
      "spAttack": 81,
      "spDefence": 100,
      "speed": 100
    }
  },
  {
    "no": 38,
    "name": "キュウコン",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり", "フェアリー"],
    "abilities": ["ゆきがくれ"],
    "hiddenAbilities": ["ゆきふらし"],
    "stats": {
      "hp": 73,
      "attack": 67,
      "defence": 75,
      "spAttack": 81,
      "spDefence": 100,
      "speed": 109
    }
  },
  {
    "no": 39,
    "name": "プリン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [40],
    "types": ["ノーマル", "フェアリー"],
    "abilities": ["メロメロボディ", "かちき"],
    "hiddenAbilities": ["フレンドガード"],
    "stats": {
      "hp": 115,
      "attack": 45,
      "defence": 20,
      "spAttack": 45,
      "spDefence": 25,
      "speed": 20
    }
  },
  {
    "no": 40,
    "name": "プクリン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "フェアリー"],
    "abilities": ["メロメロボディ", "かちき"],
    "hiddenAbilities": ["おみとおし"],
    "stats": {
      "hp": 140,
      "attack": 70,
      "defence": 45,
      "spAttack": 85,
      "spDefence": 50,
      "speed": 45
    }
  },
  {
    "no": 41,
    "name": "ズバット",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [42],
    "types": ["どく", "ひこう"],
    "abilities": ["せいしんりょく"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defence": 35,
      "spAttack": 30,
      "spDefence": 40,
      "speed": 55
    }
  },
  {
    "no": 42,
    "name": "ゴルバット",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [169],
    "types": ["どく", "ひこう"],
    "abilities": ["せいしんりょく"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defence": 70,
      "spAttack": 65,
      "spDefence": 75,
      "speed": 90
    }
  },
  {
    "no": 43,
    "name": "ナゾノクサ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [44],
    "types": ["くさ", "どく"],
    "abilities": ["ようりょくそ"],
    "hiddenAbilities": ["にげあし"],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defence": 55,
      "spAttack": 75,
      "spDefence": 65,
      "speed": 30
    }
  },
  {
    "no": 44,
    "name": "クサイハナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [45, 182],
    "types": ["くさ", "どく"],
    "abilities": ["ようりょくそ"],
    "hiddenAbilities": ["あくしゅう"],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defence": 70,
      "spAttack": 85,
      "spDefence": 75,
      "speed": 40
    }
  },
  {
    "no": 45,
    "name": "ラフレシア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "どく"],
    "abilities": ["ようりょくそ"],
    "hiddenAbilities": ["ほうし"],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defence": 85,
      "spAttack": 110,
      "spDefence": 90,
      "speed": 50
    }
  },
  {
    "no": 46,
    "name": "パラス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [47],
    "types": ["むし", "くさ"],
    "abilities": ["ほうし", "かんそうはだ"],
    "hiddenAbilities": ["しめりけ"],
    "stats": {
      "hp": 35,
      "attack": 70,
      "defence": 55,
      "spAttack": 45,
      "spDefence": 55,
      "speed": 25
    }
  },
  {
    "no": 47,
    "name": "パラセクト",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "くさ"],
    "abilities": ["ほうし", "かんそうはだ"],
    "hiddenAbilities": ["しめりけ"],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defence": 80,
      "spAttack": 60,
      "spDefence": 80,
      "speed": 30
    }
  },
  {
    "no": 48,
    "name": "コンパン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [49],
    "types": ["むし", "どく"],
    "abilities": ["ふくがん", "いろめがね"],
    "hiddenAbilities": ["にげあし"],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defence": 50,
      "spAttack": 40,
      "spDefence": 55,
      "speed": 45
    }
  },
  {
    "no": 49,
    "name": "モルフォン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "どく"],
    "abilities": ["りんぷん", "いろめがね"],
    "hiddenAbilities": ["ミラクルスキン"],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defence": 60,
      "spAttack": 90,
      "spDefence": 75,
      "speed": 90
    }
  },
  {
    "no": 50,
    "name": "ディグダ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [51],
    "types": ["じめん"],
    "abilities": ["すながくれ", "ありじごく"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defence": 25,
      "spAttack": 35,
      "spDefence": 45,
      "speed": 95
    }
  },
  {
    "no": 50,
    "name": "ディグダ",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [51],
    "types": ["じめん", "はがね"],
    "abilities": ["すながくれ", "カーリーヘアー"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defence": 30,
      "spAttack": 35,
      "spDefence": 45,
      "speed": 90
    }
  },
  {
    "no": 51,
    "name": "ダグトリオ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん"],
    "abilities": ["すながくれ", "ありじごく"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defence": 50,
      "spAttack": 50,
      "spDefence": 70,
      "speed": 120
    }
  },
  {
    "no": 51,
    "name": "ダグトリオ",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん", "はがね"],
    "abilities": ["すながくれ", "カーリーヘアー"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defence": 60,
      "spAttack": 50,
      "spDefence": 70,
      "speed": 110
    }
  },
  {
    "no": 52,
    "name": "ニャース",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [53],
    "types": ["ノーマル"],
    "abilities": ["ものひろい", "テクニシャン"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defence": 35,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 90
    }
  },
  {
    "no": 52,
    "name": "ニャース",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [53],
    "types": ["あく"],
    "abilities": ["ものひろい", "テクニシャン"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defence": 35,
      "spAttack": 50,
      "spDefence": 40,
      "speed": 90
    }
  },
  {
    "no": 53,
    "name": "ペルシアン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["じゅうなん", "テクニシャン"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 65,
      "attack": 70,
      "defence": 60,
      "spAttack": 65,
      "spDefence": 65,
      "speed": 115
    }
  },
  {
    "no": 53,
    "name": "ペルシアン",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく"],
    "abilities": ["ファーコート", "テクニシャン"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defence": 60,
      "spAttack": 75,
      "spDefence": 65,
      "speed": 115
    }
  },
  {
    "no": 54,
    "name": "コダック",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [55],
    "types": ["みず"],
    "abilities": ["しめりけ", "ノーてんき"],
    "hiddenAbilities": ["すいすい"],
    "stats": {
      "hp": 50,
      "attack": 52,
      "defence": 48,
      "spAttack": 65,
      "spDefence": 50,
      "speed": 55
    }
  },
  {
    "no": 55,
    "name": "ゴルダック",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["しめりけ", "ノーてんき"],
    "hiddenAbilities": ["すいすい"],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defence": 78,
      "spAttack": 95,
      "spDefence": 80,
      "speed": 85
    }
  },
  {
    "no": 56,
    "name": "マンキー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [57],
    "types": ["かくとう"],
    "abilities": ["やるき", "いかりのつぼ"],
    "hiddenAbilities": ["まけんき"],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defence": 35,
      "spAttack": 35,
      "spDefence": 45,
      "speed": 70
    }
  },
  {
    "no": 57,
    "name": "オコリザル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう"],
    "abilities": ["やるき", "いかりのつぼ"],
    "hiddenAbilities": ["まけんき"],
    "stats": {
      "hp": 65,
      "attack": 105,
      "defence": 60,
      "spAttack": 60,
      "spDefence": 70,
      "speed": 95
    }
  },
  {
    "no": 58,
    "name": "ガーディ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [59],
    "types": ["ほのお"],
    "abilities": ["いかく", "もらいび"],
    "hiddenAbilities": ["せいぎのこころ"],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defence": 45,
      "spAttack": 70,
      "spDefence": 50,
      "speed": 60
    }
  },
  {
    "no": 59,
    "name": "ウインディ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお"],
    "abilities": ["いかく", "もらいび"],
    "hiddenAbilities": ["せいぎのこころ"],
    "stats": {
      "hp": 90,
      "attack": 110,
      "defence": 80,
      "spAttack": 100,
      "spDefence": 80,
      "speed": 95
    }
  },
  {
    "no": 60,
    "name": "ニョロモ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [61],
    "types": ["みず"],
    "abilities": ["ちょすい", "しめりけ"],
    "hiddenAbilities": ["すいすい"],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defence": 40,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 90
    }
  },
  {
    "no": 61,
    "name": "ニョロゾ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [62, 186],
    "types": ["みず"],
    "abilities": ["ちょすい", "しめりけ"],
    "hiddenAbilities": ["すいすい"],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defence": 65,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 90
    }
  },
  {
    "no": 62,
    "name": "ニョロボン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "かくとう"],
    "abilities": ["ちょすい", "しめりけ"],
    "hiddenAbilities": ["すいすい"],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defence": 95,
      "spAttack": 70,
      "spDefence": 90,
      "speed": 70
    }
  },
  {
    "no": 63,
    "name": "ケーシィ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [64],
    "types": ["エスパー"],
    "abilities": ["シンクロ", "せいしんりょく"],
    "hiddenAbilities": ["マジックガード"],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defence": 15,
      "spAttack": 105,
      "spDefence": 55,
      "speed": 90
    }
  },
  {
    "no": 64,
    "name": "ユンゲラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [65],
    "types": ["エスパー"],
    "abilities": ["シンクロ", "せいしんりょく"],
    "hiddenAbilities": ["マジックガード"],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defence": 30,
      "spAttack": 120,
      "spDefence": 70,
      "speed": 105
    }
  },
  {
    "no": 65,
    "name": "フーディン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["シンクロ", "せいしんりょく"],
    "hiddenAbilities": ["マジックガード"],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defence": 45,
      "spAttack": 135,
      "spDefence": 95,
      "speed": 120
    }
  },
  {
    "no": 65,
    "name": "メガフーディン",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["トレース"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defence": 65,
      "spAttack": 175,
      "spDefence": 95,
      "speed": 150
    }
  },
  {
    "no": 66,
    "name": "ワンリキー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [67],
    "types": ["かくとう"],
    "abilities": ["こんじょう", "ノーガード"],
    "hiddenAbilities": ["ふくつのこころ"],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defence": 50,
      "spAttack": 35,
      "spDefence": 35,
      "speed": 35
    }
  },
  {
    "no": 67,
    "name": "ゴーリキー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [68],
    "types": ["かくとう"],
    "abilities": ["こんじょう", "ノーガード"],
    "hiddenAbilities": ["ふくつのこころ"],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defence": 70,
      "spAttack": 50,
      "spDefence": 60,
      "speed": 45
    }
  },
  {
    "no": 68,
    "name": "カイリキー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう"],
    "abilities": ["こんじょう", "ノーガード"],
    "hiddenAbilities": ["ふくつのこころ"],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defence": 80,
      "spAttack": 65,
      "spDefence": 85,
      "speed": 55
    }
  },
  {
    "no": 69,
    "name": "マダツボミ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [70],
    "types": ["くさ", "どく"],
    "abilities": ["ようりょくそ"],
    "hiddenAbilities": ["くいしんぼう"],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defence": 35,
      "spAttack": 70,
      "spDefence": 30,
      "speed": 40
    }
  },
  {
    "no": 70,
    "name": "ウツドン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [71],
    "types": ["くさ", "どく"],
    "abilities": ["ようりょくそ"],
    "hiddenAbilities": ["くいしんぼう"],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defence": 50,
      "spAttack": 85,
      "spDefence": 45,
      "speed": 55
    }
  },
  {
    "no": 71,
    "name": "ウツボット",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "どく"],
    "abilities": ["ようりょくそ"],
    "hiddenAbilities": ["くいしんぼう"],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defence": 65,
      "spAttack": 100,
      "spDefence": 70,
      "speed": 70
    }
  },
  {
    "no": 72,
    "name": "メノクラゲ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [73],
    "types": ["みず", "どく"],
    "abilities": ["クリアボディ", "ヘドロえき"],
    "hiddenAbilities": ["あめうけざら"],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defence": 35,
      "spAttack": 50,
      "spDefence": 100,
      "speed": 70
    }
  },
  {
    "no": 73,
    "name": "ドククラゲ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "どく"],
    "abilities": ["クリアボディ", "ヘドロえき"],
    "hiddenAbilities": ["あめうけざら"],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defence": 65,
      "spAttack": 80,
      "spDefence": 120,
      "speed": 100
    }
  },
  {
    "no": 74,
    "name": "イシツブテ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [75],
    "types": ["いわ", "じめん"],
    "abilities": ["いしあたま", "がんじょう"],
    "hiddenAbilities": ["すながくれ"],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defence": 100,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 20
    }
  },
  {
    "no": 74,
    "name": "イシツブテ",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [75],
    "types": ["いわ", "でんき"],
    "abilities": ["じりょく", "がんじょう"],
    "hiddenAbilities": ["エレキスキン"],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defence": 100,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 20
    }
  },
  {
    "no": 75,
    "name": "ゴローン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [76],
    "types": ["いわ", "じめん"],
    "abilities": ["いしあたま", "がんじょう"],
    "hiddenAbilities": ["すながくれ"],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defence": 115,
      "spAttack": 45,
      "spDefence": 45,
      "speed": 35
    }
  },
  {
    "no": 75,
    "name": "ゴローン",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [76],
    "types": ["いわ", "でんき"],
    "abilities": ["じりょく", "がんじょう"],
    "hiddenAbilities": ["エレキスキン"],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defence": 100,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 20
    }
  },
  {
    "no": 76,
    "name": "ゴローニャ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "じめん"],
    "abilities": ["いしあたま", "がんじょう"],
    "hiddenAbilities": ["すながくれ"],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defence": 130,
      "spAttack": 55,
      "spDefence": 65,
      "speed": 45
    }
  },
  {
    "no": 76,
    "name": "ゴローニャ",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "でんき"],
    "abilities": ["じりょく", "がんじょう"],
    "hiddenAbilities": ["エレキスキン"],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defence": 100,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 20
    }
  },
  {
    "no": 77,
    "name": "ポニータ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [78],
    "types": ["ほのお"],
    "abilities": ["にげあし", "もらいび"],
    "hiddenAbilities": ["ほのおのからだ"],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defence": 55,
      "spAttack": 65,
      "spDefence": 65,
      "speed": 90
    }
  },
  {
    "no": 78,
    "name": "ギャロップ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお"],
    "abilities": ["にげあし", "もらいび"],
    "hiddenAbilities": ["ほのおのからだ"],
    "stats": {
      "hp": 65,
      "attack": 100,
      "defence": 70,
      "spAttack": 80,
      "spDefence": 80,
      "speed": 105
    }
  },
  {
    "no": 79,
    "name": "ヤドン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [80, 199],
    "types": ["みず", "エスパー"],
    "abilities": ["どんかん", "マイペース"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 90,
      "attack": 65,
      "defence": 65,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 15
    }
  },
  {
    "no": 80,
    "name": "ヤドラン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "エスパー"],
    "abilities": ["どんかん", "マイペース"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defence": 110,
      "spAttack": 100,
      "spDefence": 80,
      "speed": 30
    }
  },
  {
    "no": 80,
    "name": "メガヤドラン",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["みず", "エスパー"],
    "abilities": ["シェルアーマー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defence": 180,
      "spAttack": 130,
      "spDefence": 80,
      "speed": 30
    }
  },
  {
    "no": 81,
    "name": "コイル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [82],
    "types": ["でんき", "はがね"],
    "abilities": ["じりょく", "がんじょう"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defence": 70,
      "spAttack": 95,
      "spDefence": 55,
      "speed": 45
    }
  },
  {
    "no": 82,
    "name": "レアコイル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [462],
    "types": ["でんき", "はがね"],
    "abilities": ["じりょく", "がんじょう"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defence": 95,
      "spAttack": 120,
      "spDefence": 70,
      "speed": 70
    }
  },
  {
    "no": 83,
    "name": "カモネギ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ", "せいしんりょく"],
    "hiddenAbilities": ["まけんき"],
    "stats": {
      "hp": 52,
      "attack": 90,
      "defence": 55,
      "spAttack": 58,
      "spDefence": 62,
      "speed": 60
    }
  },
  {
    "no": 84,
    "name": "ドードー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [85],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["にげあし", "はやおき"],
    "hiddenAbilities": ["ちどりあし"],
    "stats": {
      "hp": 35,
      "attack": 85,
      "defence": 45,
      "spAttack": 35,
      "spDefence": 35,
      "speed": 75
    }
  },
  {
    "no": 85,
    "name": "ドードリオ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["にげあし", "はやおき"],
    "hiddenAbilities": ["ちどりあし"],
    "stats": {
      "hp": 60,
      "attack": 110,
      "defence": 70,
      "spAttack": 60,
      "spDefence": 60,
      "speed": 110
    }
  },
  {
    "no": 86,
    "name": "パウワウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [87],
    "types": ["みず"],
    "abilities": ["あついしぼう", "うるおいボディ"],
    "hiddenAbilities": ["アイスボディ"],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defence": 55,
      "spAttack": 45,
      "spDefence": 70,
      "speed": 45
    }
  },
  {
    "no": 87,
    "name": "ジュゴン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "こおり"],
    "abilities": ["あついしぼう", "うるおいボディ"],
    "hiddenAbilities": ["アイスボディ"],
    "stats": {
      "hp": 90,
      "attack": 70,
      "defence": 80,
      "spAttack": 70,
      "spDefence": 95,
      "speed": 70
    }
  },
  {
    "no": 88,
    "name": "ベトベター",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [89],
    "types": ["どく"],
    "abilities": ["あくしゅう", "ねんちゃく"],
    "hiddenAbilities": ["どくしゅ"],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defence": 50,
      "spAttack": 40,
      "spDefence": 50,
      "speed": 25
    }
  },
  {
    "no": 88,
    "name": "ベトベター",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [89],
    "types": ["どく", "あく"],
    "abilities": ["どくしゅ", "くいしんぼう"],
    "hiddenAbilities": ["かがくのちから"],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defence": 50,
      "spAttack": 40,
      "spDefence": 50,
      "speed": 25
    }
  },
  {
    "no": 89,
    "name": "ベトベトン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく"],
    "abilities": ["あくしゅう", "ねんちゃく"],
    "hiddenAbilities": ["どくしゅ"],
    "stats": {
      "hp": 105,
      "attack": 105,
      "defence": 75,
      "spAttack": 65,
      "spDefence": 100,
      "speed": 50
    }
  },
  {
    "no": 89,
    "name": "ベトベトン",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく", "あく"],
    "abilities": ["どくしゅ", "くいしんぼう"],
    "hiddenAbilities": ["かがくのちから"],
    "stats": {
      "hp": 105,
      "attack": 105,
      "defence": 75,
      "spAttack": 65,
      "spDefence": 100,
      "speed": 50
    }
  },
  {
    "no": 90,
    "name": "シェルダー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [91],
    "types": ["みず"],
    "abilities": ["シェルアーマー", "スキルリンク"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 30,
      "attack": 65,
      "defence": 100,
      "spAttack": 45,
      "spDefence": 25,
      "speed": 40
    }
  },
  {
    "no": 91,
    "name": "パルシェン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "こおり"],
    "abilities": ["シェルアーマー", "スキルリンク"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defence": 180,
      "spAttack": 85,
      "spDefence": 45,
      "speed": 70
    }
  },
  {
    "no": 92,
    "name": "ゴース",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [93],
    "types": ["ゴースト", "どく"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 30,
      "attack": 35,
      "defence": 30,
      "spAttack": 100,
      "spDefence": 35,
      "speed": 80
    }
  },
  {
    "no": 93,
    "name": "ゴースト",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [94],
    "types": ["ゴースト", "どく"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defence": 45,
      "spAttack": 115,
      "spDefence": 55,
      "speed": 95
    }
  },
  {
    "no": 94,
    "name": "ゲンガー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "どく"],
    "abilities": ["のろわれボディ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defence": 60,
      "spAttack": 130,
      "spDefence": 75,
      "speed": 110
    }
  },
  {
    "no": 94,
    "name": "メガゲンガー",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ゴースト", "どく"],
    "abilities": ["かげふみ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defence": 80,
      "spAttack": 170,
      "spDefence": 95,
      "speed": 130
    }
  },
  {
    "no": 95,
    "name": "イワーク",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [208],
    "types": ["いわ", "じめん"],
    "abilities": ["いしあたま", "がんじょう"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 35,
      "attack": 45,
      "defence": 160,
      "spAttack": 30,
      "spDefence": 45,
      "speed": 70
    }
  },
  {
    "no": 96,
    "name": "スリープ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [97],
    "types": ["エスパー"],
    "abilities": ["ふみん", "よちむ"],
    "hiddenAbilities": ["せいしんりょく"],
    "stats": {
      "hp": 60,
      "attack": 48,
      "defence": 45,
      "spAttack": 43,
      "spDefence": 90,
      "speed": 42
    }
  },
  {
    "no": 97,
    "name": "スリーパー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["ふみん", "よちむ"],
    "hiddenAbilities": ["せいしんりょく"],
    "stats": {
      "hp": 85,
      "attack": 73,
      "defence": 70,
      "spAttack": 73,
      "spDefence": 115,
      "speed": 67
    }
  },
  {
    "no": 98,
    "name": "クラブ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [99],
    "types": ["みず"],
    "abilities": ["かいりきバサミ", "シェルアーマー"],
    "hiddenAbilities": ["ちからづく"],
    "stats": {
      "hp": 30,
      "attack": 105,
      "defence": 90,
      "spAttack": 25,
      "spDefence": 25,
      "speed": 50
    }
  },
  {
    "no": 99,
    "name": "キングラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["かいりきバサミ", "シェルアーマー"],
    "hiddenAbilities": ["ちからづく"],
    "stats": {
      "hp": 55,
      "attack": 130,
      "defence": 115,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 75
    }
  },
  {
    "no": 100,
    "name": "ビリリダマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [101],
    "types": ["でんき"],
    "abilities": ["ぼうおん", "せいでんき"],
    "hiddenAbilities": ["ゆうばく"],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defence": 50,
      "spAttack": 55,
      "spDefence": 55,
      "speed": 100
    }
  },
  {
    "no": 101,
    "name": "マルマイン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["ぼうおん", "せいでんき"],
    "hiddenAbilities": ["ゆうばく"],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defence": 70,
      "spAttack": 80,
      "spDefence": 80,
      "speed": 150
    }
  },
  {
    "no": 102,
    "name": "タマタマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [103],
    "types": ["くさ", "エスパー"],
    "abilities": ["ようりょくそ"],
    "hiddenAbilities": ["しゅうかく"],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defence": 80,
      "spAttack": 60,
      "spDefence": 45,
      "speed": 40
    }
  },
  {
    "no": 103,
    "name": "ナッシー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "エスパー"],
    "abilities": ["ようりょくそ"],
    "hiddenAbilities": ["しゅうかく"],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defence": 85,
      "spAttack": 125,
      "spDefence": 75,
      "speed": 55
    }
  },
  {
    "no": 103,
    "name": "ナッシー",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "ドラゴン"],
    "abilities": ["おみとおし"],
    "hiddenAbilities": ["しゅうかく"],
    "stats": {
      "hp": 95,
      "attack": 105,
      "defence": 85,
      "spAttack": 125,
      "spDefence": 75,
      "speed": 45
    }
  },
  {
    "no": 104,
    "name": "カラカラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [105],
    "types": ["じめん"],
    "abilities": ["いしあたま", "ひらいしん"],
    "hiddenAbilities": ["カブトアーマー"],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defence": 95,
      "spAttack": 40,
      "spDefence": 50,
      "speed": 35
    }
  },
  {
    "no": 105,
    "name": "ガラガラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん"],
    "abilities": ["いしあたま", "ひらいしん"],
    "hiddenAbilities": ["カブトアーマー"],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defence": 110,
      "spAttack": 50,
      "spDefence": 80,
      "speed": 45
    }
  },
  {
    "no": 105,
    "name": "ガラガラ",
    "form": "アローラのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "ゴースト"],
    "abilities": ["のろわれボディ", "ひらいしん"],
    "hiddenAbilities": ["いしあたま"],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defence": 110,
      "spAttack": 50,
      "spDefence": 80,
      "speed": 45
    }
  },
  {
    "no": 106,
    "name": "サワムラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう"],
    "abilities": ["じゅうなん", "すてみ"],
    "hiddenAbilities": ["かるわざ"],
    "stats": {
      "hp": 50,
      "attack": 120,
      "defence": 53,
      "spAttack": 35,
      "spDefence": 110,
      "speed": 87
    }
  },
  {
    "no": 107,
    "name": "エビワラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう"],
    "abilities": ["するどいめ", "てつのこぶし"],
    "hiddenAbilities": ["せいしんりょく"],
    "stats": {
      "hp": 50,
      "attack": 105,
      "defence": 79,
      "spAttack": 35,
      "spDefence": 110,
      "speed": 76
    }
  },
  {
    "no": 108,
    "name": "ベロリンガ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [463],
    "types": ["ノーマル"],
    "abilities": ["マイペース", "どんかん"],
    "hiddenAbilities": ["ノーてんき"],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defence": 75,
      "spAttack": 60,
      "spDefence": 75,
      "speed": 30
    }
  },
  {
    "no": 109,
    "name": "ドガース",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [110],
    "types": ["どく"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defence": 95,
      "spAttack": 60,
      "spDefence": 45,
      "speed": 35
    }
  },
  {
    "no": 110,
    "name": "マタドガス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defence": 120,
      "spAttack": 85,
      "spDefence": 70,
      "speed": 60
    }
  },
  {
    "no": 111,
    "name": "サイホーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [112],
    "types": ["じめん", "いわ"],
    "abilities": ["ひらいしん", "いしあたま"],
    "hiddenAbilities": ["すてみ"],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defence": 95,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 25
    }
  },
  {
    "no": 112,
    "name": "サイドン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [464],
    "types": ["じめん", "いわ"],
    "abilities": ["ひらいしん", "いしあたま"],
    "hiddenAbilities": ["すてみ"],
    "stats": {
      "hp": 105,
      "attack": 130,
      "defence": 120,
      "spAttack": 45,
      "spDefence": 45,
      "speed": 40
    }
  },
  {
    "no": 113,
    "name": "ラッキー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [242],
    "types": ["ノーマル"],
    "abilities": ["しぜんかいふく", "てんのめぐみ"],
    "hiddenAbilities": ["いやしのこころ"],
    "stats": {
      "hp": 250,
      "attack": 5,
      "defence": 5,
      "spAttack": 35,
      "spDefence": 105,
      "speed": 50
    }
  },
  {
    "no": 114,
    "name": "モンジャラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [465],
    "types": ["くさ"],
    "abilities": ["ようりょくそ", "リーフガード"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defence": 115,
      "spAttack": 100,
      "spDefence": 40,
      "speed": 60
    }
  },
  {
    "no": 115,
    "name": "ガルーラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["はやおき", "きもったま"],
    "hiddenAbilities": ["せいしんりょく"],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defence": 80,
      "spAttack": 40,
      "spDefence": 80,
      "speed": 90
    }
  },
  {
    "no": 115,
    "name": "メガガルーラ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["おやこあい"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 105,
      "attack": 125,
      "defence": 100,
      "spAttack": 60,
      "spDefence": 100,
      "speed": 100
    }
  },
  {
    "no": 116,
    "name": "タッツー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [117],
    "types": ["みず"],
    "abilities": ["すいすい", "スナイパー"],
    "hiddenAbilities": ["しめりけ"],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defence": 70,
      "spAttack": 70,
      "spDefence": 25,
      "speed": 60
    }
  },
  {
    "no": 117,
    "name": "シードラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [230],
    "types": ["みず"],
    "abilities": ["どくのトゲ", "スナイパー"],
    "hiddenAbilities": ["しめりけ"],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defence": 95,
      "spAttack": 95,
      "spDefence": 45,
      "speed": 85
    }
  },
  {
    "no": 118,
    "name": "トサキント",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [119],
    "types": ["みず"],
    "abilities": ["すいすい", "みずのベール"],
    "hiddenAbilities": ["ひらいしん"],
    "stats": {
      "hp": 45,
      "attack": 67,
      "defence": 60,
      "spAttack": 35,
      "spDefence": 50,
      "speed": 63
    }
  },
  {
    "no": 119,
    "name": "アズマオウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["すいすい", "みずのベール"],
    "hiddenAbilities": ["ひらいしん"],
    "stats": {
      "hp": 80,
      "attack": 92,
      "defence": 65,
      "spAttack": 65,
      "spDefence": 80,
      "speed": 68
    }
  },
  {
    "no": 120,
    "name": "ヒトデマン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [121],
    "types": ["みず"],
    "abilities": ["はっこう", "しぜんかいふく"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defence": 55,
      "spAttack": 70,
      "spDefence": 55,
      "speed": 85
    }
  },
  {
    "no": 121,
    "name": "スターミー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "エスパー"],
    "abilities": ["はっこう", "しぜんかいふく"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defence": 85,
      "spAttack": 100,
      "spDefence": 85,
      "speed": 115
    }
  },
  {
    "no": 122,
    "name": "バリヤード",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "フェアリー"],
    "abilities": ["ぼうおん", "フィルター"],
    "hiddenAbilities": ["テクニシャン"],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defence": 65,
      "spAttack": 100,
      "spDefence": 120,
      "speed": 90
    }
  },
  {
    "no": 123,
    "name": "ストライク",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [212],
    "types": ["むし", "ひこう"],
    "abilities": ["むしのしらせ", "テクニシャン"],
    "hiddenAbilities": ["ふくつのこころ"],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defence": 80,
      "spAttack": 55,
      "spDefence": 80,
      "speed": 105
    }
  },
  {
    "no": 124,
    "name": "ルージュラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり", "エスパー"],
    "abilities": ["どんかん", "よちむ"],
    "hiddenAbilities": ["かんそうはだ"],
    "stats": {
      "hp": 65,
      "attack": 50,
      "defence": 35,
      "spAttack": 115,
      "spDefence": 95,
      "speed": 95
    }
  },
  {
    "no": 125,
    "name": "エレブー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [466],
    "types": ["でんき"],
    "abilities": ["せいでんき"],
    "hiddenAbilities": ["やるき"],
    "stats": {
      "hp": 65,
      "attack": 83,
      "defence": 57,
      "spAttack": 95,
      "spDefence": 85,
      "speed": 105
    }
  },
  {
    "no": 126,
    "name": "ブーバー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [467],
    "types": ["ほのお"],
    "abilities": ["ほのおのからだ"],
    "hiddenAbilities": ["やるき"],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defence": 57,
      "spAttack": 100,
      "spDefence": 85,
      "speed": 93
    }
  },
  {
    "no": 127,
    "name": "カイロス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし"],
    "abilities": ["かいりきバサミ", "かたやぶり"],
    "hiddenAbilities": ["じしんかじょう"],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defence": 100,
      "spAttack": 55,
      "spDefence": 70,
      "speed": 85
    }
  },
  {
    "no": 127,
    "name": "メガカイロス",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["むし", "ひこう"],
    "abilities": ["スカイスキン"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 65,
      "attack": 155,
      "defence": 120,
      "spAttack": 65,
      "spDefence": 90,
      "speed": 105
    }
  },
  {
    "no": 128,
    "name": "ケンタロス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["いかく", "いかりのつぼ"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defence": 95,
      "spAttack": 40,
      "spDefence": 70,
      "speed": 110
    }
  },
  {
    "no": 129,
    "name": "コイキング",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [130],
    "types": ["みず"],
    "abilities": ["すいすい"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defence": 55,
      "spAttack": 15,
      "spDefence": 20,
      "speed": 80
    }
  },
  {
    "no": 130,
    "name": "ギャラドス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "ひこう"],
    "abilities": ["いかく"],
    "hiddenAbilities": ["じしんかじょう"],
    "stats": {
      "hp": 95,
      "attack": 125,
      "defence": 79,
      "spAttack": 60,
      "spDefence": 100,
      "speed": 81
    }
  },
  {
    "no": 130,
    "name": "メガギャラドス",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["みず", "あく"],
    "abilities": ["かたやぶり"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 95,
      "attack": 155,
      "defence": 109,
      "spAttack": 70,
      "spDefence": 130,
      "speed": 81
    }
  },
  {
    "no": 131,
    "name": "ラプラス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "こおり"],
    "abilities": ["ちょすい", "シェルアーマー"],
    "hiddenAbilities": ["うるおいボディ"],
    "stats": {
      "hp": 130,
      "attack": 85,
      "defence": 80,
      "spAttack": 85,
      "spDefence": 95,
      "speed": 60
    }
  },
  {
    "no": 132,
    "name": "メタモン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["じゅうなん"],
    "hiddenAbilities": ["かわりもの"],
    "stats": {
      "hp": 48,
      "attack": 48,
      "defence": 48,
      "spAttack": 48,
      "spDefence": 48,
      "speed": 48
    }
  },
  {
    "no": 133,
    "name": "イーブイ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [134, 135, 136, 196, 197, 470, 471, 700],
    "types": ["ノーマル"],
    "abilities": ["にげあし", "てきおうりょく"],
    "hiddenAbilities": ["きけんよち"],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defence": 50,
      "spAttack": 45,
      "spDefence": 65,
      "speed": 55
    }
  },
  {
    "no": 134,
    "name": "シャワーズ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["ちょすい"],
    "hiddenAbilities": ["うるおいボディ"],
    "stats": {
      "hp": 130,
      "attack": 65,
      "defence": 60,
      "spAttack": 110,
      "spDefence": 95,
      "speed": 65
    }
  },
  {
    "no": 135,
    "name": "サンダース",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["ちくでん"],
    "hiddenAbilities": ["はやあし"],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defence": 60,
      "spAttack": 110,
      "spDefence": 95,
      "speed": 130
    }
  },
  {
    "no": 136,
    "name": "ブースター",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお"],
    "abilities": ["もらいび"],
    "hiddenAbilities": ["こんじょう"],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defence": 60,
      "spAttack": 95,
      "spDefence": 110,
      "speed": 65
    }
  },
  {
    "no": 137,
    "name": "ポリゴン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [233],
    "types": ["ノーマル"],
    "abilities": ["トレース", "ダウンロード"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defence": 70,
      "spAttack": 85,
      "spDefence": 75,
      "speed": 40
    }
  },
  {
    "no": 138,
    "name": "オムナイト",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [139],
    "types": ["いわ", "みず"],
    "abilities": ["すいすい", "シェルアーマー"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 35,
      "attack": 40,
      "defence": 100,
      "spAttack": 90,
      "spDefence": 55,
      "speed": 35
    }
  },
  {
    "no": 139,
    "name": "オムスター",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "みず"],
    "abilities": ["すいすい", "シェルアーマー"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defence": 125,
      "spAttack": 115,
      "spDefence": 70,
      "speed": 55
    }
  },
  {
    "no": 140,
    "name": "カブト",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [141],
    "types": ["いわ", "みず"],
    "abilities": ["すいすい", "カブトアーマー"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 30,
      "attack": 80,
      "defence": 90,
      "spAttack": 55,
      "spDefence": 45,
      "speed": 55
    }
  },
  {
    "no": 141,
    "name": "カブトプス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "みず"],
    "abilities": ["すいすい", "カブトアーマー"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 60,
      "attack": 115,
      "defence": 105,
      "spAttack": 65,
      "spDefence": 70,
      "speed": 80
    }
  },
  {
    "no": 142,
    "name": "プテラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "ひこう"],
    "abilities": ["いしあたま", "プレッシャー"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defence": 65,
      "spAttack": 60,
      "spDefence": 75,
      "speed": 130
    }
  },
  {
    "no": 142,
    "name": "メガプテラ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["いわ", "ひこう"],
    "abilities": ["かたいツメ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 135,
      "defence": 85,
      "spAttack": 70,
      "spDefence": 95,
      "speed": 150
    }
  },
  {
    "no": 143,
    "name": "カビゴン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["めんえき", "あついしぼう"],
    "hiddenAbilities": ["くいしんぼう"],
    "stats": {
      "hp": 160,
      "attack": 110,
      "defence": 65,
      "spAttack": 65,
      "spDefence": 110,
      "speed": 30
    }
  },
  {
    "no": 144,
    "name": "フリーザー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり", "ひこう"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["ゆきがくれ"],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defence": 100,
      "spAttack": 95,
      "spDefence": 125,
      "speed": 85
    }
  },
  {
    "no": 145,
    "name": "サンダー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "ひこう"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["せいでんき"],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defence": 85,
      "spAttack": 125,
      "spDefence": 90,
      "speed": 100
    }
  },
  {
    "no": 146,
    "name": "ファイヤー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "ひこう"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["ほのおのからだ"],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defence": 90,
      "spAttack": 125,
      "spDefence": 85,
      "speed": 90
    }
  },
  {
    "no": 147,
    "name": "ミニリュウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [148],
    "types": ["ドラゴン"],
    "abilities": ["だっび"],
    "hiddenAbilities": ["ふしぎなうろこ"],
    "stats": {
      "hp": 41,
      "attack": 64,
      "defence": 45,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 50
    }
  },
  {
    "no": 148,
    "name": "ハクリュー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [149],
    "types": ["ドラゴン"],
    "abilities": ["だっび"],
    "hiddenAbilities": ["ふしぎなうろこ"],
    "stats": {
      "hp": 61,
      "attack": 84,
      "defence": 65,
      "spAttack": 70,
      "spDefence": 70,
      "speed": 70
    }
  },
  {
    "no": 149,
    "name": "カイリュー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "ひこう"],
    "abilities": ["せいしんりょく"],
    "hiddenAbilities": ["マルチスケイル"],
    "stats": {
      "hp": 91,
      "attack": 134,
      "defence": 95,
      "spAttack": 100,
      "spDefence": 100,
      "speed": 80
    }
  },
  {
    "no": 150,
    "name": "ミュウツー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 106,
      "attack": 110,
      "defence": 90,
      "spAttack": 154,
      "spDefence": 90,
      "speed": 130
    }
  },
  {
    "no": 150,
    "name": "メガミュウツーX",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["エスパー", "かくとう"],
    "abilities": ["ふくつのこころ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 106,
      "attack": 190,
      "defence": 100,
      "spAttack": 154,
      "spDefence": 100,
      "speed": 130
    }
  },
  {
    "no": 150,
    "name": "メガミュウツーY",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["ふみん"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 106,
      "attack": 150,
      "defence": 70,
      "spAttack": 194,
      "spDefence": 120,
      "speed": 140
    }
  },
  {
    "no": 151,
    "name": "ミュウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["シンクロ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defence": 100,
      "spAttack": 100,
      "spDefence": 100,
      "speed": 100
    }
  },
  {
    "no": 152,
    "name": "チコリータ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [153],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["リーフガード"],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defence": 65,
      "spAttack": 49,
      "spDefence": 65,
      "speed": 45
    }
  },
  {
    "no": 153,
    "name": "ベイリーフ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [154],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["リーフガード"],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defence": 80,
      "spAttack": 63,
      "spDefence": 80,
      "speed": 60
    }
  },
  {
    "no": 154,
    "name": "メガニウム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["リーフガード"],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defence": 100,
      "spAttack": 83,
      "spDefence": 100,
      "speed": 80
    }
  },
  {
    "no": 155,
    "name": "ヒノアラシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [156],
    "types": ["ほのお"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["もらいび"],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defence": 43,
      "spAttack": 60,
      "spDefence": 50,
      "speed": 65
    }
  },
  {
    "no": 156,
    "name": "マグマラシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [157],
    "types": ["ほのお"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["もらいび"],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defence": 58,
      "spAttack": 80,
      "spDefence": 65,
      "speed": 80
    }
  },
  {
    "no": 157,
    "name": "バクフーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["もらいび"],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defence": 78,
      "spAttack": 109,
      "spDefence": 85,
      "speed": 100
    }
  },
  {
    "no": 158,
    "name": "ワニノコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [159],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defence": 64,
      "spAttack": 44,
      "spDefence": 48,
      "speed": 43
    }
  },
  {
    "no": 159,
    "name": "アリゲイツ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [160],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defence": 80,
      "spAttack": 59,
      "spDefence": 63,
      "speed": 58
    }
  },
  {
    "no": 160,
    "name": "オーダイル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defence": 100,
      "spAttack": 79,
      "spDefence": 83,
      "speed": 78
    }
  },
  {
    "no": 161,
    "name": "オタチ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [162],
    "types": ["ノーマル"],
    "abilities": ["にげあし", "するどいめ"],
    "hiddenAbilities": ["おみとおし"],
    "stats": {
      "hp": 35,
      "attack": 46,
      "defence": 34,
      "spAttack": 35,
      "spDefence": 45,
      "speed": 20
    }
  },
  {
    "no": 162,
    "name": "オオタチ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["にげあし", "するどいめ"],
    "hiddenAbilities": ["おみとおし"],
    "stats": {
      "hp": 85,
      "attack": 76,
      "defence": 64,
      "spAttack": 45,
      "spDefence": 55,
      "speed": 90
    }
  },
  {
    "no": 163,
    "name": "ホーホー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [164],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["ふみん", "するどいめ"],
    "hiddenAbilities": ["いろめがね"],
    "stats": {
      "hp": 60,
      "attack": 30,
      "defence": 30,
      "spAttack": 36,
      "spDefence": 56,
      "speed": 50
    }
  },
  {
    "no": 164,
    "name": "ヨルノズク",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["ふみん", "するどいめ"],
    "hiddenAbilities": ["いろめがね"],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defence": 50,
      "spAttack": 86,
      "spDefence": 96,
      "speed": 70
    }
  },
  {
    "no": 165,
    "name": "レディバ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [166],
    "types": ["むし", "ひこう"],
    "abilities": ["むしのしらせ", "はやおき"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 40,
      "attack": 20,
      "defence": 30,
      "spAttack": 40,
      "spDefence": 80,
      "speed": 55
    }
  },
  {
    "no": 166,
    "name": "レディアン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "ひこう"],
    "abilities": ["むしのしらせ", "はやおき"],
    "hiddenAbilities": ["てつのこぶし"],
    "stats": {
      "hp": 55,
      "attack": 35,
      "defence": 50,
      "spAttack": 55,
      "spDefence": 110,
      "speed": 85
    }
  },
  {
    "no": 167,
    "name": "イトマル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [168],
    "types": ["むし", "どく"],
    "abilities": ["むしのしらせ", "ふみん"],
    "hiddenAbilities": ["スナイパー"],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defence": 40,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 30
    }
  },
  {
    "no": 168,
    "name": "アリアドス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "どく"],
    "abilities": ["むしのしらせ", "ふみん"],
    "hiddenAbilities": ["スナイパー"],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defence": 70,
      "spAttack": 60,
      "spDefence": 70,
      "speed": 40
    }
  },
  {
    "no": 169,
    "name": "クロバット",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく", "ひこう"],
    "abilities": ["せいしんりょく"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 85,
      "attack": 90,
      "defence": 80,
      "spAttack": 70,
      "spDefence": 80,
      "speed": 130
    }
  },
  {
    "no": 170,
    "name": "チョンチー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [171],
    "types": ["みず", "でんき"],
    "abilities": ["ちくでん", "はっこう"],
    "hiddenAbilities": ["ちょすい"],
    "stats": {
      "hp": 75,
      "attack": 38,
      "defence": 38,
      "spAttack": 56,
      "spDefence": 56,
      "speed": 67
    }
  },
  {
    "no": 171,
    "name": "ランターン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "でんき"],
    "abilities": ["ちくでん", "はっこう"],
    "hiddenAbilities": ["ちょすい"],
    "stats": {
      "hp": 125,
      "attack": 58,
      "defence": 58,
      "spAttack": 76,
      "spDefence": 76,
      "speed": 67
    }
  },
  {
    "no": 172,
    "name": "ピチュー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [25],
    "types": ["でんき"],
    "abilities": ["せいでんき"],
    "hiddenAbilities": ["ひらいしん"],
    "stats": {
      "hp": 20,
      "attack": 40,
      "defence": 15,
      "spAttack": 35,
      "spDefence": 35,
      "speed": 60
    }
  },
  {
    "no": 173,
    "name": "ピィ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [35],
    "types": ["フェアリー"],
    "abilities": ["メロメロボディ", "マジックガード"],
    "hiddenAbilities": ["フレンドガード"],
    "stats": {
      "hp": 50,
      "attack": 25,
      "defence": 28,
      "spAttack": 45,
      "spDefence": 55,
      "speed": 15
    }
  },
  {
    "no": 174,
    "name": "ププリン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [39],
    "types": ["ノーマル", "フェアリー"],
    "abilities": ["メロメロボディ", "かちき"],
    "hiddenAbilities": ["フレンドガード"],
    "stats": {
      "hp": 90,
      "attack": 30,
      "defence": 15,
      "spAttack": 40,
      "spDefence": 20,
      "speed": 15
    }
  },
  {
    "no": 175,
    "name": "トゲピー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [176],
    "types": ["フェアリー"],
    "abilities": ["はりきり", "てんのめぐみ"],
    "hiddenAbilities": ["きょううん"],
    "stats": {
      "hp": 35,
      "attack": 20,
      "defence": 65,
      "spAttack": 40,
      "spDefence": 65,
      "speed": 20
    }
  },
  {
    "no": 176,
    "name": "トゲチック",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [468],
    "types": ["フェアリー", "ひこう"],
    "abilities": ["はりきり", "てんのめぐみ"],
    "hiddenAbilities": ["きょううん"],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defence": 85,
      "spAttack": 80,
      "spDefence": 105,
      "speed": 40
    }
  },
  {
    "no": 177,
    "name": "ネイティ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [178],
    "types": ["エスパー", "ひこう"],
    "abilities": ["シンクロ", "はやおき"],
    "hiddenAbilities": ["マジックミラー"],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defence": 45,
      "spAttack": 70,
      "spDefence": 45,
      "speed": 70
    }
  },
  {
    "no": 178,
    "name": "ネイティオ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "ひこう"],
    "abilities": ["シンクロ", "はやおき"],
    "hiddenAbilities": ["マジックミラー"],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defence": 70,
      "spAttack": 95,
      "spDefence": 70,
      "speed": 95
    }
  },
  {
    "no": 179,
    "name": "メリープ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [180],
    "types": ["でんき"],
    "abilities": ["せいでんき"],
    "hiddenAbilities": ["プラス"],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defence": 40,
      "spAttack": 65,
      "spDefence": 45,
      "speed": 35
    }
  },
  {
    "no": 180,
    "name": "モココ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [181],
    "types": ["でんき"],
    "abilities": ["せいでんき"],
    "hiddenAbilities": ["プラス"],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defence": 55,
      "spAttack": 80,
      "spDefence": 60,
      "speed": 45
    }
  },
  {
    "no": 181,
    "name": "デンリュウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["せいでんき"],
    "hiddenAbilities": ["プラス"],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defence": 85,
      "spAttack": 115,
      "spDefence": 90,
      "speed": 55
    }
  },
  {
    "no": 181,
    "name": "メガデンリュウ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["でんき", "ドラゴン"],
    "abilities": ["かたやぶり"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defence": 105,
      "spAttack": 165,
      "spDefence": 110,
      "speed": 45
    }
  },
  {
    "no": 182,
    "name": "キレイハナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["ようりょくそ"],
    "hiddenAbilities": ["いやしのこころ"],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defence": 95,
      "spAttack": 90,
      "spDefence": 100,
      "speed": 50
    }
  },
  {
    "no": 183,
    "name": "マリル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [184],
    "types": ["みず", "フェアリー"],
    "abilities": ["あついしぼう", "ちからもち"],
    "hiddenAbilities": ["そうしょく"],
    "stats": {
      "hp": 70,
      "attack": 20,
      "defence": 50,
      "spAttack": 20,
      "spDefence": 50,
      "speed": 40
    }
  },
  {
    "no": 184,
    "name": "マリルリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "フェアリー"],
    "abilities": ["あついしぼう", "ちからもち"],
    "hiddenAbilities": ["そうしょく"],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defence": 80,
      "spAttack": 60,
      "spDefence": 80,
      "speed": 50
    }
  },
  {
    "no": 185,
    "name": "ウソッキー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ"],
    "abilities": ["がんじょう", "いしあたま"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defence": 115,
      "spAttack": 30,
      "spDefence": 65,
      "speed": 30
    }
  },
  {
    "no": 186,
    "name": "ニョロトノ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["ちょすい", "しめりけ"],
    "hiddenAbilities": ["あめふらし"],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defence": 75,
      "spAttack": 90,
      "spDefence": 100,
      "speed": 70
    }
  },
  {
    "no": 187,
    "name": "ハネッコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [188],
    "types": ["くさ", "ひこう"],
    "abilities": ["ようりょくそ", "リーフガード"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 35,
      "attack": 35,
      "defence": 40,
      "spAttack": 35,
      "spDefence": 55,
      "speed": 50
    }
  },
  {
    "no": 188,
    "name": "ポポッコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [189],
    "types": ["くさ", "ひこう"],
    "abilities": ["ようりょくそ", "リーフガード"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defence": 50,
      "spAttack": 45,
      "spDefence": 65,
      "speed": 80
    }
  },
  {
    "no": 189,
    "name": "ワタッコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "ひこう"],
    "abilities": ["ようりょくそ", "リーフガード"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 75,
      "attack": 55,
      "defence": 70,
      "spAttack": 55,
      "spDefence": 95,
      "speed": 110
    }
  },
  {
    "no": 190,
    "name": "エイパム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["にげあし", "ものひろい"],
    "hiddenAbilities": ["スキルリンク"],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defence": 55,
      "spAttack": 40,
      "spDefence": 55,
      "speed": 85
    }
  },
  {
    "no": 191,
    "name": "ヒマナッツ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [192],
    "types": ["くさ"],
    "abilities": ["ようりょくそ", "サンパワー"],
    "hiddenAbilities": ["はやおき"],
    "stats": {
      "hp": 30,
      "attack": 30,
      "defence": 30,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 30
    }
  },
  {
    "no": 192,
    "name": "キマワリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["ようりょくそ", "サンパワー"],
    "hiddenAbilities": ["はやおき"],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defence": 55,
      "spAttack": 105,
      "spDefence": 85,
      "speed": 30
    }
  },
  {
    "no": 193,
    "name": "ヤンヤンマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [469],
    "types": ["むし", "ひこう"],
    "abilities": ["かそく", "ふくがん"],
    "hiddenAbilities": ["おみとおし"],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defence": 45,
      "spAttack": 75,
      "spDefence": 45,
      "speed": 95
    }
  },
  {
    "no": 194,
    "name": "ウパー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [195],
    "types": ["みず", "じめん"],
    "abilities": ["しめりけ", "ちょすい"],
    "hiddenAbilities": ["てんねん"],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defence": 45,
      "spAttack": 25,
      "spDefence": 25,
      "speed": 15
    }
  },
  {
    "no": 195,
    "name": "ヌオー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "じめん"],
    "abilities": ["しめりけ", "ちょすい"],
    "hiddenAbilities": ["てんねん"],
    "stats": {
      "hp": 95,
      "attack": 85,
      "defence": 85,
      "spAttack": 65,
      "spDefence": 65,
      "speed": 35
    }
  },
  {
    "no": 196,
    "name": "エーフィ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["シンクロ"],
    "hiddenAbilities": ["マジックミラー"],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defence": 60,
      "spAttack": 130,
      "spDefence": 95,
      "speed": 110
    }
  },
  {
    "no": 197,
    "name": "ブラッキー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく"],
    "abilities": ["シンクロ"],
    "hiddenAbilities": ["せいしんりょく"],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defence": 110,
      "spAttack": 60,
      "spDefence": 130,
      "speed": 65
    }
  },
  {
    "no": 198,
    "name": "ヤミカラス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [430],
    "types": ["あく", "ひこう"],
    "abilities": ["ふみん", "きょううん"],
    "hiddenAbilities": ["いたずらごころ"],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defence": 42,
      "spAttack": 85,
      "spDefence": 42,
      "speed": 91
    }
  },
  {
    "no": 199,
    "name": "ヤドキング",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "エスパー"],
    "abilities": ["どんかん", "マイペース"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defence": 80,
      "spAttack": 100,
      "spDefence": 110,
      "speed": 30
    }
  },
  {
    "no": 200,
    "name": "ムウマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [429],
    "types": ["ゴースト"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defence": 60,
      "spAttack": 85,
      "spDefence": 85,
      "speed": 85
    }
  },
  {
    "no": 201,
    "name": "アンノーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 48,
      "attack": 72,
      "defence": 48,
      "spAttack": 72,
      "spDefence": 48,
      "speed": 48
    }
  },
  {
    "no": 202,
    "name": "ソーナンス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["かげふみ"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 190,
      "attack": 33,
      "defence": 58,
      "spAttack": 33,
      "spDefence": 58,
      "speed": 33
    }
  },
  {
    "no": 203,
    "name": "キリンリキ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "エスパー"],
    "abilities": ["せいしんりょく", "はやおき"],
    "hiddenAbilities": ["そうしょく"],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defence": 65,
      "spAttack": 90,
      "spDefence": 65,
      "speed": 85
    }
  },
  {
    "no": 204,
    "name": "クヌギダマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [205],
    "types": ["むし"],
    "abilities": ["がんじょう"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defence": 90,
      "spAttack": 35,
      "spDefence": 35,
      "speed": 15
    }
  },
  {
    "no": 205,
    "name": "フォレトス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "はがね"],
    "abilities": ["がんじょう"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defence": 140,
      "spAttack": 60,
      "spDefence": 60,
      "speed": 40
    }
  },
  {
    "no": 206,
    "name": "ノコッチ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["てんのめぐみ", "にげあし"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 100,
      "attack": 70,
      "defence": 70,
      "spAttack": 65,
      "spDefence": 65,
      "speed": 45
    }
  },
  {
    "no": 207,
    "name": "グライガー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [472],
    "types": ["じめん", "ひこう"],
    "abilities": ["かいりきバサミ", "すながくれ"],
    "hiddenAbilities": ["めんえき"],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defence": 105,
      "spAttack": 35,
      "spDefence": 65,
      "speed": 85
    }
  },
  {
    "no": 208,
    "name": "ハガネール",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "じめん"],
    "abilities": ["いしあたま", "がんじょう"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 75,
      "attack": 85,
      "defence": 200,
      "spAttack": 55,
      "spDefence": 65,
      "speed": 30
    }
  },
  {
    "no": 208,
    "name": "メガハガネール",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["はがね", "じめん"],
    "abilities": ["すなのちから"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defence": 230,
      "spAttack": 55,
      "spDefence": 95,
      "speed": 30
    }
  },
  {
    "no": 209,
    "name": "ブルー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [210],
    "types": ["フェアリー"],
    "abilities": ["いかく", "にげあし"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defence": 50,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 30
    }
  },
  {
    "no": 210,
    "name": "グランブル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["フェアリー"],
    "abilities": ["いかく", "はやあし"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defence": 75,
      "spAttack": 60,
      "spDefence": 60,
      "speed": 45
    }
  },
  {
    "no": 211,
    "name": "ハリーセン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "どく"],
    "abilities": ["どくのトゲ", "すいすい"],
    "hiddenAbilities": ["いかく"],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defence": 85,
      "spAttack": 55,
      "spDefence": 55,
      "speed": 85
    }
  },
  {
    "no": 212,
    "name": "ハッサム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "はがね"],
    "abilities": ["むしのしらせ", "テクニシャン"],
    "hiddenAbilities": ["ライトメタル"],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defence": 100,
      "spAttack": 55,
      "spDefence": 80,
      "speed": 65
    }
  },
  {
    "no": 212,
    "name": "メガハッサム",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["むし", "はがね"],
    "abilities": ["テクニシャン"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 150,
      "defence": 140,
      "spAttack": 65,
      "spDefence": 100,
      "speed": 75
    }
  },
  {
    "no": 213,
    "name": "ツボツボ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "いわ"],
    "abilities": ["がんじょう", "くいしんぼう"],
    "hiddenAbilities": ["あまのじゃく"],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defence": 230,
      "spAttack": 10,
      "spDefence": 230,
      "speed": 5
    }
  },
  {
    "no": 214,
    "name": "ヘラクロス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "かくとう"],
    "abilities": ["むしのしらせ", "こんじょう"],
    "hiddenAbilities": ["じしんかじょう"],
    "stats": {
      "hp": 80,
      "attack": 125,
      "defence": 75,
      "spAttack": 40,
      "spDefence": 95,
      "speed": 85
    }
  },
  {
    "no": 214,
    "name": "メガヘラクロス",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["むし", "かくとう"],
    "abilities": ["スキルリンク"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 185,
      "defence": 115,
      "spAttack": 40,
      "spDefence": 105,
      "speed": 75
    }
  },
  {
    "no": 215,
    "name": "ニューラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [461],
    "types": ["あく", "こおり"],
    "abilities": ["せいしんりょく", "するどいめ"],
    "hiddenAbilities": ["わるいてぐせ"],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defence": 55,
      "spAttack": 35,
      "spDefence": 75,
      "speed": 115
    }
  },
  {
    "no": 216,
    "name": "ヒメグマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [217],
    "types": ["ノーマル"],
    "abilities": ["ものひろい", "はやあし"],
    "hiddenAbilities": ["みつあつめ"],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defence": 50,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 40
    }
  },
  {
    "no": 217,
    "name": "リングマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["こんじょう", "はやあし"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defence": 75,
      "spAttack": 75,
      "spDefence": 75,
      "speed": 55
    }
  },
  {
    "no": 218,
    "name": "マグマッグ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [219],
    "types": ["ほのお"],
    "abilities": ["マグマのよろい", "ほのおのからだ"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defence": 40,
      "spAttack": 70,
      "spDefence": 40,
      "speed": 20
    }
  },
  {
    "no": 219,
    "name": "マグカルゴ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "いわ"],
    "abilities": ["マグマのよろい", "ほのおのからだ"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defence": 120,
      "spAttack": 90,
      "spDefence": 80,
      "speed": 30
    }
  },
  {
    "no": 220,
    "name": "ウリムー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [221],
    "types": ["こおり", "じめん"],
    "abilities": ["どんかん", "ゆきがくれ"],
    "hiddenAbilities": ["あついしぼう"],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defence": 40,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 50
    }
  },
  {
    "no": 221,
    "name": "イノムー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [473],
    "types": ["こおり", "じめん"],
    "abilities": ["どんかん", "ゆきがくれ"],
    "hiddenAbilities": ["あついしぼう"],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defence": 80,
      "spAttack": 60,
      "spDefence": 60,
      "speed": 50
    }
  },
  {
    "no": 222,
    "name": "サニーゴ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "いわ"],
    "abilities": ["はりきり", "しぜんかいふく"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defence": 95,
      "spAttack": 65,
      "spDefence": 95,
      "speed": 35
    }
  },
  {
    "no": 223,
    "name": "テッポウオ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [224],
    "types": ["みず"],
    "abilities": ["はりきり", "スナイパー"],
    "hiddenAbilities": ["ムラっけ"],
    "stats": {
      "hp": 35,
      "attack": 65,
      "defence": 35,
      "spAttack": 65,
      "spDefence": 35,
      "speed": 65
    }
  },
  {
    "no": 224,
    "name": "オクタン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["きゅうばん", "スナイパー"],
    "hiddenAbilities": ["ムラっけ"],
    "stats": {
      "hp": 75,
      "attack": 105,
      "defence": 75,
      "spAttack": 105,
      "spDefence": 75,
      "speed": 45
    }
  },
  {
    "no": 225,
    "name": "デリバード",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり", "ひこう"],
    "abilities": ["やるき", "はりきり"],
    "hiddenAbilities": ["ふみん"],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defence": 45,
      "spAttack": 65,
      "spDefence": 45,
      "speed": 75
    }
  },
  {
    "no": 226,
    "name": "マンタイン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "ひこう"],
    "abilities": ["すいすい", "ちょすい"],
    "hiddenAbilities": ["みずのベール"],
    "stats": {
      "hp": 85,
      "attack": 40,
      "defence": 70,
      "spAttack": 80,
      "spDefence": 140,
      "speed": 70
    }
  },
  {
    "no": 227,
    "name": "エアームド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "ひこう"],
    "abilities": ["するどいめ", "がんじょう"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defence": 140,
      "spAttack": 40,
      "spDefence": 70,
      "speed": 70
    }
  },
  {
    "no": 228,
    "name": "デルビル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [229],
    "types": ["あく", "ほのお"],
    "abilities": ["はやおき", "もらいび"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defence": 30,
      "spAttack": 80,
      "spDefence": 50,
      "speed": 65
    }
  },
  {
    "no": 229,
    "name": "ヘルガー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "ほのお"],
    "abilities": ["はやおき", "もらいび"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defence": 50,
      "spAttack": 110,
      "spDefence": 80,
      "speed": 95
    }
  },
  {
    "no": 229,
    "name": "メガヘルガー",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["あく", "ほのお"],
    "abilities": ["サンパワー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defence": 90,
      "spAttack": 140,
      "spDefence": 90,
      "speed": 115
    }
  },
  {
    "no": 230,
    "name": "キングドラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "ドラゴン"],
    "abilities": ["すいすい", "スナイパー"],
    "hiddenAbilities": ["しめりけ"],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defence": 95,
      "spAttack": 95,
      "spDefence": 95,
      "speed": 85
    }
  },
  {
    "no": 231,
    "name": "ゴマゾウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [232],
    "types": ["じめん"],
    "abilities": ["ものひろい"],
    "hiddenAbilities": ["すながくれ"],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defence": 60,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 40
    }
  },
  {
    "no": 232,
    "name": "ドンファン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん"],
    "abilities": ["がんじょう"],
    "hiddenAbilities": ["すながくれ"],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defence": 120,
      "spAttack": 60,
      "spDefence": 60,
      "speed": 50
    }
  },
  {
    "no": 233,
    "name": "ポリゴン2",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [474],
    "types": ["ノーマル"],
    "abilities": ["トレース", "ダウンロード"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 85,
      "attack": 80,
      "defence": 90,
      "spAttack": 105,
      "spDefence": 95,
      "speed": 60
    }
  },
  {
    "no": 234,
    "name": "オドシシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["いかく", "おみとおし"],
    "hiddenAbilities": ["そうしょく"],
    "stats": {
      "hp": 73,
      "attack": 95,
      "defence": 62,
      "spAttack": 85,
      "spDefence": 65,
      "speed": 85
    }
  },
  {
    "no": 235,
    "name": "ドーブル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["マイペース", "テクニシャン"],
    "hiddenAbilities": ["ムラっけ"],
    "stats": {
      "hp": 55,
      "attack": 20,
      "defence": 35,
      "spAttack": 20,
      "spDefence": 45,
      "speed": 75
    }
  },
  {
    "no": 236,
    "name": "バルキー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [106, 107, 237],
    "types": ["かくとう"],
    "abilities": ["こんじょう", "ふくつのこころ"],
    "hiddenAbilities": ["やるき"],
    "stats": {
      "hp": 35,
      "attack": 35,
      "defence": 35,
      "spAttack": 35,
      "spDefence": 35,
      "speed": 35
    }
  },
  {
    "no": 237,
    "name": "カポエラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう"],
    "abilities": ["いかく", "テクニシャン"],
    "hiddenAbilities": ["ふくつのこころ"],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defence": 95,
      "spAttack": 35,
      "spDefence": 110,
      "speed": 70
    }
  },
  {
    "no": 238,
    "name": "ムチュール",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [124],
    "types": ["こおり", "エスパー"],
    "abilities": ["どんかん", "よちむ"],
    "hiddenAbilities": ["うるおいボディ"],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defence": 15,
      "spAttack": 85,
      "spDefence": 65,
      "speed": 65
    }
  },
  {
    "no": 239,
    "name": "エレキッド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [125],
    "types": ["でんき"],
    "abilities": ["せいでんき"],
    "hiddenAbilities": ["やるき"],
    "stats": {
      "hp": 45,
      "attack": 63,
      "defence": 37,
      "spAttack": 65,
      "spDefence": 55,
      "speed": 95
    }
  },
  {
    "no": 240,
    "name": "ブビィ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [126],
    "types": ["ほのお"],
    "abilities": ["ほのおのからだ"],
    "hiddenAbilities": ["やるき"],
    "stats": {
      "hp": 45,
      "attack": 75,
      "defence": 37,
      "spAttack": 70,
      "spDefence": 55,
      "speed": 83
    }
  },
  {
    "no": 241,
    "name": "ミルタンク",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["あついしぼう", "きもったま"],
    "hiddenAbilities": ["そうしょく"],
    "stats": {
      "hp": 95,
      "attack": 80,
      "defence": 105,
      "spAttack": 40,
      "spDefence": 70,
      "speed": 100
    }
  },
  {
    "no": 242,
    "name": "ハピナス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["しぜんかいふく", "てんのめぐみ"],
    "hiddenAbilities": ["いやしのこころ"],
    "stats": {
      "hp": 255,
      "attack": 10,
      "defence": 10,
      "spAttack": 75,
      "spDefence": 135,
      "speed": 55
    }
  },
  {
    "no": 243,
    "name": "ライコウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["せいしんりょく"],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defence": 75,
      "spAttack": 115,
      "spDefence": 100,
      "speed": 115
    }
  },
  {
    "no": 244,
    "name": "エンテイ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["せいしんりょく"],
    "stats": {
      "hp": 115,
      "attack": 115,
      "defence": 85,
      "spAttack": 90,
      "spDefence": 75,
      "speed": 100
    }
  },
  {
    "no": 245,
    "name": "スイクン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["せいしんりょく"],
    "stats": {
      "hp": 100,
      "attack": 75,
      "defence": 115,
      "spAttack": 90,
      "spDefence": 115,
      "speed": 85
    }
  },
  {
    "no": 246,
    "name": "ヨーギラス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [247],
    "types": ["いわ", "じめん"],
    "abilities": ["こんじょう"],
    "hiddenAbilities": ["すながくれ"],
    "stats": {
      "hp": 50,
      "attack": 64,
      "defence": 50,
      "spAttack": 45,
      "spDefence": 50,
      "speed": 41
    }
  },
  {
    "no": 247,
    "name": "サナギラス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [248],
    "types": ["いわ", "じめん"],
    "abilities": ["だっぴ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 84,
      "defence": 70,
      "spAttack": 65,
      "spDefence": 70,
      "speed": 51
    }
  },
  {
    "no": 248,
    "name": "バンギラス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "あく"],
    "abilities": ["すなおこし"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 100,
      "attack": 134,
      "defence": 110,
      "spAttack": 95,
      "spDefence": 100,
      "speed": 61
    }
  },
  {
    "no": 248,
    "name": "メガバンギラス",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["いわ", "あく"],
    "abilities": ["すなおこし"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 164,
      "defence": 150,
      "spAttack": 95,
      "spDefence": 120,
      "speed": 71
    }
  },
  {
    "no": 249,
    "name": "ルギア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "ひこう"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["マルチスケイル"],
    "stats": {
      "hp": 106,
      "attack": 90,
      "defence": 130,
      "spAttack": 90,
      "spDefence": 154,
      "speed": 110
    }
  },
  {
    "no": 250,
    "name": "ホウオウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "ひこう"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 106,
      "attack": 130,
      "defence": 90,
      "spAttack": 110,
      "spDefence": 154,
      "speed": 90
    }
  },
  {
    "no": 251,
    "name": "セレビィ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "くさ"],
    "abilities": ["しぜんかいふく"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defence": 100,
      "spAttack": 100,
      "spDefence": 100,
      "speed": 100
    }
  },
  {
    "no": 252,
    "name": "キモリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [253],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["かるわざ"],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defence": 35,
      "spAttack": 65,
      "spDefence": 55,
      "speed": 70
    }
  },
  {
    "no": 253,
    "name": "ジュプトル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [254],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["かるわざ"],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defence": 45,
      "spAttack": 85,
      "spDefence": 65,
      "speed": 95
    }
  },
  {
    "no": 254,
    "name": "ジュカイン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["かるわざ"],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defence": 65,
      "spAttack": 105,
      "spDefence": 85,
      "speed": 120
    }
  },
  {
    "no": 254,
    "name": "メガジュカイン",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["くさ", "ドラゴン"],
    "abilities": ["ひらいしん"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defence": 75,
      "spAttack": 145,
      "spDefence": 85,
      "speed": 145
    }
  },
  {
    "no": 255,
    "name": "アチャモ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [256],
    "types": ["ほのお"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["かそく"],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defence": 40,
      "spAttack": 70,
      "spDefence": 50,
      "speed": 45
    }
  },
  {
    "no": 256,
    "name": "ワカシャモ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [257],
    "types": ["ほのお", "かくとう"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["かそく"],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defence": 60,
      "spAttack": 85,
      "spDefence": 60,
      "speed": 55
    }
  },
  {
    "no": 257,
    "name": "バシャーモ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "かくとう"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["かそく"],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defence": 70,
      "spAttack": 110,
      "spDefence": 70,
      "speed": 80
    }
  },
  {
    "no": 257,
    "name": "メガバシャーモ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ほのお", "かくとう"],
    "abilities": ["かそく"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 160,
      "defence": 80,
      "spAttack": 130,
      "spDefence": 80,
      "speed": 100
    }
  },
  {
    "no": 258,
    "name": "ミズゴロウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [259],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["しめりけ"],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defence": 50,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 40
    }
  },
  {
    "no": 259,
    "name": "ヌマクロー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [260],
    "types": ["みず", "じめん"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["しめりけ"],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defence": 70,
      "spAttack": 60,
      "spDefence": 70,
      "speed": 50
    }
  },
  {
    "no": 260,
    "name": "ラグラージ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "じめん"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["しめりけ"],
    "stats": {
      "hp": 100,
      "attack": 110,
      "defence": 90,
      "spAttack": 85,
      "spDefence": 90,
      "speed": 60
    }
  },
  {
    "no": 260,
    "name": "メガラグラージ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["みず", "じめん"],
    "abilities": ["すいすい"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defence": 110,
      "spAttack": 95,
      "spDefence": 110,
      "speed": 70
    }
  },
  {
    "no": 261,
    "name": "ポチエナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [262],
    "types": ["あく"],
    "abilities": ["にげあし", "はやあし"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defence": 35,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 35
    }
  },
  {
    "no": 262,
    "name": "グラエナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく"],
    "abilities": ["いかく", "はやあし"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defence": 70,
      "spAttack": 60,
      "spDefence": 60,
      "speed": 70
    }
  },
  {
    "no": 263,
    "name": "ジグザグマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [264],
    "types": ["ノーマル"],
    "abilities": ["ものひろい", "くいしんぼう"],
    "hiddenAbilities": ["はやあし"],
    "stats": {
      "hp": 38,
      "attack": 30,
      "defence": 41,
      "spAttack": 30,
      "spDefence": 41,
      "speed": 60
    }
  },
  {
    "no": 264,
    "name": "マッスグマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["ものひろい", "くいしんぼう"],
    "hiddenAbilities": ["はやあし"],
    "stats": {
      "hp": 78,
      "attack": 70,
      "defence": 61,
      "spAttack": 50,
      "spDefence": 61,
      "speed": 100
    }
  },
  {
    "no": 265,
    "name": "ケムッソ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [266, 267],
    "types": ["むし"],
    "abilities": ["りんぷん"],
    "hiddenAbilities": ["にげあし"],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defence": 35,
      "spAttack": 20,
      "spDefence": 30,
      "speed": 20
    }
  },
  {
    "no": 266,
    "name": "カラサリス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [267],
    "types": ["むし"],
    "abilities": ["だっぴ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defence": 55,
      "spAttack": 25,
      "spDefence": 25,
      "speed": 15
    }
  },
  {
    "no": 267,
    "name": "アゲハント",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "ひこう"],
    "abilities": ["むしのしらせ"],
    "hiddenAbilities": ["とうそうしん"],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defence": 50,
      "spAttack": 100,
      "spDefence": 50,
      "speed": 65
    }
  },
  {
    "no": 268,
    "name": "マユルド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [269],
    "types": ["むし"],
    "abilities": ["だっぴ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defence": 55,
      "spAttack": 25,
      "spDefence": 25,
      "speed": 15
    }
  },
  {
    "no": 269,
    "name": "ドクケイル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "どく"],
    "abilities": ["りんぷん"],
    "hiddenAbilities": ["ふくがん"],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defence": 70,
      "spAttack": 50,
      "spDefence": 90,
      "speed": 65
    }
  },
  {
    "no": 270,
    "name": "ハスボー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [271],
    "types": ["みず", "くさ"],
    "abilities": ["すいすい", "あめうけざら"],
    "hiddenAbilities": ["マイペース"],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defence": 30,
      "spAttack": 40,
      "spDefence": 50,
      "speed": 30
    }
  },
  {
    "no": 271,
    "name": "ハスブレロ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [272],
    "types": ["みず", "くさ"],
    "abilities": ["すいすい", "あめうけざら"],
    "hiddenAbilities": ["マイペース"],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defence": 50,
      "spAttack": 60,
      "spDefence": 70,
      "speed": 50
    }
  },
  {
    "no": 272,
    "name": "ルンパッパ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "くさ"],
    "abilities": ["すいすい", "あめうけざら"],
    "hiddenAbilities": ["マイペース"],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defence": 70,
      "spAttack": 90,
      "spDefence": 100,
      "speed": 70
    }
  },
  {
    "no": 273,
    "name": "タネボー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [274],
    "types": ["くさ"],
    "abilities": ["ようりょくそ", "はやおき"],
    "hiddenAbilities": ["わるいてぐせ"],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defence": 50,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 30
    }
  },
  {
    "no": 274,
    "name": "コノハナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [275],
    "types": ["くさ", "あく"],
    "abilities": ["ようりょくそ", "はやおき"],
    "hiddenAbilities": ["わるいてぐせ"],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defence": 40,
      "spAttack": 60,
      "spDefence": 40,
      "speed": 60
    }
  },
  {
    "no": 275,
    "name": "ダーテング",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "あく"],
    "abilities": ["ようりょくそ", "はやおき"],
    "hiddenAbilities": ["わるいてぐせ"],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defence": 60,
      "spAttack": 90,
      "spDefence": 60,
      "speed": 80
    }
  },
  {
    "no": 276,
    "name": "スバメ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [277],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["こんじょう"],
    "hiddenAbilities": ["きもったま"],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defence": 30,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 85
    }
  },
  {
    "no": 277,
    "name": "オオスバメ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["こんじょう"],
    "hiddenAbilities": ["きもったま"],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defence": 60,
      "spAttack": 75,
      "spDefence": 50,
      "speed": 125
    }
  },
  {
    "no": 278,
    "name": "キャモメ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [279],
    "types": ["みず", "ひこう"],
    "abilities": ["するどいめ", "うるおいボディ"],
    "hiddenAbilities": ["あめうけざら"],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defence": 30,
      "spAttack": 55,
      "spDefence": 30,
      "speed": 85
    }
  },
  {
    "no": 279,
    "name": "ペリッパー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "ひこう"],
    "abilities": ["するどいめ", "あめふらし"],
    "hiddenAbilities": ["あめうけざら"],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defence": 100,
      "spAttack": 95,
      "spDefence": 70,
      "speed": 65
    }
  },
  {
    "no": 280,
    "name": "ラルトス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [281],
    "types": ["エスパー", "フェアリー"],
    "abilities": ["シンクロ", "トレース"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 28,
      "attack": 25,
      "defence": 25,
      "spAttack": 45,
      "spDefence": 35,
      "speed": 40
    }
  },
  {
    "no": 281,
    "name": "キルリア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [282, 475],
    "types": ["エスパー", "フェアリー"],
    "abilities": ["シンクロ", "トレース"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 38,
      "attack": 35,
      "defence": 35,
      "spAttack": 65,
      "spDefence": 55,
      "speed": 50
    }
  },
  {
    "no": 282,
    "name": "サーナイト",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "フェアリー"],
    "abilities": ["シンクロ", "トレース"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 68,
      "attack": 65,
      "defence": 65,
      "spAttack": 125,
      "spDefence": 115,
      "speed": 80
    }
  },
  {
    "no": 282,
    "name": "メガサーナイト",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["エスパー", "フェアリー"],
    "abilities": ["フェアリースキン"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 68,
      "attack": 85,
      "defence": 65,
      "spAttack": 165,
      "spDefence": 135,
      "speed": 100
    }
  },
  {
    "no": 283,
    "name": "アメタマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [284],
    "types": ["むし", "みず"],
    "abilities": ["すいすい"],
    "hiddenAbilities": ["あめうけざら"],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defence": 32,
      "spAttack": 50,
      "spDefence": 52,
      "speed": 65
    }
  },
  {
    "no": 284,
    "name": "アメモース",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "ひこう"],
    "abilities": ["いかく"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defence": 62,
      "spAttack": 100,
      "spDefence": 82,
      "speed": 80
    }
  },
  {
    "no": 285,
    "name": "キノココ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [286],
    "types": ["くさ"],
    "abilities": ["ほうし", "ポイズンヒール"],
    "hiddenAbilities": ["はやあし"],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defence": 60,
      "spAttack": 40,
      "spDefence": 60,
      "speed": 35
    }
  },
  {
    "no": 286,
    "name": "キノガッサ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "かくとう"],
    "abilities": ["ほうし", "ポイズンヒール"],
    "hiddenAbilities": ["テクニシャン"],
    "stats": {
      "hp": 60,
      "attack": 130,
      "defence": 80,
      "spAttack": 60,
      "spDefence": 60,
      "speed": 70
    }
  },
  {
    "no": 287,
    "name": "ナマケロ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [288],
    "types": ["ノーマル"],
    "abilities": ["なまけ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defence": 60,
      "spAttack": 35,
      "spDefence": 35,
      "speed": 30
    }
  },
  {
    "no": 288,
    "name": "ヤルキモノ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [289],
    "types": ["ノーマル"],
    "abilities": ["やるき"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defence": 80,
      "spAttack": 55,
      "spDefence": 55,
      "speed": 90
    }
  },
  {
    "no": 289,
    "name": "ケッキング",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["なまけ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 150,
      "attack": 160,
      "defence": 100,
      "spAttack": 95,
      "spDefence": 65,
      "speed": 100
    }
  },
  {
    "no": 290,
    "name": "ツチニン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [291, 292],
    "types": ["むし", "じめん"],
    "abilities": ["ふくがん"],
    "hiddenAbilities": ["にげあし"],
    "stats": {
      "hp": 31,
      "attack": 45,
      "defence": 90,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 40
    }
  },
  {
    "no": 291,
    "name": "テッカニン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "ひこう"],
    "abilities": ["かそく"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 61,
      "attack": 90,
      "defence": 45,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 160
    }
  },
  {
    "no": 292,
    "name": "ヌケニン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "ゴースト"],
    "abilities": ["ふしぎなまもり"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 1,
      "attack": 90,
      "defence": 45,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 40
    }
  },
  {
    "no": 293,
    "name": "ゴニョニョ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [294],
    "types": ["ノーマル"],
    "abilities": ["ぼうおん"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 64,
      "attack": 51,
      "defence": 23,
      "spAttack": 51,
      "spDefence": 23,
      "speed": 28
    }
  },
  {
    "no": 294,
    "name": "ドゴーム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [295],
    "types": ["ノーマル"],
    "abilities": ["ぼうおん"],
    "hiddenAbilities": ["きもったま"],
    "stats": {
      "hp": 84,
      "attack": 71,
      "defence": 43,
      "spAttack": 71,
      "spDefence": 43,
      "speed": 48
    }
  },
  {
    "no": 295,
    "name": "バクオング",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["ぼうおん"],
    "hiddenAbilities": ["きもったま"],
    "stats": {
      "hp": 104,
      "attack": 91,
      "defence": 63,
      "spAttack": 91,
      "spDefence": 73,
      "speed": 68
    }
  },
  {
    "no": 296,
    "name": "マクノシタ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [297],
    "types": ["かくとう"],
    "abilities": ["あついしぼう", "こんじょう"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 72,
      "attack": 60,
      "defence": 30,
      "spAttack": 20,
      "spDefence": 30,
      "speed": 25
    }
  },
  {
    "no": 297,
    "name": "ハリテヤマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう"],
    "abilities": ["あついしぼう", "こんじょう"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 144,
      "attack": 120,
      "defence": 60,
      "spAttack": 40,
      "spDefence": 60,
      "speed": 50
    }
  },
  {
    "no": 298,
    "name": "ルリリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [183],
    "types": ["ノーマル", "フェアリー"],
    "abilities": ["あついしぼう", "ちからもち"],
    "hiddenAbilities": ["そうしょく"],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defence": 40,
      "spAttack": 20,
      "spDefence": 40,
      "speed": 20
    }
  },
  {
    "no": 299,
    "name": "ノズパス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [476],
    "types": ["いわ"],
    "abilities": ["がんじょう", "じりょく"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defence": 135,
      "spAttack": 45,
      "spDefence": 90,
      "speed": 30
    }
  },
  {
    "no": 300,
    "name": "エネコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [301],
    "types": ["ノーマル"],
    "abilities": ["メロメロボディ", "ノーマルスキン"],
    "hiddenAbilities": ["ミラクルスキン"],
    "stats": {
      "hp": 50,
      "attack": 45,
      "defence": 45,
      "spAttack": 35,
      "spDefence": 35,
      "speed": 50
    }
  },
  {
    "no": 301,
    "name": "エネコロロ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["メロメロボディ", "ノーマルスキン"],
    "hiddenAbilities": ["ミラクルスキン"],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defence": 65,
      "spAttack": 55,
      "spDefence": 55,
      "speed": 90
    }
  },
  {
    "no": 302,
    "name": "ヤミラミ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "ゴースト"],
    "abilities": ["するどいめ", "あとだし"],
    "hiddenAbilities": ["いたずらごころ"],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defence": 75,
      "spAttack": 65,
      "spDefence": 65,
      "speed": 50
    }
  },
  {
    "no": 302,
    "name": "メガヤミラミ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["あく", "ゴースト"],
    "abilities": ["マジックミラー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defence": 125,
      "spAttack": 85,
      "spDefence": 115,
      "speed": 20
    }
  },
  {
    "no": 303,
    "name": "クチート",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "フェアリー"],
    "abilities": ["かいりきバサミ", "いかく"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defence": 85,
      "spAttack": 55,
      "spDefence": 55,
      "speed": 50
    }
  },
  {
    "no": 303,
    "name": "メガクチート",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["はがね", "フェアリー"],
    "abilities": ["ちからもち"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 105,
      "defence": 125,
      "spAttack": 55,
      "spDefence": 95,
      "speed": 50
    }
  },
  {
    "no": 304,
    "name": "ココドラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [305],
    "types": ["はがね", "いわ"],
    "abilities": ["がんじょう", "いしあたま"],
    "hiddenAbilities": ["ヘヴィメタル"],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defence": 100,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 30
    }
  },
  {
    "no": 305,
    "name": "コドラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [306],
    "types": ["はがね", "いわ"],
    "abilities": ["がんじょう", "いしあたま"],
    "hiddenAbilities": ["ヘヴィメタル"],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defence": 140,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 40
    }
  },
  {
    "no": 306,
    "name": "ボスゴドラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "いわ"],
    "abilities": ["がんじょう", "いしあたま"],
    "hiddenAbilities": ["ヘヴィメタル"],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defence": 180,
      "spAttack": 60,
      "spDefence": 60,
      "speed": 50
    }
  },
  {
    "no": 306,
    "name": "メガボスゴドラ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["はがね", "いわ"],
    "abilities": ["フィルター"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 140,
      "defence": 230,
      "spAttack": 60,
      "spDefence": 80,
      "speed": 50
    }
  },
  {
    "no": 307,
    "name": "アサナン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [308],
    "types": ["かくとう", "エスパー"],
    "abilities": ["ヨガパワー"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defence": 55,
      "spAttack": 40,
      "spDefence": 55,
      "speed": 60
    }
  },
  {
    "no": 308,
    "name": "チャーレム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう", "エスパー"],
    "abilities": ["ヨガパワー"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defence": 75,
      "spAttack": 60,
      "spDefence": 75,
      "speed": 80
    }
  },
  {
    "no": 308,
    "name": "メガチャーレム",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["かくとう", "エスパー"],
    "abilities": ["ヨガパワー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defence": 85,
      "spAttack": 80,
      "spDefence": 85,
      "speed": 100
    }
  },
  {
    "no": 309,
    "name": "ラクライ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [310],
    "types": ["でんき"],
    "abilities": ["せいでんき", "ひらいしん"],
    "hiddenAbilities": ["マイナス"],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defence": 40,
      "spAttack": 65,
      "spDefence": 40,
      "speed": 65
    }
  },
  {
    "no": 310,
    "name": "ライボルト",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["せいでんき", "ひらいしん"],
    "hiddenAbilities": ["マイナス"],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defence": 60,
      "spAttack": 105,
      "spDefence": 60,
      "speed": 105
    }
  },
  {
    "no": 310,
    "name": "メガライボルト",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["いかく"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defence": 80,
      "spAttack": 135,
      "spDefence": 80,
      "speed": 135
    }
  },
  {
    "no": 311,
    "name": "プラスル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["プラス"],
    "hiddenAbilities": ["ひらいしん"],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defence": 40,
      "spAttack": 85,
      "spDefence": 75,
      "speed": 95
    }
  },
  {
    "no": 312,
    "name": "マイナン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["マイナス"],
    "hiddenAbilities": ["ちくでん"],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defence": 50,
      "spAttack": 75,
      "spDefence": 85,
      "speed": 95
    }
  },
  {
    "no": 313,
    "name": "バルビート",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし"],
    "abilities": ["はっこう", "むしのしらせ"],
    "hiddenAbilities": ["いたずらごころ"],
    "stats": {
      "hp": 65,
      "attack": 73,
      "defence": 75,
      "spAttack": 47,
      "spDefence": 85,
      "speed": 85
    }
  },
  {
    "no": 314,
    "name": "イルミーゼ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし"],
    "abilities": ["どんかん", "いろめがね"],
    "hiddenAbilities": ["いたずらごころ"],
    "stats": {
      "hp": 65,
      "attack": 47,
      "defence": 75,
      "spAttack": 73,
      "spDefence": 85,
      "speed": 85
    }
  },
  {
    "no": 315,
    "name": "ロゼリア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [407],
    "types": ["くさ", "どく"],
    "abilities": ["しぜんかいふく", "どくのトゲ"],
    "hiddenAbilities": ["リーフガード"],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defence": 45,
      "spAttack": 100,
      "spDefence": 80,
      "speed": 65
    }
  },
  {
    "no": 316,
    "name": "ゴクリン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [317],
    "types": ["どく"],
    "abilities": ["ヘドロえき", "ねんちゃく"],
    "hiddenAbilities": ["くいしんぼう"],
    "stats": {
      "hp": 70,
      "attack": 43,
      "defence": 53,
      "spAttack": 43,
      "spDefence": 53,
      "speed": 40
    }
  },
  {
    "no": 317,
    "name": "マルノーム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく"],
    "abilities": ["ヘドロえき", "ねんちゃく"],
    "hiddenAbilities": ["くいしんぼう"],
    "stats": {
      "hp": 100,
      "attack": 73,
      "defence": 83,
      "spAttack": 73,
      "spDefence": 83,
      "speed": 55
    }
  },
  {
    "no": 318,
    "name": "キバニア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [319],
    "types": ["みず", "あく"],
    "abilities": ["さめはだ"],
    "hiddenAbilities": ["かそく"],
    "stats": {
      "hp": 45,
      "attack": 90,
      "defence": 20,
      "spAttack": 65,
      "spDefence": 20,
      "speed": 65
    }
  },
  {
    "no": 319,
    "name": "サメハダー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "あく"],
    "abilities": ["さめはだ"],
    "hiddenAbilities": ["かそく"],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defence": 40,
      "spAttack": 95,
      "spDefence": 40,
      "speed": 95
    }
  },
  {
    "no": 319,
    "name": "メガサメハダー",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["みず", "あく"],
    "abilities": ["がんじょうあご"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 140,
      "defence": 70,
      "spAttack": 110,
      "spDefence": 65,
      "speed": 105
    }
  },
  {
    "no": 320,
    "name": "ホエルコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [321],
    "types": ["みず"],
    "abilities": ["みずのベール", "どんかん"],
    "hiddenAbilities": ["プレッシャー"],
    "stats": {
      "hp": 130,
      "attack": 70,
      "defence": 35,
      "spAttack": 70,
      "spDefence": 35,
      "speed": 60
    }
  },
  {
    "no": 321,
    "name": "ホエルオー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["みずのベール", "どんかん"],
    "hiddenAbilities": ["プレッシャー"],
    "stats": {
      "hp": 170,
      "attack": 90,
      "defence": 45,
      "spAttack": 90,
      "spDefence": 45,
      "speed": 60
    }
  },
  {
    "no": 322,
    "name": "ドンメル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [323],
    "types": ["ほのお", "じめん"],
    "abilities": ["どんかん", "たんじゅん"],
    "hiddenAbilities": ["マイペース"],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defence": 40,
      "spAttack": 65,
      "spDefence": 45,
      "speed": 35
    }
  },
  {
    "no": 323,
    "name": "バクーダ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "じめん"],
    "abilities": ["マグマのよろい", "ハードロック"],
    "hiddenAbilities": ["いかりのつぼ"],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defence": 70,
      "spAttack": 105,
      "spDefence": 75,
      "speed": 40
    }
  },
  {
    "no": 323,
    "name": "メガバクーダ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ほのお", "じめん"],
    "abilities": ["ちからずく"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defence": 100,
      "spAttack": 145,
      "spDefence": 105,
      "speed": 20
    }
  },
  {
    "no": 324,
    "name": "コータス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお"],
    "abilities": ["しろいけむり", "ひでり"],
    "hiddenAbilities": ["シェルアーマー"],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defence": 140,
      "spAttack": 85,
      "spDefence": 70,
      "speed": 20
    }
  },
  {
    "no": 325,
    "name": "バネブー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [326],
    "types": ["エスパー"],
    "abilities": ["あついしぼう", "マイペース"],
    "hiddenAbilities": ["くいしんぼう"],
    "stats": {
      "hp": 60,
      "attack": 25,
      "defence": 35,
      "spAttack": 70,
      "spDefence": 80,
      "speed": 60
    }
  },
  {
    "no": 326,
    "name": "ブーピッグ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["あついしぼう", "マイペース"],
    "hiddenAbilities": ["くいしんぼう"],
    "stats": {
      "hp": 80,
      "attack": 45,
      "defence": 65,
      "spAttack": 90,
      "spDefence": 110,
      "speed": 80
    }
  },
  {
    "no": 327,
    "name": "パッチール",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["マイペース", "ちどりあし"],
    "hiddenAbilities": ["あまのじゃく"],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defence": 60,
      "spAttack": 60,
      "spDefence": 60,
      "speed": 60
    }
  },
  {
    "no": 328,
    "name": "ナックラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [329],
    "types": ["じめん"],
    "abilities": ["かいりきバサミ", "ありじごく"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 45,
      "attack": 100,
      "defence": 45,
      "spAttack": 45,
      "spDefence": 45,
      "speed": 10
    }
  },
  {
    "no": 329,
    "name": "ビブラーバ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [330],
    "types": ["じめん", "ドラゴン"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defence": 50,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 70
    }
  },
  {
    "no": 330,
    "name": "フライゴン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん", "ドラゴン"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defence": 80,
      "spAttack": 80,
      "spDefence": 80,
      "speed": 100
    }
  },
  {
    "no": 331,
    "name": "サボネア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [332],
    "types": ["くさ"],
    "abilities": ["すながくれ"],
    "hiddenAbilities": ["ちょすい"],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defence": 40,
      "spAttack": 85,
      "spDefence": 40,
      "speed": 35
    }
  },
  {
    "no": 332,
    "name": "ノクタス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "あく"],
    "abilities": ["すながくれ"],
    "hiddenAbilities": ["ちょすい"],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defence": 60,
      "spAttack": 115,
      "spDefence": 60,
      "speed": 55
    }
  },
  {
    "no": 333,
    "name": "チルット",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [334],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["しぜんかいふく"],
    "hiddenAbilities": ["ノーてんき"],
    "stats": {
      "hp": 45,
      "attack": 40,
      "defence": 60,
      "spAttack": 40,
      "spDefence": 75,
      "speed": 50
    }
  },
  {
    "no": 334,
    "name": "チルタリス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "ひこう"],
    "abilities": ["しぜんかいふく"],
    "hiddenAbilities": ["ノーてんき"],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defence": 90,
      "spAttack": 70,
      "spDefence": 105,
      "speed": 80
    }
  },
  {
    "no": 334,
    "name": "メガチルタリス",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ドラゴン", "フェアリー"],
    "abilities": ["フェアリースキン"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defence": 110,
      "spAttack": 110,
      "spDefence": 105,
      "speed": 80
    }
  },
  {
    "no": 335,
    "name": "ザングース",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["めんえき"],
    "hiddenAbilities": ["どくぼうそう"],
    "stats": {
      "hp": 73,
      "attack": 115,
      "defence": 60,
      "spAttack": 60,
      "spDefence": 60,
      "speed": 90
    }
  },
  {
    "no": 336,
    "name": "ハブネーク",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく"],
    "abilities": ["だっぴ"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 73,
      "attack": 100,
      "defence": 60,
      "spAttack": 100,
      "spDefence": 60,
      "speed": 65
    }
  },
  {
    "no": 337,
    "name": "ルナトーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defence": 65,
      "spAttack": 95,
      "spDefence": 85,
      "speed": 70
    }
  },
  {
    "no": 338,
    "name": "ソルロック",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defence": 85,
      "spAttack": 55,
      "spDefence": 65,
      "speed": 70
    }
  },
  {
    "no": 339,
    "name": "ドジョッチ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [340],
    "types": ["みず", "じめん"],
    "abilities": ["どんかん", "きけんよち"],
    "hiddenAbilities": ["うるおいボディ"],
    "stats": {
      "hp": 50,
      "attack": 48,
      "defence": 43,
      "spAttack": 46,
      "spDefence": 41,
      "speed": 60
    }
  },
  {
    "no": 340,
    "name": "ナマズン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "じめん"],
    "abilities": ["どんかん", "きけんよち"],
    "hiddenAbilities": ["うるおいボディ"],
    "stats": {
      "hp": 110,
      "attack": 78,
      "defence": 73,
      "spAttack": 76,
      "spDefence": 71,
      "speed": 60
    }
  },
  {
    "no": 341,
    "name": "ヘイガニ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [342],
    "types": ["みず"],
    "abilities": ["かいりきバサミ", "シェルアーマー"],
    "hiddenAbilities": ["てきおうりょく"],
    "stats": {
      "hp": 43,
      "attack": 80,
      "defence": 65,
      "spAttack": 50,
      "spDefence": 35,
      "speed": 35
    }
  },
  {
    "no": 342,
    "name": "シザリガー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "あく"],
    "abilities": ["かいりきバサミ", "シェルアーマー"],
    "hiddenAbilities": ["てきおうりょく"],
    "stats": {
      "hp": 63,
      "attack": 120,
      "defence": 85,
      "spAttack": 90,
      "spDefence": 55,
      "speed": 55
    }
  },
  {
    "no": 343,
    "name": "ヤジロン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [344],
    "types": ["じめん", "エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defence": 55,
      "spAttack": 40,
      "spDefence": 70,
      "speed": 55
    }
  },
  {
    "no": 344,
    "name": "ネンドール",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん", "エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defence": 105,
      "spAttack": 70,
      "spDefence": 120,
      "speed": 75
    }
  },
  {
    "no": 345,
    "name": "リリーラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [346],
    "types": ["いわ", "くさ"],
    "abilities": ["きゅうばん"],
    "hiddenAbilities": ["よびみず"],
    "stats": {
      "hp": 66,
      "attack": 41,
      "defence": 77,
      "spAttack": 61,
      "spDefence": 87,
      "speed": 23
    }
  },
  {
    "no": 346,
    "name": "ユレイドル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "くさ"],
    "abilities": ["きゅうばん"],
    "hiddenAbilities": ["よびみず"],
    "stats": {
      "hp": 86,
      "attack": 81,
      "defence": 97,
      "spAttack": 81,
      "spDefence": 107,
      "speed": 43
    }
  },
  {
    "no": 347,
    "name": "アノプス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [348],
    "types": ["いわ", "むし"],
    "abilities": ["カブトアーマー"],
    "hiddenAbilities": ["すいすい"],
    "stats": {
      "hp": 45,
      "attack": 95,
      "defence": 50,
      "spAttack": 40,
      "spDefence": 50,
      "speed": 75
    }
  },
  {
    "no": 348,
    "name": "アーマルド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "むし"],
    "abilities": ["カブトアーマー"],
    "hiddenAbilities": ["すいすい"],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defence": 100,
      "spAttack": 70,
      "spDefence": 80,
      "speed": 45
    }
  },
  {
    "no": 349,
    "name": "ヒンバス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [350],
    "types": ["みず"],
    "abilities": ["すいすい", "どんかん"],
    "hiddenAbilities": ["てきおうりょく"],
    "stats": {
      "hp": 20,
      "attack": 15,
      "defence": 20,
      "spAttack": 10,
      "spDefence": 55,
      "speed": 80
    }
  },
  {
    "no": 350,
    "name": "ミロカロス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["ふしぎなうろこ", "かちき"],
    "hiddenAbilities": ["メロメロボディ"],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defence": 79,
      "spAttack": 100,
      "spDefence": 125,
      "speed": 81
    }
  },
  {
    "no": 351,
    "name": "ポワルン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["てんきや"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defence": 70,
      "spAttack": 70,
      "spDefence": 70,
      "speed": 70
    }
  },
  {
    "no": 352,
    "name": "カクレオン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["へんしょく"],
    "hiddenAbilities": ["へんげんじざい"],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defence": 70,
      "spAttack": 60,
      "spDefence": 120,
      "speed": 40
    }
  },
  {
    "no": 353,
    "name": "カゲボウズ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [354],
    "types": ["ゴースト"],
    "abilities": ["ふみん", "おみとおし"],
    "hiddenAbilities": ["のろわれボディ"],
    "stats": {
      "hp": 44,
      "attack": 75,
      "defence": 35,
      "spAttack": 63,
      "spDefence": 33,
      "speed": 45
    }
  },
  {
    "no": 354,
    "name": "ジュペッタ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト"],
    "abilities": ["ふみん", "おみとおし"],
    "hiddenAbilities": ["のろわれボディ"],
    "stats": {
      "hp": 64,
      "attack": 115,
      "defence": 65,
      "spAttack": 83,
      "spDefence": 63,
      "speed": 65
    }
  },
  {
    "no": 354,
    "name": "メガジュペッタ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ゴースト"],
    "abilities": ["いたずらごころ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 64,
      "attack": 165,
      "defence": 75,
      "spAttack": 93,
      "spDefence": 83,
      "speed": 75
    }
  },
  {
    "no": 355,
    "name": "ヨマワル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [356],
    "types": ["ゴースト"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": ["おみとおし"],
    "stats": {
      "hp": 20,
      "attack": 40,
      "defence": 90,
      "spAttack": 30,
      "spDefence": 90,
      "speed": 25
    }
  },
  {
    "no": 356,
    "name": "サマヨール",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [477],
    "types": ["ゴースト"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["おみとおし"],
    "stats": {
      "hp": 40,
      "attack": 70,
      "defence": 130,
      "spAttack": 60,
      "spDefence": 130,
      "speed": 25
    }
  },
  {
    "no": 357,
    "name": "トロピウス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "ひこう"],
    "abilities": ["ようりょくそ", "サンパワー"],
    "hiddenAbilities": ["しゅうかく"],
    "stats": {
      "hp": 99,
      "attack": 68,
      "defence": 83,
      "spAttack": 72,
      "spDefence": 87,
      "speed": 51
    }
  },
  {
    "no": 358,
    "name": "チリーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defence": 80,
      "spAttack": 95,
      "spDefence": 90,
      "speed": 65
    }
  },
  {
    "no": 359,
    "name": "アブソル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく"],
    "abilities": ["プレッシャー", "きょううん"],
    "hiddenAbilities": ["せいぎのこころ"],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defence": 60,
      "spAttack": 75,
      "spDefence": 60,
      "speed": 75
    }
  },
  {
    "no": 359,
    "name": "メガアブソル",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["あく"],
    "abilities": ["マジックミラー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 65,
      "attack": 150,
      "defence": 60,
      "spAttack": 115,
      "spDefence": 60,
      "speed": 115
    }
  },
  {
    "no": 360,
    "name": "ソーナノ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [202],
    "types": ["エスパー"],
    "abilities": ["かげふみ"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 95,
      "attack": 23,
      "defence": 48,
      "spAttack": 23,
      "spDefence": 48,
      "speed": 23
    }
  },
  {
    "no": 361,
    "name": "ユキワラシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [362, 478],
    "types": ["こおり"],
    "abilities": ["せいしんりょく", "アイスボディ"],
    "hiddenAbilities": ["ムラっけ"],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defence": 50,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 50
    }
  },
  {
    "no": 362,
    "name": "オニゴーリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり"],
    "abilities": ["せいしんりょく", "アイスボディ"],
    "hiddenAbilities": ["ムラっけ"],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defence": 80,
      "spAttack": 80,
      "spDefence": 80,
      "speed": 80
    }
  },
  {
    "no": 362,
    "name": "メガオニゴーリ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["こおり"],
    "abilities": ["フリーズスキン"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defence": 80,
      "spAttack": 120,
      "spDefence": 80,
      "speed": 100
    }
  },
  {
    "no": 363,
    "name": "タマザラシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [364],
    "types": ["こおり", "みず"],
    "abilities": ["あついしぼう", "アイスボディ"],
    "hiddenAbilities": ["どんかん"],
    "stats": {
      "hp": 70,
      "attack": 40,
      "defence": 50,
      "spAttack": 55,
      "spDefence": 50,
      "speed": 25
    }
  },
  {
    "no": 364,
    "name": "トドグラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [365],
    "types": ["こおり", "みず"],
    "abilities": ["あついしぼう", "アイスボディ"],
    "hiddenAbilities": ["どんかん"],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defence": 70,
      "spAttack": 75,
      "spDefence": 70,
      "speed": 45
    }
  },
  {
    "no": 365,
    "name": "トドゼルガ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり", "みず"],
    "abilities": ["あついしぼう", "アイスボディ"],
    "hiddenAbilities": ["どんかん"],
    "stats": {
      "hp": 110,
      "attack": 80,
      "defence": 90,
      "spAttack": 95,
      "spDefence": 90,
      "speed": 65
    }
  },
  {
    "no": 366,
    "name": "パールル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [367, 368],
    "types": ["みず"],
    "abilities": ["シェルアーマー"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 35,
      "attack": 64,
      "defence": 85,
      "spAttack": 74,
      "spDefence": 55,
      "speed": 32
    }
  },
  {
    "no": 367,
    "name": "ハンテール",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["すいすい"],
    "hiddenAbilities": ["みずのベール"],
    "stats": {
      "hp": 55,
      "attack": 104,
      "defence": 105,
      "spAttack": 94,
      "spDefence": 75,
      "speed": 52
    }
  },
  {
    "no": 368,
    "name": "サクラビス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["すいすい"],
    "hiddenAbilities": ["うるおいボディ"],
    "stats": {
      "hp": 55,
      "attack": 84,
      "defence": 105,
      "spAttack": 114,
      "spDefence": 75,
      "speed": 52
    }
  },
  {
    "no": 369,
    "name": "ジーランス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "いわ"],
    "abilities": ["すいすい", "いしあたま"],
    "hiddenAbilities": ["がんじょう"],
    "stats": {
      "hp": 100,
      "attack": 90,
      "defence": 130,
      "spAttack": 45,
      "spDefence": 65,
      "speed": 55
    }
  },
  {
    "no": 370,
    "name": "ラブカス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["すいすい"],
    "hiddenAbilities": ["うるおいボディ"],
    "stats": {
      "hp": 43,
      "attack": 30,
      "defence": 55,
      "spAttack": 40,
      "spDefence": 65,
      "speed": 97
    }
  },
  {
    "no": 371,
    "name": "タツベイ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [372],
    "types": ["ドラゴン"],
    "abilities": ["いしあたま"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 45,
      "attack": 75,
      "defence": 60,
      "spAttack": 40,
      "spDefence": 30,
      "speed": 50
    }
  },
  {
    "no": 372,
    "name": "コモルー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [373],
    "types": ["ドラゴン"],
    "abilities": ["いしあたま"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defence": 100,
      "spAttack": 60,
      "spDefence": 50,
      "speed": 50
    }
  },
  {
    "no": 373,
    "name": "ボーマンダ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "ひこう"],
    "abilities": ["いかく"],
    "hiddenAbilities": ["じしんかじょう"],
    "stats": {
      "hp": 95,
      "attack": 135,
      "defence": 80,
      "spAttack": 110,
      "spDefence": 80,
      "speed": 100
    }
  },
  {
    "no": 373,
    "name": "メガボーマンダ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ドラゴン", "ひこう"],
    "abilities": ["スカイスキン"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 95,
      "attack": 145,
      "defence": 130,
      "spAttack": 120,
      "spDefence": 90,
      "speed": 120
    }
  },
  {
    "no": 374,
    "name": "ダンバル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [375],
    "types": ["はがね", "エスパー"],
    "abilities": ["クリアボディ"],
    "hiddenAbilities": ["ライトメタル"],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defence": 80,
      "spAttack": 35,
      "spDefence": 60,
      "speed": 30
    }
  },
  {
    "no": 375,
    "name": "メタング",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [376],
    "types": ["はがね", "エスパー"],
    "abilities": ["クリアボディ"],
    "hiddenAbilities": ["ライトメタル"],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defence": 100,
      "spAttack": 55,
      "spDefence": 80,
      "speed": 50
    }
  },
  {
    "no": 376,
    "name": "メタグロス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "エスパー"],
    "abilities": ["クリアボディ"],
    "hiddenAbilities": ["ライトメタル"],
    "stats": {
      "hp": 80,
      "attack": 135,
      "defence": 130,
      "spAttack": 95,
      "spDefence": 90,
      "speed": 70
    }
  },
  {
    "no": 376,
    "name": "メガメタグロス",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["はがね", "エスパー"],
    "abilities": ["かたいツメ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 145,
      "defence": 150,
      "spAttack": 105,
      "spDefence": 110,
      "speed": 110
    }
  },
  {
    "no": 377,
    "name": "レジロック",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ"],
    "abilities": ["クリアボディ"],
    "hiddenAbilities": ["がんじょう"],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defence": 200,
      "spAttack": 50,
      "spDefence": 100,
      "speed": 50
    }
  },
  {
    "no": 378,
    "name": "レジアイス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり"],
    "abilities": ["クリアボディ"],
    "hiddenAbilities": ["アイスボディ"],
    "stats": {
      "hp": 80,
      "attack": 50,
      "defence": 100,
      "spAttack": 100,
      "spDefence": 200,
      "speed": 50
    }
  },
  {
    "no": 379,
    "name": "レジスチル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね"],
    "abilities": ["クリアボディ"],
    "hiddenAbilities": ["ライトメタル"],
    "stats": {
      "hp": 80,
      "attack": 75,
      "defence": 150,
      "spAttack": 75,
      "spDefence": 150,
      "speed": 50
    }
  },
  {
    "no": 380,
    "name": "ラティアス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defence": 90,
      "spAttack": 110,
      "spDefence": 130,
      "speed": 110
    }
  },
  {
    "no": 380,
    "name": "メガラティアス",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ドラゴン", "エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defence": 120,
      "spAttack": 140,
      "spDefence": 150,
      "speed": 110
    }
  },
  {
    "no": 381,
    "name": "ラティオス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 90,
      "defence": 80,
      "spAttack": 130,
      "spDefence": 110,
      "speed": 110
    }
  },
  {
    "no": 381,
    "name": "メガラティオス",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ドラゴン", "エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 130,
      "defence": 100,
      "spAttack": 160,
      "spDefence": 120,
      "speed": 110
    }
  },
  {
    "no": 382,
    "name": "カイオーガ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["あめふらし"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defence": 90,
      "spAttack": 150,
      "spDefence": 140,
      "speed": 90
    }
  },
  {
    "no": 382,
    "name": "ゲンシカイオーガ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["はじまりのうみ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defence": 90,
      "spAttack": 180,
      "spDefence": 160,
      "speed": 90
    }
  },
  {
    "no": 383,
    "name": "グラードン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん"],
    "abilities": ["ひでり"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defence": 140,
      "spAttack": 100,
      "spDefence": 90,
      "speed": 90
    }
  },
  {
    "no": 383,
    "name": "ゲンシグラードン",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["じめん", "ほのお"],
    "abilities": ["おわりのだいち"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 180,
      "defence": 160,
      "spAttack": 150,
      "spDefence": 90,
      "speed": 90
    }
  },
  {
    "no": 384,
    "name": "レックウザ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "ひこう"],
    "abilities": ["エアロック"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 105,
      "attack": 150,
      "defence": 90,
      "spAttack": 150,
      "spDefence": 90,
      "speed": 95
    }
  },
  {
    "no": 384,
    "name": "メガレックウザ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ドラゴン", "ひこう"],
    "abilities": ["デルタストリーム"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 105,
      "attack": 180,
      "defence": 100,
      "spAttack": 180,
      "spDefence": 100,
      "speed": 115
    }
  },
  {
    "no": 385,
    "name": "ジラーチ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "エスパー"],
    "abilities": ["てんのめぐみ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defence": 100,
      "spAttack": 100,
      "spDefence": 100,
      "speed": 100
    }
  },
  {
    "no": 386,
    "name": "デオキシス",
    "form": "ノーマルフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 150,
      "defence": 50,
      "spAttack": 150,
      "spDefence": 50,
      "speed": 150
    }
  },
  {
    "no": 386,
    "name": "デオキシス",
    "form": "アタックフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 180,
      "defence": 20,
      "spAttack": 180,
      "spDefence": 20,
      "speed": 150
    }
  },
  {
    "no": 386,
    "name": "デオキシス",
    "form": "ディフェンスフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defence": 160,
      "spAttack": 70,
      "spDefence": 160,
      "speed": 90
    }
  },
  {
    "no": 386,
    "name": "デオキシス",
    "form": "スピードフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defence": 90,
      "spAttack": 95,
      "spDefence": 90,
      "speed": 180
    }
  },
  {
    "no": 387,
    "name": "ナエトル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [388],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["シェルアーマー"],
    "stats": {
      "hp": 55,
      "attack": 68,
      "defence": 64,
      "spAttack": 45,
      "spDefence": 55,
      "speed": 31
    }
  },
  {
    "no": 388,
    "name": "ハヤシガメ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [389],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["シェルアーマー"],
    "stats": {
      "hp": 75,
      "attack": 89,
      "defence": 85,
      "spAttack": 55,
      "spDefence": 65,
      "speed": 36
    }
  },
  {
    "no": 389,
    "name": "ドダイトス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "じめん"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["シェルアーマー"],
    "stats": {
      "hp": 95,
      "attack": 109,
      "defence": 105,
      "spAttack": 75,
      "spDefence": 85,
      "speed": 56
    }
  },
  {
    "no": 390,
    "name": "ヒコザル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [391],
    "types": ["ほのお"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["てつのこぶし"],
    "stats": {
      "hp": 44,
      "attack": 58,
      "defence": 44,
      "spAttack": 58,
      "spDefence": 44,
      "speed": 61
    }
  },
  {
    "no": 391,
    "name": "モウカザル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [392],
    "types": ["ほのお", "かくとう"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["てつのこぶし"],
    "stats": {
      "hp": 64,
      "attack": 78,
      "defence": 52,
      "spAttack": 78,
      "spDefence": 52,
      "speed": 81
    }
  },
  {
    "no": 392,
    "name": "ゴウカザル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "かくとう"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["てつのこぶし"],
    "stats": {
      "hp": 76,
      "attack": 104,
      "defence": 71,
      "spAttack": 104,
      "spDefence": 71,
      "speed": 108
    }
  },
  {
    "no": 393,
    "name": "ポッチャマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [394],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["まけんき"],
    "stats": {
      "hp": 53,
      "attack": 51,
      "defence": 53,
      "spAttack": 61,
      "spDefence": 56,
      "speed": 40
    }
  },
  {
    "no": 394,
    "name": "ポッタイシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [395],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["まけんき"],
    "stats": {
      "hp": 64,
      "attack": 66,
      "defence": 68,
      "spAttack": 81,
      "spDefence": 76,
      "speed": 50
    }
  },
  {
    "no": 395,
    "name": "エンペルト",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "はがね"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["まけんき"],
    "stats": {
      "hp": 84,
      "attack": 86,
      "defence": 88,
      "spAttack": 111,
      "spDefence": 101,
      "speed": 60
    }
  },
  {
    "no": 396,
    "name": "ムックル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [397],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ"],
    "hiddenAbilities": ["すてみ"],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defence": 30,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 60
    }
  },
  {
    "no": 397,
    "name": "ムクバード",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [398],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["いかく"],
    "hiddenAbilities": ["すてみ"],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defence": 50,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 80
    }
  },
  {
    "no": 398,
    "name": "ムクホーク",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["いかく"],
    "hiddenAbilities": ["すてみ"],
    "stats": {
      "hp": 85,
      "attack": 120,
      "defence": 70,
      "spAttack": 50,
      "spDefence": 60,
      "speed": 100
    }
  },
  {
    "no": 399,
    "name": "ビッパ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [400],
    "types": ["ノーマル"],
    "abilities": ["たんじゅん", "てんねん"],
    "hiddenAbilities": ["ムラっけ"],
    "stats": {
      "hp": 59,
      "attack": 45,
      "defence": 40,
      "spAttack": 35,
      "spDefence": 40,
      "speed": 31
    }
  },
  {
    "no": 400,
    "name": "ビーダル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "みず"],
    "abilities": ["たんじゅん", "てんねん"],
    "hiddenAbilities": ["ムラっけ"],
    "stats": {
      "hp": 79,
      "attack": 85,
      "defence": 60,
      "spAttack": 55,
      "spDefence": 60,
      "speed": 71
    }
  },
  {
    "no": 401,
    "name": "コロボーシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [402],
    "types": ["むし"],
    "abilities": ["だっぴ"],
    "hiddenAbilities": ["にげあし"],
    "stats": {
      "hp": 37,
      "attack": 25,
      "defence": 41,
      "spAttack": 25,
      "spDefence": 41,
      "speed": 25
    }
  },
  {
    "no": 402,
    "name": "コロトック",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし"],
    "abilities": ["むしのしらせ"],
    "hiddenAbilities": ["テクニシャン"],
    "stats": {
      "hp": 77,
      "attack": 85,
      "defence": 51,
      "spAttack": 55,
      "spDefence": 51,
      "speed": 65
    }
  },
  {
    "no": 403,
    "name": "コリンク",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [404],
    "types": ["でんき"],
    "abilities": ["とうそうしん", "いかく"],
    "hiddenAbilities": ["こんじょう"],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defence": 34,
      "spAttack": 40,
      "spDefence": 34,
      "speed": 45
    }
  },
  {
    "no": 404,
    "name": "ルクシオ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [405],
    "types": ["でんき"],
    "abilities": ["とうそうしん", "いかく"],
    "hiddenAbilities": ["こんじょう"],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defence": 49,
      "spAttack": 60,
      "spDefence": 49,
      "speed": 60
    }
  },
  {
    "no": 405,
    "name": "レントラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["とうそうしん", "いかく"],
    "hiddenAbilities": ["こんじょう"],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defence": 79,
      "spAttack": 95,
      "spDefence": 79,
      "speed": 70
    }
  },
  {
    "no": 406,
    "name": "スボミー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [315],
    "types": ["くさ", "どく"],
    "abilities": ["しぜんかいふく", "どくのトゲ"],
    "hiddenAbilities": ["リーフガード"],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defence": 35,
      "spAttack": 50,
      "spDefence": 70,
      "speed": 55
    }
  },
  {
    "no": 407,
    "name": "ロズレイド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "どく"],
    "abilities": ["しぜんかいふく", "どくのトゲ"],
    "hiddenAbilities": ["テクニシャン"],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defence": 65,
      "spAttack": 125,
      "spDefence": 105,
      "speed": 90
    }
  },
  {
    "no": 408,
    "name": "ズガイドス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [409],
    "types": ["いわ"],
    "abilities": ["かたやぶり"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 67,
      "attack": 125,
      "defence": 40,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 58
    }
  },
  {
    "no": 409,
    "name": "ラムパルド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ"],
    "abilities": ["かたやぶり"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 97,
      "attack": 165,
      "defence": 60,
      "spAttack": 65,
      "spDefence": 50,
      "speed": 58
    }
  },
  {
    "no": 410,
    "name": "タテトプス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [411],
    "types": ["いわ", "はがね"],
    "abilities": ["がんじょう"],
    "hiddenAbilities": ["ぼうおん"],
    "stats": {
      "hp": 30,
      "attack": 42,
      "defence": 118,
      "spAttack": 42,
      "spDefence": 88,
      "speed": 30
    }
  },
  {
    "no": 411,
    "name": "トリデプス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "はがね"],
    "abilities": ["がんじょう"],
    "hiddenAbilities": ["ぼうおん"],
    "stats": {
      "hp": 60,
      "attack": 52,
      "defence": 168,
      "spAttack": 47,
      "spDefence": 138,
      "speed": 30
    }
  },
  {
    "no": 412,
    "name": "ミノムッチ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [413, 414],
    "types": ["むし"],
    "abilities": ["だっぴ"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 40,
      "attack": 29,
      "defence": 45,
      "spAttack": 29,
      "spDefence": 45,
      "speed": 36
    }
  },
  {
    "no": 413,
    "name": "ミノマダム",
    "form": "くさきのミノ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "くさ"],
    "abilities": ["きけんよち"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 60,
      "attack": 59,
      "defence": 85,
      "spAttack": 79,
      "spDefence": 105,
      "speed": 36
    }
  },
  {
    "no": 413,
    "name": "ミノマダム",
    "form": "すなちのミノ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "じめん"],
    "abilities": ["きけんよち"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 60,
      "attack": 79,
      "defence": 105,
      "spAttack": 59,
      "spDefence": 85,
      "speed": 36
    }
  },
  {
    "no": 413,
    "name": "ミノマダム",
    "form": "ゴミのミノ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "はがね"],
    "abilities": ["きけんよち"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 60,
      "attack": 69,
      "defence": 95,
      "spAttack": 69,
      "spDefence": 95,
      "speed": 36
    }
  },
  {
    "no": 414,
    "name": "ガーメイル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "ひこう"],
    "abilities": ["むしのしらせ"],
    "hiddenAbilities": ["いろめがね"],
    "stats": {
      "hp": 70,
      "attack": 94,
      "defence": 50,
      "spAttack": 94,
      "spDefence": 50,
      "speed": 66
    }
  },
  {
    "no": 415,
    "name": "ミツハニー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [416],
    "types": ["むし", "ひこう"],
    "abilities": ["みつあつめ"],
    "hiddenAbilities": ["はりきり"],
    "stats": {
      "hp": 30,
      "attack": 30,
      "defence": 42,
      "spAttack": 30,
      "spDefence": 42,
      "speed": 70
    }
  },
  {
    "no": 416,
    "name": "ビークイン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "ひこう"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defence": 102,
      "spAttack": 80,
      "spDefence": 102,
      "speed": 40
    }
  },
  {
    "no": 417,
    "name": "パチリス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["にげあし", "ものひろい"],
    "hiddenAbilities": ["ちくでん"],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defence": 70,
      "spAttack": 45,
      "spDefence": 90,
      "speed": 95
    }
  },
  {
    "no": 418,
    "name": "ブイゼル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [419],
    "types": ["みず"],
    "abilities": ["すいすい"],
    "hiddenAbilities": ["みずのベール"],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defence": 35,
      "spAttack": 60,
      "spDefence": 30,
      "speed": 85
    }
  },
  {
    "no": 419,
    "name": "フローゼル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["すいすい"],
    "hiddenAbilities": ["みずのベール"],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defence": 55,
      "spAttack": 85,
      "spDefence": 50,
      "speed": 115
    }
  },
  {
    "no": 420,
    "name": "チェリンボ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [421],
    "types": ["くさ"],
    "abilities": ["ようりょくそ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 45,
      "attack": 35,
      "defence": 45,
      "spAttack": 62,
      "spDefence": 53,
      "speed": 35
    }
  },
  {
    "no": 421,
    "name": "チェリム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["フラワーギフト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defence": 70,
      "spAttack": 87,
      "spDefence": 78,
      "speed": 85
    }
  },
  {
    "no": 422,
    "name": "カラナクシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [423],
    "types": ["みず"],
    "abilities": ["ねんちゃく", "よびみず"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 76,
      "attack": 48,
      "defence": 48,
      "spAttack": 57,
      "spDefence": 62,
      "speed": 34
    }
  },
  {
    "no": 423,
    "name": "トリトドン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "じめん"],
    "abilities": ["ねんちゃく", "よびみず"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 111,
      "attack": 83,
      "defence": 68,
      "spAttack": 92,
      "spDefence": 82,
      "speed": 39
    }
  },
  {
    "no": 424,
    "name": "エテボース",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["テクニシャン", "ものひろい"],
    "hiddenAbilities": ["スキルリンク"],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defence": 66,
      "spAttack": 60,
      "spDefence": 66,
      "speed": 115
    }
  },
  {
    "no": 425,
    "name": "フワンテ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [426],
    "types": ["ゴースト", "ひこう"],
    "abilities": ["ゆうばく", "かるわざ"],
    "hiddenAbilities": ["ねつぼうそう"],
    "stats": {
      "hp": 90,
      "attack": 50,
      "defence": 34,
      "spAttack": 60,
      "spDefence": 44,
      "speed": 70
    }
  },
  {
    "no": 426,
    "name": "フワライド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "ひこう"],
    "abilities": ["ゆうばく", "かるわざ"],
    "hiddenAbilities": ["ねつぼうそう"],
    "stats": {
      "hp": 150,
      "attack": 80,
      "defence": 44,
      "spAttack": 90,
      "spDefence": 54,
      "speed": 80
    }
  },
  {
    "no": 427,
    "name": "ミミロル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [428],
    "types": ["ノーマル"],
    "abilities": ["にげあし", "ぶきよう"],
    "hiddenAbilities": ["じゅうなん"],
    "stats": {
      "hp": 55,
      "attack": 66,
      "defence": 44,
      "spAttack": 44,
      "spDefence": 56,
      "speed": 85
    }
  },
  {
    "no": 428,
    "name": "ミミロップ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["メロメロボディ", "ぶきよう"],
    "hiddenAbilities": ["じゅうなん"],
    "stats": {
      "hp": 65,
      "attack": 76,
      "defence": 84,
      "spAttack": 54,
      "spDefence": 96,
      "speed": 105
    }
  },
  {
    "no": 428,
    "name": "メガミミロップ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ノーマル", "かくとう"],
    "abilities": ["きもったま"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 65,
      "attack": 136,
      "defence": 94,
      "spAttack": 54,
      "spDefence": 96,
      "speed": 135
    }
  },
  {
    "no": 429,
    "name": "ムウマージ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defence": 60,
      "spAttack": 105,
      "spDefence": 105,
      "speed": 105
    }
  },
  {
    "no": 430,
    "name": "ドンカラス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "ひこう"],
    "abilities": ["ふみん", "きょううん"],
    "hiddenAbilities": ["じしんかじょう"],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defence": 52,
      "spAttack": 105,
      "spDefence": 52,
      "speed": 71
    }
  },
  {
    "no": 431,
    "name": "ニャルマー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [432],
    "types": ["ノーマル"],
    "abilities": ["じゅうなん", "マイペース"],
    "hiddenAbilities": ["するどいめ"],
    "stats": {
      "hp": 49,
      "attack": 55,
      "defence": 42,
      "spAttack": 42,
      "spDefence": 37,
      "speed": 85
    }
  },
  {
    "no": 432,
    "name": "ブニャット",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["あついしぼう", "マイペース"],
    "hiddenAbilities": ["するどいめ"],
    "stats": {
      "hp": 71,
      "attack": 82,
      "defence": 64,
      "spAttack": 64,
      "spDefence": 59,
      "speed": 112
    }
  },
  {
    "no": 433,
    "name": "リーシャン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [358],
    "types": ["エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defence": 50,
      "spAttack": 65,
      "spDefence": 50,
      "speed": 45
    }
  },
  {
    "no": 434,
    "name": "スカンプー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [435],
    "types": ["どく", "あく"],
    "abilities": ["あくしゅう", "ゆうばく"],
    "hiddenAbilities": ["するどいめ"],
    "stats": {
      "hp": 63,
      "attack": 63,
      "defence": 47,
      "spAttack": 41,
      "spDefence": 41,
      "speed": 74
    }
  },
  {
    "no": 435,
    "name": "スカタンク",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく", "あく"],
    "abilities": ["あくしゅう", "ゆうばく"],
    "hiddenAbilities": ["するどいめ"],
    "stats": {
      "hp": 103,
      "attack": 93,
      "defence": 67,
      "spAttack": 71,
      "spDefence": 61,
      "speed": 84
    }
  },
  {
    "no": 436,
    "name": "ドーミラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [437],
    "types": ["はがね", "エスパー"],
    "abilities": ["ふゆう", "たいねつ"],
    "hiddenAbilities": ["ヘヴィメタル"],
    "stats": {
      "hp": 57,
      "attack": 24,
      "defence": 86,
      "spAttack": 24,
      "spDefence": 86,
      "speed": 23
    }
  },
  {
    "no": 437,
    "name": "ドータクン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "エスパー"],
    "abilities": ["ふゆう", "たいねつ"],
    "hiddenAbilities": ["ヘヴィメタル"],
    "stats": {
      "hp": 67,
      "attack": 89,
      "defence": 116,
      "spAttack": 79,
      "spDefence": 116,
      "speed": 33
    }
  },
  {
    "no": 438,
    "name": "ウソハチ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [185],
    "types": ["いわ"],
    "abilities": ["がんじょう", "いしあたま"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 50,
      "attack": 80,
      "defence": 95,
      "spAttack": 10,
      "spDefence": 45,
      "speed": 10
    }
  },
  {
    "no": 439,
    "name": "マネネ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [122],
    "types": ["エスパー", "フェアリー"],
    "abilities": ["ぼうおん", "フィルター"],
    "hiddenAbilities": ["テクニシャン"],
    "stats": {
      "hp": 20,
      "attack": 25,
      "defence": 45,
      "spAttack": 70,
      "spDefence": 90,
      "speed": 60
    }
  },
  {
    "no": 440,
    "name": "ピンプク",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [113],
    "types": ["ノーマル"],
    "abilities": ["しぜんかいふく", "てんのめぐみ"],
    "hiddenAbilities": ["フレンドガード"],
    "stats": {
      "hp": 100,
      "attack": 5,
      "defence": 5,
      "spAttack": 15,
      "spDefence": 65,
      "speed": 30
    }
  },
  {
    "no": 441,
    "name": "ペラップ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ", "ちどりあし"],
    "hiddenAbilities": ["はとむね"],
    "stats": {
      "hp": 76,
      "attack": 65,
      "defence": 45,
      "spAttack": 92,
      "spDefence": 42,
      "speed": 91
    }
  },
  {
    "no": 442,
    "name": "ミカルゲ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "あく"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 50,
      "attack": 92,
      "defence": 108,
      "spAttack": 92,
      "spDefence": 108,
      "speed": 35
    }
  },
  {
    "no": 443,
    "name": "フカマル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [444],
    "types": ["ドラゴン", "じめん"],
    "abilities": ["すながくれ"],
    "hiddenAbilities": ["さめはだ"],
    "stats": {
      "hp": 58,
      "attack": 70,
      "defence": 45,
      "spAttack": 40,
      "spDefence": 45,
      "speed": 42
    }
  },
  {
    "no": 444,
    "name": "ガバイト",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [445],
    "types": ["ドラゴン", "じめん"],
    "abilities": ["すながくれ"],
    "hiddenAbilities": ["さめはだ"],
    "stats": {
      "hp": 68,
      "attack": 90,
      "defence": 65,
      "spAttack": 50,
      "spDefence": 55,
      "speed": 82
    }
  },
  {
    "no": 445,
    "name": "ガブリアス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "じめん"],
    "abilities": ["すながくれ"],
    "hiddenAbilities": ["さめはだ"],
    "stats": {
      "hp": 108,
      "attack": 130,
      "defence": 95,
      "spAttack": 80,
      "spDefence": 85,
      "speed": 102
    }
  },
  {
    "no": 445,
    "name": "メガガブリアス",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ドラゴン", "じめん"],
    "abilities": ["すなのちから"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 108,
      "attack": 170,
      "defence": 115,
      "spAttack": 120,
      "spDefence": 95,
      "speed": 92
    }
  },
  {
    "no": 446,
    "name": "ゴンベ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [143],
    "types": ["ノーマル"],
    "abilities": ["ものひろい", "あついしぼう"],
    "hiddenAbilities": ["くいしんぼう"],
    "stats": {
      "hp": 135,
      "attack": 85,
      "defence": 40,
      "spAttack": 40,
      "spDefence": 85,
      "speed": 5
    }
  },
  {
    "no": 447,
    "name": "リオル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [448],
    "types": ["かくとう"],
    "abilities": ["ふくつのこころ", "せいしんりょく"],
    "hiddenAbilities": ["いたずらごころ"],
    "stats": {
      "hp": 40,
      "attack": 70,
      "defence": 40,
      "spAttack": 35,
      "spDefence": 40,
      "speed": 60
    }
  },
  {
    "no": 448,
    "name": "ルカリオ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう", "はがね"],
    "abilities": ["ふくつのこころ", "せいしんりょく"],
    "hiddenAbilities": ["せいぎのこころ"],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defence": 70,
      "spAttack": 115,
      "spDefence": 70,
      "speed": 90
    }
  },
  {
    "no": 448,
    "name": "メガルカリオ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["かくとう", "はがね"],
    "abilities": ["てきおうりょく"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 145,
      "defence": 88,
      "spAttack": 140,
      "spDefence": 70,
      "speed": 112
    }
  },
  {
    "no": 449,
    "name": "ヒポポタス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [450],
    "types": ["じめん"],
    "abilities": ["すなおこし"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 68,
      "attack": 72,
      "defence": 78,
      "spAttack": 38,
      "spDefence": 42,
      "speed": 32
    }
  },
  {
    "no": 450,
    "name": "カバルドン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん"],
    "abilities": ["すなおこし"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 108,
      "attack": 112,
      "defence": 118,
      "spAttack": 68,
      "spDefence": 72,
      "speed": 47
    }
  },
  {
    "no": 451,
    "name": "スコルピ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [452],
    "types": ["どく", "むし"],
    "abilities": ["カブトアーマー", "スナイパー"],
    "hiddenAbilities": ["するどいめ"],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defence": 90,
      "spAttack": 30,
      "spDefence": 55,
      "speed": 65
    }
  },
  {
    "no": 452,
    "name": "ドラピオン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく", "あく"],
    "abilities": ["カブトアーマー", "スナイパー"],
    "hiddenAbilities": ["するどいめ"],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defence": 110,
      "spAttack": 60,
      "spDefence": 75,
      "speed": 95
    }
  },
  {
    "no": 453,
    "name": "グレッグル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [454],
    "types": ["どく", "かくとう"],
    "abilities": ["きけんよち", "かんそうはだ"],
    "hiddenAbilities": ["どくしゅ"],
    "stats": {
      "hp": 48,
      "attack": 61,
      "defence": 40,
      "spAttack": 61,
      "spDefence": 40,
      "speed": 50
    }
  },
  {
    "no": 454,
    "name": "ドクロッグ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく", "かくとう"],
    "abilities": ["きけんよち", "かんそうはだ"],
    "hiddenAbilities": ["どくしゅ"],
    "stats": {
      "hp": 83,
      "attack": 106,
      "defence": 65,
      "spAttack": 86,
      "spDefence": 65,
      "speed": 85
    }
  },
  {
    "no": 455,
    "name": "マスキッパ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 74,
      "attack": 100,
      "defence": 72,
      "spAttack": 90,
      "spDefence": 72,
      "speed": 46
    }
  },
  {
    "no": 456,
    "name": "ケイコウオ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [457],
    "types": ["みず"],
    "abilities": ["すいすい", "よびみず"],
    "hiddenAbilities": ["みずのベール"],
    "stats": {
      "hp": 49,
      "attack": 49,
      "defence": 56,
      "spAttack": 49,
      "spDefence": 61,
      "speed": 66
    }
  },
  {
    "no": 457,
    "name": "ネオラント",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["すいすい", "よびみず"],
    "hiddenAbilities": ["みずのベール"],
    "stats": {
      "hp": 69,
      "attack": 69,
      "defence": 76,
      "spAttack": 69,
      "spDefence": 86,
      "speed": 91
    }
  },
  {
    "no": 458,
    "name": "タマンタ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [226],
    "types": ["みず", "ひこう"],
    "abilities": ["すいすい", "ちょすい"],
    "hiddenAbilities": ["みずのベール"],
    "stats": {
      "hp": 45,
      "attack": 20,
      "defence": 50,
      "spAttack": 60,
      "spDefence": 120,
      "speed": 50
    }
  },
  {
    "no": 459,
    "name": "ユキカブリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [460],
    "types": ["くさ", "こおり"],
    "abilities": ["ゆきふらし"],
    "hiddenAbilities": ["ぼうおん"],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defence": 50,
      "spAttack": 62,
      "spDefence": 60,
      "speed": 40
    }
  },
  {
    "no": 460,
    "name": "ユキノオー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "こおり"],
    "abilities": ["ゆきふらし"],
    "hiddenAbilities": ["ぼうおん"],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defence": 75,
      "spAttack": 92,
      "spDefence": 85,
      "speed": 60
    }
  },
  {
    "no": 460,
    "name": "メガユキノオー",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["くさ", "こおり"],
    "abilities": ["ゆきふらし"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 90,
      "attack": 132,
      "defence": 105,
      "spAttack": 132,
      "spDefence": 105,
      "speed": 30
    }
  },
  {
    "no": 461,
    "name": "マニューラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "こおり"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["わるいてぐせ"],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defence": 65,
      "spAttack": 45,
      "spDefence": 85,
      "speed": 125
    }
  },
  {
    "no": 462,
    "name": "ジバコイル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "はがね"],
    "abilities": ["じりょく", "がんじょう"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defence": 115,
      "spAttack": 130,
      "spDefence": 90,
      "speed": 60
    }
  },
  {
    "no": 463,
    "name": "ベロベルト",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["マイペース", "どんかん"],
    "hiddenAbilities": ["ノーてんき"],
    "stats": {
      "hp": 110,
      "attack": 85,
      "defence": 95,
      "spAttack": 80,
      "spDefence": 95,
      "speed": 50
    }
  },
  {
    "no": 464,
    "name": "ドサイドン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん", "いわ"],
    "abilities": ["ひらいしん", "ハードロック"],
    "hiddenAbilities": ["すてみ"],
    "stats": {
      "hp": 115,
      "attack": 140,
      "defence": 130,
      "spAttack": 55,
      "spDefence": 55,
      "speed": 40
    }
  },
  {
    "no": 465,
    "name": "モジャンボ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["ようりょくそ", "リーフガード"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defence": 125,
      "spAttack": 110,
      "spDefence": 50,
      "speed": 50
    }
  },
  {
    "no": 466,
    "name": "エレキブル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["でんきエンジン"],
    "hiddenAbilities": ["やるき"],
    "stats": {
      "hp": 75,
      "attack": 123,
      "defence": 67,
      "spAttack": 95,
      "spDefence": 85,
      "speed": 95
    }
  },
  {
    "no": 467,
    "name": "ブーバーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお"],
    "abilities": ["ほのおのからだ"],
    "hiddenAbilities": ["やるき"],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defence": 67,
      "spAttack": 125,
      "spDefence": 95,
      "speed": 83
    }
  },
  {
    "no": 468,
    "name": "トゲキッス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["フェアリー", "ひこう"],
    "abilities": ["はりきり", "てんのめぐみ"],
    "hiddenAbilities": ["きょううん"],
    "stats": {
      "hp": 85,
      "attack": 50,
      "defence": 95,
      "spAttack": 120,
      "spDefence": 115,
      "speed": 80
    }
  },
  {
    "no": 469,
    "name": "メガヤンマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "ひこう"],
    "abilities": ["かそく", "いろめがね"],
    "hiddenAbilities": ["おみとおし"],
    "stats": {
      "hp": 86,
      "attack": 76,
      "defence": 86,
      "spAttack": 116,
      "spDefence": 56,
      "speed": 95
    }
  },
  {
    "no": 470,
    "name": "リーフィア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["リーフガード"],
    "hiddenAbilities": ["ようりょくそ"],
    "stats": {
      "hp": 65,
      "attack": 110,
      "defence": 130,
      "spAttack": 60,
      "spDefence": 65,
      "speed": 95
    }
  },
  {
    "no": 471,
    "name": "グレイシア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり"],
    "abilities": ["ゆきがくれ"],
    "hiddenAbilities": ["アイスボディ"],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defence": 110,
      "spAttack": 130,
      "spDefence": 95,
      "speed": 65
    }
  },
  {
    "no": 472,
    "name": "グライオン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん", "ひこう"],
    "abilities": ["かいりきバサミ", "すながくれ"],
    "hiddenAbilities": ["ポイズンヒール"],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defence": 125,
      "spAttack": 45,
      "spDefence": 75,
      "speed": 95
    }
  },
  {
    "no": 473,
    "name": "マンムー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり", "じめん"],
    "abilities": ["どんかん", "ゆきがくれ"],
    "hiddenAbilities": ["あついしぼう"],
    "stats": {
      "hp": 110,
      "attack": 130,
      "defence": 80,
      "spAttack": 70,
      "spDefence": 60,
      "speed": 80
    }
  },
  {
    "no": 474,
    "name": "ポリゴンZ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["てきおうりょく", "ダウンロード"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 85,
      "attack": 80,
      "defence": 70,
      "spAttack": 135,
      "spDefence": 75,
      "speed": 90
    }
  },
  {
    "no": 475,
    "name": "エルレイド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "かくとう"],
    "abilities": ["ふくつのこころ"],
    "hiddenAbilities": ["せいぎのこころ"],
    "stats": {
      "hp": 68,
      "attack": 125,
      "defence": 65,
      "spAttack": 65,
      "spDefence": 115,
      "speed": 80
    }
  },
  {
    "no": 475,
    "name": "メガエルレイド",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["エスパー", "かくとう"],
    "abilities": ["せいしんりょく"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 68,
      "attack": 165,
      "defence": 95,
      "spAttack": 65,
      "spDefence": 115,
      "speed": 110
    }
  },
  {
    "no": 476,
    "name": "ダイノーズ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "はがね"],
    "abilities": ["がんじょう", "じりょく"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defence": 145,
      "spAttack": 75,
      "spDefence": 150,
      "speed": 40
    }
  },
  {
    "no": 477,
    "name": "ヨノワール",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["おみとおし"],
    "stats": {
      "hp": 45,
      "attack": 100,
      "defence": 135,
      "spAttack": 65,
      "spDefence": 135,
      "speed": 45
    }
  },
  {
    "no": 478,
    "name": "ユキメノコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり", "ゴースト"],
    "abilities": ["ゆきがくれ"],
    "hiddenAbilities": ["のろわれボディ"],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defence": 70,
      "spAttack": 80,
      "spDefence": 70,
      "speed": 110
    }
  },
  {
    "no": 479,
    "name": "ロトム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "ゴースト"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defence": 77,
      "spAttack": 95,
      "spDefence": 77,
      "speed": 91
    }
  },
  {
    "no": 479,
    "name": "ロトム",
    "form": "ヒートロトム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "ほのお"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defence": 107,
      "spAttack": 105,
      "spDefence": 107,
      "speed": 86
    }
  },
  {
    "no": 479,
    "name": "ロトム",
    "form": "ウォッシュロトム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "みず"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defence": 107,
      "spAttack": 105,
      "spDefence": 107,
      "speed": 86
    }
  },
  {
    "no": 479,
    "name": "ロトム",
    "form": "フロストロトム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "こおり"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defence": 107,
      "spAttack": 105,
      "spDefence": 107,
      "speed": 86
    }
  },
  {
    "no": 479,
    "name": "ロトム",
    "form": "スピンロトム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "ひこう"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defence": 107,
      "spAttack": 105,
      "spDefence": 107,
      "speed": 86
    }
  },
  {
    "no": 479,
    "name": "ロトム",
    "form": "カットロトム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "くさ"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defence": 107,
      "spAttack": 105,
      "spDefence": 107,
      "speed": 86
    }
  },
  {
    "no": 480,
    "name": "ユクシー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defence": 130,
      "spAttack": 75,
      "spDefence": 130,
      "speed": 95
    }
  },
  {
    "no": 481,
    "name": "エムリット",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defence": 105,
      "spAttack": 105,
      "spDefence": 105,
      "speed": 80
    }
  },
  {
    "no": 482,
    "name": "アグノム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defence": 70,
      "spAttack": 125,
      "spDefence": 70,
      "speed": 115
    }
  },
  {
    "no": 483,
    "name": "ディアルガ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "ドラゴン"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defence": 120,
      "spAttack": 150,
      "spDefence": 100,
      "speed": 90
    }
  },
  {
    "no": 484,
    "name": "パルキア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "ドラゴン"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defence": 100,
      "spAttack": 150,
      "spDefence": 120,
      "speed": 100
    }
  },
  {
    "no": 485,
    "name": "ヒードラン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "はがね"],
    "abilities": ["もらいび"],
    "hiddenAbilities": ["ほのおのからだ"],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defence": 106,
      "spAttack": 130,
      "spDefence": 106,
      "speed": 77
    }
  },
  {
    "no": 486,
    "name": "レギジガス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["スロースタート"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 110,
      "attack": 160,
      "defence": 110,
      "spAttack": 80,
      "spDefence": 110,
      "speed": 100
    }
  },
  {
    "no": 487,
    "name": "ギラティナ",
    "form": "アナザーフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "ドラゴン"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 150,
      "attack": 100,
      "defence": 120,
      "spAttack": 100,
      "spDefence": 120,
      "speed": 90
    }
  },
  {
    "no": 487,
    "name": "ギラティナ",
    "form": "オリジンフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "ドラゴン"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 150,
      "attack": 120,
      "defence": 100,
      "spAttack": 120,
      "spDefence": 100,
      "speed": 90
    }
  },
  {
    "no": 488,
    "name": "クレセリア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 120,
      "attack": 70,
      "defence": 120,
      "spAttack": 75,
      "spDefence": 130,
      "speed": 85
    }
  },
  {
    "no": 489,
    "name": "フィオネ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["うるおいボディ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defence": 80,
      "spAttack": 80,
      "spDefence": 80,
      "speed": 80
    }
  },
  {
    "no": 490,
    "name": "マナフィ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["うるおいボディ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defence": 100,
      "spAttack": 100,
      "spDefence": 100,
      "speed": 100
    }
  },
  {
    "no": 491,
    "name": "ダークライ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく"],
    "abilities": ["ナイトメア"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defence": 90,
      "spAttack": 135,
      "spDefence": 90,
      "speed": 125
    }
  },
  {
    "no": 492,
    "name": "シェイミ",
    "form": "ランドフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["しぜんかいふく"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defence": 100,
      "spAttack": 100,
      "spDefence": 100,
      "speed": 100
    }
  },
  {
    "no": 492,
    "name": "シェイミ",
    "form": "スカイフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "ひこう"],
    "abilities": ["てんのめぐみ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 103,
      "defence": 75,
      "spAttack": 120,
      "spDefence": 75,
      "speed": 127
    }
  },
  {
    "no": 493,
    "name": "アルセウス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["マルチタイプ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 120,
      "attack": 120,
      "defence": 120,
      "spAttack": 120,
      "spDefence": 120,
      "speed": 120
    }
  },
  {
    "no": 494,
    "name": "ビクティニ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "ほのお"],
    "abilities": ["しょうりのほし"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defence": 100,
      "spAttack": 100,
      "spDefence": 100,
      "speed": 100
    }
  },
  {
    "no": 495,
    "name": "ツタージャ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [496],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["あまのじゃく"],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defence": 55,
      "spAttack": 45,
      "spDefence": 55,
      "speed": 63
    }
  },
  {
    "no": 496,
    "name": "ジャノビー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [497],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["あまのじゃく"],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defence": 75,
      "spAttack": 60,
      "spDefence": 75,
      "speed": 83
    }
  },
  {
    "no": 497,
    "name": "ジャローダ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["あまのじゃく"],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defence": 95,
      "spAttack": 75,
      "spDefence": 95,
      "speed": 113
    }
  },
  {
    "no": 498,
    "name": "ポカブ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [499],
    "types": ["ほのお"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["あついしぼう"],
    "stats": {
      "hp": 65,
      "attack": 63,
      "defence": 45,
      "spAttack": 45,
      "spDefence": 45,
      "speed": 45
    }
  },
  {
    "no": 499,
    "name": "チャオブー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [500],
    "types": ["ほのお", "かくとう"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["あついしぼう"],
    "stats": {
      "hp": 90,
      "attack": 93,
      "defence": 55,
      "spAttack": 70,
      "spDefence": 55,
      "speed": 55
    }
  },
  {
    "no": 500,
    "name": "エンブオー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "かくとう"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["あついしぼう"],
    "stats": {
      "hp": 110,
      "attack": 123,
      "defence": 65,
      "spAttack": 100,
      "spDefence": 65,
      "speed": 65
    }
  },
  {
    "no": 501,
    "name": "ミジュマル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [502],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["シェルアーマー"],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defence": 45,
      "spAttack": 63,
      "spDefence": 45,
      "speed": 45
    }
  },
  {
    "no": 502,
    "name": "フタチマル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [503],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["シェルアーマー"],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defence": 60,
      "spAttack": 83,
      "spDefence": 60,
      "speed": 60
    }
  },
  {
    "no": 503,
    "name": "ダイケンキ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["シェルアーマー"],
    "stats": {
      "hp": 95,
      "attack": 100,
      "defence": 85,
      "spAttack": 108,
      "spDefence": 70,
      "speed": 70
    }
  },
  {
    "no": 504,
    "name": "ミネズミ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [505],
    "types": ["ノーマル"],
    "abilities": ["にげあし", "するどいめ"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defence": 39,
      "spAttack": 35,
      "spDefence": 39,
      "speed": 42
    }
  },
  {
    "no": 505,
    "name": "ミルホッグ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["はっこう", "するどいめ"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defence": 69,
      "spAttack": 60,
      "spDefence": 69,
      "speed": 77
    }
  },
  {
    "no": 506,
    "name": "ヨーテリー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [507],
    "types": ["ノーマル"],
    "abilities": ["やるき", "ものひろい"],
    "hiddenAbilities": ["にげあし"],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defence": 45,
      "spAttack": 25,
      "spDefence": 45,
      "speed": 55
    }
  },
  {
    "no": 507,
    "name": "ハーデリア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [508],
    "types": ["ノーマル"],
    "abilities": ["いかく", "すなかき"],
    "hiddenAbilities": ["きもったま"],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defence": 65,
      "spAttack": 35,
      "spDefence": 65,
      "speed": 60
    }
  },
  {
    "no": 508,
    "name": "ムーランド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["いかく", "すなかき"],
    "hiddenAbilities": ["きもったま"],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defence": 90,
      "spAttack": 45,
      "spDefence": 90,
      "speed": 80
    }
  },
  {
    "no": 509,
    "name": "チョロネコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [510],
    "types": ["あく"],
    "abilities": ["じゅうなん", "かるわざ"],
    "hiddenAbilities": ["いたずらごころ"],
    "stats": {
      "hp": 41,
      "attack": 50,
      "defence": 37,
      "spAttack": 50,
      "spDefence": 37,
      "speed": 66
    }
  },
  {
    "no": 510,
    "name": "レパルダス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく"],
    "abilities": ["じゅうなん", "かるわざ"],
    "hiddenAbilities": ["いたずらごころ"],
    "stats": {
      "hp": 64,
      "attack": 88,
      "defence": 50,
      "spAttack": 88,
      "spDefence": 50,
      "speed": 106
    }
  },
  {
    "no": 511,
    "name": "ヤナップ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [512],
    "types": ["くさ"],
    "abilities": ["くいしんぼう"],
    "hiddenAbilities": ["しんりょく"],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defence": 48,
      "spAttack": 53,
      "spDefence": 48,
      "speed": 64
    }
  },
  {
    "no": 512,
    "name": "ヤナッキー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["くいしんぼう"],
    "hiddenAbilities": ["しんりょく"],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defence": 63,
      "spAttack": 98,
      "spDefence": 63,
      "speed": 101
    }
  },
  {
    "no": 513,
    "name": "バオップ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [514],
    "types": ["ほのお"],
    "abilities": ["くいしんぼう"],
    "hiddenAbilities": ["もうか"],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defence": 48,
      "spAttack": 53,
      "spDefence": 48,
      "speed": 64
    }
  },
  {
    "no": 514,
    "name": "バオッキー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお"],
    "abilities": ["くいしんぼう"],
    "hiddenAbilities": ["もうか"],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defence": 63,
      "spAttack": 98,
      "spDefence": 63,
      "speed": 101
    }
  },
  {
    "no": 515,
    "name": "ヒヤップ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [516],
    "types": ["みず"],
    "abilities": ["くいしんぼう"],
    "hiddenAbilities": ["げきりゅう"],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defence": 48,
      "spAttack": 53,
      "spDefence": 48,
      "speed": 64
    }
  },
  {
    "no": 516,
    "name": "ヒヤッキー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["くいしんぼう"],
    "hiddenAbilities": ["げきりゅう"],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defence": 63,
      "spAttack": 98,
      "spDefence": 63,
      "speed": 101
    }
  },
  {
    "no": 517,
    "name": "ムンナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [518],
    "types": ["エスパー"],
    "abilities": ["よちむ", "シンクロ"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 76,
      "attack": 25,
      "defence": 45,
      "spAttack": 67,
      "spDefence": 55,
      "speed": 24
    }
  },
  {
    "no": 518,
    "name": "ムシャーナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["よちむ", "シンクロ"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 116,
      "attack": 55,
      "defence": 85,
      "spAttack": 107,
      "spDefence": 95,
      "speed": 29
    }
  },
  {
    "no": 519,
    "name": "マメパト",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [520],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["はとむね", "きょううん"],
    "hiddenAbilities": ["とうそうしん"],
    "stats": {
      "hp": 50,
      "attack": 55,
      "defence": 50,
      "spAttack": 36,
      "spDefence": 30,
      "speed": 43
    }
  },
  {
    "no": 520,
    "name": "ハトーボー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [521],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["はとむね", "きょううん"],
    "hiddenAbilities": ["とうそうしん"],
    "stats": {
      "hp": 62,
      "attack": 77,
      "defence": 62,
      "spAttack": 50,
      "spDefence": 42,
      "speed": 65
    }
  },
  {
    "no": 521,
    "name": "ケンホロウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["はとむね", "きょううん"],
    "hiddenAbilities": ["とうそうしん"],
    "stats": {
      "hp": 80,
      "attack": 115,
      "defence": 80,
      "spAttack": 65,
      "spDefence": 55,
      "speed": 93
    }
  },
  {
    "no": 522,
    "name": "シママ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [523],
    "types": ["でんき"],
    "abilities": ["ひらいしん", "でんきエンジン"],
    "hiddenAbilities": ["そうしょく"],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defence": 32,
      "spAttack": 50,
      "spDefence": 32,
      "speed": 76
    }
  },
  {
    "no": 523,
    "name": "ゼブライカ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["ひらいしん", "でんきエンジン"],
    "hiddenAbilities": ["そうしょく"],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defence": 63,
      "spAttack": 80,
      "spDefence": 63,
      "speed": 116
    }
  },
  {
    "no": 524,
    "name": "ダンゴロ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [525],
    "types": ["いわ"],
    "abilities": ["がんじょう", "くだけるよろい"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defence": 85,
      "spAttack": 25,
      "spDefence": 25,
      "speed": 15
    }
  },
  {
    "no": 525,
    "name": "ガントル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [526],
    "types": ["いわ"],
    "abilities": ["がんじょう", "くだけるよろい"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defence": 105,
      "spAttack": 50,
      "spDefence": 40,
      "speed": 20
    }
  },
  {
    "no": 526,
    "name": "ギガイアス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ"],
    "abilities": ["がんじょう", "すなおこし"],
    "hiddenAbilities": ["すなのちから"],
    "stats": {
      "hp": 85,
      "attack": 135,
      "defence": 130,
      "spAttack": 60,
      "spDefence": 80,
      "speed": 25
    }
  },
  {
    "no": 527,
    "name": "コロモリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [528],
    "types": ["エスパー", "ひこう"],
    "abilities": ["てんねん", "ぶきよう"],
    "hiddenAbilities": ["たんじゅん"],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defence": 43,
      "spAttack": 55,
      "spDefence": 43,
      "speed": 72
    }
  },
  {
    "no": 528,
    "name": "ココロモリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "ひこう"],
    "abilities": ["てんねん", "ぶきよう"],
    "hiddenAbilities": ["たんじゅん"],
    "stats": {
      "hp": 67,
      "attack": 57,
      "defence": 55,
      "spAttack": 77,
      "spDefence": 55,
      "speed": 114
    }
  },
  {
    "no": 529,
    "name": "モグリュー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [530],
    "types": ["じめん", "はがね"],
    "abilities": ["すなかき", "すなのちから"],
    "hiddenAbilities": ["かたやぶり"],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defence": 40,
      "spAttack": 30,
      "spDefence": 45,
      "speed": 68
    }
  },
  {
    "no": 530,
    "name": "ドリュウズ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん", "はがね"],
    "abilities": ["すなかき", "すなのちから"],
    "hiddenAbilities": ["かたやぶり"],
    "stats": {
      "hp": 110,
      "attack": 135,
      "defence": 60,
      "spAttack": 50,
      "spDefence": 65,
      "speed": 88
    }
  },
  {
    "no": 531,
    "name": "タブンネ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["いやしのこころ", "さいせいりょく"],
    "hiddenAbilities": ["ぶきよう"],
    "stats": {
      "hp": 103,
      "attack": 60,
      "defence": 86,
      "spAttack": 60,
      "spDefence": 86,
      "speed": 50
    }
  },
  {
    "no": 531,
    "name": "メガタブンネ",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["ノーマル", "フェアリー"],
    "abilities": ["いやしのこころ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 103,
      "attack": 60,
      "defence": 126,
      "spAttack": 80,
      "spDefence": 126,
      "speed": 50
    }
  },
  {
    "no": 532,
    "name": "ドッコラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [533],
    "types": ["かくとう"],
    "abilities": ["こんじょう", "ちからずく"],
    "hiddenAbilities": ["てつのこぶし"],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defence": 55,
      "spAttack": 25,
      "spDefence": 35,
      "speed": 35
    }
  },
  {
    "no": 533,
    "name": "ドテッコツ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [534],
    "types": ["かくとう"],
    "abilities": ["こんじょう", "ちからずく"],
    "hiddenAbilities": ["てつのこぶし"],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defence": 85,
      "spAttack": 40,
      "spDefence": 50,
      "speed": 40
    }
  },
  {
    "no": 534,
    "name": "ローブシン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう"],
    "abilities": ["こんじょう", "ちからずく"],
    "hiddenAbilities": ["てつのこぶし"],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defence": 95,
      "spAttack": 55,
      "spDefence": 65,
      "speed": 45
    }
  },
  {
    "no": 535,
    "name": "オタマロ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [536],
    "types": ["みず"],
    "abilities": ["すいすい", "うるおいボディ"],
    "hiddenAbilities": ["ちょすい"],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defence": 40,
      "spAttack": 50,
      "spDefence": 40,
      "speed": 64
    }
  },
  {
    "no": 536,
    "name": "ガマガル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [537],
    "types": ["みず", "じめん"],
    "abilities": ["すいすい", "うるおいボディ"],
    "hiddenAbilities": ["ちょすい"],
    "stats": {
      "hp": 75,
      "attack": 65,
      "defence": 55,
      "spAttack": 65,
      "spDefence": 55,
      "speed": 69
    }
  },
  {
    "no": 537,
    "name": "ガマゲロゲ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "じめん"],
    "abilities": ["すいすい", "どくしゅ"],
    "hiddenAbilities": ["ちょすい"],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defence": 75,
      "spAttack": 85,
      "spDefence": 75,
      "speed": 74
    }
  },
  {
    "no": 538,
    "name": "ナゲキ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう"],
    "abilities": ["こんじょう", "せいしんりょく"],
    "hiddenAbilities": ["かたやぶり"],
    "stats": {
      "hp": 120,
      "attack": 100,
      "defence": 85,
      "spAttack": 30,
      "spDefence": 85,
      "speed": 45
    }
  },
  {
    "no": 539,
    "name": "ダゲキ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう"],
    "abilities": ["がんじょう", "せいしんりょく"],
    "hiddenAbilities": ["かたやぶり"],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defence": 75,
      "spAttack": 30,
      "spDefence": 75,
      "speed": 85
    }
  },
  {
    "no": 540,
    "name": "クルミル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [541],
    "types": ["むし", "くさ"],
    "abilities": ["むしのしらせ", "ようりょくそ"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 45,
      "attack": 53,
      "defence": 70,
      "spAttack": 40,
      "spDefence": 60,
      "speed": 42
    }
  },
  {
    "no": 541,
    "name": "クルマユ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [542],
    "types": ["むし", "くさ"],
    "abilities": ["リーフガード", "ようりょくそ"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 55,
      "attack": 63,
      "defence": 90,
      "spAttack": 50,
      "spDefence": 80,
      "speed": 42
    }
  },
  {
    "no": 542,
    "name": "ハハコモリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "くさ"],
    "abilities": ["むしのしらせ", "ようりょくそ"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 75,
      "attack": 103,
      "defence": 80,
      "spAttack": 70,
      "spDefence": 80,
      "speed": 92
    }
  },
  {
    "no": 543,
    "name": "フシデ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [544],
    "types": ["むし", "どく"],
    "abilities": ["どくのトゲ", "むしのしらせ"],
    "hiddenAbilities": ["かそく"],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defence": 59,
      "spAttack": 30,
      "spDefence": 39,
      "speed": 57
    }
  },
  {
    "no": 544,
    "name": "ホイーガ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [545],
    "types": ["むし", "どく"],
    "abilities": ["どくのトゲ", "むしのしらせ"],
    "hiddenAbilities": ["かそく"],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defence": 99,
      "spAttack": 40,
      "spDefence": 79,
      "speed": 47
    }
  },
  {
    "no": 545,
    "name": "ペンドラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "どく"],
    "abilities": ["どくのトゲ", "むしのしらせ"],
    "hiddenAbilities": ["かそく"],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defence": 89,
      "spAttack": 55,
      "spDefence": 69,
      "speed": 112
    }
  },
  {
    "no": 546,
    "name": "モンメン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [547],
    "types": ["くさ", "フェアリー"],
    "abilities": ["いたずらごころ", "すりぬけ"],
    "hiddenAbilities": ["ようりょくそ"],
    "stats": {
      "hp": 40,
      "attack": 27,
      "defence": 60,
      "spAttack": 37,
      "spDefence": 50,
      "speed": 66
    }
  },
  {
    "no": 547,
    "name": "エルフーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "フェアリー"],
    "abilities": ["いたずらごころ", "すりぬけ"],
    "hiddenAbilities": ["ようりょくそ"],
    "stats": {
      "hp": 60,
      "attack": 67,
      "defence": 85,
      "spAttack": 77,
      "spDefence": 75,
      "speed": 116
    }
  },
  {
    "no": 548,
    "name": "チュリネ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [549],
    "types": ["くさ"],
    "abilities": ["ようりょくそ", "マイペース"],
    "hiddenAbilities": ["リーフガード"],
    "stats": {
      "hp": 45,
      "attack": 35,
      "defence": 50,
      "spAttack": 70,
      "spDefence": 50,
      "speed": 30
    }
  },
  {
    "no": 549,
    "name": "ドレディア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["ようりょくそ", "マイペース"],
    "hiddenAbilities": ["リーフガード"],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defence": 75,
      "spAttack": 110,
      "spDefence": 75,
      "speed": 90
    }
  },
  {
    "no": 550,
    "name": "バスラオ",
    "form": "あかすじ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["すてみ", "てきおうりょく"],
    "hiddenAbilities": ["かたやぶり"],
    "stats": {
      "hp": 70,
      "attack": 92,
      "defence": 65,
      "spAttack": 80,
      "spDefence": 55,
      "speed": 98
    }
  },
  {
    "no": 550,
    "name": "バスラオ",
    "form": "あおすじ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["いしあたま", "てきおうりょく"],
    "hiddenAbilities": ["かたやぶり"],
    "stats": {
      "hp": 70,
      "attack": 92,
      "defence": 65,
      "spAttack": 80,
      "spDefence": 55,
      "speed": 98
    }
  },
  {
    "no": 551,
    "name": "メグロコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [552],
    "types": ["じめん", "あく"],
    "abilities": ["いかく", "じしんかじょう"],
    "hiddenAbilities": ["いかりのつぼ"],
    "stats": {
      "hp": 50,
      "attack": 72,
      "defence": 35,
      "spAttack": 35,
      "spDefence": 35,
      "speed": 65
    }
  },
  {
    "no": 552,
    "name": "ワルビル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [553],
    "types": ["じめん", "あく"],
    "abilities": ["いかく", "じしんかじょう"],
    "hiddenAbilities": ["いかりのつぼ"],
    "stats": {
      "hp": 60,
      "attack": 82,
      "defence": 45,
      "spAttack": 45,
      "spDefence": 45,
      "speed": 74
    }
  },
  {
    "no": 553,
    "name": "ワルビアル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん", "あく"],
    "abilities": ["いかく", "じしんかじょう"],
    "hiddenAbilities": ["いかりのつぼ"],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defence": 80,
      "spAttack": 65,
      "spDefence": 70,
      "speed": 92
    }
  },
  {
    "no": 554,
    "name": "ダルマッカ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [555],
    "types": ["ほのお"],
    "abilities": ["はりきり"],
    "hiddenAbilities": ["せいしんりょく"],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defence": 45,
      "spAttack": 15,
      "spDefence": 45,
      "speed": 50
    }
  },
  {
    "no": 555,
    "name": "ヒヒダルマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお"],
    "abilities": ["ちからずく"],
    "hiddenAbilities": ["ダルマモード"],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defence": 55,
      "spAttack": 30,
      "spDefence": 55,
      "speed": 95
    }
  },
  {
    "no": 555,
    "name": "ヒヒダルマ",
    "form": "ダルマモード",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "エスパー"],
    "abilities": [],
    "hiddenAbilities": ["ダルマモード"],
    "stats": {
      "hp": 105,
      "attack": 30,
      "defence": 105,
      "spAttack": 140,
      "spDefence": 105,
      "speed": 55
    }
  },
  {
    "no": 556,
    "name": "マラカッチ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["ちょすい", "ようりょくそ"],
    "hiddenAbilities": ["よびみず"],
    "stats": {
      "hp": 75,
      "attack": 86,
      "defence": 67,
      "spAttack": 106,
      "spDefence": 67,
      "speed": 60
    }
  },
  {
    "no": 557,
    "name": "イシズマイ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [558],
    "types": ["むし", "いわ"],
    "abilities": ["がんじょう", "シェルアーマー"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defence": 85,
      "spAttack": 35,
      "spDefence": 35,
      "speed": 55
    }
  },
  {
    "no": 558,
    "name": "イワパレス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "いわ"],
    "abilities": ["がんじょう", "シェルアーマー"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defence": 125,
      "spAttack": 65,
      "spDefence": 75,
      "speed": 45
    }
  },
  {
    "no": 559,
    "name": "ズルッグ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [560],
    "types": ["あく", "かくとう"],
    "abilities": ["だっぴ", "じしんかじょう"],
    "hiddenAbilities": ["いかく"],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defence": 70,
      "spAttack": 35,
      "spDefence": 70,
      "speed": 48
    }
  },
  {
    "no": 560,
    "name": "ズルズキン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "かくとう"],
    "abilities": ["だっぴ", "じしんかじょう"],
    "hiddenAbilities": ["いかく"],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defence": 115,
      "spAttack": 45,
      "spDefence": 115,
      "speed": 58
    }
  },
  {
    "no": 561,
    "name": "シンボラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "ひこう"],
    "abilities": ["ミラクルスキン", "マジックガード"],
    "hiddenAbilities": ["いろめがね"],
    "stats": {
      "hp": 72,
      "attack": 58,
      "defence": 80,
      "spAttack": 103,
      "spDefence": 80,
      "speed": 97
    }
  },
  {
    "no": 562,
    "name": "デスマス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [563],
    "types": ["ゴースト"],
    "abilities": ["ミイラ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 38,
      "attack": 30,
      "defence": 85,
      "spAttack": 55,
      "spDefence": 65,
      "speed": 30
    }
  },
  {
    "no": 563,
    "name": "デスカーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト"],
    "abilities": ["ミイラ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 58,
      "attack": 50,
      "defence": 145,
      "spAttack": 95,
      "spDefence": 105,
      "speed": 30
    }
  },
  {
    "no": 564,
    "name": "プロトーガ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [565],
    "types": ["みず", "いわ"],
    "abilities": ["ハードロック", "がんじょう"],
    "hiddenAbilities": ["すいすい"],
    "stats": {
      "hp": 54,
      "attack": 78,
      "defence": 103,
      "spAttack": 53,
      "spDefence": 45,
      "speed": 22
    }
  },
  {
    "no": 565,
    "name": "アバゴーラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "いわ"],
    "abilities": ["ハードロック", "がんじょう"],
    "hiddenAbilities": ["すいすい"],
    "stats": {
      "hp": 74,
      "attack": 108,
      "defence": 133,
      "spAttack": 83,
      "spDefence": 65,
      "speed": 32
    }
  },
  {
    "no": 566,
    "name": "アーケン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [567],
    "types": ["いわ", "ひこう"],
    "abilities": ["よわき"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 55,
      "attack": 112,
      "defence": 45,
      "spAttack": 74,
      "spDefence": 45,
      "speed": 70
    }
  },
  {
    "no": 567,
    "name": "アーケオス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "ひこう"],
    "abilities": ["よわき"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 140,
      "defence": 65,
      "spAttack": 112,
      "spDefence": 65,
      "speed": 110
    }
  },
  {
    "no": 568,
    "name": "ヤブクロン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [569],
    "types": ["どく"],
    "abilities": ["あくしゅう", "ねんちゃく"],
    "hiddenAbilities": ["ゆうばく"],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defence": 62,
      "spAttack": 40,
      "spDefence": 62,
      "speed": 65
    }
  },
  {
    "no": 569,
    "name": "ダストダス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく"],
    "abilities": ["あくしゅう", "ねんちゃく"],
    "hiddenAbilities": ["ゆうばく"],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defence": 82,
      "spAttack": 60,
      "spDefence": 82,
      "speed": 75
    }
  },
  {
    "no": 570,
    "name": "ゾロア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [571],
    "types": ["あく"],
    "abilities": ["イリュージョン"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defence": 40,
      "spAttack": 80,
      "spDefence": 40,
      "speed": 65
    }
  },
  {
    "no": 571,
    "name": "ゾロアーク",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく"],
    "abilities": ["イリュージョン"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 105,
      "defence": 60,
      "spAttack": 120,
      "spDefence": 60,
      "speed": 105
    }
  },
  {
    "no": 572,
    "name": "チラーミィ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [573],
    "types": ["ノーマル"],
    "abilities": ["メロメロボディ", "テクニシャン"],
    "hiddenAbilities": ["スキルリンク"],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defence": 40,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 75
    }
  },
  {
    "no": 573,
    "name": "チラチーノ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["メロメロボディ", "テクニシャン"],
    "hiddenAbilities": ["スキルリンク"],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defence": 60,
      "spAttack": 65,
      "spDefence": 60,
      "speed": 115
    }
  },
  {
    "no": 574,
    "name": "ゴチム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [575],
    "types": ["エスパー"],
    "abilities": ["おみとおし", "かちき"],
    "hiddenAbilities": ["かげふみ"],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defence": 50,
      "spAttack": 55,
      "spDefence": 65,
      "speed": 45
    }
  },
  {
    "no": 575,
    "name": "ゴチミル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [576],
    "types": ["エスパー"],
    "abilities": ["おみとおし", "かちき"],
    "hiddenAbilities": ["かげふみ"],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defence": 70,
      "spAttack": 75,
      "spDefence": 85,
      "speed": 55
    }
  },
  {
    "no": 576,
    "name": "ゴチルゼル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["おみとおし", "かちき"],
    "hiddenAbilities": ["かげふみ"],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defence": 95,
      "spAttack": 95,
      "spDefence": 110,
      "speed": 65
    }
  },
  {
    "no": 577,
    "name": "ユニラン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [578],
    "types": ["エスパー"],
    "abilities": ["ぼうじん", "マジックガード"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defence": 40,
      "spAttack": 105,
      "spDefence": 50,
      "speed": 20
    }
  },
  {
    "no": 578,
    "name": "ダブラン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [579],
    "types": ["エスパー"],
    "abilities": ["ぼうじん", "マジックガード"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 65,
      "attack": 40,
      "defence": 50,
      "spAttack": 125,
      "spDefence": 60,
      "speed": 30
    }
  },
  {
    "no": 579,
    "name": "ランクルス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["ぼうじん", "マジックガード"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defence": 75,
      "spAttack": 125,
      "spDefence": 85,
      "speed": 30
    }
  },
  {
    "no": 580,
    "name": "コアルヒー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [581],
    "types": ["みず", "ひこう"],
    "abilities": ["するどいめ", "はとむね"],
    "hiddenAbilities": ["うるおいボディ"],
    "stats": {
      "hp": 62,
      "attack": 44,
      "defence": 50,
      "spAttack": 44,
      "spDefence": 50,
      "speed": 55
    }
  },
  {
    "no": 581,
    "name": "スワンナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "ひこう"],
    "abilities": ["するどいめ", "はとむね"],
    "hiddenAbilities": ["うるおいボディ"],
    "stats": {
      "hp": 75,
      "attack": 87,
      "defence": 63,
      "spAttack": 87,
      "spDefence": 63,
      "speed": 98
    }
  },
  {
    "no": 582,
    "name": "バニプッチ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [583],
    "types": ["こおり"],
    "abilities": ["アイスボディ", "ゆきがくれ"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 36,
      "attack": 50,
      "defence": 50,
      "spAttack": 65,
      "spDefence": 60,
      "speed": 44
    }
  },
  {
    "no": 583,
    "name": "バニリッチ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [584],
    "types": ["こおり"],
    "abilities": ["アイスボディ", "ゆきがくれ"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 51,
      "attack": 65,
      "defence": 65,
      "spAttack": 80,
      "spDefence": 75,
      "speed": 59
    }
  },
  {
    "no": 584,
    "name": "バイバニラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり"],
    "abilities": ["アイスボディ", "ゆきふらし"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 71,
      "attack": 95,
      "defence": 85,
      "spAttack": 110,
      "spDefence": 95,
      "speed": 79
    }
  },
  {
    "no": 585,
    "name": "シキジカ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [586],
    "types": ["ノーマル", "くさ"],
    "abilities": ["ようりょくそ", "そうしょく"],
    "hiddenAbilities": ["てんのめぐみ"],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defence": 50,
      "spAttack": 40,
      "spDefence": 50,
      "speed": 75
    }
  },
  {
    "no": 586,
    "name": "メブキジカ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "くさ"],
    "abilities": ["ようりょくそ", "そうしょく"],
    "hiddenAbilities": ["てんのめぐみ"],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defence": 70,
      "spAttack": 60,
      "spDefence": 70,
      "speed": 95
    }
  },
  {
    "no": 587,
    "name": "エモンガ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "ひこう"],
    "abilities": ["せいでんき"],
    "hiddenAbilities": ["でんきエンジン"],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defence": 60,
      "spAttack": 75,
      "spDefence": 60,
      "speed": 103
    }
  },
  {
    "no": 588,
    "name": "カブルモ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [589],
    "types": ["むし"],
    "abilities": ["むしのしらせ", "だっぴ"],
    "hiddenAbilities": ["ノーガード"],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defence": 45,
      "spAttack": 40,
      "spDefence": 45,
      "speed": 60
    }
  },
  {
    "no": 589,
    "name": "シュバルゴ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "はがね"],
    "abilities": ["むしのしらせ", "シェルアーマー"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 70,
      "attack": 135,
      "defence": 105,
      "spAttack": 60,
      "spDefence": 105,
      "speed": 20
    }
  },
  {
    "no": 590,
    "name": "タマゲタケ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [591],
    "types": ["くさ", "どく"],
    "abilities": ["ほうし"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 69,
      "attack": 55,
      "defence": 45,
      "spAttack": 55,
      "spDefence": 55,
      "speed": 15
    }
  },
  {
    "no": 591,
    "name": "モロバレル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "どく"],
    "abilities": ["ほうし"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 114,
      "attack": 85,
      "defence": 70,
      "spAttack": 85,
      "spDefence": 80,
      "speed": 30
    }
  },
  {
    "no": 592,
    "name": "プルリル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [593],
    "types": ["みず", "ゴースト"],
    "abilities": ["ちょすい", "のろわれボディ"],
    "hiddenAbilities": ["しめりけ"],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defence": 50,
      "spAttack": 65,
      "spDefence": 85,
      "speed": 40
    }
  },
  {
    "no": 593,
    "name": "ブルンゲル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "ゴースト"],
    "abilities": ["ちょすい", "のろわれボディ"],
    "hiddenAbilities": ["しめりけ"],
    "stats": {
      "hp": 100,
      "attack": 60,
      "defence": 70,
      "spAttack": 85,
      "spDefence": 105,
      "speed": 60
    }
  },
  {
    "no": 594,
    "name": "ママンボウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["いやしのこころ", "うるおいボディ"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 165,
      "attack": 75,
      "defence": 80,
      "spAttack": 40,
      "spDefence": 45,
      "speed": 65
    }
  },
  {
    "no": 595,
    "name": "バチュル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [596],
    "types": ["むし", "でんき"],
    "abilities": ["ふくがん", "きんちょうかん"],
    "hiddenAbilities": ["むしのしらせ"],
    "stats": {
      "hp": 50,
      "attack": 47,
      "defence": 50,
      "spAttack": 57,
      "spDefence": 50,
      "speed": 65
    }
  },
  {
    "no": 596,
    "name": "デンチュラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "でんき"],
    "abilities": ["ふくがん", "きんちょうかん"],
    "hiddenAbilities": ["むしのしらせ"],
    "stats": {
      "hp": 70,
      "attack": 77,
      "defence": 60,
      "spAttack": 97,
      "spDefence": 60,
      "speed": 108
    }
  },
  {
    "no": 597,
    "name": "テッシード",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [598],
    "types": ["くさ", "はがね"],
    "abilities": ["てつのトゲ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 44,
      "attack": 50,
      "defence": 91,
      "spAttack": 24,
      "spDefence": 86,
      "speed": 10
    }
  },
  {
    "no": 598,
    "name": "ナットレイ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "はがね"],
    "abilities": ["てつのトゲ"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 74,
      "attack": 94,
      "defence": 131,
      "spAttack": 54,
      "spDefence": 116,
      "speed": 20
    }
  },
  {
    "no": 599,
    "name": "ギアル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [600],
    "types": ["はがね"],
    "abilities": ["プラス", "マイナス"],
    "hiddenAbilities": ["クリアボディ"],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defence": 70,
      "spAttack": 45,
      "spDefence": 60,
      "speed": 30
    }
  },
  {
    "no": 600,
    "name": "ギギアル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [601],
    "types": ["はがね"],
    "abilities": ["プラス", "マイナス"],
    "hiddenAbilities": ["クリアボディ"],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defence": 95,
      "spAttack": 70,
      "spDefence": 85,
      "speed": 50
    }
  },
  {
    "no": 601,
    "name": "ギギギアル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね"],
    "abilities": ["プラス", "マイナス"],
    "hiddenAbilities": ["クリアボディ"],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defence": 115,
      "spAttack": 70,
      "spDefence": 85,
      "speed": 90
    }
  },
  {
    "no": 602,
    "name": "シビシラス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [603],
    "types": ["でんき"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defence": 40,
      "spAttack": 45,
      "spDefence": 40,
      "speed": 60
    }
  },
  {
    "no": 603,
    "name": "シビビール",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [604],
    "types": ["でんき"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 65,
      "attack": 85,
      "defence": 70,
      "spAttack": 75,
      "spDefence": 70,
      "speed": 40
    }
  },
  {
    "no": 604,
    "name": "シビルドン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defence": 80,
      "spAttack": 105,
      "spDefence": 80,
      "speed": 50
    }
  },
  {
    "no": 605,
    "name": "リグレー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [606],
    "types": ["エスパー"],
    "abilities": ["テレパシー", "シンクロ"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defence": 55,
      "spAttack": 85,
      "spDefence": 55,
      "speed": 30
    }
  },
  {
    "no": 606,
    "name": "オーベム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["テレパシー", "シンクロ"],
    "hiddenAbilities": ["アナライズ"],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defence": 75,
      "spAttack": 125,
      "spDefence": 95,
      "speed": 40
    }
  },
  {
    "no": 607,
    "name": "ヒトモシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [608],
    "types": ["ゴースト", "ほのお"],
    "abilities": ["もらいび", "ほのおのからだ"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 50,
      "attack": 30,
      "defence": 55,
      "spAttack": 65,
      "spDefence": 55,
      "speed": 20
    }
  },
  {
    "no": 608,
    "name": "ランプラー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [609],
    "types": ["ゴースト", "ほのお"],
    "abilities": ["もらいび", "ほのおのからだ"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defence": 60,
      "spAttack": 95,
      "spDefence": 60,
      "speed": 55
    }
  },
  {
    "no": 609,
    "name": "シャンデラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "ほのお"],
    "abilities": ["もらいび", "ほのおのからだ"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defence": 90,
      "spAttack": 145,
      "spDefence": 90,
      "speed": 80
    }
  },
  {
    "no": 610,
    "name": "キバゴ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [611],
    "types": ["ドラゴン"],
    "abilities": ["とうそうしん", "かたやぶり"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 46,
      "attack": 87,
      "defence": 60,
      "spAttack": 30,
      "spDefence": 40,
      "speed": 57
    }
  },
  {
    "no": 611,
    "name": "オノンド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [612],
    "types": ["ドラゴン"],
    "abilities": ["とうそうしん", "かたやぶり"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 66,
      "attack": 117,
      "defence": 70,
      "spAttack": 40,
      "spDefence": 50,
      "speed": 67
    }
  },
  {
    "no": 612,
    "name": "オノノクス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン"],
    "abilities": ["とうそうしん", "かたやぶり"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 76,
      "attack": 147,
      "defence": 90,
      "spAttack": 60,
      "spDefence": 70,
      "speed": 97
    }
  },
  {
    "no": 613,
    "name": "クマシュン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [614],
    "types": ["こおり"],
    "abilities": ["ゆきがくれ", "ゆきかき"],
    "hiddenAbilities": ["びびり"],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defence": 40,
      "spAttack": 60,
      "spDefence": 40,
      "speed": 40
    }
  },
  {
    "no": 614,
    "name": "ツンベアー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり"],
    "abilities": ["ゆきがくれ", "ゆきかき"],
    "hiddenAbilities": ["すいすい"],
    "stats": {
      "hp": 95,
      "attack": 130,
      "defence": 80,
      "spAttack": 70,
      "spDefence": 80,
      "speed": 50
    }
  },
  {
    "no": 615,
    "name": "フリージオ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 50,
      "defence": 50,
      "spAttack": 95,
      "spDefence": 135,
      "speed": 105
    }
  },
  {
    "no": 616,
    "name": "チョボマキ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [617],
    "types": ["むし"],
    "abilities": ["うるおいボディ", "シェルアーマー"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 50,
      "attack": 40,
      "defence": 85,
      "spAttack": 40,
      "spDefence": 65,
      "speed": 25
    }
  },
  {
    "no": 617,
    "name": "アギルダー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし"],
    "abilities": ["うるおいボディ", "ねんちゃく"],
    "hiddenAbilities": ["かるわざ"],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defence": 40,
      "spAttack": 100,
      "spDefence": 60,
      "speed": 145
    }
  },
  {
    "no": 618,
    "name": "マッギョ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん", "でんき"],
    "abilities": ["せいでんき", "じゅうなん"],
    "hiddenAbilities": ["すながくれ"],
    "stats": {
      "hp": 109,
      "attack": 66,
      "defence": 84,
      "spAttack": 81,
      "spDefence": 99,
      "speed": 32
    }
  },
  {
    "no": 619,
    "name": "コジョフー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [620],
    "types": ["かくとう"],
    "abilities": ["せいしんりょく", "さいせいりょく"],
    "hiddenAbilities": ["すてみ"],
    "stats": {
      "hp": 45,
      "attack": 85,
      "defence": 50,
      "spAttack": 55,
      "spDefence": 50,
      "speed": 65
    }
  },
  {
    "no": 620,
    "name": "コジョンド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう"],
    "abilities": ["せいしんりょく", "さいせいりょく"],
    "hiddenAbilities": ["すてみ"],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defence": 60,
      "spAttack": 95,
      "spDefence": 60,
      "speed": 105
    }
  },
  {
    "no": 621,
    "name": "クリムガン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン"],
    "abilities": ["さめはだ", "ちからずく"],
    "hiddenAbilities": ["かたやぶり"],
    "stats": {
      "hp": 77,
      "attack": 120,
      "defence": 90,
      "spAttack": 60,
      "spDefence": 90,
      "speed": 48
    }
  },
  {
    "no": 622,
    "name": "ゴビット",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [623],
    "types": ["じめん", "ゴースト"],
    "abilities": ["てつのこぶし", "ぶきよう"],
    "hiddenAbilities": ["ノーガード"],
    "stats": {
      "hp": 59,
      "attack": 74,
      "defence": 50,
      "spAttack": 35,
      "spDefence": 50,
      "speed": 35
    }
  },
  {
    "no": 623,
    "name": "ゴルーグ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん", "ゴースト"],
    "abilities": ["てつのこぶし", "ぶきよう"],
    "hiddenAbilities": ["ノーガード"],
    "stats": {
      "hp": 89,
      "attack": 124,
      "defence": 80,
      "spAttack": 55,
      "spDefence": 80,
      "speed": 55
    }
  },
  {
    "no": 624,
    "name": "コマタナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [625],
    "types": ["あく", "はがね"],
    "abilities": ["まけんき", "せいしんりょく"],
    "hiddenAbilities": ["プレッシャー"],
    "stats": {
      "hp": 45,
      "attack": 85,
      "defence": 70,
      "spAttack": 40,
      "spDefence": 40,
      "speed": 60
    }
  },
  {
    "no": 625,
    "name": "キリキザン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "はがね"],
    "abilities": ["まけんき", "せいしんりょく"],
    "hiddenAbilities": ["プレッシャー"],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defence": 100,
      "spAttack": 60,
      "spDefence": 70,
      "speed": 70
    }
  },
  {
    "no": 626,
    "name": "バッフロン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["すてみ", "そうしょく"],
    "hiddenAbilities": ["ぼうおん"],
    "stats": {
      "hp": 95,
      "attack": 110,
      "defence": 95,
      "spAttack": 40,
      "spDefence": 95,
      "speed": 55
    }
  },
  {
    "no": 627,
    "name": "ワシボン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [628],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ", "ちからずく"],
    "hiddenAbilities": ["はりきり"],
    "stats": {
      "hp": 70,
      "attack": 83,
      "defence": 50,
      "spAttack": 37,
      "spDefence": 50,
      "speed": 60
    }
  },
  {
    "no": 628,
    "name": "ウォーグル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ", "ちからずく"],
    "hiddenAbilities": ["まけんき"],
    "stats": {
      "hp": 100,
      "attack": 123,
      "defence": 75,
      "spAttack": 57,
      "spDefence": 75,
      "speed": 80
    }
  },
  {
    "no": 629,
    "name": "バルチャイ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [630],
    "types": ["あく", "ひこう"],
    "abilities": ["はとむね", "ぼうじん"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defence": 75,
      "spAttack": 45,
      "spDefence": 65,
      "speed": 60
    }
  },
  {
    "no": 630,
    "name": "バルジーナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "ひこう"],
    "abilities": ["はとむね", "ぼうじん"],
    "hiddenAbilities": ["くだけるよろい"],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defence": 105,
      "spAttack": 55,
      "spDefence": 95,
      "speed": 80
    }
  },
  {
    "no": 631,
    "name": "クイタラン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお"],
    "abilities": ["くいしんぼう", "もらいび"],
    "hiddenAbilities": ["しろいけむり"],
    "stats": {
      "hp": 85,
      "attack": 97,
      "defence": 66,
      "spAttack": 105,
      "spDefence": 66,
      "speed": 65
    }
  },
  {
    "no": 632,
    "name": "アイアント",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "はがね"],
    "abilities": ["むしのしらせ", "はりきり"],
    "hiddenAbilities": ["なまけ"],
    "stats": {
      "hp": 58,
      "attack": 109,
      "defence": 112,
      "spAttack": 48,
      "spDefence": 48,
      "speed": 109
    }
  },
  {
    "no": 633,
    "name": "モノズ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [634],
    "types": ["あく", "ドラゴン"],
    "abilities": ["はりきり"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 52,
      "attack": 65,
      "defence": 50,
      "spAttack": 45,
      "spDefence": 50,
      "speed": 38
    }
  },
  {
    "no": 634,
    "name": "ジヘッド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [635],
    "types": ["あく", "ドラゴン"],
    "abilities": ["はりきり"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 72,
      "attack": 85,
      "defence": 70,
      "spAttack": 65,
      "spDefence": 70,
      "speed": 58
    }
  },
  {
    "no": 635,
    "name": "サザンドラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "ドラゴン"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 92,
      "attack": 105,
      "defence": 90,
      "spAttack": 125,
      "spDefence": 90,
      "speed": 98
    }
  },
  {
    "no": 636,
    "name": "メラルバ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [637],
    "types": ["むし", "ほのお"],
    "abilities": ["ほのおのからだ"],
    "hiddenAbilities": ["むしのしらせ"],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defence": 55,
      "spAttack": 50,
      "spDefence": 55,
      "speed": 60
    }
  },
  {
    "no": 637,
    "name": "ウルガモス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "ほのお"],
    "abilities": ["ほのおのからだ"],
    "hiddenAbilities": ["むしのしらせ"],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defence": 65,
      "spAttack": 135,
      "spDefence": 105,
      "speed": 100
    }
  },
  {
    "no": 638,
    "name": "コバルオン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "かくとう"],
    "abilities": ["せいぎのこころ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defence": 129,
      "spAttack": 90,
      "spDefence": 72,
      "speed": 108
    }
  },
  {
    "no": 639,
    "name": "テラキオン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "かくとう"],
    "abilities": ["せいぎのこころ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 91,
      "attack": 129,
      "defence": 90,
      "spAttack": 72,
      "spDefence": 90,
      "speed": 108
    }
  },
  {
    "no": 640,
    "name": "ビリジオン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "かくとう"],
    "abilities": ["せいぎのこころ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defence": 72,
      "spAttack": 90,
      "spDefence": 129,
      "speed": 108
    }
  },
  {
    "no": 641,
    "name": "トルネロス",
    "form": "けしんフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ひこう"],
    "abilities": ["いたずらごころ"],
    "hiddenAbilities": ["まけんき"],
    "stats": {
      "hp": 79,
      "attack": 115,
      "defence": 70,
      "spAttack": 125,
      "spDefence": 80,
      "speed": 111
    }
  },
  {
    "no": 641,
    "name": "トルネロス",
    "form": "れいじゅうフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ひこう"],
    "abilities": ["さいせいりょく"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 79,
      "attack": 100,
      "defence": 80,
      "spAttack": 110,
      "spDefence": 90,
      "speed": 121
    }
  },
  {
    "no": 642,
    "name": "ボルトロス",
    "form": "けしんフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "ひこう"],
    "abilities": ["いたずらごころ"],
    "hiddenAbilities": ["まけんき"],
    "stats": {
      "hp": 79,
      "attack": 115,
      "defence": 70,
      "spAttack": 125,
      "spDefence": 80,
      "speed": 111
    }
  },
  {
    "no": 642,
    "name": "ボルトロス",
    "form": "れいじゅうフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "ひこう"],
    "abilities": ["ちくでん"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 79,
      "attack": 105,
      "defence": 70,
      "spAttack": 145,
      "spDefence": 80,
      "speed": 101
    }
  },
  {
    "no": 643,
    "name": "レシラム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "ほのお"],
    "abilities": ["ターボブレイズ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defence": 100,
      "spAttack": 150,
      "spDefence": 120,
      "speed": 90
    }
  },
  {
    "no": 644,
    "name": "ゼクロム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "でんき"],
    "abilities": ["テラボルテージ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defence": 120,
      "spAttack": 120,
      "spDefence": 100,
      "speed": 90
    }
  },
  {
    "no": 645,
    "name": "ランドロス",
    "form": "けしんフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん", "ひこう"],
    "abilities": ["すなのちから"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 89,
      "attack": 125,
      "defence": 90,
      "spAttack": 115,
      "spDefence": 80,
      "speed": 101
    }
  },
  {
    "no": 645,
    "name": "ランドロス",
    "form": "れいじゅうフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん", "ひこう"],
    "abilities": ["いかく"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 89,
      "attack": 145,
      "defence": 90,
      "spAttack": 105,
      "spDefence": 80,
      "speed": 91
    }
  },
  {
    "no": 646,
    "name": "キュレム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "こおり"],
    "abilities": ["プレッシャー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 125,
      "attack": 130,
      "defence": 90,
      "spAttack": 130,
      "spDefence": 90,
      "speed": 95
    }
  },
  {
    "no": 646,
    "name": "キュレム",
    "form": "ホワイトキュレム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "こおり"],
    "abilities": ["ターボブレイズ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 125,
      "attack": 120,
      "defence": 90,
      "spAttack": 170,
      "spDefence": 100,
      "speed": 95
    }
  },
  {
    "no": 646,
    "name": "キュレム",
    "form": "ブラックキュレム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "こおり"],
    "abilities": ["テラボルテージ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 125,
      "attack": 170,
      "defence": 100,
      "spAttack": 120,
      "spDefence": 90,
      "speed": 95
    }
  },
  {
    "no": 647,
    "name": "ケルディオ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "かくとう"],
    "abilities": ["せいぎのこころ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 91,
      "attack": 72,
      "defence": 90,
      "spAttack": 129,
      "spDefence": 90,
      "speed": 108
    }
  },
  {
    "no": 647,
    "name": "ケルディオ",
    "form": "かくごのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "かくとう"],
    "abilities": ["せいぎのこころ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 91,
      "attack": 72,
      "defence": 90,
      "spAttack": 129,
      "spDefence": 90,
      "speed": 108
    }
  },
  {
    "no": 648,
    "name": "メロエッタ",
    "form": "ボイスフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "エスパー"],
    "abilities": ["てんのめぐみ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 77,
      "defence": 77,
      "spAttack": 128,
      "spDefence": 128,
      "speed": 90
    }
  },
  {
    "no": 648,
    "name": "メロエッタ",
    "form": "ステップフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "かくとう"],
    "abilities": ["てんのめぐみ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 100,
      "attack": 128,
      "defence": 90,
      "spAttack": 77,
      "spDefence": 77,
      "speed": 128
    }
  },
  {
    "no": 649,
    "name": "ゲノセクト",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "はがね"],
    "abilities": ["ダウンロード"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 71,
      "attack": 120,
      "defence": 95,
      "spAttack": 120,
      "spDefence": 95,
      "speed": 99
    }
  },
  {
    "no": 650,
    "name": "ハリマロン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [651],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["ぼうだん"],
    "stats": {
      "hp": 56,
      "attack": 61,
      "defence": 65,
      "spAttack": 48,
      "spDefence": 45,
      "speed": 38
    }
  },
  {
    "no": 651,
    "name": "ハリボーグ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [652],
    "types": ["くさ"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["ぼうだん"],
    "stats": {
      "hp": 61,
      "attack": 78,
      "defence": 95,
      "spAttack": 56,
      "spDefence": 58,
      "speed": 57
    }
  },
  {
    "no": 652,
    "name": "ブリガロン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "かくとう"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["ぼうだん"],
    "stats": {
      "hp": 88,
      "attack": 107,
      "defence": 122,
      "spAttack": 74,
      "spDefence": 75,
      "speed": 64
    }
  },
  {
    "no": 653,
    "name": "フォッコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [654],
    "types": ["ほのお"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["マジシャン"],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defence": 40,
      "spAttack": 62,
      "spDefence": 60,
      "speed": 60
    }
  },
  {
    "no": 654,
    "name": "テールナー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [655],
    "types": ["ほのお"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["マジシャン"],
    "stats": {
      "hp": 59,
      "attack": 59,
      "defence": 58,
      "spAttack": 90,
      "spDefence": 70,
      "speed": 73
    }
  },
  {
    "no": 655,
    "name": "マフォクシー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "エスパー"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["マジシャン"],
    "stats": {
      "hp": 75,
      "attack": 69,
      "defence": 72,
      "spAttack": 114,
      "spDefence": 100,
      "speed": 104
    }
  },
  {
    "no": 656,
    "name": "ケロマツ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [657],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["へんげんじざい"],
    "stats": {
      "hp": 41,
      "attack": 56,
      "defence": 40,
      "spAttack": 62,
      "spDefence": 44,
      "speed": 71
    }
  },
  {
    "no": 657,
    "name": "ゲコガシラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [658],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["へんげんじざい"],
    "stats": {
      "hp": 54,
      "attack": 63,
      "defence": 52,
      "spAttack": 83,
      "spDefence": 56,
      "speed": 97
    }
  },
  {
    "no": 658,
    "name": "ゲッコウガ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "あく"],
    "abilities": ["げきりゅう", "きずなへんげ"],
    "hiddenAbilities": ["へんげんじざい"],
    "stats": {
      "hp": 72,
      "attack": 95,
      "defence": 67,
      "spAttack": 103,
      "spDefence": 71,
      "speed": 122
    }
  },
  {
    "no": 658,
    "name": "ゲッコウガ",
    "form": "サトシゲッコウガ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "あく"],
    "abilities": ["きずなへんげ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 72,
      "attack": 145,
      "defence": 67,
      "spAttack": 153,
      "spDefence": 71,
      "speed": 132
    }
  },
  {
    "no": 659,
    "name": "ホルビー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [660],
    "types": ["ノーマル"],
    "abilities": ["ものひろい", "ほおぶくろ"],
    "hiddenAbilities": ["ちからもち"],
    "stats": {
      "hp": 38,
      "attack": 36,
      "defence": 38,
      "spAttack": 32,
      "spDefence": 36,
      "speed": 57
    }
  },
  {
    "no": 660,
    "name": "ホルード",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "じめん"],
    "abilities": ["ものひろい", "ほおぶくろ"],
    "hiddenAbilities": ["ちからもち"],
    "stats": {
      "hp": 85,
      "attack": 56,
      "defence": 77,
      "spAttack": 50,
      "spDefence": 77,
      "speed": 78
    }
  },
  {
    "no": 661,
    "name": "ヤヤコマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [662],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["はとむね"],
    "hiddenAbilities": ["はやてのつばさ"],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defence": 43,
      "spAttack": 40,
      "spDefence": 38,
      "speed": 62
    }
  },
  {
    "no": 662,
    "name": "ヒノヤコマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [663],
    "types": ["ほのお", "ひこう"],
    "abilities": ["ほのおのからだ"],
    "hiddenAbilities": ["はやてのつばさ"],
    "stats": {
      "hp": 62,
      "attack": 73,
      "defence": 55,
      "spAttack": 56,
      "spDefence": 52,
      "speed": 84
    }
  },
  {
    "no": 663,
    "name": "ファイアロー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "ひこう"],
    "abilities": ["ほのおのからだ"],
    "hiddenAbilities": ["はやてのつばさ"],
    "stats": {
      "hp": 78,
      "attack": 81,
      "defence": 71,
      "spAttack": 74,
      "spDefence": 69,
      "speed": 126
    }
  },
  {
    "no": 664,
    "name": "コフキムシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [665],
    "types": ["むし"],
    "abilities": ["りんぷん", "ふくがん"],
    "hiddenAbilities": ["フレンドガード"],
    "stats": {
      "hp": 38,
      "attack": 35,
      "defence": 40,
      "spAttack": 27,
      "spDefence": 25,
      "speed": 35
    }
  },
  {
    "no": 665,
    "name": "コフーライ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [666],
    "types": ["むし"],
    "abilities": ["だっぴ"],
    "hiddenAbilities": ["フレンドガード"],
    "stats": {
      "hp": 45,
      "attack": 22,
      "defence": 60,
      "spAttack": 27,
      "spDefence": 30,
      "speed": 29
    }
  },
  {
    "no": 666,
    "name": "ビビヨン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "ひこう"],
    "abilities": ["りんぷん", "ふくがん"],
    "hiddenAbilities": ["フレンドガード"],
    "stats": {
      "hp": 80,
      "attack": 52,
      "defence": 50,
      "spAttack": 90,
      "spDefence": 50,
      "speed": 89
    }
  },
  {
    "no": 667,
    "name": "シシコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [668],
    "types": ["ほのお", "ノーマル"],
    "abilities": ["とうそうしん", "きんちょうかん"],
    "hiddenAbilities": ["じしんかじょう"],
    "stats": {
      "hp": 62,
      "attack": 50,
      "defence": 58,
      "spAttack": 73,
      "spDefence": 54,
      "speed": 72
    }
  },
  {
    "no": 668,
    "name": "カエンジシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "ノーマル"],
    "abilities": ["とうそうしん", "きんちょうかん"],
    "hiddenAbilities": ["じしんかじょう"],
    "stats": {
      "hp": 86,
      "attack": 68,
      "defence": 72,
      "spAttack": 109,
      "spDefence": 66,
      "speed": 106
    }
  },
  {
    "no": 669,
    "name": "フラベベ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [670],
    "types": ["フェアリー"],
    "abilities": ["フラワーベール"],
    "hiddenAbilities": ["きょうせい"],
    "stats": {
      "hp": 44,
      "attack": 38,
      "defence": 39,
      "spAttack": 61,
      "spDefence": 79,
      "speed": 42
    }
  },
  {
    "no": 670,
    "name": "フラエッテ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [671],
    "types": ["フェアリー"],
    "abilities": ["フラワーベール"],
    "hiddenAbilities": ["きょうせい"],
    "stats": {
      "hp": 54,
      "attack": 45,
      "defence": 47,
      "spAttack": 75,
      "spDefence": 98,
      "speed": 52
    }
  },
  {
    "no": 671,
    "name": "フラージェス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["フェアリー"],
    "abilities": ["フラワーベール"],
    "hiddenAbilities": ["きょうせい"],
    "stats": {
      "hp": 78,
      "attack": 65,
      "defence": 68,
      "spAttack": 112,
      "spDefence": 154,
      "speed": 75
    }
  },
  {
    "no": 672,
    "name": "メェークル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [673],
    "types": ["くさ"],
    "abilities": ["そうしょく"],
    "hiddenAbilities": ["くさのけがわ"],
    "stats": {
      "hp": 66,
      "attack": 65,
      "defence": 48,
      "spAttack": 62,
      "spDefence": 57,
      "speed": 52
    }
  },
  {
    "no": 673,
    "name": "ゴーゴート",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["そうしょく"],
    "hiddenAbilities": ["くさのけがわ"],
    "stats": {
      "hp": 123,
      "attack": 100,
      "defence": 62,
      "spAttack": 97,
      "spDefence": 81,
      "speed": 68
    }
  },
  {
    "no": 674,
    "name": "ヤンチャム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [675],
    "types": ["かくとう"],
    "abilities": ["てつのこぶし", "かたやぶり"],
    "hiddenAbilities": ["きもったま"],
    "stats": {
      "hp": 67,
      "attack": 82,
      "defence": 62,
      "spAttack": 46,
      "spDefence": 48,
      "speed": 43
    }
  },
  {
    "no": 675,
    "name": "ゴロンダ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう", "あく"],
    "abilities": ["てつのこぶし", "かたやぶり"],
    "hiddenAbilities": ["きもったま"],
    "stats": {
      "hp": 95,
      "attack": 124,
      "defence": 78,
      "spAttack": 69,
      "spDefence": 71,
      "speed": 58
    }
  },
  {
    "no": 676,
    "name": "トリミアン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["ファーコート"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defence": 60,
      "spAttack": 65,
      "spDefence": 90,
      "speed": 102
    }
  },
  {
    "no": 677,
    "name": "ニャスパー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [678],
    "types": ["エスパー"],
    "abilities": ["するどいめ", "すりぬけ"],
    "hiddenAbilities": ["マイペース"],
    "stats": {
      "hp": 62,
      "attack": 48,
      "defence": 54,
      "spAttack": 63,
      "spDefence": 60,
      "speed": 68
    }
  },
  {
    "no": 678,
    "name": "ニャオニクス",
    "form": "オスのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["するどいめ", "すりぬけ"],
    "hiddenAbilities": ["いたずらごころ"],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defence": 76,
      "spAttack": 83,
      "spDefence": 81,
      "speed": 104
    }
  },
  {
    "no": 678,
    "name": "ニャオニクス",
    "form": "メスのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["するどいめ", "すりぬけ"],
    "hiddenAbilities": ["かちき"],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defence": 76,
      "spAttack": 83,
      "spDefence": 81,
      "speed": 104
    }
  },
  {
    "no": 679,
    "name": "ヒトツキ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [680],
    "types": ["はがね", "ゴースト"],
    "abilities": ["ノーガード"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 45,
      "attack": 80,
      "defence": 100,
      "spAttack": 35,
      "spDefence": 37,
      "speed": 28
    }
  },
  {
    "no": 680,
    "name": "ニダンギル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [681],
    "types": ["はがね", "ゴースト"],
    "abilities": ["ノーガード"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 59,
      "attack": 110,
      "defence": 150,
      "spAttack": 45,
      "spDefence": 49,
      "speed": 35
    }
  },
  {
    "no": 681,
    "name": "ギルガルド",
    "form": "シールドフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "ゴースト"],
    "abilities": ["バトルスイッチ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defence": 150,
      "spAttack": 50,
      "spDefence": 150,
      "speed": 60
    }
  },
  {
    "no": 681,
    "name": "ギルガルド",
    "form": "ブレードフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "ゴースト"],
    "abilities": ["バトルスイッチ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 150,
      "defence": 50,
      "spAttack": 150,
      "spDefence": 50,
      "speed": 60
    }
  },
  {
    "no": 682,
    "name": "シュシュプ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [683],
    "types": ["フェアリー"],
    "abilities": ["いやしのこころ"],
    "hiddenAbilities": ["アロマベール"],
    "stats": {
      "hp": 78,
      "attack": 52,
      "defence": 60,
      "spAttack": 63,
      "spDefence": 65,
      "speed": 23
    }
  },
  {
    "no": 683,
    "name": "フレフワン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["フェアリー"],
    "abilities": ["いやしのこころ"],
    "hiddenAbilities": ["アロマベール"],
    "stats": {
      "hp": 101,
      "attack": 72,
      "defence": 72,
      "spAttack": 99,
      "spDefence": 89,
      "speed": 29
    }
  },
  {
    "no": 684,
    "name": "ペロッパフ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [685],
    "types": ["フェアリー"],
    "abilities": ["スイートベール"],
    "hiddenAbilities": ["かるわざ"],
    "stats": {
      "hp": 62,
      "attack": 48,
      "defence": 66,
      "spAttack": 59,
      "spDefence": 57,
      "speed": 49
    }
  },
  {
    "no": 685,
    "name": "ペロリーム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["フェアリー"],
    "abilities": ["スイートベール"],
    "hiddenAbilities": ["かるわざ"],
    "stats": {
      "hp": 82,
      "attack": 80,
      "defence": 86,
      "spAttack": 85,
      "spDefence": 75,
      "speed": 72
    }
  },
  {
    "no": 686,
    "name": "マーイーカ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [687],
    "types": ["あく", "エスパー"],
    "abilities": ["あまのじゃく", "きゅうばん"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 53,
      "attack": 54,
      "defence": 53,
      "spAttack": 37,
      "spDefence": 46,
      "speed": 45
    }
  },
  {
    "no": 687,
    "name": "カラマネロ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "エスパー"],
    "abilities": ["あまのじゃく", "きゅうばん"],
    "hiddenAbilities": ["すりぬけ"],
    "stats": {
      "hp": 86,
      "attack": 92,
      "defence": 88,
      "spAttack": 68,
      "spDefence": 75,
      "speed": 73
    }
  },
  {
    "no": 688,
    "name": "カメテテ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [689],
    "types": ["いわ", "みず"],
    "abilities": ["かたいツメ", "スナイパー"],
    "hiddenAbilities": ["わるいてぐせ"],
    "stats": {
      "hp": 42,
      "attack": 52,
      "defence": 67,
      "spAttack": 39,
      "spDefence": 56,
      "speed": 50
    }
  },
  {
    "no": 689,
    "name": "ガメノデス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "みず"],
    "abilities": ["かたいツメ", "スナイパー"],
    "hiddenAbilities": ["わるいてぐせ"],
    "stats": {
      "hp": 72,
      "attack": 105,
      "defence": 115,
      "spAttack": 54,
      "spDefence": 86,
      "speed": 68
    }
  },
  {
    "no": 690,
    "name": "クズモー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [691],
    "types": ["どく", "みず"],
    "abilities": ["どくのトゲ", "どくしゅ"],
    "hiddenAbilities": ["てきおうりょく"],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defence": 60,
      "spAttack": 60,
      "spDefence": 60,
      "speed": 30
    }
  },
  {
    "no": 691,
    "name": "ドラミドロ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく", "ドラゴン"],
    "abilities": ["どくのトゲ", "どくしゅ"],
    "hiddenAbilities": ["てきおうりょく"],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defence": 90,
      "spAttack": 97,
      "spDefence": 123,
      "speed": 44
    }
  },
  {
    "no": 692,
    "name": "ウデッポウ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [693],
    "types": ["みず"],
    "abilities": ["メガランチャー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defence": 62,
      "spAttack": 58,
      "spDefence": 63,
      "speed": 44
    }
  },
  {
    "no": 693,
    "name": "ブロスター",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["メガランチャー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 71,
      "attack": 73,
      "defence": 88,
      "spAttack": 120,
      "spDefence": 89,
      "speed": 59
    }
  },
  {
    "no": 694,
    "name": "エリキテル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [695],
    "types": ["でんき", "ノーマル"],
    "abilities": ["かんそうはだ", "すながくれ"],
    "hiddenAbilities": ["サンパワー"],
    "stats": {
      "hp": 44,
      "attack": 38,
      "defence": 33,
      "spAttack": 61,
      "spDefence": 43,
      "speed": 70
    }
  },
  {
    "no": 695,
    "name": "エレザード",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "ノーマル"],
    "abilities": ["かんそうはだ", "すながくれ"],
    "hiddenAbilities": ["サンパワー"],
    "stats": {
      "hp": 62,
      "attack": 55,
      "defence": 52,
      "spAttack": 109,
      "spDefence": 94,
      "speed": 109
    }
  },
  {
    "no": 696,
    "name": "チゴラス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [697],
    "types": ["いわ", "ドラゴン"],
    "abilities": ["がんじょうあご"],
    "hiddenAbilities": ["がんじょう"],
    "stats": {
      "hp": 58,
      "attack": 89,
      "defence": 77,
      "spAttack": 45,
      "spDefence": 45,
      "speed": 48
    }
  },
  {
    "no": 697,
    "name": "ガチゴラス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "ドラゴン"],
    "abilities": ["がんじょうあご"],
    "hiddenAbilities": ["いしあたま"],
    "stats": {
      "hp": 82,
      "attack": 121,
      "defence": 119,
      "spAttack": 69,
      "spDefence": 59,
      "speed": 71
    }
  },
  {
    "no": 698,
    "name": "アマルス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [699],
    "types": ["いわ", "こおり"],
    "abilities": ["フリーズスキン"],
    "hiddenAbilities": ["ゆきふらし"],
    "stats": {
      "hp": 77,
      "attack": 59,
      "defence": 50,
      "spAttack": 67,
      "spDefence": 63,
      "speed": 46
    }
  },
  {
    "no": 699,
    "name": "アマルルガ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "こおり"],
    "abilities": ["フリーズスキン"],
    "hiddenAbilities": ["ゆきふらし"],
    "stats": {
      "hp": 123,
      "attack": 77,
      "defence": 72,
      "spAttack": 99,
      "spDefence": 92,
      "speed": 58
    }
  },
  {
    "no": 700,
    "name": "ニンフィア",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["フェアリー"],
    "abilities": ["メロメロボディ"],
    "hiddenAbilities": ["フェアリースキン"],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defence": 65,
      "spAttack": 110,
      "spDefence": 130,
      "speed": 60
    }
  },
  {
    "no": 701,
    "name": "ルチャブル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう", "ひこう"],
    "abilities": ["じゅうなん", "かるわざ"],
    "hiddenAbilities": ["かたやぶり"],
    "stats": {
      "hp": 78,
      "attack": 92,
      "defence": 75,
      "spAttack": 74,
      "spDefence": 63,
      "speed": 118
    }
  },
  {
    "no": 702,
    "name": "デデンネ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "フェアリー"],
    "abilities": ["ほおぶくろ", "ものひろい"],
    "hiddenAbilities": ["プラス"],
    "stats": {
      "hp": 67,
      "attack": 58,
      "defence": 57,
      "spAttack": 81,
      "spDefence": 67,
      "speed": 101
    }
  },
  {
    "no": 703,
    "name": "メレシー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "フェアリー"],
    "abilities": ["クリアボディ"],
    "hiddenAbilities": ["がんじょう"],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defence": 150,
      "spAttack": 50,
      "spDefence": 150,
      "speed": 50
    }
  },
  {
    "no": 704,
    "name": "ヌメラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [705],
    "types": ["ドラゴン"],
    "abilities": ["そうしょく", "うるおいボディ"],
    "hiddenAbilities": ["ぬめぬめ"],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defence": 35,
      "spAttack": 55,
      "spDefence": 75,
      "speed": 40
    }
  },
  {
    "no": 705,
    "name": "ヌメイル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [706],
    "types": ["ドラゴン"],
    "abilities": ["そうしょく", "うるおいボディ"],
    "hiddenAbilities": ["ぬめぬめ"],
    "stats": {
      "hp": 68,
      "attack": 75,
      "defence": 53,
      "spAttack": 83,
      "spDefence": 113,
      "speed": 60
    }
  },
  {
    "no": 706,
    "name": "ヌメルゴン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン"],
    "abilities": ["そうしょく", "うるおいボディ"],
    "hiddenAbilities": ["ぬめぬめ"],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defence": 70,
      "spAttack": 110,
      "spDefence": 150,
      "speed": 80
    }
  },
  {
    "no": 707,
    "name": "クレッフィ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["フェアリー", "はがね"],
    "abilities": ["いたずらごころ"],
    "hiddenAbilities": ["マジシャン"],
    "stats": {
      "hp": 57,
      "attack": 80,
      "defence": 91,
      "spAttack": 80,
      "spDefence": 87,
      "speed": 75
    }
  },
  {
    "no": 708,
    "name": "ボクレー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [709],
    "types": ["ゴースト", "くさ"],
    "abilities": ["しぜんかいふく", "おみとおし"],
    "hiddenAbilities": ["しゅうかく"],
    "stats": {
      "hp": 43,
      "attack": 70,
      "defence": 48,
      "spAttack": 50,
      "spDefence": 60,
      "speed": 38
    }
  },
  {
    "no": 709,
    "name": "オーロット",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "くさ"],
    "abilities": ["しぜんかいふく", "おみとおし"],
    "hiddenAbilities": ["しゅうかく"],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defence": 76,
      "spAttack": 65,
      "spDefence": 82,
      "speed": 56
    }
  },
  {
    "no": 710,
    "name": "バケッチャ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [711],
    "types": ["ゴースト", "くさ"],
    "abilities": ["ものひろい", "おみとおし"],
    "hiddenAbilities": ["ふみん"],
    "stats": {
      "hp": 49,
      "attack": 66,
      "defence": 70,
      "spAttack": 44,
      "spDefence": 55,
      "speed": 51
    }
  },
  {
    "no": 710,
    "name": "バケッチャ",
    "form": "ちいさいサイズ",
    "isMegaEvolution": false,
    "evolutions": [711],
    "types": ["ゴースト", "くさ"],
    "abilities": ["ものひろい", "おみとおし"],
    "hiddenAbilities": ["ふみん"],
    "stats": {
      "hp": 44,
      "attack": 66,
      "defence": 70,
      "spAttack": 44,
      "spDefence": 55,
      "speed": 56
    }
  },
  {
    "no": 710,
    "name": "バケッチャ",
    "form": "おおきいサイズ",
    "isMegaEvolution": false,
    "evolutions": [711],
    "types": ["ゴースト", "くさ"],
    "abilities": ["ものひろい", "おみとおし"],
    "hiddenAbilities": ["ふみん"],
    "stats": {
      "hp": 54,
      "attack": 66,
      "defence": 70,
      "spAttack": 44,
      "spDefence": 55,
      "speed": 46
    }
  },
  {
    "no": 710,
    "name": "バケッチャ",
    "form": "とくだいサイズ",
    "isMegaEvolution": false,
    "evolutions": [711],
    "types": ["ゴースト", "くさ"],
    "abilities": ["ものひろい", "おみとおし"],
    "hiddenAbilities": ["ふみん"],
    "stats": {
      "hp": 59,
      "attack": 66,
      "defence": 70,
      "spAttack": 44,
      "spDefence": 55,
      "speed": 41
    }
  },
  {
    "no": 711,
    "name": "パンプジン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "くさ"],
    "abilities": ["ものひろい", "おみとおし"],
    "hiddenAbilities": ["ふみん"],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defence": 122,
      "spAttack": 58,
      "spDefence": 75,
      "speed": 84
    }
  },
  {
    "no": 711,
    "name": "パンプジン",
    "form": "ちいさいサイズ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "くさ"],
    "abilities": ["ものひろい", "おみとおし"],
    "hiddenAbilities": ["ふみん"],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defence": 122,
      "spAttack": 58,
      "spDefence": 75,
      "speed": 99
    }
  },
  {
    "no": 711,
    "name": "パンプジン",
    "form": "おおきいサイズ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "くさ"],
    "abilities": ["ものひろい", "おみとおし"],
    "hiddenAbilities": ["ふみん"],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defence": 122,
      "spAttack": 58,
      "spDefence": 75,
      "speed": 69
    }
  },
  {
    "no": 711,
    "name": "パンプジン",
    "form": "とくだいサイズ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "くさ"],
    "abilities": ["ものひろい", "おみとおし"],
    "hiddenAbilities": ["ふみん"],
    "stats": {
      "hp": 85,
      "attack": 100,
      "defence": 122,
      "spAttack": 58,
      "spDefence": 75,
      "speed": 54
    }
  },
  {
    "no": 712,
    "name": "カチコール",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [713],
    "types": ["こおり"],
    "abilities": ["マイペース", "アイスボディ"],
    "hiddenAbilities": ["がんじょう"],
    "stats": {
      "hp": 55,
      "attack": 69,
      "defence": 85,
      "spAttack": 32,
      "spDefence": 35,
      "speed": 28
    }
  },
  {
    "no": 713,
    "name": "クレベース",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["こおり"],
    "abilities": ["マイペース", "アイスボディ"],
    "hiddenAbilities": ["がんじょう"],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defence": 184,
      "spAttack": 44,
      "spDefence": 46,
      "speed": 28
    }
  },
  {
    "no": 714,
    "name": "オンバット",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [715],
    "types": ["ひこう", "ドラゴン"],
    "abilities": ["おみとおし", "すりぬけ"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defence": 35,
      "spAttack": 45,
      "spDefence": 40,
      "speed": 55
    }
  },
  {
    "no": 715,
    "name": "オンバーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ひこう", "ドラゴン"],
    "abilities": ["おみとおし", "すりぬけ"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 85,
      "attack": 70,
      "defence": 80,
      "spAttack": 97,
      "spDefence": 80,
      "speed": 123
    }
  },
  {
    "no": 716,
    "name": "ゼルネアス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["フェアリー"],
    "abilities": ["フェアリーオーラ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 126,
      "attack": 131,
      "defence": 95,
      "spAttack": 131,
      "spDefence": 98,
      "speed": 99
    }
  },
  {
    "no": 717,
    "name": "イベルタル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "ひこう"],
    "abilities": ["ダークオーラ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 126,
      "attack": 131,
      "defence": 95,
      "spAttack": 131,
      "spDefence": 98,
      "speed": 99
    }
  },
  {
    "no": 718,
    "name": "ジガルデ",
    "form": "50%フォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "じめん"],
    "abilities": ["オーラブレイク", "スワームチェンジ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 108,
      "attack": 100,
      "defence": 121,
      "spAttack": 81,
      "spDefence": 95,
      "speed": 95
    }
  },
  {
    "no": 718,
    "name": "ジガルデ",
    "form": "10%フォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "じめん"],
    "abilities": ["オーラブレイク", "スワームチェンジ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 54,
      "attack": 100,
      "defence": 71,
      "spAttack": 61,
      "spDefence": 85,
      "speed": 115
    }
  },
  {
    "no": 718,
    "name": "ジガルデ",
    "form": "パーフェクトフォルム",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "じめん"],
    "abilities": ["スワームチェンジ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 216,
      "attack": 100,
      "defence": 121,
      "spAttack": 91,
      "spDefence": 95,
      "speed": 85
    }
  },
  {
    "no": 719,
    "name": "ディアンシー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "フェアリー"],
    "abilities": ["クリアボディ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 100,
      "defence": 150,
      "spAttack": 100,
      "spDefence": 150,
      "speed": 50
    }
  },
  {
    "no": 719,
    "name": "メガディアンシー",
    "form": "",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["いわ", "フェアリー"],
    "abilities": ["マジックミラー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 50,
      "attack": 160,
      "defence": 110,
      "spAttack": 160,
      "spDefence": 110,
      "speed": 110
    }
  },
  {
    "no": 720,
    "name": "フーパ",
    "form": "いましめられしフーパ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "ゴースト"],
    "abilities": ["マジシャン"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 110,
      "defence": 60,
      "spAttack": 150,
      "spDefence": 130,
      "speed": 70
    }
  },
  {
    "no": 720,
    "name": "フーパ",
    "form": "ときはなたれしフーパ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "あく"],
    "abilities": ["マジシャン"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 160,
      "defence": 60,
      "spAttack": 170,
      "spDefence": 130,
      "speed": 80
    }
  },
  {
    "no": 721,
    "name": "ボルケニオン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "みず"],
    "abilities": ["ちょすい"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 110,
      "defence": 120,
      "spAttack": 130,
      "spDefence": 90,
      "speed": 70
    }
  },
  {
    "no": 722,
    "name": "モクロー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [723],
    "types": ["くさ", "ひこう"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["えんかく"],
    "stats": {
      "hp": 68,
      "attack": 55,
      "defence": 55,
      "spAttack": 50,
      "spDefence": 50,
      "speed": 42
    }
  },
  {
    "no": 723,
    "name": "フクスロー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [724],
    "types": ["くさ", "ひこう"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["えんかく"],
    "stats": {
      "hp": 78,
      "attack": 75,
      "defence": 75,
      "spAttack": 70,
      "spDefence": 70,
      "speed": 52
    }
  },
  {
    "no": 724,
    "name": "ジュナイパー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "ゴースト"],
    "abilities": ["しんりょく"],
    "hiddenAbilities": ["えんかく"],
    "stats": {
      "hp": 78,
      "attack": 107,
      "defence": 75,
      "spAttack": 100,
      "spDefence": 100,
      "speed": 70
    }
  },
  {
    "no": 725,
    "name": "ニャビー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [726],
    "types": ["ほのお"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["いかく"],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defence": 40,
      "spAttack": 60,
      "spDefence": 40,
      "speed": 70
    }
  },
  {
    "no": 726,
    "name": "ニャヒート",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [727],
    "types": ["ほのお"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["いかく"],
    "stats": {
      "hp": 65,
      "attack": 85,
      "defence": 50,
      "spAttack": 80,
      "spDefence": 50,
      "speed": 90
    }
  },
  {
    "no": 727,
    "name": "ガオガエン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "あく"],
    "abilities": ["もうか"],
    "hiddenAbilities": ["いかく"],
    "stats": {
      "hp": 95,
      "attack": 115,
      "defence": 90,
      "spAttack": 80,
      "spDefence": 90,
      "speed": 60
    }
  },
  {
    "no": 728,
    "name": "アシマリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [729],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["うるおいボイス"],
    "stats": {
      "hp": 50,
      "attack": 54,
      "defence": 54,
      "spAttack": 66,
      "spDefence": 56,
      "speed": 40
    }
  },
  {
    "no": 729,
    "name": "オシャマリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [730],
    "types": ["みず"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["うるおいボイス"],
    "stats": {
      "hp": 60,
      "attack": 69,
      "defence": 69,
      "spAttack": 91,
      "spDefence": 81,
      "speed": 50
    }
  },
  {
    "no": 730,
    "name": "アシレーヌ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "フェアリー"],
    "abilities": ["げきりゅう"],
    "hiddenAbilities": ["うるおいボイス"],
    "stats": {
      "hp": 80,
      "attack": 74,
      "defence": 74,
      "spAttack": 126,
      "spDefence": 116,
      "speed": 60
    }
  },
  {
    "no": 731,
    "name": "ツツケラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [732],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ", "スキルリンク"],
    "hiddenAbilities": ["ものひろい"],
    "stats": {
      "hp": 35,
      "attack": 75,
      "defence": 30,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 65
    }
  },
  {
    "no": 732,
    "name": "ケララッパ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [733],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ", "スキルリンク"],
    "hiddenAbilities": ["ものひろい"],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defence": 50,
      "spAttack": 40,
      "spDefence": 50,
      "speed": 75
    }
  },
  {
    "no": 733,
    "name": "ドデカバシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ひこう"],
    "abilities": ["するどいめ", "スキルリンク"],
    "hiddenAbilities": ["ちからずく"],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defence": 75,
      "spAttack": 75,
      "spDefence": 75,
      "speed": 60
    }
  },
  {
    "no": 734,
    "name": "ヤングース",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [735],
    "types": ["ノーマル"],
    "abilities": ["はりこみ", "がんじょうあご"],
    "hiddenAbilities": ["てきおうりょく"],
    "stats": {
      "hp": 48,
      "attack": 70,
      "defence": 30,
      "spAttack": 30,
      "spDefence": 30,
      "speed": 45
    }
  },
  {
    "no": 735,
    "name": "デカグース",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["はりこみ", "がんじょうあご"],
    "hiddenAbilities": ["てきおうりょく"],
    "stats": {
      "hp": 88,
      "attack": 110,
      "defence": 60,
      "spAttack": 55,
      "spDefence": 60,
      "speed": 45
    }
  },
  {
    "no": 736,
    "name": "アゴジムシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [737],
    "types": ["むし"],
    "abilities": ["むしのしらせ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 47,
      "attack": 62,
      "defence": 45,
      "spAttack": 55,
      "spDefence": 45,
      "speed": 46
    }
  },
  {
    "no": 737,
    "name": "デンヂムシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [738],
    "types": ["むし", "でんき"],
    "abilities": ["バッテリー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 57,
      "attack": 82,
      "defence": 95,
      "spAttack": 55,
      "spDefence": 75,
      "speed": 36
    }
  },
  {
    "no": 738,
    "name": "クワガノン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "でんき"],
    "abilities": ["ふゆう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 77,
      "attack": 70,
      "defence": 90,
      "spAttack": 145,
      "spDefence": 75,
      "speed": 43
    }
  },
  {
    "no": 739,
    "name": "マケンカニ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [740],
    "types": ["かくとう"],
    "abilities": ["かいりきバサミ", "てつのこぶし"],
    "hiddenAbilities": ["いかりのつぼ"],
    "stats": {
      "hp": 47,
      "attack": 82,
      "defence": 57,
      "spAttack": 42,
      "spDefence": 47,
      "speed": 63
    }
  },
  {
    "no": 740,
    "name": "ケケンカニ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう", "こおり"],
    "abilities": ["かいりきバサミ", "てつのこぶし"],
    "hiddenAbilities": ["いかりのつぼ"],
    "stats": {
      "hp": 97,
      "attack": 132,
      "defence": 77,
      "spAttack": 62,
      "spDefence": 67,
      "speed": 43
    }
  },
  {
    "no": 741,
    "name": "オドリドリ",
    "form": "めらめらスタイル",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "ひこう"],
    "abilities": ["おどりこ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defence": 70,
      "spAttack": 98,
      "spDefence": 70,
      "speed": 93
    }
  },
  {
    "no": 741,
    "name": "オドリドリ",
    "form": "ぱちぱちスタイル",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "ひこう"],
    "abilities": ["おどりこ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defence": 70,
      "spAttack": 98,
      "spDefence": 70,
      "speed": 93
    }
  },
  {
    "no": 741,
    "name": "オドリドリ",
    "form": "ふらふらスタイル",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "ひこう"],
    "abilities": ["おどりこ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defence": 70,
      "spAttack": 98,
      "spDefence": 70,
      "speed": 93
    }
  },
  {
    "no": 741,
    "name": "オドリドリ",
    "form": "まいまいスタイル",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "ひこう"],
    "abilities": ["おどりこ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defence": 70,
      "spAttack": 98,
      "spDefence": 70,
      "speed": 93
    }
  },
  {
    "no": 742,
    "name": "アブリー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [743],
    "types": ["むし", "フェアリー"],
    "abilities": ["みつあつめ", "りんぷん"],
    "hiddenAbilities": ["スイートベール"],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defence": 40,
      "spAttack": 55,
      "spDefence": 40,
      "speed": 84
    }
  },
  {
    "no": 743,
    "name": "アブリボン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "フェアリー"],
    "abilities": ["みつあつめ", "りんぷん"],
    "hiddenAbilities": ["スイートベール"],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defence": 60,
      "spAttack": 95,
      "spDefence": 70,
      "speed": 124
    }
  },
  {
    "no": 744,
    "name": "イワンコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [745],
    "types": ["いわ"],
    "abilities": ["するどいめ", "やるき", "マイペース"],
    "hiddenAbilities": ["ふくつのこころ"],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defence": 40,
      "spAttack": 30,
      "spDefence": 40,
      "speed": 60
    }
  },
  {
    "no": 745,
    "name": "ルガルガン",
    "form": "まひるのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ"],
    "abilities": ["するどいめ", "すなかき"],
    "hiddenAbilities": ["ふくつのこころ"],
    "stats": {
      "hp": 75,
      "attack": 115,
      "defence": 65,
      "spAttack": 55,
      "spDefence": 65,
      "speed": 112
    }
  },
  {
    "no": 745,
    "name": "ルガルガン",
    "form": "まよなかのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ"],
    "abilities": ["するどいめ", "やるき"],
    "hiddenAbilities": ["ノーガード"],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defence": 75,
      "spAttack": 55,
      "spDefence": 75,
      "speed": 82
    }
  },
  {
    "no": 745,
    "name": "ルガルガン",
    "form": "たそがれのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ"],
    "abilities": ["かたいツメ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 117,
      "defence": 65,
      "spAttack": 55,
      "spDefence": 65,
      "speed": 110
    }
  },
  {
    "no": 746,
    "name": "ヨワシ",
    "form": "たんどくのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["ぎょぐん"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 45,
      "attack": 20,
      "defence": 20,
      "spAttack": 25,
      "spDefence": 25,
      "speed": 40
    }
  },
  {
    "no": 746,
    "name": "ヨワシ",
    "form": "むれたすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["ぎょぐん"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 45,
      "attack": 140,
      "defence": 130,
      "spAttack": 140,
      "spDefence": 135,
      "speed": 30
    }
  },
  {
    "no": 747,
    "name": "ヒドイデ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [748],
    "types": ["どく", "みず"],
    "abilities": ["ひとでなし", "じゅうなん"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defence": 62,
      "spAttack": 43,
      "spDefence": 52,
      "speed": 45
    }
  },
  {
    "no": 748,
    "name": "ドヒドイデ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく", "みず"],
    "abilities": ["ひとでなし", "じゅうなん"],
    "hiddenAbilities": ["さいせいりょく"],
    "stats": {
      "hp": 50,
      "attack": 63,
      "defence": 152,
      "spAttack": 53,
      "spDefence": 142,
      "speed": 35
    }
  },
  {
    "no": 749,
    "name": "ドロバンコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [750],
    "types": ["じめん"],
    "abilities": ["マイペース", "じきゅうりょく"],
    "hiddenAbilities": ["せいしんりょく"],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defence": 70,
      "spAttack": 45,
      "spDefence": 55,
      "speed": 45
    }
  },
  {
    "no": 750,
    "name": "バンバドロ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["じめん"],
    "abilities": ["マイペース", "じきゅうりょく"],
    "hiddenAbilities": ["せいしんりょく"],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defence": 100,
      "spAttack": 55,
      "spDefence": 85,
      "speed": 35
    }
  },
  {
    "no": 751,
    "name": "シズクモ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [752],
    "types": ["みず", "むし"],
    "abilities": ["すいほう", "ちょすい"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 38,
      "attack": 40,
      "defence": 52,
      "spAttack": 40,
      "spDefence": 72,
      "speed": 27
    }
  },
  {
    "no": 752,
    "name": "オニシズクモ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "むし"],
    "abilities": ["すいほう", "ちょすい"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 68,
      "attack": 70,
      "defence": 92,
      "spAttack": 50,
      "spDefence": 132,
      "speed": 42
    }
  },
  {
    "no": 753,
    "name": "カリキリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [754],
    "types": ["くさ"],
    "abilities": ["リーフガード"],
    "hiddenAbilities": ["あまのじゃく"],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defence": 35,
      "spAttack": 50,
      "spDefence": 35,
      "speed": 35
    }
  },
  {
    "no": 754,
    "name": "ラランテス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["リーフガード"],
    "hiddenAbilities": ["あまのじゃく"],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defence": 90,
      "spAttack": 80,
      "spDefence": 90,
      "speed": 45
    }
  },
  {
    "no": 755,
    "name": "ネマシュ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [756],
    "types": ["くさ", "フェアリー"],
    "abilities": ["はっこう", "ほうし"],
    "hiddenAbilities": ["あめうけざら"],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defence": 55,
      "spAttack": 65,
      "spDefence": 75,
      "speed": 15
    }
  },
  {
    "no": 756,
    "name": "マシェード",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "フェアリー"],
    "abilities": ["はっこう", "ほうし"],
    "hiddenAbilities": ["あめうけざら"],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defence": 80,
      "spAttack": 90,
      "spDefence": 100,
      "speed": 30
    }
  },
  {
    "no": 757,
    "name": "ヤトウモリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [758],
    "types": ["どく", "ほのお"],
    "abilities": ["ふしょく"],
    "hiddenAbilities": ["どんかん"],
    "stats": {
      "hp": 48,
      "attack": 44,
      "defence": 40,
      "spAttack": 71,
      "spDefence": 40,
      "speed": 77
    }
  },
  {
    "no": 758,
    "name": "エンニュート",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく", "ほのお"],
    "abilities": ["ふしょく"],
    "hiddenAbilities": ["どんかん"],
    "stats": {
      "hp": 68,
      "attack": 64,
      "defence": 60,
      "spAttack": 111,
      "spDefence": 60,
      "speed": 117
    }
  },
  {
    "no": 759,
    "name": "ヌイコグマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [760],
    "types": ["ノーマル", "かくとう"],
    "abilities": ["もふもふ", "ぶきよう"],
    "hiddenAbilities": ["メロメロボディ"],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defence": 50,
      "spAttack": 45,
      "spDefence": 50,
      "speed": 50
    }
  },
  {
    "no": 760,
    "name": "キテルグマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "かくとう"],
    "abilities": ["もふもふ", "ぶきよう"],
    "hiddenAbilities": ["きんちょうかん"],
    "stats": {
      "hp": 120,
      "attack": 125,
      "defence": 80,
      "spAttack": 55,
      "spDefence": 60,
      "speed": 60
    }
  },
  {
    "no": 761,
    "name": "アマカジ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [762],
    "types": ["くさ"],
    "abilities": ["リーフガード", "どんかん"],
    "hiddenAbilities": ["スイートベール"],
    "stats": {
      "hp": 42,
      "attack": 30,
      "defence": 38,
      "spAttack": 30,
      "spDefence": 38,
      "speed": 32
    }
  },
  {
    "no": 762,
    "name": "アママイコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [763],
    "types": ["くさ"],
    "abilities": ["リーフガード", "どんかん"],
    "hiddenAbilities": ["スイートベール"],
    "stats": {
      "hp": 52,
      "attack": 40,
      "defence": 48,
      "spAttack": 40,
      "spDefence": 48,
      "speed": 62
    }
  },
  {
    "no": 763,
    "name": "アマージョ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ"],
    "abilities": ["リーフガード", "じょおうのいげん"],
    "hiddenAbilities": ["スイートベール"],
    "stats": {
      "hp": 72,
      "attack": 120,
      "defence": 98,
      "spAttack": 50,
      "spDefence": 98,
      "speed": 72
    }
  },
  {
    "no": 764,
    "name": "キュワワー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["フェアリー"],
    "abilities": ["フラワーベール", "ヒーリングシフト"],
    "hiddenAbilities": ["しぜんかいふく"],
    "stats": {
      "hp": 51,
      "attack": 52,
      "defence": 90,
      "spAttack": 82,
      "spDefence": 110,
      "speed": 100
    }
  },
  {
    "no": 765,
    "name": "ヤレユータン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "エスパー"],
    "abilities": ["せいしんりょく", "テレパシー"],
    "hiddenAbilities": ["きょうせい"],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defence": 80,
      "spAttack": 90,
      "spDefence": 110,
      "speed": 60
    }
  },
  {
    "no": 766,
    "name": "ナゲツケサル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう"],
    "abilities": ["レシーバー"],
    "hiddenAbilities": ["まけんき"],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defence": 90,
      "spAttack": 40,
      "spDefence": 60,
      "speed": 80
    }
  },
  {
    "no": 767,
    "name": "コソクムシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [768],
    "types": ["むし", "みず"],
    "abilities": ["にげごし"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defence": 40,
      "spAttack": 20,
      "spDefence": 30,
      "speed": 80
    }
  },
  {
    "no": 768,
    "name": "グソクムシャ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "みず"],
    "abilities": ["ききかいひ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defence": 140,
      "spAttack": 60,
      "spDefence": 90,
      "speed": 40
    }
  },
  {
    "no": 769,
    "name": "スナバァ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [770],
    "types": ["ゴースト", "じめん"],
    "abilities": ["みずがため"],
    "hiddenAbilities": ["すながくれ"],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defence": 80,
      "spAttack": 70,
      "spDefence": 45,
      "speed": 15
    }
  },
  {
    "no": 770,
    "name": "シロデスナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "じめん"],
    "abilities": ["みずがため"],
    "hiddenAbilities": ["すながくれ"],
    "stats": {
      "hp": 85,
      "attack": 75,
      "defence": 110,
      "spAttack": 100,
      "spDefence": 75,
      "speed": 35
    }
  },
  {
    "no": 771,
    "name": "ナマコブシ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず"],
    "abilities": ["とびだすなかみ"],
    "hiddenAbilities": ["てんねん"],
    "stats": {
      "hp": 55,
      "attack": 60,
      "defence": 130,
      "spAttack": 30,
      "spDefence": 130,
      "speed": 5
    }
  },
  {
    "no": 772,
    "name": "タイプ：ヌル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [773],
    "types": ["ノーマル"],
    "abilities": ["カブトアーマー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defence": 95,
      "spAttack": 95,
      "spDefence": 95,
      "speed": 59
    }
  },
  {
    "no": 773,
    "name": "シルヴァディ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["ARシステム"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defence": 95,
      "spAttack": 95,
      "spDefence": 95,
      "speed": 95
    }
  },
  {
    "no": 774,
    "name": "メテノ",
    "form": "りゅうせいのすがた",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "ひこう"],
    "abilities": ["リミットシールド"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defence": 100,
      "spAttack": 60,
      "spDefence": 100,
      "speed": 60
    }
  },
  {
    "no": 774,
    "name": "メテノ",
    "form": "コア",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "ひこう"],
    "abilities": ["リミットシールド"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defence": 60,
      "spAttack": 100,
      "spDefence": 60,
      "speed": 120
    }
  },
  {
    "no": 775,
    "name": "ネッコアラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル"],
    "abilities": ["ぜったいねむり"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 65,
      "attack": 115,
      "defence": 65,
      "spAttack": 75,
      "spDefence": 95,
      "speed": 65
    }
  },
  {
    "no": 776,
    "name": "バクガメス",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "ドラゴン"],
    "abilities": ["シェルアーマー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 60,
      "attack": 78,
      "defence": 135,
      "spAttack": 91,
      "spDefence": 85,
      "speed": 36
    }
  },
  {
    "no": 777,
    "name": "トゲデマル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "はがね"],
    "abilities": ["てつのトゲ", "ひらいしん"],
    "hiddenAbilities": ["がんじょう"],
    "stats": {
      "hp": 65,
      "attack": 98,
      "defence": 63,
      "spAttack": 40,
      "spDefence": 73,
      "speed": 96
    }
  },
  {
    "no": 778,
    "name": "ミミッキュ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "フェアリー"],
    "abilities": ["ばけのかわ"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 55,
      "attack": 90,
      "defence": 80,
      "spAttack": 50,
      "spDefence": 105,
      "speed": 96
    }
  },
  {
    "no": 779,
    "name": "ハギギシリ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "エスパー"],
    "abilities": ["ビビッドボディ", "がんじょうあご"],
    "hiddenAbilities": ["ミラクルスキン"],
    "stats": {
      "hp": 68,
      "attack": 105,
      "defence": 70,
      "spAttack": 70,
      "spDefence": 70,
      "speed": 92
    }
  },
  {
    "no": 780,
    "name": "ジジーロン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ノーマル", "ドラゴン"],
    "abilities": ["ぎゃくじょう", "そうしょく"],
    "hiddenAbilities": ["ノーてんき"],
    "stats": {
      "hp": 78,
      "attack": 60,
      "defence": 85,
      "spAttack": 135,
      "spDefence": 91,
      "speed": 36
    }
  },
  {
    "no": 781,
    "name": "ダダリン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ゴースト", "くさ"],
    "abilities": ["はがねつかい"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 70,
      "attack": 131,
      "defence": 100,
      "spAttack": 86,
      "spDefence": 90,
      "speed": 40
    }
  },
  {
    "no": 782,
    "name": "ジャラコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [783],
    "types": ["ドラゴン"],
    "abilities": ["ぼうだん", "ぼうおん"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defence": 65,
      "spAttack": 45,
      "spDefence": 45,
      "speed": 45
    }
  },
  {
    "no": 783,
    "name": "ジャランゴ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [784],
    "types": ["ドラゴン", "かくとう"],
    "abilities": ["ぼうだん", "ぼうおん"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defence": 90,
      "spAttack": 65,
      "spDefence": 70,
      "speed": 65
    }
  },
  {
    "no": 784,
    "name": "ジャラランガ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ドラゴン", "かくとう"],
    "abilities": ["ぼうだん", "ぼうおん"],
    "hiddenAbilities": ["ぼうじん"],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defence": 125,
      "spAttack": 100,
      "spDefence": 105,
      "speed": 85
    }
  },
  {
    "no": 785,
    "name": "カプ・コケコ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき", "フェアリー"],
    "abilities": ["エレキメイカー"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defence": 85,
      "spAttack": 95,
      "spDefence": 75,
      "speed": 130
    }
  },
  {
    "no": 786,
    "name": "カプ・テテフ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "フェアリー"],
    "abilities": ["サイコメイカー"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defence": 75,
      "spAttack": 130,
      "spDefence": 115,
      "speed": 95
    }
  },
  {
    "no": 787,
    "name": "カプ・ブルル",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "フェアリー"],
    "abilities": ["グラスメイカー"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defence": 115,
      "spAttack": 85,
      "spDefence": 95,
      "speed": 75
    }
  },
  {
    "no": 788,
    "name": "カプ・レヒレ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["みず", "フェアリー"],
    "abilities": ["ミストメイカー"],
    "hiddenAbilities": ["テレパシー"],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defence": 115,
      "spAttack": 95,
      "spDefence": 130,
      "speed": 85
    }
  },
  {
    "no": 789,
    "name": "コスモッグ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [790],
    "types": ["エスパー"],
    "abilities": ["てんねん"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 43,
      "attack": 29,
      "defence": 31,
      "spAttack": 29,
      "spDefence": 31,
      "speed": 37
    }
  },
  {
    "no": 790,
    "name": "コスモウム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [791, 792],
    "types": ["エスパー"],
    "abilities": ["がんじょう"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 43,
      "attack": 29,
      "defence": 131,
      "spAttack": 29,
      "spDefence": 131,
      "speed": 37
    }
  },
  {
    "no": 791,
    "name": "ソルガレオ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "はがね"],
    "abilities": ["メタルプロテクト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 137,
      "attack": 137,
      "defence": 107,
      "spAttack": 113,
      "spDefence": 89,
      "speed": 97
    }
  },
  {
    "no": 792,
    "name": "ルナアーラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "ゴースト"],
    "abilities": ["ファントムガード"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 137,
      "attack": 113,
      "defence": 89,
      "spAttack": 137,
      "spDefence": 107,
      "speed": 97
    }
  },
  {
    "no": 793,
    "name": "ウツロイド",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "どく"],
    "abilities": ["ビーストブースト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 109,
      "attack": 53,
      "defence": 47,
      "spAttack": 127,
      "spDefence": 131,
      "speed": 103
    }
  },
  {
    "no": 794,
    "name": "マッシブーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "かくとう"],
    "abilities": ["ビーストブースト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 107,
      "attack": 139,
      "defence": 139,
      "spAttack": 53,
      "spDefence": 53,
      "speed": 79
    }
  },
  {
    "no": 795,
    "name": "フェローチェ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["むし", "かくとう"],
    "abilities": ["ビーストブースト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 71,
      "attack": 137,
      "defence": 37,
      "spAttack": 137,
      "spDefence": 37,
      "speed": 151
    }
  },
  {
    "no": 796,
    "name": "デンジュモク",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["ビーストブースト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 83,
      "attack": 89,
      "defence": 71,
      "spAttack": 173,
      "spDefence": 71,
      "speed": 83
    }
  },
  {
    "no": 797,
    "name": "テッカグヤ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "ひこう"],
    "abilities": ["ビーストブースト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 97,
      "attack": 101,
      "defence": 103,
      "spAttack": 107,
      "spDefence": 101,
      "speed": 61
    }
  },
  {
    "no": 798,
    "name": "カミツルギ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["くさ", "はがね"],
    "abilities": ["ビーストブースト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 59,
      "attack": 181,
      "defence": 131,
      "spAttack": 59,
      "spDefence": 31,
      "speed": 109
    }
  },
  {
    "no": 799,
    "name": "アクジキング",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["あく", "ドラゴン"],
    "abilities": ["ビーストブースト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 223,
      "attack": 101,
      "defence": 53,
      "spAttack": 97,
      "spDefence": 53,
      "speed": 43
    }
  },
  {
    "no": 800,
    "name": "ネクロズマ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["プリズムアーマー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 97,
      "attack": 107,
      "defence": 101,
      "spAttack": 127,
      "spDefence": 89,
      "speed": 79
    }
  },
  {
    "no": 800,
    "name": "ネクロズマ",
    "form": "たそがれのたてがみ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "はがね"],
    "abilities": ["プリズムアーマー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 97,
      "attack": 157,
      "defence": 127,
      "spAttack": 113,
      "spDefence": 109,
      "speed": 77
    }
  },
  {
    "no": 800,
    "name": "ネクロズマ",
    "form": "あかつきのつばさ",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["エスパー", "ゴースト"],
    "abilities": ["プリズムアーマー"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 97,
      "attack": 113,
      "defence": 109,
      "spAttack": 157,
      "spDefence": 127,
      "speed": 77
    }
  },
  {
    "no": 800,
    "name": "ネクロズマ",
    "form": "ウルトラネクロズマ",
    "isMegaEvolution": true,
    "evolutions": [],
    "types": ["エスパー"],
    "abilities": ["ブレインフォース"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 97,
      "attack": 167,
      "defence": 97,
      "spAttack": 167,
      "spDefence": 97,
      "speed": 129
    }
  },
  {
    "no": 801,
    "name": "マギアナ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["はがね", "フェアリー"],
    "abilities": ["ソウルハート"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defence": 115,
      "spAttack": 130,
      "spDefence": 115,
      "speed": 65
    }
  },
  {
    "no": 802,
    "name": "マーシャドー",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["かくとう", "ゴースト"],
    "abilities": ["テクニシャン"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 90,
      "attack": 125,
      "defence": 80,
      "spAttack": 90,
      "spDefence": 90,
      "speed": 125
    }
  },
  {
    "no": 803,
    "name": "ベベノム",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [804],
    "types": ["どく"],
    "abilities": ["ビーストブースト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 67,
      "attack": 73,
      "defence": 67,
      "spAttack": 73,
      "spDefence": 67,
      "speed": 73
    }
  },
  {
    "no": 804,
    "name": "アーゴヨン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["どく", "ドラゴン"],
    "abilities": ["ビーストブースト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 73,
      "attack": 73,
      "defence": 73,
      "spAttack": 127,
      "spDefence": 73,
      "speed": 121
    }
  },
  {
    "no": 805,
    "name": "ツンデツンデ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["いわ", "はがね"],
    "abilities": ["ビーストブースト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 61,
      "attack": 131,
      "defence": 211,
      "spAttack": 53,
      "spDefence": 101,
      "speed": 13
    }
  },
  {
    "no": 806,
    "name": "ズガドーン",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["ほのお", "ゴースト"],
    "abilities": ["ビーストブースト"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 53,
      "attack": 127,
      "defence": 53,
      "spAttack": 151,
      "spDefence": 79,
      "speed": 107
    }
  },
  {
    "no": 807,
    "name": "ゼラオラ",
    "form": "",
    "isMegaEvolution": false,
    "evolutions": [],
    "types": ["でんき"],
    "abilities": ["ちくでん"],
    "hiddenAbilities": [],
    "stats": {
      "hp": 88,
      "attack": 112,
      "defence": 75,
      "spAttack": 102,
      "spDefence": 80,
      "speed": 143
    }
  }
]