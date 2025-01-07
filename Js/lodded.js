fetch('https://bot.dream-bot.online/pages/include/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

fetch('https://bot.dream-bot.online/pages/include/header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });
