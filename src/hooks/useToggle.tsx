import React from 'react'

const useToggle = () => {
    const [isSeen, setIsSeen] = React.useState(false)
    const toggleState = () => setIsSeen(state => !state)
    return { isSeen, toggleState }
}

export default useToggle