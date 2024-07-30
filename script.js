const name = document.getElementById('name');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const text = document.getElementById('text');
const submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tcatty7@gmail.com",
        Password : "96915101A454B97FA5208BAD4C9AAA3560E6",
        To : 'tcatty7@gmail.com',
        From : "tcatty7@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
console.log('hey')
})

