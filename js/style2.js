//create dom------------
let input        = document.querySelectorAll('.count_input')
let result       = document.querySelectorAll('.result')
let counterspan  = document.querySelectorAll('.counter_span')
// click function
let clickf = (item) =>{
    result[item].innerHTML          =input[item].value
    result[item].dataset.increase   = input[item].value
    counterspan[item].innerHTML     = input[item].value
}
// interval function
let mainClick = () => {
    result.forEach((item)=>{
        let number = 1
        let numberfunction = ()=>{
            number++
            item.innerHTML = number
            if(number == item.dataset.increase){
                clearInterval(start)
            }
        }
        let start = setInterval(()=>{
            numberfunction()
        } , 200)
        if(item.dataset.increase == 0){
            clearInterval(start)
        }
    })
}