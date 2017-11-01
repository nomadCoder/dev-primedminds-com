//determines size of grid
var rowValues = [2, 3, 4]
var columnValues = [2, 3, 4, 5]
var r = rowValues[Math.floor(Math.random() * 3)]
var c = columnValues[Math.floor(Math.random() * 4)]

//creates an array to store variables
var arr = []
//counts the amount of pigeons in the grid
var pgnsin = 0

//holds the pigeons before they go into the grid
var pgncontainer = document.createElement("div")
pgncontainer.setAttribute("id", "pgncontainer")
document.body.appendChild(pgncontainer)

//this counts how many pigeons have been inserted into the grid
var counter = document.createElement("div")
counter.setAttribute("id", "counter")
var pigeonsLeft = document.createTextNode("Pigeons in the holes: " + (pgnsin))
counter.appendChild(pigeonsLeft)
document.body.appendChild(counter)

setInterval(() => {
  pigeonsLeft.nodeValue = "Pigeons in the holes: " + (pgnsin);
}, 0)

//creates the actual grid to hold the pigeons
var table = document.createElement("TABLE");
  table.setAttribute("id", "myTable");
  document.body.appendChild(table);
  for (var x = 0; x < r; x++) {
    var row = document.createElement("TR");
    for (var y = 0; y < c; y++) {
      var cell1 = row.insertCell(0);
      cell1.innerHTML = null
      cell1.setAttribute("id", "empty")
      cell1.style.height = "50px";
      cell1.style.width = "50px";
      cell1.ondrop=drop;
      cell1.ondragover=allowDrop;
      row.appendChild(cell1);
    }
  table.appendChild(row);
}

//creates enough pigeons so that there will always be one too many to fit
for (var z = 0; z < (((r * c) / 2) + 1 ); z++) {
    var pigeon = document.createElement("IMG");
    pigeon.setAttribute("src", "https://s23.postimg.org/o8822e3wr/Pigeon_Individual.png");
    pigeon.setAttribute("height", "40");
    pigeon.setAttribute("width", "50");
    pigeon.setAttribute("alt", "pigeon");
    pigeon.setAttribute("id", "pigeon");
    pigeon.setAttribute("class", "pigeons")
    pigeon.setAttribute("draggable", "true");
    pigeon.style.position = "absolute";
    pigeon.style.left = (Math.floor(Math.random() * 300) + 50)+'px';
    pigeon.style.top = (Math.floor(Math.random() * 300) + 100)+'px';
    arr.push(pigeon)
    document.body.appendChild(pigeon);
}

//these are the pigeons that show up in the grid (note the different URL and the lack of a +1 when creating)
for (var z = 0; z < ((r * c) / 2); z++) {
    var pigeon = document.createElement("IMG");
    pigeon.setAttribute("src", "https://s30.postimg.org/b98gd5c29/Pigeon_No_Background_Right.png");
    pigeon.setAttribute("height", "40");
    pigeon.setAttribute("width", "50");
    pigeon.setAttribute("alt", "pigeon");
    pigeon.setAttribute("id", "pigeon");
    pigeon.setAttribute("class", "pigeons")
    pigeon.setAttribute("draggable", "true");
    pigeon.style.position = "absolute";
    pigeon.style.left = (Math.floor(Math.random() * 300) + 50)+'px';
    pigeon.style.top = (Math.floor(Math.random() * 300) + 100)+'px';
    arr.push(pigeon)
    document.body.appendChild(pigeon);
}

//enables draggablility
arr.forEach(pigeon => {
  pigeon.ondragstart=function(){setid(pigeon);}
})

//will set the id of the pigeon being dragged to tell the program to delete it once it has been dropped
setid = pigeon => {
  pigeon.setAttribute("id", "del")
}

