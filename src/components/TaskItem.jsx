import { MdDelete } from "react-icons/md";
import axios from "axios";
import { Message } from "primereact/message";

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
    const handleTaskDeletion = async () => {
        try {
            await axios.delete(
                `https://task-manager-backend-t7al.onrender.com/tasks/${task._id}`
            );

            await fetchTasks();

            <Message
                severity="success"
                text="A tarefa foi removida com sucesso!"
            />;
        } catch (error) {
            <Message
                severity="error"
                text="Ocorreu algum erro, tente novamente!"
            />;
        }
    };

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    <input type="checkbox" defaultChecked={task.isCompleted} />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>

            <div className="delete">
                <MdDelete
                    size={18}
                    color="#F97474"
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
    );
};

export default TaskItem;
