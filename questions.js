const QUESTIONS = [
  {
    "id": "G001",
    "category": "関係代名詞",
    "prompt": "The musician (　) lives next door plays the violin.",
    "answer": "who",
    "choices": [
      "who",
      "where",
      "whom",
      "whose"
    ],
    "explanation": "先行詞は人で、関係詞は後ろの節の主語。who を使う。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G002",
    "category": "関係代名詞",
    "prompt": "This is the novel (　) I borrowed yesterday.",
    "answer": "which",
    "choices": [
      "who",
      "which",
      "where",
      "whose"
    ],
    "explanation": "novel は物で、borrowed の目的語が欠けている。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G003",
    "category": "関係代名詞",
    "prompt": "The girl (　) bicycle was stolen called the police.",
    "answer": "whose",
    "choices": [
      "whom",
      "where",
      "whose",
      "which"
    ],
    "explanation": "bicycle の所有者を表すので whose。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G004",
    "category": "関係代名詞",
    "prompt": "The teacher (　) we met at the station is kind.",
    "answer": "whom",
    "choices": [
      "whose",
      "where",
      "what",
      "whom"
    ],
    "explanation": "met の目的語となる人を表す。who も会話では可。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G005",
    "category": "関係代名詞",
    "prompt": "Do you know a student (　) can solve this puzzle?",
    "answer": "who",
    "choices": [
      "whose",
      "what",
      "who",
      "whom"
    ],
    "explanation": "can solve の主語となる人。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G006",
    "category": "関係代名詞",
    "prompt": "The apartment (　) windows face south is bright.",
    "answer": "whose",
    "choices": [
      "whose",
      "who",
      "what",
      "whom"
    ],
    "explanation": "物の所有関係にも whose が使える。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G007",
    "category": "関係代名詞",
    "prompt": "The cake (　) my brother baked was delicious.",
    "answer": "which",
    "choices": [
      "where",
      "which",
      "whose",
      "who"
    ],
    "explanation": "baked の目的語となる物。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G008",
    "category": "関係代名詞",
    "prompt": "There is nothing (　) makes me happier than music.",
    "answer": "that",
    "choices": [
      "where",
      "what",
      "whom",
      "that"
    ],
    "explanation": "nothing を先行詞にとる主格の that。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G009",
    "category": "関係代名詞",
    "prompt": "The man to (　) I sent the email replied.",
    "answer": "whom",
    "choices": [
      "whose",
      "which",
      "whom",
      "who"
    ],
    "explanation": "前置詞 to の直後に置く目的格の関係代名詞は whom。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G010",
    "category": "関係代名詞",
    "prompt": "She is the only person (　) understands this rule.",
    "answer": "who",
    "choices": [
      "where",
      "who",
      "whom",
      "whose"
    ],
    "explanation": "understands の主語が欠ける。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G011",
    "category": "関係代名詞",
    "prompt": "The actor (　) films are popular visited our town.",
    "answer": "whose",
    "choices": [
      "what",
      "whose",
      "whom",
      "which"
    ],
    "explanation": "films と actor の所有関係。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G012",
    "category": "関係代名詞",
    "prompt": "I lost the key (　) opens this drawer.",
    "answer": "which",
    "choices": [
      "where",
      "whose",
      "which",
      "whom"
    ],
    "explanation": "opens の主語になる物。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G013",
    "category": "関係代名詞",
    "prompt": "I know someone (　) speaks three languages.",
    "answer": "who",
    "choices": [
      "what",
      "whom",
      "where",
      "who"
    ],
    "explanation": "三人称単数の動詞 speaks に対応する主語。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G014",
    "category": "関係代名詞",
    "prompt": "The song (　) we heard on the bus was beautiful.",
    "answer": "which",
    "choices": [
      "when",
      "which",
      "whose",
      "who"
    ],
    "explanation": "heard の目的語が欠けている。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G015",
    "category": "関係副詞",
    "prompt": "This is the park (　) we first met.",
    "answer": "where",
    "choices": [
      "what",
      "who",
      "where",
      "which"
    ],
    "explanation": "met は自動詞。場所を表す where = in which。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G016",
    "category": "関係副詞",
    "prompt": "I remember the summer (　) we moved to Osaka.",
    "answer": "when",
    "choices": [
      "where",
      "which",
      "when",
      "who"
    ],
    "explanation": "時を表す先行詞 summer に続く関係副詞。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G017",
    "category": "関係副詞",
    "prompt": "Tell me the reason (　) you changed your mind.",
    "answer": "why",
    "choices": [
      "where",
      "which",
      "why",
      "who"
    ],
    "explanation": "reason の理由を説明する why。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G018",
    "category": "関係副詞",
    "prompt": "The town (　) my grandmother was born is small.",
    "answer": "where",
    "choices": [
      "which",
      "whose",
      "where",
      "whom"
    ],
    "explanation": "was born の後ろには場所の情報が必要。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G019",
    "category": "関係副詞",
    "prompt": "Sunday is the day (　) my family usually cooks together.",
    "answer": "when",
    "choices": [
      "when",
      "whose",
      "which",
      "who"
    ],
    "explanation": "day を時の副詞として説明。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G020",
    "category": "関係副詞",
    "prompt": "That is the house (　) my uncle lives.",
    "answer": "where",
    "choices": [
      "which",
      "whom",
      "where",
      "what"
    ],
    "explanation": "lives in the house の in the house に相当。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G021",
    "category": "関係副詞",
    "prompt": "I do not know (　) she left early.",
    "answer": "why",
    "choices": [
      "where",
      "why",
      "whose",
      "which"
    ],
    "explanation": "「なぜ早く帰ったのか」の間接疑問文。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G022",
    "category": "関係副詞",
    "prompt": "The hotel at (　) we stayed was quiet.",
    "answer": "which",
    "choices": [
      "which",
      "who",
      "where",
      "what"
    ],
    "explanation": "at which = where。前置詞の後ろに where は置けない。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G023",
    "category": "関係副詞",
    "prompt": "This is the café (　) we had lunch.",
    "answer": "where",
    "choices": [
      "whose",
      "what",
      "where",
      "which"
    ],
    "explanation": "had lunch は目的語の欠けがないので where。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G024",
    "category": "関係副詞",
    "prompt": "The day on (　) the concert began was rainy.",
    "answer": "which",
    "choices": [
      "who",
      "where",
      "which",
      "when"
    ],
    "explanation": "on which = when。前置詞 on の後は which。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G025",
    "category": "関係副詞",
    "prompt": "That is the reason (　) I was late.",
    "answer": "why",
    "choices": [
      "whose",
      "why",
      "which",
      "whom"
    ],
    "explanation": "reason why の形で理由を示す。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G026",
    "category": "関係副詞",
    "prompt": "We visited the village (　) our parents grew up.",
    "answer": "where",
    "choices": [
      "which",
      "whose",
      "who",
      "where"
    ],
    "explanation": "grew up in the village の場所を説明。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G027",
    "category": "関係詞の応用",
    "prompt": "My sister, (　) is a doctor, lives abroad.",
    "answer": "who",
    "choices": [
      "which",
      "that",
      "whom",
      "who"
    ],
    "explanation": "コンマのある非制限用法では that を使わない。主語なので who。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G028",
    "category": "関係詞の応用",
    "prompt": "The museum, (　) opened last year, is popular.",
    "answer": "which",
    "choices": [
      "whom",
      "which",
      "that",
      "who"
    ],
    "explanation": "非制限用法で物を補足説明する which。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G029",
    "category": "関係詞の応用",
    "prompt": "He forgot my birthday, (　) made me sad.",
    "answer": "which",
    "choices": [
      "which",
      "where",
      "that",
      "who"
    ],
    "explanation": "直前の文全体を受ける非制限用法の which。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G030",
    "category": "関係詞の応用",
    "prompt": "I have two cousins, both of (　) live in Canada.",
    "answer": "whom",
    "choices": [
      "who",
      "whom",
      "that",
      "them"
    ],
    "explanation": "both of whom は「その2人とも」。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G031",
    "category": "関係詞の応用",
    "prompt": "She bought three pens, none of (　) worked.",
    "answer": "which",
    "choices": [
      "whose",
      "which",
      "them",
      "what"
    ],
    "explanation": "none of which は先行詞 pens を受ける。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G032",
    "category": "関係詞の応用",
    "prompt": "This is (　) I wanted to tell you.",
    "answer": "what",
    "choices": [
      "who",
      "which",
      "what",
      "that"
    ],
    "explanation": "what = the thing(s) that。先行詞を含む。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G033",
    "category": "関係詞の応用",
    "prompt": "Please show me (　) you made.",
    "answer": "what",
    "choices": [
      "whose",
      "where",
      "which",
      "what"
    ],
    "explanation": "「あなたが作ったもの」を表す先行詞を含む what。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G034",
    "category": "関係詞の応用",
    "prompt": "(　) matters most is kindness.",
    "answer": "What",
    "choices": [
      "Who",
      "That",
      "What",
      "Which"
    ],
    "explanation": "what が「最も大切なことは」の主語。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G035",
    "category": "関係詞の応用",
    "prompt": "My friend is not (　) he used to be.",
    "answer": "what",
    "choices": [
      "what",
      "which",
      "who",
      "where"
    ],
    "explanation": "what he used to be = 以前の彼のような人。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G036",
    "category": "関係詞の応用",
    "prompt": "The trip was (　) we had hoped for.",
    "answer": "what",
    "choices": [
      "who",
      "where",
      "that",
      "what"
    ],
    "explanation": "for の目的語を含む what 節を補語に置く。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G037",
    "category": "関係詞の応用",
    "prompt": "You can choose (　) color you prefer.",
    "answer": "whichever",
    "choices": [
      "wherever",
      "whichever",
      "whoever",
      "however"
    ],
    "explanation": "whichever + 名詞で「どちらの色でも」。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G038",
    "category": "関係詞の応用",
    "prompt": "(　) calls, please take a message.",
    "answer": "Whoever",
    "choices": [
      "Whatever",
      "However",
      "Whoever",
      "Wherever"
    ],
    "explanation": "「誰が電話してきても」。whoever が calls の主語。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G039",
    "category": "関係詞の応用",
    "prompt": "(　) you say, I will not change my decision.",
    "answer": "Whatever",
    "choices": [
      "Whenever",
      "Whatever",
      "Wherever",
      "Whoever"
    ],
    "explanation": "say の目的語になる「何を言っても」。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G040",
    "category": "関係詞の応用",
    "prompt": "You may sit (　) you like.",
    "answer": "wherever",
    "choices": [
      "whoever",
      "however",
      "whatever",
      "wherever"
    ],
    "explanation": "「好きな場所ならどこでも」。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G041",
    "category": "関係詞の応用",
    "prompt": "(　) difficult the test is, keep trying.",
    "answer": "However",
    "choices": [
      "Whenever",
      "However",
      "Whoever",
      "Whatever"
    ],
    "explanation": "However + 形容詞 + S + V の譲歩。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G042",
    "category": "関係詞の応用",
    "prompt": "(　) you visit Kyoto, call me.",
    "answer": "Whenever",
    "choices": [
      "However",
      "Whoever",
      "Whenever",
      "Whatever"
    ],
    "explanation": "「京都を訪れるときはいつでも」。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G043",
    "category": "関係詞の応用",
    "prompt": "I will support you no matter (　) happens.",
    "answer": "what",
    "choices": [
      "where",
      "what",
      "who",
      "how"
    ],
    "explanation": "no matter what = whatever。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G044",
    "category": "関係詞の応用",
    "prompt": "The coach gave me advice, to (　) I listened carefully.",
    "answer": "which",
    "choices": [
      "who",
      "what",
      "that",
      "which"
    ],
    "explanation": "listen to の前置詞を前に出した非制限用法。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G045",
    "category": "比較（同等・倍数）",
    "prompt": "Your bag is as heavy (　) mine.",
    "answer": "as",
    "choices": [
      "as",
      "so",
      "than",
      "like"
    ],
    "explanation": "as + 原級 + as で同じ程度。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G046",
    "category": "比較（同等・倍数）",
    "prompt": "My younger brother is not as tall (　) I am.",
    "answer": "as",
    "choices": [
      "that",
      "as",
      "than",
      "so"
    ],
    "explanation": "否定文 not as ... as = ほど…ではない。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G047",
    "category": "比較（同等・倍数）",
    "prompt": "She sings as (　) as a professional.",
    "answer": "beautifully",
    "choices": [
      "beauty",
      "beautiful",
      "more beautifully",
      "beautifully"
    ],
    "explanation": "sings を修飾する副詞 beautifully。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G048",
    "category": "比較（同等・倍数）",
    "prompt": "Take as (　) cookies as you need.",
    "answer": "many",
    "choices": [
      "many",
      "little",
      "more",
      "much"
    ],
    "explanation": "cookies は可算名詞の複数形なので many。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G049",
    "category": "比較（同等・倍数）",
    "prompt": "Drink as (　) tea as you want.",
    "answer": "much",
    "choices": [
      "much",
      "more",
      "few",
      "many"
    ],
    "explanation": "tea は不可算名詞なので much。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G050",
    "category": "比較（同等・倍数）",
    "prompt": "His room is twice as large (　) mine.",
    "answer": "as",
    "choices": [
      "for",
      "than",
      "as",
      "to"
    ],
    "explanation": "倍数 + as + 原級 + as の形。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G051",
    "category": "比較（同等・倍数）",
    "prompt": "I have three times as (　) books as my brother.",
    "answer": "many",
    "choices": [
      "more",
      "little",
      "much",
      "many"
    ],
    "explanation": "books は数えられる名詞なので many。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G052",
    "category": "比較（同等・倍数）",
    "prompt": "The chair is half as (　) as the table.",
    "answer": "heavy",
    "choices": [
      "heavy",
      "heaviest",
      "more heavy",
      "heavier"
    ],
    "explanation": "half as + 原級 + as。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G053",
    "category": "比較（同等・倍数）",
    "prompt": "The river is (　) as long as that one.",
    "answer": "twice",
    "choices": [
      "double than",
      "two",
      "twice than",
      "twice"
    ],
    "explanation": "twice as long as で2倍の長さ。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G054",
    "category": "比較（同等・倍数）",
    "prompt": "Please answer as quickly as (　).",
    "answer": "possible",
    "choices": [
      "possibility",
      "possibly",
      "can",
      "possible"
    ],
    "explanation": "as ... as possible「できるだけ…」。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G055",
    "category": "比較（同等・倍数）",
    "prompt": "She did not speak as loudly as she (　).",
    "answer": "could",
    "choices": [
      "does",
      "could",
      "was",
      "can"
    ],
    "explanation": "過去時制に合わせて could。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G056",
    "category": "比較（同等・倍数）",
    "prompt": "The hall holds as (　) as 500 people.",
    "answer": "many",
    "choices": [
      "most",
      "more",
      "much",
      "many"
    ],
    "explanation": "as many as + 数字で多さを強調。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G057",
    "category": "比較（同等・倍数）",
    "prompt": "The parcel is one-third as (　) as the box.",
    "answer": "heavy",
    "choices": [
      "heavier",
      "heavily",
      "heavy",
      "heaviest"
    ],
    "explanation": "分数 + as + 原級 + as。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G058",
    "category": "比較（同等・倍数）",
    "prompt": "That machine uses as (　) energy as this one.",
    "answer": "much",
    "choices": [
      "most",
      "few",
      "many",
      "much"
    ],
    "explanation": "energy は不可算名詞。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G059",
    "category": "比較級",
    "prompt": "Today is much (　) than yesterday.",
    "answer": "warmer",
    "choices": [
      "warmer",
      "warm",
      "more warm",
      "warmest"
    ],
    "explanation": "比較級 warmer を much が強める。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G060",
    "category": "比較級",
    "prompt": "This question is (　) difficult than the last one.",
    "answer": "more",
    "choices": [
      "very",
      "much as",
      "more",
      "most"
    ],
    "explanation": "more difficult than の形。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G061",
    "category": "比較級",
    "prompt": "She is a (　) runner than I am.",
    "answer": "faster",
    "choices": [
      "fast",
      "most fast",
      "faster",
      "fastest"
    ],
    "explanation": "than があるので比較級 faster。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G062",
    "category": "比較級",
    "prompt": "My new laptop is far (　) than my old one.",
    "answer": "lighter",
    "choices": [
      "most light",
      "lighter",
      "lightest",
      "light"
    ],
    "explanation": "far + 比較級で程度を強調。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G063",
    "category": "比較級",
    "prompt": "I prefer tea (　) coffee.",
    "answer": "to",
    "choices": [
      "over than",
      "to",
      "from",
      "than"
    ],
    "explanation": "prefer A to B で B より A を好む。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G064",
    "category": "比較級",
    "prompt": "My sister is senior (　) me by two years.",
    "answer": "to",
    "choices": [
      "as",
      "to",
      "than",
      "from"
    ],
    "explanation": "senior は比較級の意味だが than ではなく to。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G065",
    "category": "比較級",
    "prompt": "The more you read, (　) better you write.",
    "answer": "the",
    "choices": [
      "the",
      "a",
      "much",
      "so"
    ],
    "explanation": "the + 比較級, the + 比較級。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G066",
    "category": "比較級",
    "prompt": "The sooner we start, the (　) we can finish.",
    "answer": "earlier",
    "choices": [
      "earliest",
      "earlier",
      "more early",
      "early"
    ],
    "explanation": "「早く始めれば始めるほど、早く終わる」。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G067",
    "category": "比較級",
    "prompt": "Of the two options, this one is the (　).",
    "answer": "better",
    "choices": [
      "better",
      "most good",
      "best",
      "good"
    ],
    "explanation": "2つのうちの比較では the + 比較級。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G068",
    "category": "比較級",
    "prompt": "He is more careful (　) clever.",
    "answer": "than",
    "choices": [
      "that",
      "to",
      "than",
      "as"
    ],
    "explanation": "more A than B = BというよりA。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G069",
    "category": "比較級",
    "prompt": "My grandfather is no (　) working there.",
    "answer": "longer",
    "choices": [
      "more",
      "longer",
      "later",
      "less"
    ],
    "explanation": "no longer = もはや…ない。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G070",
    "category": "比較級",
    "prompt": "I know (　) than to tell her the secret.",
    "answer": "better",
    "choices": [
      "well",
      "better",
      "best",
      "good"
    ],
    "explanation": "know better than to ... = …するほど愚かではない。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G071",
    "category": "比較級",
    "prompt": "The task took (　) than five minutes.",
    "answer": "less",
    "choices": [
      "fewer",
      "little",
      "small",
      "less"
    ],
    "explanation": "時間・量が基準を下回る less than。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G072",
    "category": "比較級",
    "prompt": "There were no more (　) eight students.",
    "answer": "than",
    "choices": [
      "to",
      "than",
      "of",
      "as"
    ],
    "explanation": "no more than = たった…しか。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G073",
    "category": "比較級",
    "prompt": "She is not less talented (　) her brother.",
    "answer": "than",
    "choices": [
      "to",
      "as",
      "with",
      "than"
    ],
    "explanation": "not less ... than = 少なくとも同程度。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G074",
    "category": "比較級",
    "prompt": "Your idea sounds (　) interesting than mine.",
    "answer": "more",
    "choices": [
      "more",
      "much",
      "most",
      "very"
    ],
    "explanation": "interesting の比較級は more interesting。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G075",
    "category": "最上級",
    "prompt": "He is the (　) student in the class.",
    "answer": "tallest",
    "choices": [
      "taller",
      "most tall",
      "tallest",
      "tall"
    ],
    "explanation": "the + 最上級 + in + 場所・集団。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G076",
    "category": "最上級",
    "prompt": "This is the (　) movie I have ever seen.",
    "answer": "best",
    "choices": [
      "most good",
      "best",
      "good",
      "better"
    ],
    "explanation": "経験の中で一番なので the best。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G077",
    "category": "最上級",
    "prompt": "She is one of the (　) players on the team.",
    "answer": "fastest",
    "choices": [
      "fast",
      "faster",
      "most fast",
      "fastest"
    ],
    "explanation": "one of the + 最上級 + 複数名詞。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G078",
    "category": "最上級",
    "prompt": "Which is the most interesting book (　) the three?",
    "answer": "of",
    "choices": [
      "of",
      "than",
      "to",
      "in"
    ],
    "explanation": "比較対象の3冊は of the three。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G079",
    "category": "最上級",
    "prompt": "This is by far the (　) painting here.",
    "answer": "most beautiful",
    "choices": [
      "more beautiful",
      "very beautiful",
      "most beautiful",
      "beautiful"
    ],
    "explanation": "by far は最上級の強調にも用いる。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G080",
    "category": "最上級",
    "prompt": "Kyoto is one of the oldest cities (　) Japan.",
    "answer": "in",
    "choices": [
      "to",
      "than",
      "of",
      "in"
    ],
    "explanation": "日本という場所の範囲には in。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G081",
    "category": "最上級",
    "prompt": "She is the second (　) runner in our school.",
    "answer": "fastest",
    "choices": [
      "faster",
      "most fast",
      "fastest",
      "fast"
    ],
    "explanation": "the second + 最上級 = 2番目に…。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G082",
    "category": "最上級",
    "prompt": "No other student in our class is (　) tall as Ken.",
    "answer": "as",
    "choices": [
      "than",
      "most",
      "as",
      "more"
    ],
    "explanation": "no other ... as + 原級 + as で最上級相当。",
    "type": "choice",
    "correctIndex": 2
  },
  {
    "id": "G083",
    "category": "最上級",
    "prompt": "This mountain is higher than any (　) mountain in the country.",
    "answer": "other",
    "choices": [
      "other",
      "others",
      "the other",
      "another"
    ],
    "explanation": "any other + 単数名詞。",
    "type": "choice",
    "correctIndex": 0
  },
  {
    "id": "G084",
    "category": "最上級",
    "prompt": "This is the (　) I have ever traveled from home.",
    "answer": "farthest",
    "choices": [
      "far",
      "farthest",
      "most far",
      "farther"
    ],
    "explanation": "距離についての最上級。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G085",
    "category": "最上級",
    "prompt": "There are at (　) thirty desks in the room.",
    "answer": "least",
    "choices": [
      "last",
      "most",
      "latest",
      "least"
    ],
    "explanation": "at least = 少なくとも。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G086",
    "category": "最上級",
    "prompt": "I enjoyed the play (　) of all.",
    "answer": "most",
    "choices": [
      "more",
      "much",
      "many",
      "most"
    ],
    "explanation": "of all の中で一番を表す most。",
    "type": "choice",
    "correctIndex": 3
  },
  {
    "id": "G087",
    "category": "最上級",
    "prompt": "Nothing is (　) important than safety.",
    "answer": "more",
    "choices": [
      "most",
      "more",
      "very",
      "much"
    ],
    "explanation": "Nothing is more ... than ~ は最上級相当。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G088",
    "category": "最上級",
    "prompt": "Tom is taller than any other (　) in his club.",
    "answer": "boy",
    "choices": [
      "boys",
      "boy",
      "boy’s",
      "the boys"
    ],
    "explanation": "any other + 単数可算名詞。",
    "type": "choice",
    "correctIndex": 1
  },
  {
    "id": "G089",
    "category": "関係代名詞",
    "prompt": "（英作文）「私は公園で会った男の子を知っています。」",
    "answer": "I know the boy whom I met in the park.",
    "choices": [],
    "explanation": "目的格の whom。who や省略も可能だが模範解答に合わせて入力。",
    "type": "writing"
  },
  {
    "id": "G090",
    "category": "関係代名詞",
    "prompt": "（英作文）「これは窓が大きい家です。」",
    "answer": "This is a house whose windows are large.",
    "choices": [],
    "explanation": "whose + 名詞 + 動詞で所有関係を表す。",
    "type": "writing"
  },
  {
    "id": "G091",
    "category": "関係副詞",
    "prompt": "（英作文）「これは私が育った町です。」",
    "answer": "This is the town where I grew up.",
    "choices": [],
    "explanation": "場所の関係副詞 where。",
    "type": "writing"
  },
  {
    "id": "G092",
    "category": "関係詞の応用",
    "prompt": "（英作文）「彼が言ったことは真実だった。」",
    "answer": "What he said was true.",
    "choices": [],
    "explanation": "先行詞を含む関係代名詞 what。",
    "type": "writing"
  },
  {
    "id": "G093",
    "category": "関係詞の応用",
    "prompt": "（英作文）「どんなに忙しくても、私は読書をする。」",
    "answer": "However busy I am, I read books.",
    "choices": [],
    "explanation": "however + 形容詞 + S + V。",
    "type": "writing"
  },
  {
    "id": "G094",
    "category": "比較（同等・倍数）",
    "prompt": "（英作文）「彼女は私と同じくらい速く走る。」",
    "answer": "She runs as fast as I do.",
    "choices": [],
    "explanation": "as + 副詞の原級 + as。",
    "type": "writing"
  },
  {
    "id": "G095",
    "category": "比較（同等・倍数）",
    "prompt": "（英作文）「私は兄の2倍の本を持っている。」",
    "answer": "I have twice as many books as my brother.",
    "choices": [],
    "explanation": "twice as many + 複数名詞 + as。",
    "type": "writing"
  },
  {
    "id": "G096",
    "category": "比較級",
    "prompt": "（英作文）「練習すればするほど上達する。」",
    "answer": "The more you practice, the better you get.",
    "choices": [],
    "explanation": "the + 比較級, the + 比較級。",
    "type": "writing"
  },
  {
    "id": "G097",
    "category": "比較級",
    "prompt": "（英作文）「私はテレビを見るより本を読むのが好きだ。」",
    "answer": "I prefer reading books to watching TV.",
    "choices": [],
    "explanation": "prefer A to B。",
    "type": "writing"
  },
  {
    "id": "G098",
    "category": "最上級",
    "prompt": "（英作文）「これは私が見た中で最も美しい景色だ。」",
    "answer": "This is the most beautiful view I have ever seen.",
    "choices": [],
    "explanation": "the most + 形容詞 + 名詞 + ever。",
    "type": "writing"
  }
];
