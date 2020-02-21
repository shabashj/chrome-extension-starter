import {$,jQuery} from 'jquery';
import helloScript_2 from './script_2'

window.$ = $;
window.jQuery = jQuery;

console.log("I'm script 1!", $);

helloScript_2();
