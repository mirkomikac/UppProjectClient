import { TaskProperty } from "./TaskProperty";

export class UserTask{
    id: string;
    name: string;
    assignee: string;
    category: string;
    creationTime: string;
    description: string;
    dueDate: Date;
    owner: string;
    processInstanceId: string;
    properties: TaskProperty[];
};
