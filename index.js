console.log('funguju!');

const Task = (props) => {
    const { name, due, done } = props;

    let tickClass = '';
    if (done) {
      tickClass = 'item__done--tick';
    }

    return `
    <div class= "task__name">${name}</div>
    <div class= "task__due">${due}</div>
    <div class= "task__done">${tickClass}</div>
    `; 
};


const renderTasks = (props) => {
    const taskList = document.querySelector('.todo__tasks');
    taskList.innerHTML = props
    .map((props) => Task(props))
    .join('');
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
.then((response) => response.json())
.then((data) => renderTasks(data));





