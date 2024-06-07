import { TextFieldTypes } from "@/types/Task"
import "./style.css"

const TextField = (props: TextFieldTypes) => {
    const { error, register, type, placeholder, label, name } = props
    return (
        <div className="inputField">
            <label htmlFor="">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                name={name}
            />
            {error ? <span>{error?.message}</span> : ""}
        </div>
    )
}

export default TextField