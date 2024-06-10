import { useEffect } from "react"
import { motion } from "framer-motion"
import "./style.css"
import { useTaskCtx } from "../../context/task"
import { MdDelete } from "react-icons/md";

const Lists = () => {
    const { userTasks, getUserTasks, deleteTasks, updateCompletedTasks } = useTaskCtx()

    useEffect(() => {
        getUserTasks()
    }, [userTasks])

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
        >
            {userTasks?.map((task, idx) => {
                return (
                    <fieldset className={"task withBg"} key={idx}>
                        <div className="checkbox-wrapper-11" onClick={() => updateCompletedTasks(task.id, task.isCompleted)}>
                            <input
                                id={task.title}
                                type="checkbox"
                                checked={task.isCompleted}
                                onChange={() => task.isCompleted}
                            />
                            <label htmlFor={task.title}>{task.title}</label>
                        </div>

                        <div className="tasks_action_container">
                            <i onClick={() => deleteTasks(task.id)}><MdDelete size={18} /></i>
                        </div>
                    </fieldset>
                )
            })}
        </motion.div >
    )
}

export default Lists