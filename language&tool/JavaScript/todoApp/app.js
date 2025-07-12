const todoList = [];

let cmd = prompt('Enter a Command(new, list, delete, quit)');

while (cmd !== 'quit' && cmd !== 'q') {
    cmd = prompt('Enter a Command(new, list, delete, quit)');
    if (cmd === 'quit') break;
    else if (cmd === 'new') {
        const newTodo = prompt('Enter a New Todo');
        todoList.push(newTodo);
        console.log(`'${newTodo}' was added.`);
    } else if (cmd === 'list') {
        console.log('*'.repeat(10));
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log('*'.repeat(10));
    } else if (cmd === 'delete') {
        const deleteTodoIndex = parseInt(prompt('Enter the Index to be Deleted.'));
        if (!Number.isNaN(deleteTodoIndex)) {
            console.log(`'${todoList[deleteTodoIndex]}' was Deleted`)
            todoList.splice(deleteTodoIndex, 1);
        } else {
            console.log('Enter a Valid Index');
        }
    }
}

console.log('Quitted the App')

