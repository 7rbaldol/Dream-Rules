// توليد الشهب
function createStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.top = `${Math.random() * -20}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  document.getElementById("stars").appendChild(star);
  setTimeout(() => star.remove(), 2000); // إزالة النجم بعد انتهاء الحركة
}

// إنشاء الشهب بشكل دوري
setInterval(createStar, 700);

// تفعيل قائمة الهامبورجر
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
