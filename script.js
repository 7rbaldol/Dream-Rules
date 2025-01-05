window.onload = () => {
let Lodding = document.getElementById('Lodding');
let loadingScreen = document.querySelector('.loading-screen');
let progressValue = 0;

 
let interval = setInterval(() => {
if(progressValue < 100) {
progressValue += 1;
Lodding.value = progressValue;
} else {

clearInterval(interval);
loadingScreen.classList.add('hidden');
}
}, 30);
};
