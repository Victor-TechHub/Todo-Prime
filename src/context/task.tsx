import { createContext, useContext, useState } from 'react'
import { TaskCtxType, childNode, userTasksDataType } from '../types/Task'
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, serverTimestamp, updateDoc } from 'firebase/firestore'
import { database } from '../lib/firebase'
import { toast } from 'react-toastify'
import { useAuthCtx } from '.'

const TaskCtx = createContext<TaskCtxType>({
    addNewTask: async () => { },
    getUserTasks: async () => { },
    userTasks: undefined,
    deleteTasks: async () => { },
    updateCompletedTasks: async () => { }
})

const TaskCtxProvider = ({ children }: childNode): JSX.Element => {
    const [userTasks, setUserTasks] = useState<userTasksDataType[] | undefined>(undefined)
    const { currentUser } = useAuthCtx()

    const addNewTask = async (title: string, created: string, description: string): Promise<void> => {
        try {
            if (!title || !created) {
                toast.error("🔐 fields cannot be empty")
                return
            }

            const task = await addDoc(collection(database, "tasks"), {
                title,
                created,
                description,
                isCompleted: false,
                set: serverTimestamp()
            })
            await updateDoc(task, { id: task.id })
            toast.success("🤩 Task has been added!")
        } catch (err) {
            err instanceof Error && toast.error(err.message)
        }
    }

    const updateCompletedTasks = async (id: any, isChecked: boolean): Promise<void> => {
        try {
            await updateDoc(doc(database, "tasks", id), {
                isCompleted: !isChecked
            })
            toast.success(!isChecked && `Weldone ${currentUser?.displayName}`)
        } catch (err) {
            err instanceof Error && toast.error(err.message)
        }
    }

    const deleteTasks = async (id: any): Promise<void> => {
        try {
            await deleteDoc(doc(database, "tasks", id))
            toast.success("Out of tasks!")
        } catch (err) {
            err instanceof Error && toast.error(err.message)
            console.log("Error deleting task: ", err)
        }
    }

    const getUserTasks = async (): Promise<void> => {
        try {
            const q = query(collection(database, "tasks"))
            onSnapshot(q, (snapshot) => {
                let arr: userTasksDataType[] = []
                snapshot.forEach(doc => {
                    arr?.push({ id: doc.id, ...doc.data() } as userTasksDataType)
                })
                setUserTasks(arr)
            })
        } catch (err) {
            err instanceof Error && toast.error(err.message)
        }
    }

    const values = {
        addNewTask,
        getUserTasks,
        userTasks,
        deleteTasks,
        updateCompletedTasks
    }

    return <TaskCtx.Provider value={values}>{children}</TaskCtx.Provider>
}

const useTaskCtx = () => useContext(TaskCtx)

export { TaskCtxProvider, useTaskCtx }