export interface Task {
    id: number;
    title: string;
    endsAt: string;
    status: 'todo' | 'in-progress' | 'done'
    level: 'low' | 'high' | 'medium';
    description: string;
}