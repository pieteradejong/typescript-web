import { Eventing } from "./Eventing";

export interface UserProps {
    id?: number, 
    name?: string;
    age?: number;
}

export class User {
    constructor(private data: UserProps) {};

    get(propName: string): number | string | undefined {
        return this.data[propName as keyof UserProps];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }
}
