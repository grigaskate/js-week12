// Объявляем переменные
const username = document.querySelector(".username"); //переменная для поля "Введите ваше ФИО"
const nickname = document.querySelector(".nickname"); //переменная для чата Ник пользователя
const linkPhoto = document.querySelector(".linkPhoto"); //переменная для поля "Введите ссылку вашего аватара"
const avatar = document.querySelector(".avatar"); //переменная для чата Аватар
const comment = document.querySelector(".comment"); //переменная для поля "Оставьте комментарий"
const message = document.querySelector(".message"); //переменная для чата Сообщение пользователя
const button = document.querySelector(".form__btn"); //переменная для кнопки
const line = document.querySelector(".line"); //переменная для чата "Нижнее подчеркивание после комментария пользователя"
const dateNow = document.querySelector(".dateNow"); //переменная для чата "Время, когда пользователь оставил комментарий"

//Функция вывода имени
let showNickname = () => {
  const usernameValue = username.value.toLowerCase(); //получаем значения, введенные пользователем в поле "Введите ваше ФИО" и переводим их в нижний регистр
  const arr = usernameValue.split(" "); //разбиваем строку на массив
  const arrNew = []; //создаем новый массив, куда будет записываться результат цикла for
  for (let i = 0; i < arr.length; i++) {
    arrNew.push((arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)));
  }
  const usernameEnd = arrNew.join(" "); //создаём строку из элементов нового массива arrNew
  nickname.textContent = `${usernameEnd}`;
};

//Функция вывода аватара пользователя
showAvatar = () => {
  if (linkPhoto.value === "") {
    showRandomAvatar();
  } else {
    avatar.innerHTML = `<img src=${linkPhoto.value} alt="avatar" class="avatar__size"/>`;
  }
};

//Функция срабатывания чекбокса и вывода имени
let checkShowName = () => {
  const ShowNameNo = document.getElementById("no");
  if (ShowNameNo.checked) {
    nickname.textContent = `username`;
  } else {
    showNickname();
  }
};

//Функция вывода стандартного аватара, если пользователь не ввел ссылку для отображения аватара
showRandomAvatar = () => {
  const arrAvatar = [
    "assets/image/avatar1.jpeg",
    "assets/image/avatar2.jpeg",
    "assets/image/avatar3.jpg",
    "assets/image/avatar4.jpg",
    "assets/image/avatar5.jpg",
    "assets/image/avatar6.jpg",
  ];
  let i = Math.floor(Math.random() * arrAvatar.length);
  avatar.innerHTML = `<img src=${arrAvatar[i]} alt="avatar" class="avatar__size"/>`;
};

let checkComment = () => {
  const inputComment = comment.value;
  if (inputComment === "") {
    alert('Заполните поле "Комментарий"');
    return;
    document.querySelector("form").reset();
  } else {
    let commentValue = comment.value.toLowerCase();
    if (commentValue.includes("viagra")) {
      commentValue = commentValue.replace(/viagra/gi, "***");
      message.innerHTML = `${commentValue}`;
    } else if (commentValue.includes("xxx")) {
      commentValue = commentValue.replace(/xxx/gi, "***");
      message.innerHTML = `${commentValue}`;
    } else message.innerHTML = `${commentValue}`;
  }
};

// Назначим обработчик при клике на кнопку button
button.addEventListener("click", (event) => {
  //Выводим комментарий пользователя
  checkComment();

  //Выводим ник пользователя
  checkShowName();

  //Выводим аватар пользователя
  showAvatar();

  //Выводим текущее время
  dateNow.innerHTML = new Date().toLocaleString();

  //Выводим нижнее подчеркивание после комментария пользователя
  line.innerHTML = `<div class=line__border></div>`;

  //Найти div, содержащий все комментарии
  const commentsDiv = document.querySelector(".comments");

  // Создать новый элемент для нового комментария
  const newComment = document.createElement("div");
  newComment.classList.add("comment");
  newComment.innerHTML = `
    <div class="comment__header">
      <div class="comment__info">
        <div class="comment__avatar">${avatar.innerHTML}</div>
        <div class="comment__nickname">${nickname.textContent}</div>
      </div>
      <div class="comment__date">${dateNow.innerHTML}</div>
    </div>
    <p class=comment__message>${message.innerHTML}</p>
    <div class=comment__line">${line.innerHTML}</div>
    `;

  // Добавить новый комментарий в div с классом comments
  commentsDiv.appendChild(newComment);

  //Очистка формы после отправки комментария
  document.querySelector("form").reset();
});
