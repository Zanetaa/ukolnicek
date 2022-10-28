console.log('funguju!');

const Task = (props) => {
    const { name, done } = props;

    let tickClass = '';
    if (done) {
      tickClass = ' item__done--tick';
    }

    return `
    <div class= "todo__tasks">${name}</div>
    <div class= "todo__tasks">${tickClass}</div>
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



