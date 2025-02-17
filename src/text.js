import { gsap} from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


const checkForElements = setInterval(() => {
    const elements = document.querySelectorAll('#header');
    if (elements.length > 0) {
        gsap.to("#header", {
            duration: 1, // Длительность анимации
            text: "HEADER", // Новый текст
            ease: "elastic.inOut" // Эффект плавности
        });
        clearInterval(checkForElements); // Останавливаем проверку
    }
}, 100);

