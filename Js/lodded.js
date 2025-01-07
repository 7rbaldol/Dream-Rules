document.getElementById('footer').innerHTML = `<footer class="footer">
  <div class="footer-content">
    <p>© 2024 Dream Bot | جميع الحقوق محفوظة.</p>
    <div class="social-icons">
      <a href="https://discord.gg/bY5JWM4N5p" class="icon"><i class="fab fa-discord"></i></a>
    </div>
  </div>
</footer>`;
document.getElementById('header').innerHTML = `<header>
  <div class="logo-container">
    <img src="../Css/img/logo.png" alt="Dream Bot" class="logo" />
  </div>
  <div class="hamburger" onclick="toggleMenu()">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
  <nav id="menu">
    <a href="/"><i class="fas fa-home"></i> الرئيسية</a>
  </nav>
</header>`;
