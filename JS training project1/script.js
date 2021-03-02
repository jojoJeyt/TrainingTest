let phrases = [
    { text: 'читать книги'},
    { text: 'учиться чем-то новому'},
    { text: 'разобраться, о чём говорят люди'},
    { text: 'Илон Маск'},
    { text: 'расставить книги на полке по цвету'},
    { text: 'читать про зарплаты в Сан-Франциско'},
    { text: 'прочитать новости и ужаснуться в комментариях'},
    { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости'},
    { text: 'посмотреть трейлер сериала и заодно первый сезон'},
    { text: 'проверить непрочитанное в Telegram-каналах'}
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text)

    if (randomElement.text.length > 40) {
        advice.style.fontSize = '33px';
    } else {
        advice.style.fontSize = '42px';
    }
});

for (let i = 0; i <= 2; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
}
