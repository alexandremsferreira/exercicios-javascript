const addElements = (ul, arr) => {
    let HTMLTemplate = '';
    arr.forEach(item => HTMLTemplate += `<li>${item}</li>`);
    ul.innerHTML = HTMLTemplate;
};

addElements(document.querySelector('[data-js="ul"]'), ['Toyota', 'Nissan', 'Fiat', 'Wolkswagen']);