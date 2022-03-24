const form = document.querySelector('form')

// POST TO MESSAGES API
form.addEventListener('submit', e => {
    e.preventDefault()
    let date = new Date()
    let data = {
        message: e.target.elements.message.value,
        hours: date.getHours(),
        minutes: date.getMinutes()
    }
    fetch(`https://daimonke.herokuapp.com/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(form.reset())
    .finally(updateScreen())
})

// GET MESSAGES TO SCREEN
const chatbox = document.querySelector('.chatbox')


function updateScreen() {
    fetch(`https://daimonke.herokuapp.com/api/messages`)
        .then(data => data.json())
        .then(data => {
            chatbox.innerHTML = ''
            data.forEach(item => {
                const chatDiv = document.createElement('div')
                const msg = document.createElement('h3')
                const time = document.createElement('h3')
                chatDiv.classList.add('chatDiv')

                msg.classList.add('msg')
                time.classList.add('time')

                msg.textContent = item.message
                time.textContent = `${item.hours}:${item.minutes}h`

                chatDiv.append(msg, time)
                chatbox.append(chatDiv)
            })
        })
}
updateScreen()