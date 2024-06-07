import { TextFieldTypes } from "@/types/Task"
import "./style.css"

const Textarea = (props: TextFieldTypes) => {
    const { error, register, placeholder, label, name } = props
    return (
        <div className="inputField">
            <label htmlFor="">{label}</label>
            <textarea
                placeholder={placeholder}
                {...register(name)}
                name={name}
            />
            {error ? <span>{error?.message}</span> : ""}
        </div>
    )
}

export default Textarea