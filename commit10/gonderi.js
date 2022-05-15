window.addEventListener('load', () => {

    const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME');
    const email = sessionStorage.getItem('EMAIL');
    const phoneNo = sessionStorage.getItem('PHONNO');
    const country = sessionStorage.getItem('COUNTRY');
    const mesaj = sessionStorage.getItem('MESAJ');
    const languages = sessionStorage.getItem('LANGUES');
    const cinsiyet = sessionStorage.getItem('CINSIYET');

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;
    document.getElementById('result-email').innerHTML =email;
    document.getElementById('result-phoneNo').innerHTML =phoneNo;
    document.getElementById('result-country').innerHTML =country;
    document.getElementById('result-mesaj').innerHTML =mesaj;
    document.getElementById('result-languages').innerHTML = languages;
    document.getElementById('result-cinsiyet').innerHTML = cinsiyet;

})