import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useAlert } from "react-alert";

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
    const alert = useAlert();
    const handleTaskDeletion = async () => {
        try {
            await axios.delete(
                `https://task-manager-backend-t7al.onrender.com/tasks/${task._id}`
            );

            await fetchTasks();

            alert.success("Tarefa foi excluída!");
        } catch (error) {
            alert.error("Ocorreu algum erro!");
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
