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
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormType>({
        resolver: zodResolver(schema)
    })
    const onsubmit = (data: FormType) => {
        console.log(data)
    }

    return { register, handleSubmit, errors, onsubmit }
}

export default useFormValidation