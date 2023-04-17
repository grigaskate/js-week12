// Объявляем переменные
const username = document.querySelector(".username"); //переменная для поля "Введите ваше ФИО"
const nickname = document.querySelector(".nickname"); //переменная для чата Ник пользователя
const linkPhoto = document.querySelector(".linkPhoto"); //переменная для поля "Введите ссылку вашего аватара"
const avatar = document.querySelector(".avatar"); //переменная для чата Аватар
const comment = document.querySelector(".comment"); //переменная для поля "Оставьте комментарий"
const message = document.querySelector(".message"); //переменная для чата Сообщение пользователя
const button = document.querySelector(".form__btn"); //переменная для кнопки
const line = document.querySelector(".line");

// Назначим обработчик при клике на кнопку button
button.addEventListener("click", (event) => {
  //Выводим аватар пользователя из введенной им ссылки
  avatar.innerHTML = `<img src=${linkPhoto.value} alt="avatar" class="avatar__size"/>`;
  //Выводим ник пользователя
  const usernameValue = username.value.toLowerCase(); //получаем значения, введенные пользователем в поле "Введите ваше ФИО" и переводим их в нижний регистр
  const arr = usernameValue.split(" "); //разбиваем строку на массив
  const arrNew = []; //создаем новый массив, куда будет записываться результат цикла for
  for (let i = 0; i < arr.length; i++) {
    arrNew.push((arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)));
  }
  const usernameEnd = arrNew.join(" "); //создаём строку из элементов нового массива arrNew
  nickname.textContent = `${usernameEnd}`;

  //Выводим комментарий пользователя
  let commentValue = comment.value.toLowerCase();
  if (commentValue.includes("viagra")) {
    commentValue = commentValue.replace(/viagra/gi, "***");
    message.innerHTML = `${commentValue}`;
  }
  if (commentValue.includes("xxx")) {
    commentValue = commentValue.replace(/xxx/gi, "***");
    message.innerHTML = `${commentValue}`;
  } else message.innerHTML = `${commentValue}`;

  //Выводим нижнее подчеркивание после комментария пользователя
  line.innerHTML = `<div class=line__border></div>`;
});
