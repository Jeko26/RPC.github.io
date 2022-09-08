const header = document.createElement('header');
header.classList.add('header');

const container = document.createElement('div')
header.appendChild(container);
container.classList.add('container', 'header__container')

const header__bigLogo = document.createElement('div');
container.appendChild(header__bigLogo);
document.body.appendChild(header);
header__bigLogo.classList.add('header__bigLogo');

const header__logoText = document.createElement('div');
header__bigLogo.appendChild(header__logoText);
header__logoText.classList.add('header__logoText');

const header__descr = document.createElement('p');
header__logoText.appendChild(header__descr);
header__descr.classList.add('header__descr');
header__descr.innerText = 'Rybinsk Projects Company';

const header__descr2 = document.createElement('p');
header__logoText.appendChild(header__descr2);
header__descr2.classList.add('header__descr');
header__descr2.innerText = 'Больше, чем просто компания';

const img = document.createElement('img');
header__bigLogo.appendChild(img);
img.src = 'image/logo.png'

const header__links = document.createElement('ul');
container.appendChild(header__links);
header__links.classList.add('header__links');

const header__link1 = document.createElement('li');
header__links.appendChild(header__link1);
header__link1.classList.add('header__link');
header__link1.innerText = 'Обо мне';

const header__link2 = document.createElement('li');
header__links.appendChild(header__link2);
header__link2.classList.add('header__link');
header__link2.innerText = 'О компании';

const header__link3 = document.createElement('li');
header__links.appendChild(header__link3);
header__link3.classList.add('header__link');
header__link3.innerText = 'План';

const header__link4 = document.createElement('li');
header__links.appendChild(header__link4);
header__link4.classList.add('header__link');
header__link4.innerText = 'Система “Свой”';

const header__link5 = document.createElement('li');
header__links.appendChild(header__link5);
header__link5.classList.add('header__link');
header__link5.innerText = 'Контакты';
