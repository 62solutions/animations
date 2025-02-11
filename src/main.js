// document.addEventListener("DOMContentLoaded", function (){
//     textZoom();
// })
//
// function textZoom(){
//     let text = document.getElementById('title');
//     text.classList.add('title_zoom_in')
// }
//
//
// function shrinkBox() {
//     const box = document.getElementById('box');
//     const mainContainer = document.getElementsByClassName('container')[0];
//     let text = document.getElementById('title');
//     text.classList.remove('title_zoom_in')
//     box.classList.add('expand');
//
//     setTimeout(() => {
//
//         box.classList.remove('expand');
//         box.classList.add('shrink');
//         mainContainer.classList.toggle('new_background')
//
//         setTimeout(() => {
//             box.classList.remove('shrink');
//
//             const transitionEndHandler = function() {
//                 console.log('animation END!');
//                 text.classList.add('title_zoom_in');
//                 box.removeEventListener("transitionend", transitionEndHandler);
//             };
//
//             box.addEventListener("transitionend", transitionEndHandler)
//         }, 1000);
//
//
//     }, 1000);
//
// }







