import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css"

export default function Toast() {
    return (
        <div>
            <ToastContainer
                className="toast"
                position='bottom-right'
            />
        </div>
    )
}