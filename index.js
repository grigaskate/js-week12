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

//Функция вывода времени
let getTime = () => {
  const time = new Date();
  const day = time.getDay();
  let arrDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = arrDay[day];
  const year = time.getFullYear();
  const month = time.getMonth();
  let arrMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  monthName = arrMonth[month];
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  dateNow.innerHTML = `${dayName}, ${year} ${monthName} ${date} at ${hours}:${minutes}:${seconds}`;
};

//Функция срабатывания чекбокса и вывода имени
let checkShowName = () => {
  const ShowNameYes = document.getElementById("yes");
  const ShowNameNo = document.getElementById("no");
  if (ShowNameNo.checked) {
    nickname.textContent = `username`;
  } else {
    showNickname();
  }
};

//Функция вывода стандартного аватара, если пользователь не ввел ссылку для отобржаения аватара
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
    nickname.style.display = "None";
    avatar.style.display = "None";
    message.style.display = "None";
    line.style.display = "None";
    dateNow.style.display = "None";
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
  getTime();

  //Выводим нижнее подчеркивание после комментария пользователя
  line.innerHTML = `<div class=line__border></div>`;
});
