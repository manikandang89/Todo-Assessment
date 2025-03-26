export interface TodosData {
    id: number,
    taskName: string,
    isCompleted: boolean 
}

export enum TodosFilterType {
    all = 'all',
    completed = 'completed',
    active = 'active'
}
