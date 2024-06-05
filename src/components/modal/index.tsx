import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FilledInput, FormControl, FormHelperText } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton'
import { FormEvent } from 'react';
import { useTaskCtx } from '../../context/task';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    display: "grid",
    alignItems: "center",
    gap: "1em"
};

interface PropType {
    open: boolean
    handleClose: () => void
}

const LoadingButtonGroup = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <ButtonGroup variant="outlined" aria-label="Loading button group" sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button color="error" onClick={handleClose}>Cancel</Button>
            <LoadingButton type='submit' color="secondary">Create</LoadingButton>
        </ButtonGroup>
    );
}

export default function TaskModal(props: PropType) {
    const { open, handleClose } = props

    const { addNewTask } = useTaskCtx()

    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const { title, created, target, level } = Object.fromEntries(formData)

        addNewTask(title.toString(), created.toString(), target.toString(), level.toString())
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form onSubmit={onSubmit}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        New Task 💼
                    </Typography>
                    <Box sx={{ mt: 2 }} style={{ display: "grid", gap: "1em" }}>
                        <FormControl variant="filled" fullWidth>
                            <FilledInput type='text' color="secondary" id='title' name='title' />
                            <FormHelperText id="title">
                                Title
                            </FormHelperText>
                        </FormControl>

                        <FormControl variant="filled" fullWidth>
                            <FilledInput type='text' color="secondary" id='level' name='level' placeholder="Low / Medium / High" />
                            <FormHelperText id="level">
                                Level
                            </FormHelperText>
                        </FormControl>

                        <FormControl variant="filled">
                            <FilledInput type='date' color="secondary" id='created' name='created' />
                            <FormHelperText id="created">
                                Created
                            </FormHelperText>
                        </FormControl>

                        <FormControl variant="filled">
                            <FilledInput type='date' color="secondary" id='target' name='target' />
                            <FormHelperText id="target">
                                Your Target Day
                            </FormHelperText>
                        </FormControl>
                    </Box>
                    <LoadingButtonGroup handleClose={handleClose} />
                </Box>
            </form>
        </Modal>
    );
}
