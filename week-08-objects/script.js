
const taskArray = [
  {title: 'Breaking Through', artist: 'The Wreckage', year: 2011},
  {title: 'Feed The Wolf', artist: 'Breaking Benjamin', year: 2018},
  {title: 'Get Me Out', artist: 'No Resolve', year: 2012},
  {title: 'Points Of Authority', artist: 'Linkin Park', year: 2000},
  {title: 'Feel Invincible', artist: 'Skillet', year: 2016},
  {title: 'Enough', artist: 'From Ashes To New', year: 2021},
  {title: 'Animal I Have Become', artist: 'Three Days Grace', year: 2006},
  {title: 'In The End', artist: 'Linkin Park', year: 2000},
  {title: 'Nothing', artist: 'From Ashes To New', year: 2020},
  {title: 'Dont Fall In Love', artist: 'The Wreckage', year: 2011},
  {title: 'Monster', artist: 'Skillet', year: 2009},
  {title: 'Disguise', artist: 'Motionless In White', year: 2019},
  {title: 'The Resistance', artist: 'Skillet', year: 2016},
  {title: 'Courtesy Call', artist: 'Thousand Foot Krutch', year: 2012},
  {title: 'Painkiller', artist: 'Three Days Grace', year: 2015},
];

function loadContent() {
  taskArray.sort((a, b) => compare(a.year, b.year));

  loadTable();
  loadOldestSong();
  loadNewestSong();
  loadAverage();

}

function addNewTask() {
  const newTaskTitle = document.getElementById('title-input').value;
  const newTaskArtist = document.getElementById('artist-input').value;
  const newTaskYear = document.getElementById('year-input').value;
  const newTask = {title: newTaskTitle, artist: newTaskArtist, year: newTaskYear};
  taskArray.push(newTask);

  loadContent();
}

function loadTable() {
  const tableElement = document.createElement('table');
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Title'));
  headerRowElement.appendChild(createElement('th', 'Artist'));
  headerRowElement.appendChild(createElement('th', 'Year Released'));
  tableElement.appendChild(headerRowElement);

  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', task.title));
    rowElement.appendChild(createElement('td', task.artist));
    rowElement.appendChild(createElement('td', task.year));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

function loadOldestSong(){
  let OldestSong = taskArray[0];
  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i];
    if(task.year < OldestSong.year) {
      OldestSong = task;
    }
  }
  document.getElementById('oldest-song').innerText = OldestSong.year;
}


function loadNewestSong(){
  let NewestSong = taskArray[0];
  for (let i = 0; i > taskArray.length; i++) {
    const task = taskArray[i];
    if(task.year > NewestSong.year) {
      NewestSong = task;
    }
  }
  document.getElementById('newest-song').innerText = NewestSong.year;
}

function loadAverage(){
  let total = 0;
 for(let i = 0; i < taskArray.length; i++){
    console.log (total)
   const song = taskArray[i];
    total += Number(song.year);

 }
  let average = total / taskArray.length;
  console.log (average);
  document.getElementById('average-year').innerText = average
  }

function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

function compare(valueOne, valueTwo) {
  if (valueOne > valueTwo) {
    return -1;
  }

  if (valueOne < valueTwo) {
    return 1;
  }

  return 0;
}
