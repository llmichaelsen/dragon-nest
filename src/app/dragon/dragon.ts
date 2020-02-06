export class Dragon {
    id: string;
    createdAt: string;
    name: string;
    type: string;
    histories: string[];

    constructor ( name, type, histories ){
        this.name = name;
        this.type = type
        this.histories = histories;
    }
 }