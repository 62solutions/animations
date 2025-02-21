import { gsap} from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin( MotionPathPlugin );

const path = [
    { x: 800, y: 0 },
    // { x: 20, y: 20 },

];

const checkForElements = setInterval(() => {
    const elements = document.querySelectorAll('#header');
    if (elements.length > 0) {
       animations()
        clearInterval(checkForElements);
    }
}, 100);


function animations(){

    gsap.to(".header-text", {
        duration: 1,
        text: "HEADER",
        ease: "expo.inOut" ,
        yoyo: true,
        onComplete: () => {
            gsap.to(".header-text", {
                motionPath: {
                    path: path,
                },
                duration: 1,
                delay: 0.2
            });
        }
    })
}