//basically a repeat to enable the grid to be reconfigured if desired
function createTable() {
  pgnsin = 0
  var elements = document.getElementsByClassName("pigeons");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  for (var x = 0; x < r; x++) {
    document.getElementById("myTable").deleteRow(0);
  }
  r = rowValues[Math.floor(Math.random() * 3)]
  c = columnValues[Math.floor(Math.random() * 4)]
  for (x = 0; x < r; x++) {
    row = document.getElementById("myTable").insertRow(0);
    for (y = 0; y < c; y++) {
      cell1 = row.insertCell(0);
      cell1.innerHTML = null
      cell1.setAttribute("id", "empty")
      cell1.style.height = "50px";
      cell1.style.width = "50px";
      cell1.ondrop=drop;
      cell1.ondragover=allowDrop;
      row.appendChild(cell1);
    }
    table.appendChild(row);
    }
  for (var z = 0; z < (((r * c) / 2) + 1 ); z++) {
    var pigeon = document.createElement("IMG");
    pigeon.setAttribute("src", "https://s23.postimg.org/o8822e3wr/Pigeon_Individual.png");
    pigeon.setAttribute("height", "40");
    pigeon.setAttribute("width", "50");
    pigeon.setAttribute("alt", "pigeon");
    pigeon.setAttribute("id", "pigeon");
    pigeon.setAttribute("class", "pigeons")
    pigeon.setAttribute("draggable", "true");
    pigeon.style.position = "absolute";
    pigeon.style.left = (Math.floor(Math.random() * 300) + 50)+'px';
    pigeon.style.top = (Math.floor(Math.random() * 300) + 100)+'px';
    arr.push(pigeon)
    document.body.appendChild(pigeon);
}

for (var z = 0; z < ((r * c) / 2); z++) {
    var pigeon = document.createElement("IMG");
    pigeon.setAttribute("src", "https://s30.postimg.org/b98gd5c29/Pigeon_No_Background_Right.png");
    pigeon.setAttribute("height", "40");
    pigeon.setAttribute("width", "50");
    pigeon.setAttribute("alt", "pigeon");
    pigeon.setAttribute("id", "pigeon");
    pigeon.setAttribute("class", "pigeons")
    pigeon.setAttribute("draggable", "true");
    pigeon.style.position = "absolute";
    pigeon.style.left = (Math.floor(Math.random() * 300) + 50)+'px';
    pigeon.style.top = (Math.floor(Math.random() * 300) + 100)+'px';
    arr.push(pigeon)
    document.body.appendChild(pigeon);
}
  
  arr.forEach(pigeon => {
    pigeon.ondragstart=function(){setid(pigeon);}
  })

  setid = pigeon => {
    pigeon.setAttribute("id", "del")
  }
}

//drop functions
function allowDrop(ev) {
    ev.preventDefault();
}

//changes pigeon source URL to one with no background and a new ID, makes sure that only one pigeon can occupy a given cell at once
function drop(ev) {
  ev.preventDefault();
  var element = document.getElementById("del");
  element.parentNode.removeChild(element);
  if(ev.target.id==="empty") {
    ev.target.innerHTML = "<img src='https://s23.postimg.org/o8822e3wr/Pigeon_Individual.png' id='pigeonid' alt='pigeon' style='width:50px; height:40px;'>";
    ev.target.setAttribute("id", "occupied")
    pgnsin += 1
  }
  else if(ev.target.id==="occupied") {
    ev.target.innerHTML = "<img src='https://s29.postimg.org/ctso5zdef/Full_Size_Render.jpg' id='doublepigeonsid' alt='doublepigeons' style='width:50px; height:40px;'>";
    setTimeout(() => {
        var pigeon = document.createElement("IMG");
        pigeon.setAttribute("src", "https://s23.postimg.org/o8822e3wr/Pigeon_Individual.png");
        pigeon.setAttribute("height", "40");
        pigeon.setAttribute("width", "50");
        pigeon.setAttribute("alt", "pigeon");
        pigeon.setAttribute("id", "pigeon");
        pigeon.setAttribute("class", "pigeons")
        pigeon.setAttribute("draggable", "true");
        pigeon.style.position = "absolute";
        pigeon.style.left = (Math.floor(Math.random() * 300) + 50)+'px';
        pigeon.style.top = (Math.floor(Math.random() * 300) + 100)+'px';
        arr.push(pigeon)
        document.body.appendChild(pigeon)
        arr.forEach(pigeon => {
          pigeon.ondragstart=function(){setid(pigeon);}
        })
        setid = pigeon => {
          pigeon.setAttribute("id", "del")
      }
    ev.target.innerHTML = "<img src='https://s24.postimg.org/k2btxb5ut/Full_Size_Render.jpg' id='pigeonid' alt='pigeon' style='width:50px; height:40px;'>";
    }, 2000)
  }
}
