let countTrue = 0;
let countAll = 0;
let answer;
let flag = 1;
let words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
let answers = ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять"];
let wordsTemp = [];
let answersTemp = [];
wordsTemp.push.apply(wordsTemp, words);
answersTemp.push.apply(answersTemp, answers);
const allWords = 10;
function randWord() {
	$("#wordAnswer").css("color", "black");
	$("#wordAnswer").css("color", "black");
	if (countAll == allWords) { endGame(); return;}
	let wordIndex = Math.floor(Math.random() * wordsTemp.length);
	$("#word").val(wordsTemp[wordIndex]);
	wordsTemp.splice(wordIndex, 1);
	answer = answersTemp[wordIndex];
	answersTemp.splice(wordIndex, 1);
	countAll++;
	$("#wordNum").text("Word " + countAll + "/10");
	flag = 1;
	console.log(answer);
}
function boolWord() {
	if (flag == 0) return;
	if ($("#wordAnswer").val() == answer) {
		countTrue++;
		$("#wordAnswer").css("color", "#38a03c");
	}
	else {
		$("#wordAnswer").css("color", "#c2111b");
    } 
	$("#wordTF").text("True/False: " + countTrue + "/" + (countAll - countTrue));
	flag = 0;
}
function endGame() {
	if (countTrue >= allWords - 1) alert("Excellent knowledge. True: "+countTrue+"/"+countAll);
	else if (countTrue >= allWords - 4) alert("Good knowledge. True: " + countTrue + "/" + countAll);
	else alert("Bad knowledge. True: " + countTrue + "/" + countAll);
	run();
}
function clean() {
	countTrue = 0;
	countAll = 0;
	wordsTemp.length = 0;
	answersTemp.length = 0;
	$("#wordTF").text("True/False: 0/0");
	$("#wordNum").text("Word 0/10");
}
function run() {
	clean();
	let value = $('input[name="level"]:checked').val();
	if (value == "medium") {
		words = ["background", "equipment", "host", "install", "maintain", "task", "tool", "agile", "compatible", "enterprise"];
		answers = ["фон", "оборудование", "хозяин", "устанавливать", "поддерживать", "задание", "инструмент", "подвижный", "совместимый", "предприятие"];
	}
	else if (value == "hard") {
		words = ["excerpt", "scope", "vendor", "kernel", "shell", "subnet", "stress", "circumference", "fraction", "root"];
		answers = ["отрывок", "пределы", "поставщик", "ядро", "оболочка", "подсеть", "усилие", "окружность", "дробь", "корень"];
    }
	wordsTemp.push.apply(wordsTemp, words);
	answersTemp.push.apply(answersTemp, answers);
	randWord();
}
window.onload = run();