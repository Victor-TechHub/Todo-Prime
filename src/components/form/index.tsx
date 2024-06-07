import "./style.css"
import { motion } from "framer-motion"
import TextField from "../TextField"
import Textarea from "../Textarea"
import useFormValidation from "@/hooks/useFormValidation"

const TaskForm = () => {
    const { handleSubmit, onsubmit, errors, register } = useFormValidation()
    return (
        <motion.form
            onSubmit={handleSubmit(onsubmit)}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="form">
            <TextField
                label="Title"
                name="title"
                error={errors.title}
                type="text"
                placeholder="enter title"
                register={register}
            />
            <Textarea
                error={errors.description}
                register={register}
                label="Description"
                name="description"
                placeholder="Leave a message..."
            />
            <TextField
                label="Date"
                name="date"
                error={errors.date}
                type="date"
                register={register}
            />
            <button type="submit" className="submit_btn">Add Task</button>
        </motion.form>
    )
}

export default TaskForm