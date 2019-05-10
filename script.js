createTable();

function createTable() {
    var newTable = document.createElement('table');
    var field = document.getElementsByClassName('inner')[0];

    field.appendChild(newTable);

    for(var row = 0; row < 4; row++) {
        var tr = document.createElement('tr');
        newTable.appendChild(tr);
        for(var col = 0; col < 4; col++) {
            var td = document.createElement('td');
            td.dataset.row = row;
            td.dataset.col = col;
            tr.appendChild(td);
        }
    }
    newTable.addEventListener("click" , cellColor);

    newTable.addEventListener("dblclick" , cellColor);
}

function cellColor(event) {
    var target = event.target;
    if ( target.tagName == 'TD' ) {

        if(event.type == 'click') {
            var color = 'color-click';
        } else {
            var color = 'color-dblclick';
        }

        var countRow = 0;
        var countCol = 0;
        var rows = document.querySelectorAll(`[data-row="${target.dataset.row}"]`);
        var cols = document.querySelectorAll(`[data-col="${target.dataset.col}"]`);


        for(var c = 0; c < 4; c++) {
            if(rows[c].className == color) {
                countRow++;
            }
            if(cols[c].className == color) {
                countCol++;
            }
        }

        if(target.className == color) {
            target.className = '';
        } else if(countRow < 2 && countCol < 2) {
            target.className = color;
        }
    }
}


