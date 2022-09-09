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


// секция full-screen

const fullScreen = document.createElement('section');
fullScreen.classList.add('full-screen');
document.body.appendChild(fullScreen);

const container2 = document.createElement('div');
fullScreen.appendChild(container2);
container2.classList.add('container', 'full-screen__container');

const fullScrean__title = document.createElement('h1');
container2.appendChild(fullScrean__title);
fullScrean__title.classList.add('full-screen__title')
fullScrean__title.innerText = 'Rybinsk Projects Company';

const fullScrean__miniTitle = document.createElement('h2');
container2.appendChild(fullScrean__miniTitle);
fullScrean__miniTitle.classList.add('full-screen__mini-title', 'main-medium-heading');
fullScrean__miniTitle.innerText = 'Наш девиз четыре слова: нет дорог построим реки';

const fullScrean__btn = document.createElement('a');
container2.appendChild(fullScrean__btn);
fullScrean__btn.classList.add('full-screen__btn','btn');
fullScrean__btn.innerText = 'Заплыть в бухту';
fullScrean__btn.href = '#';


// секция about

const about = document.createElement('section');
about.classList.add('about');
document.body.appendChild(about);

const container3 = document.createElement('div');
about.appendChild(container3);
container3.classList.add('container', 'about__container');

const about__miniTitle = document.createElement('h2');
container3.appendChild(about__miniTitle);
about__miniTitle.classList.add('about__mini-title', 'main-medium-heading');
about__miniTitle.innerText = 'Кто я такой?';

const about__contentBox = document.createElement('div');
about__contentBox.classList.add('about__content-box');
container3.appendChild(about__contentBox);

const about__image = document.createElement('img');
about__image.classList.add('about__image');
about__contentBox.appendChild(about__image);
about__image.src = 'image/jM5NSLPpKUs.png'

const about__textBox = document.createElement('div');
about__textBox.classList.add('about__text-box');
about__contentBox.appendChild(about__textBox);

const about__descr = document.createElement('p');
about__descr.classList.add('about__descr');
about__textBox.appendChild(about__descr);
about__descr.innerText = 'Меня зовут Женя (Рыбинский). Я занимаюсь веб-разработкой и физикой.';

const about__descr2 = document.createElement('p');
about__descr2.classList.add('about__descr');
about__textBox.appendChild(about__descr2);
about__descr2.innerText = 'Сейчас я собираю команду для совместных разработок, поскольку в одиночку я не справлюсь со своими амбициями и планами';


// секция company

const company = document.createElement('section');
company.classList.add('company');
document.body.appendChild(company);

const container4 = document.createElement('div');
company.appendChild(container4);
container4.classList.add('container', 'company__container');

const company__miniTitle = document.createElement('h2');
container4.appendChild(company__miniTitle);
company__miniTitle.classList.add('company__mini-title', 'main-medium-heading');
company__miniTitle.innerText = 'О компании';

const company__descr = document.createElement('p');
container4.appendChild(company__descr);
company__descr.classList.add('company__mini-title', 'main-medium-heading');
company__descr.innerText = 'Компания создана для улучшения уровня жизни жителей города Рыбинска. Я не доволен, что в Рыбинске с каждым годом уменьшается число жителей и хотел бы это исправить. Для этого я разработал особый план “Спасение Рыбинска”. Всё просто - нам необходимо сделать игру “Рыбинский аллигатор”, благодаря которой я стану известным. Далее я буду баллотироваться на должность мэра Рыбинска, чтобы взять ситуацию под личный контроль. Оказавшись в кресле мэра я начну реформы по заранее подготовленному проекту (ознакомиться можно здесь___). ';


// operation

const operation = document.createElement('section');
operation.classList.add('operation');
document.body.appendChild(operation);

const container5 = document.createElement('div');
operation.appendChild(container5);
container5.classList.add('container', 'operation__container');

const operation__miniTitle = document.createElement('h2');
container5.appendChild(operation__miniTitle);
operation__miniTitle.classList.add('operation__mini-title', 'main-medium-heading');
operation__miniTitle.innerText = 'Операция “Спасение рыбинска”';

const operation__imageBox = document.createElement('ul');
container5.appendChild(operation__imageBox);
operation__imageBox.classList.add('operation__image-box');

// карточка плана начало
const operation__card = document.createElement('li');
operation__imageBox.appendChild(operation__card);
operation__card.classList.add('operation__card');

const operation__cardContent = document.createElement('div');
operation__card.appendChild(operation__cardContent);
operation__cardContent.classList.add('operation__card-content');

const operation__arrow = document.createElement('img');
operation__card.appendChild(operation__arrow);
operation__arrow.classList.add('operation__arrow');
operation__arrow.src = 'image/Arrow 1.png';

const operation__descr = document.createElement('p');
operation__cardContent.appendChild(operation__descr);
operation__descr.classList.add('operation__descr');
operation__descr.innerText = 'Собираем команду';

