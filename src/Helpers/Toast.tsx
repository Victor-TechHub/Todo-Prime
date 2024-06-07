import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast() {
    return (
        <div>
            <ToastContainer
                position='bottom-right'
                style={{ fontSize: "10px" }}
            />
        </div>
    )
}