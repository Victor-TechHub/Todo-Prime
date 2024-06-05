import { FieldValue } from "firebase/firestore";
import React, { ReactNode } from "react";

export interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

export interface Data {
    id: number;
    createdAt: number | string;
    targetDate: number | string;
    name: string;
    level: string;
}

export type Order = 'asc' | 'desc';

export interface EnhancedTableToolbarProps {
    numSelected: number;
    handleModal: () => void
}

export interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

export type childNode = {
    children: ReactNode
}

export interface TaskCtxType {
    addNewTask: (title: string, created: string, target: string, level: string) => Promise<void>
    getUserTasks: () => Promise<void>
    userTasks: userTasksDataType[] | undefined
}

export interface userTasksDataType {
    id: any
    title: string
    created: string
    target: string
    level: "low" | "medium" | "high"
    set: FieldValue
}