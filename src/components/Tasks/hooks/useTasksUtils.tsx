import { useState } from 'react'

type useTasksUtilsType = {
    index: number
    setIndex: React.Dispatch<React.SetStateAction<number>>
    showNav: boolean
    showForm: boolean
    handleClick: () => void
    toggleNavBar: () => void
}

const useTasksUtils = (): useTasksUtilsType => {
    const [index, setIndex] = useState(0)
    const [showForm, setShowForm] = useState(false)
    const [showNav, setShowNavbar] = useState(false)

    const toggleNavBar = (): void => setShowNavbar(state => !state)

    const handleClick = (): void => setShowForm(state => !state)
    return { index, setIndex, showForm, showNav, toggleNavBar, handleClick }
}

export default useTasksUtils