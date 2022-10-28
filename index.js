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




