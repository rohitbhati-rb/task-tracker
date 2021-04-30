import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        //We cant do like tasks.push(...) bcoz state is immutable for that we'll use setTasks function to do the same
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

Tasks.propTypes = {

}

export default Tasks
