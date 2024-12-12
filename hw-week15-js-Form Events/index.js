let form = document.getElementById('form')
let select = document.getElementById('select')
let textArea = document.getElementById('textarea')
let input = document.getElementById('input')
let errorMassege = document.getElementById('error')
let btn = document.getElementById('btn')
let rangeNumber = document.getElementById('rangeNumber')

select.addEventListener('change',(event)=>{
    console.log(select.value);
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(textArea.value.length>15){
        errorMassege.textContent = 'әріптер 15-тен кіші болу керек'
        errorMassege.style.color = 'red'
    }
    else{
        errorMassege.textContent = 'Cіздін пікіріңіз қабылданды'
        errorMassege.style.color = 'green'
        console.log({
            feedback:textArea.value,
            group:select.value,
            rating:input.value
        })
    }
})
input.addEventListener('change',()=>{
    rangeNumber.textContent = input.value
})
