const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')
const percent = document.querySelector('.percent')
const add = document.querySelector('.add')
const subtract = document.querySelector('.subtract')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const decimal = document.querySelector('.decimal')
const equals = document.querySelector('.equals')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const disp = document.querySelector('.display')


clear.addEventListener('click', function(){
    disp.textContent ='0'
})
del.addEventListener('click', function(){
    len = disp.textContent.length
    if(len <= 1){
        disp.textContent = 0
    }else{
        disp.textContent = disp.textContent.substring(0,len-1)
    }
})
one.addEventListener('click', function(){
    if(disp.textContent.length == 1 && disp.textContent == '0'){
        disp.textContent = '1'
    }else{
        disp.textContent+= '1'
    }
})
two.addEventListener('click', function(){
    if(disp.textContent.length == 1 && disp.textContent == '0'){
        disp.textContent = '2'
    }else{
        disp.textContent+= '2'
    }
})
three.addEventListener('click', function(){
    if(disp.textContent.length == 1 && disp.textContent == '0'){
        disp.textContent = '3'
    }else{
        disp.textContent+= '3'
    }
})
four.addEventListener('click', function(){
    if(disp.textContent.length == 1 && disp.textContent == '0'){
        disp.textContent = '4'
    }else{
        disp.textContent+= '4'
    }
})
five.addEventListener('click', function(){
    if(disp.textContent.length == 1 && disp.textContent == '0'){
        disp.textContent = '5'
    }else{
        disp.textContent+= '5'
    }
})
six.addEventListener('click', function(){
    if(disp.textContent.length == 1 && disp.textContent == '0'){
        disp.textContent = '6'
    }else{
        disp.textContent+= '6'
    }
})
seven.addEventListener('click', function(){
    if(disp.textContent.length == 1 && disp.textContent == '0'){
        disp.textContent = '7'
    }else{
        disp.textContent+= '7'
    }
})
eight.addEventListener('click', function(){
    if(disp.textContent.length == 1 && disp.textContent == '0'){
        disp.textContent = '8'
    }else{
        disp.textContent+= '8'
    }
})
nine.addEventListener('click', function(){
    if(disp.textContent.length == 1 && disp.textContent == '0'){
        disp.textContent = '9'
    }else{
        disp.textContent+= '9'
    }
})

add.addEventListener('click', function(){
    if(disp.textContent.length || 1 && disp.textContent != '0'){
        disp.textContent += '+'
    }
})
subtract.addEventListener('click', function(){
    if(disp.textContent.length || 1 && disp.textContent != '0'){
        disp.textContent += '-'
    }
})
multiply.addEventListener('click', function(){
    if(disp.textContent.length || 1 && disp.textContent != '0'){
        disp.textContent += '*'
    }
})
divide.addEventListener('click', function(){
    if(disp.textContent.length || 1 && disp.textContent != '0'){
        disp.textContent += '/'
    }
})
equals.addEventListener('click', function(){
    arr = disp.textContent.split("")
    if(arr[arr.length-1] == "+" || arr[arr.length-1] == "-" || arr[arr.length-1] == "*" || arr[arr.length-1] == "/"){
        arr.pop()
    }
    let numOfDivide = arr.reduce((total,x) => total+(x=="/"), 0)
    let numOfMultiply = arr.reduce((total,x) => total+(x=="*"), 0)
    let numOfAdd = arr.reduce((total,x) => total+(x=="+"), 0) 
    let numOfSubtract = arr.reduce((total,x) => total+(x=="-"), 0)

    if(numOfDivide>0){

    }else if(numOfMultiply){

    }else if(numOfAdd){

    }else if(numOfSubtract){

    }else{

    }

    while(numOfDivide>0){
        const divLoc = arr.indexOf('/')
        if(divLoc != -1){
            temp = String(parseFloat(arr[divLoc-1]) / parseFloat(arr[divLoc+1]))
            beg = arr.splice(0,divLoc-1)
            beg.push(temp)
            end = arr.splice(divLoc+2)
            arr = beg.concat(end)
            numOfDivide-=1
        }
    }
    while(numOfMultiply>0){
        const divLoc = arr.indexOf('*')
        if(divLoc != -1){
            temp = String(parseFloat(arr[divLoc-1]) * parseFloat(arr[divLoc+1]))
            beg = arr.splice(0,divLoc-1)
            beg.push(temp)
            end = arr.splice(divLoc+2)
            arr = beg.concat(end)
            numOfMultiply-=1
        }
    }
    while(numOfAdd>0){
        const divLoc = arr.indexOf('+')
        if(divLoc != -1){
            temp = String(parseFloat(arr[divLoc-1]) + parseFloat(arr[divLoc+1]))
            beg = arr.splice(0,divLoc-1)
            beg.push(temp)
            end = arr.splice(divLoc+2)
            arr = beg.concat(end)
            numOfAdd-=1
        }
    }
    while(numOfSubtract>0){
        const divLoc = arr.indexOf('-')
        if(divLoc != -1){
            temp = String(parseFloat(arr[divLoc-1]) - parseFloat(arr[divLoc+1]))
            beg = arr.splice(0,divLoc-1)
            beg.push(temp)
            end = arr.splice(divLoc+2)
            arr = beg.concat(end)
            numOfSubtract-=1
        }
    }
    disp.textContent = parseFloat(arr[0]).toFixed(10)


})

function calculate(arr, type){
    const operationLoc = arr.indexOf(type)
    switch(type){
        case '/':
            temp = String(parseFloat(arr[operationLoc-1]) / parseFloat(arr[operationLoc+1]))
            break
        case '*':
            temp = String(parseFloat(arr[operationLoc-1]) * parseFloat(arr[operationLoc+1]))
            break
        case '+':
            temp = String(parseFloat(arr[operationLoc-1]) + parseFloat(arr[operationLoc+1]))
            break
        case '-':
            temp = String(parseFloat(arr[operationLoc-1]) - parseFloat(arr[operationLoc+1]))
            break
    }
    beg = arr.splice(0,operationLoc-1)
    beg.push(temp)
    end = arr.splice(operationLoc+2)
    arr = beg.concat(end)
    numOfDivide-=1
    return arr
}