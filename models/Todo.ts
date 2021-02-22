export interface Todo {
  id: number;
  userId: string;
  title: string;
  completed: boolean;
  createdAt: number;
  deadlineAt: number;
}