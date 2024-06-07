import "./style.css"
import { navs } from "./utils"
import { useThemeCtx } from "../../context/theme"
import Navbar from "../nav"
import { FaGithub } from "react-icons/fa";
import Lists from "../Lists"
import TaskForm from "../form"
import { SlArrowLeftCircle } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion"
import useTasksUtils from "./hooks/useTasksUtils"

const Tasks = () => {
    //theme context api's
    const { isDarkTheme, toggleTheme } = useThemeCtx()

    const { toggleNavBar, showForm, showNav, index, setIndex, handleClick } = useTasksUtils()

    return (
        <main data-theme={isDarkTheme ? "dark" : "light"}>
            <Navbar toggleNavBar={toggleNavBar} showNav={showNav} />
            <section className="main">
                {/* Navigation Container */}
                <AnimatePresence>
                    {
                        showNav && window.innerWidth <= 550
                            ?
                            <motion.article
                                className={showNav ? "show" : "hide"}
                                initial={{ y: 70, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5, type: "spring", stiffness: 200 }}
                            >
                                <header>
                                    <p>Filters</p>
                                    <div className="checkbox-wrapper-2">
                                        <input
                                            type="checkbox"
                                            className="sc-gJwTLC ikxBAC"
                                            onClick={toggleTheme}
                                        />
                                    </div>
                                </header>

                                <ul>
                                    {navs.map((nav, idx) => {
                                        return (
                                            <li
                                                key={idx}
                                                className={index === idx ? "active" : ""}
                                                onClick={() => setIndex(idx)}>
                                                <nav.icon size={15} />
                                                {nav.name}
                                            </li>
                                        )
                                    })}
                                </ul>

                                <a
                                    className="github"
                                    href="https://github.com/Victor-TechHub/Todo-Prime"
                                    target="_blank">
                                    <FaGithub size={25} />
                                </a>
                            </motion.article>
                            :
                            <motion.article
                                className={showNav ? "show" : "hide"}
                                initial={{ y: 70, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5, type: "spring", stiffness: 200 }}
                            >
                                <header>
                                    <p>Filters</p>
                                    <div className="checkbox-wrapper-2">
                                        <input
                                            type="checkbox"
                                            className="sc-gJwTLC ikxBAC"
                                            onClick={toggleTheme}
                                        />
                                    </div>
                                </header>

                                <ul>
                                    {navs.map((nav, idx) => {
                                        return (
                                            <li
                                                key={idx}
                                                className={index === idx ? "active" : ""}
                                                onClick={() => setIndex(idx)}>
                                                <nav.icon size={15} />
                                                {nav.name}
                                            </li>
                                        )
                                    })}
                                </ul>

                                <a
                                    className="github"
                                    href="https://github.com/Victor-TechHub/Todo-Prime"
                                    target="_blank">
                                    <FaGithub size={25} />
                                </a>
                            </motion.article>
                    }
                </AnimatePresence>


                {/* View Container */}
                <AnimatePresence>
                    {
                        !showNav && window.innerWidth <= 550
                            ?
                            <motion.article
                                className={!showNav ? "show" : "hide"}
                                initial={{ y: 70, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, type: "spring", stiffness: 200, }}
                            >
                                <header>
                                    <p>Tasks</p>
                                </header>
                                {
                                    !showForm
                                        ?
                                        <Lists />
                                        :
                                        <TaskForm />
                                }
                                <div className="controls">
                                    {
                                        showForm
                                            ?
                                            <motion.i
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: .5, type: "spring", stiffness: 600 }}
                                            >
                                                <SlArrowLeftCircle
                                                    size={25}
                                                    onClick={handleClick}
                                                />
                                            </motion.i>
                                            :
                                            ""
                                    }
                                    <button
                                        className="add_task"
                                        role="button"
                                        onClick={handleClick}>
                                        Add Tasks
                                    </button>
                                </div>
                            </motion.article>
                            :
                            <motion.article
                                className={!showNav ? "show" : "hide"}
                                initial={{ y: 70, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, type: "spring", stiffness: 200, }}
                            >
                                <header>
                                    <p>Tasks</p>
                                </header>
                                {
                                    !showForm
                                        ?
                                        <Lists />
                                        :
                                        <TaskForm />
                                }
                                <div className="controls">
                                    {
                                        showForm
                                            ?
                                            <motion.i
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: .5, type: "spring", stiffness: 600 }}
                                            >
                                                <SlArrowLeftCircle
                                                    size={25}
                                                    onClick={handleClick}
                                                />
                                            </motion.i>
                                            :
                                            <motion.button
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: .5, type: "spring", stiffness: 600 }}
                                                className="add_task"
                                                role="button"
                                                onClick={handleClick}
                                            >
                                                Add Tasks
                                            </motion.button>
                                    }

                                </div>
                            </motion.article>
                    }
                </AnimatePresence>
            </section>
        </main>

    )
}

export default Tasks



