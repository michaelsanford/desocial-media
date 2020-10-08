'use strict';

const instagram = window.location.hostname == "www.instagram.com";
const facebook = window.location.hostname == "www.facebook.com";

window.addEventListener('scroll', () => {
        instagram && [...document.getElementsByClassName('EtaWk')].forEach(a => a.style.display = "none");
        facebook && [...document.getElementsByClassName('cwj9ozl2 tvmbv18p')].forEach(a => a.style.display = "none");
});

instagram && [...document.getElementsByClassName('EtaWk')].forEach(a => a.style.display = "none");
facebook && [...document.getElementsByClassName('cwj9ozl2 tvmbv18p')].forEach(a => a.style.display = "none");
