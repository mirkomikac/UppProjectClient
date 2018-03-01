import { Offer } from "./Offer";

export class TaskProperty{
    id: string;
    name: string;
    value: string;
    readable: boolean;
    writable: boolean;
    required: boolean;
    values : Map<string, string>;
    type : string;
    list: Offer[];

    
    public constructor(){
        this.values = new Map<string, string>();
    }
};