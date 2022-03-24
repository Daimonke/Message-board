const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()
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
    form.reset()
})