let $ = document

let inputElem = $.querySelector('input')
let formElem = $.querySelector('.add')
let ulElem = $.querySelector('.todos')

let newLiElem
let newSpanElem
let newIconElem

function addNewTodoFunc(todoValue){
    newLiElem = $.createElement('li')
    newLiElem.className = 'list-group-item d-flex justify-content-between align-items-center'

    newSpanElem = $.createElement('span')
    newSpanElem.innerHTML = todoValue

    newIconElem = $.createElement('i')
    newIconElem.className = 'fa fa-trash-o delete'

    newIconElem.addEventListener('click', function(event){
        event.target.parentElement.remove()
    })

    newLiElem.append(newSpanElem, newIconElem)

    ulElem.append(newLiElem)

    console.log(newLiElem);
}


formElem.addEventListener('submit', function(event){
    event.preventDefault();
})


inputElem.addEventListener('keydown', function(event){
    let todoValue = event.target.value.trim()


    if(event.keyCode === 13){
        if(todoValue){
            inputElem.value = ''
            addNewTodoFunc(todoValue)
        }
    }
})

