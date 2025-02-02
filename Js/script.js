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
    // منع F12 و Ctrl+Shift+I

    document.addEventListener("keydown", function (e) {
      if ((e.key === "F12") || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault(); // منع تنفيذ الاختصار
        alert("أدوات المطور تم تعطيلها.");
      }
    });
    
    // منع زر الفأرة الأيمن (Right Click)
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault(); // منع القائمة السياقية
      alert("القائمة السياقية تم تعطيلها.");
    });
    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('open');
      }
document.addEventListener("DOMContentLoaded", function () {
            axios.get('http://37.60.246.173:2602/api/Owners')  // 🔹 استبدل بعنوان السيرفر الخاص بك
                .then(response => {
                    const ownersContainer = document.getElementById("owners-container");
                    const owners = response.data.data;  // تأكد أن بيانات المالكين في `data`

                    owners.forEach(owner => {
                        const ownerCard = document.createElement("div");
                        ownerCard.classList.add("owner-card");

                        ownerCard.innerHTML = `
                            <img src="${owner.avatar}" alt="${owner.username}" class="owner-avatar">
                            <h3>${owner.username}</h3>
                            <p>ID: ${owner.id}</p>
                        `;

                        ownersContainer.appendChild(ownerCard);
                    });
                })
                .catch(error => {
                    console.error('❌ Error fetching owners:', error);
                });
        })
