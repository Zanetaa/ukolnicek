console.log('funguju!');

const Task = (props) => {
    const { name } = props;

    return `
    <div class= "todo__tasks">${name}</div>
    `;
}


