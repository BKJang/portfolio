
class Footer {
  constructor() {
    const instagramAnchor = document.querySelector('.instagram');
    const facebookAnchor = document.querySelector('.facebook');

    instagramAnchor.innerHTML = `<div class="footer_font">Instagram</div>`;
    facebookAnchor.innerHTML = `<div class="footer_font">Facebook</div>`;

  }
}

export default Footer;
