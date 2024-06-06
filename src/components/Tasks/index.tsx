import "./style.css"
import { navs } from "./utils"
import { useThemeCtx } from "../../context/theme"
import { useState } from "react"
import Navbar from "../nav"

const Tasks = () => {
    const { isDarkTheme, toggleTheme } = useThemeCtx()
    const [index, setIndex] = useState(0)

    return (
        <main data-theme={isDarkTheme ? "dark" : "light"}>
            <Navbar />
            <section className="main">
                {/* Navigation Container */}
                <article>
                    <header>
                        <p>Filters</p>
                        <div className="checkbox-wrapper-2">
                            <input
                                type="checkbox"
                                className="sc-gJwTLC ikxBAC"
                                onClick={toggleTheme}
                                checked={isDarkTheme}
                            />
                        </div>
                    </header>

                    <ul>
                        {navs.map((nav, idx) => {
                            return (
                                <li className={index === idx ? "active" : ""} onClick={() => setIndex(idx)}>
                                    <nav.icon size={15} />
                                    {nav.name}
                                </li>
                            )
                        })}
                    </ul>
                </article>

                {/* View Container */}
                <article>
                    <header>
                        <p>Tasks</p>
                        <button className="add_task" role="button">Add Tasks</button>
                    </header>
                </article>
            </section>
        </main>

    )
}

export default Tasks



