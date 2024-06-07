import { FieldValue } from "firebase/firestore";
import { ReactNode } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export type childNode = {
    children: ReactNode
}

export interface TaskCtxType {
    addNewTask: (title: string, created: string, isCompleted: boolean) => Promise<void>
    getUserTasks: () => Promise<void>
    userTasks: userTasksDataType[] | undefined
    deleteTasks: (id: any) => Promise<void>
}

export interface userTasksDataType {
    id: any
    title: string
    created: string
    isCompleted: boolean
    set: FieldValue
}

export type TextFieldTypes = {
    error: FieldError | undefined
    register: UseFormRegister<FormType>
    type?: string
    placeholder?: string
    label: string
    name: InputNames
}

export type FormType = {
    title: string
    description: string
    date: string
}

export type InputNames = "title" | "description" | "date"