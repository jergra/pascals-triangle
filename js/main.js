window.open('exp://exp.host/@jergra43/react-native-tinder',"_self");

/* from myVersion.html */
function promptPromise(message) {
    return new Promise(function(resolve, reject) {
      var result = window.prompt(message);
      if (result != null) {
        resolve(result);
      } else {
        reject(new Error('User cancelled'));
      }
    });
  }

var button = document.getElementById('action');
var buttonClear = document.getElementById('clear')
var output = document.getElementById('prompt');

button.addEventListener('click', function() {

    promptPromise('Enter number of rows:')
      .then(function(name) {

        output.innerHTML = name;
        size = name
        
        /* the next 5 lines are from below, not from myVersion.html */
        const initApp = (size) => {
            console.log("size:", size)
            const ptArray = pascalsTriangle(size);
            domTriangle(ptArray);
        }

        initApp(size);
        
      })
      .catch(function() {
        output.innerHTML = '¯\\_(ツ)_/¯';
      });
  });

buttonClear.addEventListener('click', function() {
    location.reload()
});

/* end of myVersion.html contribution */

/*
const initApp = (size) => {
    const ptArray = pascalsTriangle(size);
    domTriangle(ptArray);
}
document.addEventListener("DOMContentLoaded", initApp);
*/

const pascalsTriangle = (rows = 3) => {
    if (rows < 3) rows = 3;
    const stackArray = [];
    let i = 1;
    while (i <= rows) {

        const rowArray = [];
        let x = 0;
        let rowValue;
        while (x < i) {
            if (!x || x === i - 1) { rowValue = 1 }
            else {
                rowValue =
                    stackArray[i - 2][x] +
                    stackArray[i - 2][x - 1];
            }
            rowArray.push(rowValue);
            x++;
        }
        console.log(rowArray);
        stackArray.push(rowArray);
        i++;
    }
    console.log(stackArray);
    return stackArray;
}

const domTriangle = (array) => {
    const main = document.querySelector('main');

    array.forEach(subArr => {
        const row = buildRow(subArr);
        main.appendChild(row);
    })
}

const buildRow = (array) => {
    const row = document.createElement('div');
    row.classList.add("row");
    array.forEach(el => {
        const square = document.createElement('div');
        square.classList.add("square");
        square.textContent = el;
        randomColor1 = Math.floor(Math.random() * 45) + 20;
        randomColor2 = Math.floor(Math.random() * 60) + 120;
        randomColor3 = Math.floor(Math.random() * 45) + 20;
        square.style.background = 'rgb(' + randomColor1 + ',' + randomColor2 + ',' + randomColor3 + ')'
        row.appendChild(square);
    })
    return row;
  }

  









