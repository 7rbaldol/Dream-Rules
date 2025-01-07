/*fetch('https://bot.dream-bot.online/pages/include/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });*/
 document.getElementById('footer').innerHTML = `<footer class="footer">
    <div class="footer-content">
      <p>© 2024 Dream Bot | جميع الحقوق محفوظة.</p>
      <div class="social-icons">
        <a href="https://discord.gg/bY5JWM4N5p" class="icon"><i class="fab fa-discord"></i></a>
      </div>
    </div>
  </footer>
  `
document.getElementById('header').innerHTML = 
/*fetch('https://bot.dream-bot.online/pages/include/header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });*/
