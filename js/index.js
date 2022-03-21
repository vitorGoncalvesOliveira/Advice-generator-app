
callAdviceApi()
function callAdviceApi(){
    console.log('call API')
    fetch('https://api.adviceslip.com/advice')
    .then(result => result.json())
    .then(({slip}) => {
        const adviceId = document.getElementById('advice-id')
        const advice = document.getElementById('advice')
        adviceId.innerText = slip.id
        advice.innerText = `"${slip.advice}"`

    
    })
}


window.onload = function(){
        const divDice = document.getElementById("dice-img")         
        divDice.addEventListener('click',callAdviceApi)
}
