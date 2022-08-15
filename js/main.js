new ClipboardJS('#copy');

const input = document.querySelector('#copy__input');
const inputFake = document.querySelector('#copy__input-fake');
const copyBtn = document.querySelector('#copy');

const inputPrevValue = input.value;

copyBtn.addEventListener('click', () => {
    inputFake.value = '✓';
    setTimeout(() => inputFake.value = inputPrevValue, 800)
})

input.addEventListener('click', () => {
    this.select();
})
