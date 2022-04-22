function createLine(listClass) {
    let list = document.querySelector(listClass)

    let input = createInputElement();
       
    line = createLineElement(input);

    list.appendChild(line)
}

function createInputElement() {
    let inputSection = document.createElement('div')
    let input = createInput()
    let label = createLabel()
    
    inputSection.appendChild(input)
    inputSection.appendChild(label)

    return inputSection
}

function createLineElement(input) {
    let line = document.createElement('li')
    line.appendChild(document.createTextNode('New task'))
    return line.appendChild(input)
}

function createInput() {
    let input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    return input
}

function createLabel() {
    let label = document.createElement('label')
    label = document.createTextNode('New Task')
    return label
}