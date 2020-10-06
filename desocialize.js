'use strict';

const instagram = window.location.hostname == "www.instagram.com";
const facebook = window.location.hostname == "www.facebook.com";

window.addEventListener('scroll', () => {
        instagram && [...document.getElementsByClassName('EtaWk')].forEach(a => a.remove());
        facebook && [...document.getElementsByClassName('cwj9ozl2 tvmbv18p')].forEach(a => a.remove());
});

instagram && [...document.getElementsByClassName('EtaWk')].forEach(a => a.remove());
facebook && [...document.getElementsByClassName('cwj9ozl2 tvmbv18p')].forEach(a => a.remove());