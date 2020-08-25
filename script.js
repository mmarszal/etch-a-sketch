let rainbowMode = false;

function findRule(rule) {
    let container = document.querySelector('#container');
    let sheet = document.styleSheets[0];
    let rules = sheet.rules;

    for(let i = 0; i < rules.length; ++i) {
        if (rules[i].selectorText === "#container") {
            return rules[i];
        }
    }
}
let clr;
function createGrid(squares) {
    let container = document.querySelector('#container');
    container.innerHTML = '';

    const containerRule = findRule('#container');
    containerRule.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    containerRule.style.gridTemplateRows = `repeat(${squares}, 1fr)`;

    for(let i = 0; i < squares * squares; ++i) {
        let item = document.createElement('div');
        item.classList.add('item');
        item.addEventListener('mouseover', function (e) {
            const target = e.target;
            if (rainbowMode) {
                target.style.backgroundColor = 'rgba(100,20,190,0.5)';
                clr = target.style.backgroundColor;
                console.log(target.style.backgroundColor);
            } else {
                target.classList.add('highlighted');
            }
        });
        container.appendChild(item);
    }
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
    let squares = parseInt(prompt('How many squares per side would you like?'));
    if (Number.isNaN(squares) || squares === 0) {
        squares = 16;
    }

    createGrid(squares);
});

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', (e) => {
    if (rainbowMode == false) {
        rainbowMode = true;
        rainbowButton.textContent = 'Rainbow';
    } else {
        rainbowMode = false;
        rainbowButton.textContent = 'Normal';
    }
});

createGrid(16);