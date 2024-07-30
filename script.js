const name1 = document.getElementById('name').innerText;
const email = document.getElementById('email').innerText;
const subject = document.getElementById('subject').innerText;
const text = document.getElementById('text').innerText;
const submit = document.getElementById('submit')

let body = "Name: " + name1 + "<br/>Email: " + email + "<br/>message: " + text;

submit.addEventListener('click', (e) => {
    e.preventDefault()
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tcatty7@gmail.com",
        Password : "96915101A454B97FA5208BAD4C9AAA3560E6",
        To : 'tcatty7@gmail.com',
        From : "tcatty7@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message => alert(thx)
    );
console.log('hey')
})

