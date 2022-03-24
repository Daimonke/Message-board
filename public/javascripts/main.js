const form = document.querySelector('form')

// POST TO MESSAGES API
form.addEventListener('submit', e => {
    let date = new Date()
    let data = {
        message: e.target.elements.message.value,
        hours: date.getHours(),
        minutes: date.getMinutes()
    }
    fetch('http://localhost:3000/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(form.reset())
    .then(updateScreen())
})

// GET MESSAGES TO SCREEN
const chatbox = document.querySelector('.chatbox')


function updateScreen() {
    fetch('http://localhost:3000/api/messages')
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