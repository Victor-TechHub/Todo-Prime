import React from 'react'

type useToggleType = {
    open: boolean,
    handleClick: () => void
}

const useToggle = (): useToggleType => {
    const [open, setOpen] = React.useState(false);
    const handleClick = (): void => setOpen((state) => !state);

    return { open, handleClick }
}

export default useToggle