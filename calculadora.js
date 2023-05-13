const inputs = document.getElementsByTagName('input');
let results = document.getElementById('results');
let expressaoMatematica = ''
let temSinal = false
const calculos = (event) => {
  console.log(event.target.value)
   if(event.target.className == 'sinal'){
    temSinal = true
   }
   if ((results.value.length > 12 && event.target.className == 'numbers') || (results.value.length > 12 && event.target.className == 'sinal')){
     return
   }
  if (event.target.id == 'results'){
    return
  }
  if (event.target.value == 'AC'){
    results.value = '';
    expressaoMatematica = results.value
    return
  }
  if (event.target.value == '%'){
    results.value += '%';
    expressaoMatematica += '/100 *';
    return
  }
  if (event.target.value == 'x'){
    results.value += 'x';
    expressaoMatematica += '*'; 
    return
  }
  if (event.target.id == 'apagar'){
    results.value = results.value.slice(0, results.value.length - 1);
    expressaoMatematica = expressaoMatematica.slice(0, expressaoMatematica.length - 1);
    return
  }
  if ((event.target.id == 'equal')){
    if (results.value == '' || (temSinal == false)){ 
      return
    }
    if (expressaoMatematica == ''){
      return
    }
    results.value = eval(expressaoMatematica);
    expressaoMatematica = results.value
    return
  }
  results.value += event.target.value;
  expressaoMatematica += event.target.value;
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', calculos);
}


