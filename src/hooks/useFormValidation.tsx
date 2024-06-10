import { useTaskCtx } from "@/context/task"
import { FormType } from "@/types/Task"
import { schema } from "@/utils/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldErrors, UseFormHandleSubmit, UseFormRegister, useForm } from "react-hook-form"
interface IuseFormValidation {
    register: UseFormRegister<FormType>
    handleSubmit: UseFormHandleSubmit<FormType, undefined>
    errors: FieldErrors<FormType>
    onsubmit: (data: FormType) => void
}


const useFormValidation = (): IuseFormValidation => {
    const { addNewTask } = useTaskCtx()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormType>({
        resolver: zodResolver(schema)
    })
    const onsubmit = (data: FormType) => {
        const { date, description, title } = data
        addNewTask(title, date, description)
    }

    return { register, handleSubmit, errors, onsubmit }
}

export default useFormValidation