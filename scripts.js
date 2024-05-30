const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  root: null, // Перевіряти видимість елементів відносно всього viewport
  rootMargin: '0px', // Не використовувати додаткові межі
  threshold: 0.8 // Спрацьовувати анімацію, коли 50% або більше елемента видимо
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));





const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show2');
    } else {
      entry.target.classList.remove('show2');
    }
  });
}, {
  root: null, // Перевіряти видимість елементів відносно всього viewport
  rootMargin: '0px', // Не використовувати додаткові межі
  threshold: 0.8 // Спрацьовувати анімацію, коли 50% або більше елемента видимо
});

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));



