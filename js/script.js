// Запитуємо у користувача ім'я.
// Чистимо введене значення від прогалин (пробілів) на початку/кінці рядка.
// Запитуємо у користувача прізвище.
// Чистимо введене значення від прогалин (пробілів) на початку/кінці рядка.
function getFullName() {
  const userName = prompt("Введіть ваше ім'я", "").trim();
  const userSurname = prompt("Введіть ваше прізвище", "").trim();
  return `<b>${userName} ${userSurname}</b>`;
}

// Запитуємо у користувача email.
// Чистимо введене значення від усіх прогалин.
// Наводимо введене значення до нижнього регістру.
function getEmail() {
  const email = prompt("Введіть ваш email", "").trim().toLowerCase();
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
// У змінну age вираховуємо актуальний вік користувача (new Date, getFullYear).
function getAge() {
  const userYear = +prompt("Введіть ваш рік народження", "").trim();
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


