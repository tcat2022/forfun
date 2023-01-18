const cursor = document.querySelector(".cursor");
const div = document.getElementById('div');

document.addEventListener('mousemove', e => {
    console.log(e)
cursor.setAttribute("style", "top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px;")
div.style.display = "inherit"
})

document.addEventListener('mouseleave', e =>{
    div.style.display = "none"
})
