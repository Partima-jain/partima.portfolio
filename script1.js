
const scriptURL = 'https://script.google.com/macros/s/AKfycbyYETIqC28r_sd9awS4JMp_gSirHFcagJ7iro3Y-hVwwaiytvIebmU2ZCJhlmccOzTK/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Sent Successfully!"
            setTimeout(function(){
                msg.innerHTML = ""
            },1000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
