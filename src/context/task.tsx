import { createContext, useContext, useState } from 'react'
import { TaskCtxType, childNode, userTasksDataType } from '../types/Task'
import { addDoc, collection, onSnapshot, query, serverTimestamp, updateDoc } from 'firebase/firestore'
import { database } from '../lib/firebase'
import { toast } from 'react-toastify'

const TaskCtx = createContext<TaskCtxType>({
    addNewTask: async () => { },
    getUserTasks: async () => { },
    userTasks: undefined
})

const TaskCtxProvider = ({ children }: childNode): JSX.Element => {
    const [userTasks, setUserTasks] = useState<userTasksDataType[] | undefined>(undefined)

    const addNewTask = async (title: string, created: string, target: string, level: string): Promise<void> => {
        try {
            if (!title || !created || !target || !level) {
                toast.error("🔐 fields cannot be empty")
                return
            }

            const task = await addDoc(collection(database, "tasks"), {
                title,
                created,
                target,
                level,
                set: serverTimestamp()
            })
            toast.success("🤩 Task has been added!")
            await updateDoc(task, { id: task.id })
        } catch (err) {
            err instanceof Error && toast.error(err.message)
        }
    }

    const getUserTasks = async (): Promise<void> => {
        try {
            const q = query(collection(database, "tasks"))
            // const querySnapShot = await getDocs(q)
            // querySnapShot.forEach(doc => {
            //     let arr: userTasksDataType[] = []
            //     arr?.push({ id: doc.id, ...doc.data() } as userTasksDataType)
            //     setUserTasks(arr)
            // })
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
        userTasks
    }

    return <TaskCtx.Provider value={values}>{children}</TaskCtx.Provider>
}

const useTaskCtx = () => useContext(TaskCtx)

export { TaskCtxProvider, useTaskCtx }