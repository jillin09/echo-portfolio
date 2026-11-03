(()=>{const root=document.documentElement;
const params=new URLSearchParams(location.search);
let storedLook,storedMode;
try{storedMode=localStorage.getItem('echo-mode')}catch{}
root.dataset.look='slate';
root.dataset.mode=storedMode==='dark'?'dark':'light';
window.addEventListener('DOMContentLoaded',()=>{const button=document.querySelector('.mode-button');
function sync(){const dark=root.dataset.mode==='dark';
button.innerHTML=dark?"<svg aria-hidden=\"true\" focusable=\"false\" class=\"icon icon-sun\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  width=\"24\"\n  height=\"24\"\n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <circle cx=\"12\" cy=\"12\" r=\"4\" />\n  <path d=\"M12 2v2\" />\n  <path d=\"M12 20v2\" />\n  <path d=\"m4.93 4.93 1.41 1.41\" />\n  <path d=\"m17.66 17.66 1.41 1.41\" />\n  <path d=\"M2 12h2\" />\n  <path d=\"M20 12h2\" />\n  <path d=\"m6.34 17.66-1.41 1.41\" />\n  <path d=\"m19.07 4.93-1.41 1.41\" />\n</svg>":"<svg aria-hidden=\"true\" focusable=\"false\" class=\"icon icon-moon\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  width=\"24\"\n  height=\"24\"\n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" />\n</svg>";
button.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');
button.setAttribute('aria-pressed',String(dark));
button.title=dark?'Switch to light mode':'Switch to dark mode';
document.querySelectorAll('a[href]').forEach(a=>{let u=new URL(a.href,location.href);
if(u.origin===location.origin&&u.pathname.endsWith('.html')){u.searchParams.set('look','slate');
a.href=u.pathname+u.search+u.hash}})}
button.addEventListener('click',()=>{root.dataset.mode=root.dataset.mode==='dark'?'light':'dark';
try{localStorage.setItem('echo-mode',root.dataset.mode)}catch{}sync()});
sync()})})();
