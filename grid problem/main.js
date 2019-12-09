/*

0,0 | 0,1 | 0,2 | 0,3 | 0,4 | 0,5 | 0,6 |
-----------------------------------------
1,0 | 1,1 | 1,2 | 1,2 | 1,4 | 1,5 | 1,6 |
-----------------------------------------
2,0 | 2,1 | 2,2 | 2,3 | 2,4 | 2,5 | 2,6 |
-----------------------------------------
3,0 | 3,1 | 3,2 | 3,3 | 3,4 | 3,5 | 3,6 |
-----------------------------------------
4,0 | 4,1 | 4,2 | 4,3 | 4,4 | 4,5 | 4,6 |
-----------------------------------------
5,0 | 5,1 | 5,2 | 5,3 | 5,4 | 5,5 | 5,6 |
-----------------------------------------
6,0 | 6,1 | 6,2 | 6,3 | 6,4 | 6,5 | 6,6 |

*/
var gridWidth = 7;
var gridHeight = 7;

var one = '';
var two = '';
var three = '';
var four = '';
var five = '';
var six = '';

var rowCount = 0;
var colCount = 0;
var topMag = '';

function add(){
    var newDiv = document.createElement("div");
    var screen = document.getElementById("screen");
    document.body.insertBefore(newDiv,screen)
    newDiv.style.width = '10%';
    newDiv.style.height = '10%';
    newDiv.style.position = 'absolute';
    newDiv.style.marginBottom = '0%';
    newDiv.style.padding = '0';
    if(colCount == 0){
        topmag = '2%';
        zero = 'green';
        one = 'green';
        two = 'green';
        three = 'blue';
        four = 'green';
        five = 'blue';
        six = 'hotpink';
    }else if(colCount == 1){
        topmag = '9%';
        zero = 'green';
        one = 'green';
        two = 'blue';
        three = 'green';
        four = 'blue';
        five = 'blue';
        six = 'hotpink';
    }
    else if(colCount == 2){
        topmag = '16%';
        zero = 'green';
        one = 'blue';
        two = 'green';
        three = 'blue';
        four = 'green';
        five = 'hotpink';
        six = '';
    }
    else if(colCount == 3){
        topmag = '23%';
        zero = 'blue';
        one = 'green';
        two = 'blue';
        three = 'green';
        four = 'hotpink';
        five = 'hotpink';
        six = '';
    }
    else if(colCount == 4){
        topmag = '30%';
        zero = 'green';
        one = 'blue';
        two = 'green';
        three = 'hotpink';
        four = 'hotpink';
        five = '';
        six = '';
    }
    else if(colCount == 5){
        topmag = '37%';
        zero = 'blue';
        one = 'blue';
        two = 'hotpink';
        three = 'hotpink';
        four = '';
        five = '';
        six = '';
    }
    else if(colCount == 6){
        topmag = '44%';
        zero = 'hotpink';
        one = 'hotpink';
        two = '';
        three = '';
        four = '';
        five = '';
        six = '';
    }

    if(rowCount == 0){
        newDiv.style.marginTop = topmag;
        newDiv.style.marginLeft = '1%';
        newDiv.style.backgroundColor = zero
        rowCount ++;
    }else if(rowCount == 1){
        newDiv.style.marginTop = topmag;
        newDiv.style.marginLeft = '12%';
        newDiv.style.backgroundColor = one
        rowCount++;
    }else if(rowCount == 2){
        newDiv.style.marginTop = topmag;
        newDiv.style.marginLeft = '23%';
        newDiv.style.backgroundColor = two
        rowCount++;
    }else if(rowCount == 3){
        newDiv.style.marginTop = topmag;
        newDiv.style.marginLeft = '34%';
        newDiv.style.backgroundColor = three
        rowCount++;
    }else if(rowCount == 4){
        newDiv.style.marginTop = topmag;
        newDiv.style.marginLeft = '45%';
        newDiv.style.backgroundColor = four
        rowCount++;
    }
    else if(rowCount == 5){
        newDiv.style.marginTop = topmag;
        newDiv.style.marginLeft = '56%';
        newDiv.style.backgroundColor = five
        rowCount++;
    }
    else if(rowCount == 6){
        newDiv.style.marginTop = topmag;
        newDiv.style.marginLeft = '67%';
        newDiv.style.backgroundColor = six
        rowCount=0;
        colCount++;
    }

}

for(i=0;i<gridWidth;i++){
    for(a=0;a<gridHeight;a++){
        add()
    }
}