const $ = require('jquery');
import helloScript_2 from './script_2'
import './style.css';

window.$ = $;
window.jQuery = $;

console.log("I'm script 1!", $);

const element = document.createElement('div');

$(element).addClass('myClass');

$('body').append(element);

helloScript_2();
