const icon1 = document.getElementById("icon1");

icon1.addEventListener("click", () => {
    let ul = document.querySelector('.ul1')
    let li = document.createElement('li')
    let input = document.createElement('input')
    input.setAttribute('type' , 'checkbox')
    li.appendChild(input)
    li.appendChild(document.createTextNode('New task'))
    ul.appendChild(li)
});

const icon2 = document.getElementById("icon2");

icon2.addEventListener("click", () => {
    let ul = document.querySelector('.ul2')
    let li = document.createElement('li')
    let input = document.createElement('input')
    input.setAttribute('type' , 'checkbox')
    li.appendChild(input)
    li.appendChild(document.createTextNode('New task'))
    ul.appendChild(li)
});

const icon3 = document.getElementById('icon3')

icon3.addEventListener('click', () => {
    let ul = document.querySelector('.ul3')
    let li = document.createElement('li')
    let input = document.createElement('input')
    input.setAttribute('type' , 'checkbox')

    li.appendChild(input)
    li.appendChild(document.createTextNode('New task'))
    ul.appendChild(li)
});

const icon4 = document.getElementById('icon4')

icon4.addEventListener('click', () => {
    let ul = document.querySelector('.ul4')
    let li = document.createElement('li')
    let input = document.createElement('input')
    input.setAttribute('type' , 'checkbox')

    li.appendChild(input)
    li.appendChild(document.createTextNode('New task'))
    ul.appendChild(li)
})


