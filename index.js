function createLine(listClass) {
    let list = document.querySelector(listClass)
    let line = document.createElement('li')
    let input = document.createElement('input')
    input.setAttribute('type' , 'checkbox')
    line.appendChild(input)
    line.appendChild(document.createTextNode(' New task'))
    list.appendChild(line)
}
