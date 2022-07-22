
const allSteps = [
  {name: '1. Анализ',
    text:'Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение.',
    img: 'step1.png',
  },
  {name: '2. Визуальное решение',
  text:'Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт.',
  img: 'step2.png',
  },
  {name: '3. Техническая реализация',
  text:'После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.',
  img: 'step3.png',
  },
  {name: '4. Наполнение контентом ',
  text:'Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом.',
  img: 'step4.png',
  },
  {name: '1. Анализ',
  text:'Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.',
  img: 'step5.png',
  },
];

const servicesLi = document.querySelectorAll('.services_item');
const servicesTitle = document.querySelectorAll('.services_item__block_title');
const stepsList = document.querySelector('.steps_list');
const exampleImg = document.querySelectorAll('.examples_block__img');
const menuBtn = document.querySelector('.header_menu__btn');
const menuList = document.querySelector('.header_menu__modal_window');
const menuitems = document.querySelectorAll('.header_menu__modal_window_item');

allSteps.map((el, index)=> {
  const div = document.createElement('div');
  div.classList.add('carousel-item');
  
  if(index === 0) {
    div.classList.add('active');
  }

  div.innerHTML = `
    <div class="steps_container">
      <div>
        <h2 class="steps_container__title">${el.name}</h2>
        <p class="steps_container__text">${el.text}</p>
      </div>
      <img class="steps_container__img" src=./images/${el.img} alt=""/>
    </div>
  `;
  stepsList.append(div)
});

servicesLi.forEach((li) => {
  li.addEventListener('click', () => {
    li.querySelector('.services_item__text').classList.toggle('active');
    li.querySelector('.services_item__circle').classList.toggle('active');
    li.querySelector('.services_arrow__closed').classList.toggle('active');
    li.querySelector('.services_arrow__opened').classList.toggle('active');
  });
});

exampleImg.forEach((el) => {
  el.addEventListener('click', () => {
    el.querySelector('.examples_block__info').classList.toggle('active');
  });
});

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

menuList.addEventListener('click',() => {
  menuList.classList.remove('active');
});
