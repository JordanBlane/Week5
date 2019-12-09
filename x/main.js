var url = 'https://opentdb.com/api.php?amount=AMOUNT';

var input = document.getElementById('input');
var submit = document.getElementById('submit');
var box = document.getElementById('box');

function Get(url){
    let request = new XMLHttpRequest();
    request.open("GET", url,false);
    request.send(null);
    return request.responseText;
}

function getq(){
    box.innerHTML = ''
    let newurl = ''
    newurl = url.replace('AMOUNT', input.value);
    url = newurl
    qo = JSON.parse(Get(url))
    console.log(qo)
    console.log(input.value)
    console.log(url)
    questions = qo.results;
    for(i=0;i<questions.length;i++){
        var num = i+1
        box.innerHTML += '<p>' +num +'. ' +questions[i].question +'</p>'
    }
}



submit.addEventListener('click', getq);