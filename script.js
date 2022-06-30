function cat() {
    let a =
    prompt("please enter your name", "ted brown");
document.getElementById("cat").innerHTML = "Hello " + a + " this the begining of my website.";
}function dog() {
    let name =  
confirm("do you want to go to youtube?");
    if(name == false) {
        event.preventDefault();
        alert('keep enjoying the website😊')
    }
}
function egg() {
    let f = 
    confirm('are sure you want to go to amazon?')
    if(f == false) {
        event.preventDefault();
   alert('keep enjoying the website😊')
    }
}
const a = ["hello ","there"]
console.log(a[0]+ a[1])