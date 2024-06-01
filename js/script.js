function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Запитуємо у користувача ім'я.
// Чистимо введене значення від прогалин (пробілів) на початку/кінці рядка.
// Ім'я може бути подвійне через дефіс або пробіл. Кожне слово з великої літери
// Запитуємо у користувача прізвище.
// Чистимо введене значення від прогалин (пробілів) на початку/кінці рядка.
// Прізвище може бути подвійне через дефіс або пробіл. Кожне слово з великої літери
function getFullName() {
  const formatName = (name, symbol) => {
    return name
      .split(symbol)
      .filter(Boolean)
      .map((item) => capitalize(item))
      .join(symbol);
  };

  let userName = prompt("Введіть ваше ім'я", "").trim();
  userName = userName.includes("-") ? formatName(userName, "-") : formatName(userName, " ");

  let userSurname = prompt("Введіть ваше прізвище", "").trim();
  userSurname = userSurname.includes("-") ? formatName(userSurname, "-") : formatName(userSurname, " ");

  return `<b>${userName} ${userSurname}</b>`;
}

// Запитуємо у користувача email.
// Чистимо введене значення від усіх прогалин.
// Наводимо введене значення до нижнього регістру.
function getEmail() {
  let email = prompt("Введіть ваш email.", "").trim().toLowerCase();
  while (!email.includes(".") || email.split(".")[1].length < 2) {
    email = prompt(
      "Введіть ваш email вірно! Email повинен містити точку та символи після неї.",
      ""
    )
      .trim()
      .toLowerCase();
  }
  if (!email.includes("@")) {
    return `not valid email <b>${email}</b> (symbol @ not exist)`;
  }
  if (email.startsWith("@")) {
    return `not valid email <b>${email}</b> (symbol @ find in first place)`;
  }
  if (email.endsWith("@")) {
    return `not valid email <b>${email}</b> (symbol @ find in last place)`;
  }
  return `<b>${email}</b>`;
}

// Запитуємо у користувача рік народження.
// Чистимо введене значення від усіх прогалин. Наприклад, "1990" - допустиме, "1990" - недопустиме.
// Діапазон дат з 1900 робити перевірку
// У змінну age вираховуємо актуальний вік користувача (new Date, getFullYear).
function getAge() {
  let userYear = +prompt("Введіть ваш рік народження", "").trim();
  while (userYear < 1900 || userYear > 2024) {
    userYear = +prompt(
      "Такого не може бути. Введіть ваш рік народження правильно!",
      ""
    ).trim();
  }
  return `<b>${new Date().getFullYear() - userYear}</b>`;
}

// Робимо виведення даних користувача body у вигляді маркованого списку. Приклад висновку:
document.write(`
  <ul style="font-size: 1.5rem">
    <li>Full name: ${getFullName()}</li>
    <li>Email: ${getEmail()}</li>
    <li>Age: ${getAge()}</li>
  </ul>
`);
