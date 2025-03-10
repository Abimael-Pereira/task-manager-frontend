import { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';

import './Tasks.scss';

import TaskItem from './TaskItem';
import AddTask from './AddTask';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const alert = useAlert();

    const fetchTasks = useCallback(async () => {
        try {
            const { data } = await axios.get(
                'https://task-manager-backend-t7al.onrender.com/tasks'
            );
            setTasks(data);
            // eslint-disable-next-line no-unused-vars
        } catch (_e) {
            alert.error('Não foi possível acessar as tarefas');
        }
    }, [alert]);

    const lastTask = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === false);
    }, [tasks]);

    const completedTask = useMemo(() => {
        return tasks.filter((task) => task.isCompleted);
    }, [tasks]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {lastTask.map((lastTask) => (
                        <TaskItem
                            key={lastTask.id}
                            task={lastTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>
            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                <div className="tasks-list">
                    {completedTask.map((completedTask) => (
                        <TaskItem
                            key={completedTask.id}
                            task={completedTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