const operation__image = document.createElement('img');
operation__cardContent.appendChild(operation__image);
operation__image.classList.add('operation__image');
operation__image.src = 'image/48c8.png';
// карточка плана конец

// карточка плана начало 2
const operation__card2 = document.createElement('li');
operation__imageBox.appendChild(operation__card2);
operation__card2.classList.add('operation__card');

const operation__cardContent2 = document.createElement('div');
operation__card2.appendChild(operation__cardContent2);
operation__cardContent2.classList.add('operation__card-content');

const operation__arrow2 = document.createElement('img');
operation__card2.appendChild(operation__arrow2);
operation__arrow2.classList.add('operation__arrow');
operation__arrow2.src = 'image/Arrow 1.png';

const operation__descr2 = document.createElement('p');
operation__cardContent2.appendChild(operation__descr2);
operation__descr2.classList.add('operation__descr');
operation__descr2.innerText = 'Разрабатываем Рыбинского алигатора';

const operation__image2 = document.createElement('img');
operation__cardContent2.appendChild(operation__image2);
operation__image2.classList.add('operation__image');
operation__image2.src = 'image/maxresdefault 1.png';
// карточка плана конец

// карточка плана начало 3
const operation__card3 = document.createElement('li');
operation__imageBox.appendChild(operation__card3);
operation__card3.classList.add('operation__card');

const operation__cardContent3 = document.createElement('div');
operation__card3.appendChild(operation__cardContent3);
operation__cardContent3.classList.add('operation__card-content');

const operation__arrow3 = document.createElement('img');
operation__card3.appendChild(operation__arrow3);
operation__arrow3.classList.add('operation__arrow');
operation__arrow3.src = 'image/Arrow 1.png';

const operation__descr3 = document.createElement('p');
operation__cardContent3.appendChild(operation__descr3);
operation__descr3.classList.add('operation__descr');
operation__descr3.innerText = 'Становимся богатыми и известными';

const operation__image3 = document.createElement('img');
operation__cardContent3.appendChild(operation__image3);
operation__image3.classList.add('operation__image');
operation__image3.src = 'image/16812593_original 1.png';
// карточка плана конец

// карточка плана начало 4
const operation__card4 = document.createElement('li');
operation__imageBox.appendChild(operation__card4);
operation__card4.classList.add('operation__card');

const operation__cardContent4 = document.createElement('div');
operation__card4.appendChild(operation__cardContent4);
operation__cardContent4.classList.add('operation__card-content');

const operation__arrow4 = document.createElement('img');
operation__card4.appendChild(operation__arrow4);
operation__arrow4.classList.add('operation__arrow');
operation__arrow4.src = 'image/Arrow 1.png';

const operation__descr4 = document.createElement('p');
operation__cardContent4.appendChild(operation__descr4);
operation__descr4.classList.add('operation__descr');
operation__descr4.innerText = 'Наслаждаемся';

const operation__image4 = document.createElement('img');
operation__cardContent4.appendChild(operation__image4);
operation__image4.classList.add('operation__image');
operation__image4.src = 'image/2377357288 1.png';
// карточка плана конец

// карточка плана начало 5
const operation__card5 = document.createElement('li');
operation__imageBox.appendChild(operation__card5);
operation__card5.classList.add('operation__card');

const operation__cardContent5 = document.createElement('div');
operation__card5.appendChild(operation__cardContent5);
operation__cardContent5.classList.add('operation__card-content');

const operation__arrow5 = document.createElement('img');
operation__card5.appendChild(operation__arrow5);
operation__arrow5.classList.add('operation__arrow');
operation__arrow5.src = 'image/Arrow 1.png';

const operation__descr5 = document.createElement('p');
operation__cardContent5.appendChild(operation__descr5);
operation__descr5.classList.add('operation__descr');
operation__descr5.innerText = 'Проводим реформы';

const operation__image5 = document.createElement('img');
operation__cardContent5.appendChild(operation__image5);
operation__image5.classList.add('operation__image');
operation__image5.src = 'image/1519e954ae6bd629544356cae3e51766_XL 1.png';
// карточка плана конец

// карточка плана начало 6
const operation__card6 = document.createElement('li');
operation__imageBox.appendChild(operation__card6);
operation__card6.classList.add('operation__card');

const operation__cardContent6 = document.createElement('div');
operation__card6.appendChild(operation__cardContent6);
operation__cardContent6.classList.add('operation__card-content');

const operation__arrow6 = document.createElement('img');
operation__card6.appendChild(operation__arrow6);
operation__arrow6.classList.add('operation__arrow');
operation__arrow6.src = 'image/Arrow 1.png';

const operation__descr6 = document.createElement('p');
operation__cardContent6.appendChild(operation__descr6);
operation__descr6.classList.add('operation__descr');
operation__descr6.innerText = 'Мама, я мэр Рыбинска';

const operation__image6 = document.createElement('img');
operation__cardContent6.appendChild(operation__image6);
operation__image6.classList.add('operation__image');
operation__image6.src = 'image/me`r 1.png';
// карточка плана конец