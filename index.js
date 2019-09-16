console.log('EYYY')

const idGrabber = document.getElementById('idGrabber')
const styler = document.getElementById('styler')

console.log(idGrabber, styler)

const setCard = () => {
    
    const card = document.getElementById(idGrabber.value);
    console.log('hit func', card)
    card.style.color = styler.value
}
