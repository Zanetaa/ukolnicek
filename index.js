console.log('funguju!');

const Task = (props) => {
    const { name, due, done } = props;

    /*let tickClass = '';
    if (done) {
        tickClass = 'item__done--tick';
    }*/

    return `
    <div class= "task__name">${name}</div>
    <div class= "task__due">${due}</div>
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



const checkBox = document.getElementById("checkbox-undone");

document.getElementById("checkbox-undone").addEventListener('change', (list) => {
    if (checkBox.checked == true) {
        const renderUndoneTasks = (props) => {
            const taskList = document.querySelector('.todo__tasks');
            taskList.innerHTML = props
                .map((props) => Task(props))
                .join('');
        };

        fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=true')
            .then((response) => response.json())
            .then((data) => renderUndoneTasks(data));
    } else {
        
        const renderTasks = (props) => {
            const taskList = document.querySelector('.todo__tasks');
            taskList.innerHTML = props
                .map((props) => Task(props))
                .join('');
        };
        
        fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
            .then((response) => response.json())
            .then((data) => renderTasks(data));


    }
});


renderTasks();



