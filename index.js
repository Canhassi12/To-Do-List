const icon1 = document.getElementById("icon1");

icon1.addEventListener("click", () => {
    let ul = document.querySelector('.ul1')
    let li = document.createElement('li')
    let input = document.createElement('input')
    input.setAttribute('type' , 'checkbox')
    li.appendChild(input)
    li.appendChild(document.createTextNode('tarefa'))
    ul.appendChild(li)
});

console.log(icon1);
