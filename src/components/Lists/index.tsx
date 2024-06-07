import { useEffect } from "react"
import { motion } from "framer-motion"
import "./style.css"
import { useTaskCtx } from "../../context/task"

const Lists = () => {
    const { userTasks, getUserTasks } = useTaskCtx()

    useEffect(() => {
        //get tasks
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
                        <div className="checkbox-wrapper-11">
                            <input
                                id={task.title}
                                type="checkbox"

                            />
                            <label htmlFor={task.title}>{task.title}</label>
                        </div>
                    </fieldset>
                )
            })}
        </motion.div>
    )
}

export default Lists