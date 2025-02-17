const routes = {
    '/': 'home.html',
    '/about': 'about.html',
    '/contact': 'contact.html'
};

async function router() {

    const path = window.location.pathname;
    const contentDiv = document.getElementById('content');

    // Загружать содержимое, если маршрут найден
    if (routes[path]) {
        const response = await fetch(routes[path]);
        if (response.ok) {
            const content = await response.text();
            contentDiv.innerHTML = content;
        } else {
            contentDiv.innerHTML = '<h1>404 Страница не найдена</h1>';
        }
    } else {
        contentDiv.innerHTML = '<h1>404 Страница не найдена</h1>';
    }
}

// Обработчик клика по ссылкам
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', async (event) => {
        event.preventDefault();
        const path = link.getAttribute('href');

        history.pushState(null, '', path); // Изменяем URL

        await router(); // Вызываем функцию маршрутизации
    });
});

window.onpopstate = router;
router();


//
// //скролл эелементов с перекрытием
// const checkForElements = setInterval(() => {
//     const elements = document.querySelectorAll('.full_screen');
//     if (elements.length > 0) {
//         intersection()
//         clearInterval(checkForElements); // Останавливаем проверку
//     }
// }, 100);
//
//
//
//
// function intersection() {
//
//     // Все секции, за которыми будем наблюдать
//     const sections = document.querySelectorAll('.card');
//
//     // Настройки IntersectionObserver
//     const options = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.99
//     };
//
//     // Callback-функция
//     const callback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('sticky')
//                 if(entry.target.classList.contains('yellow')){
//
//                 }
//             }
//
//         });
//     };
//
//     // Создаем IntersectionObserver
//     const observer = new IntersectionObserver(callback, options);
//
//     // Начинаем наблюдение за всеми секциями
//     sections.forEach(section => observer.observe(section));
//
// }
//





