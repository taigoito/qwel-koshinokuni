/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 * @package Qwel-Two
 */

// Words Flip

const words = document.querySelectorAll('.hero__animate');
let count = 0;
words[0].classList.add('animate');
setInterval(() => {
  words[count % 3].classList.remove('animate');
  count++;
  words[count % 3].classList.add('animate');
}, 4000);
