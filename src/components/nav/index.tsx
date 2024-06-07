import "./style.css"

interface NavbarPropType {
    toggleNavBar: () => void
    showNav: boolean
}

const Navbar = (props: NavbarPropType) => {
    const { toggleNavBar, showNav } = props
    return (
        <header className="header">
            <div className="logo">
                <span>Todo</span><span>Prime.</span>
            </div>

            <section className={showNav ? "burger animate_burger" : "burger"} onClick={toggleNavBar}>
                <div />
                <div />
            </section>
        </header>
    )
}

export default Navbar