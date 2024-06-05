import "../../styles/Home.css"
import Navbar from "../../components/navbar"
import Tasks from "../../components/Tasks"
import useToggle from "./hooks/useToggle"

const Dashboard = () => {
    const { open, handleClick } = useToggle()
    return (
        <section className="dashboard">
            <header className="navbar">
                <Navbar />
            </header>
            <section className="task_container">
                <Tasks open={open} handleModal={handleClick} />
            </section>
        </section>
    )
}

export default Dashboard