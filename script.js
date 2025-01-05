// توليد الشهب
function createStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.top = `${Math.random() * -20}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  document.getElementById("stars").appendChild(star);
  
  // إزالة النجم بعد انتهاء الحركة
  setTimeout(() => star.remove(), 4000); 
}

// إنشاء الشهب بشكل دوري
setInterval(createStar, 700);

// تفعيل قائمة الهامبورجر
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("open"); // إضافة أو إزالة الكلاس "open"
}
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
