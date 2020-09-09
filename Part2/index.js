const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');
const defaultColor = 'grey';

const setCard = () =>{
    const id = idInput.value;
    const card = document.getElementById(id);
    const color = colorInput.value;
    card.style.color = color;
}

const resetCards = () =>{
    let cardList = Array.from(document.getElementsByTagName('section'));
    for(let i = 0; i < cardList.length; i++){
        cardList[i].style.color = defaultColor;
    }
}