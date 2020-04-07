export class ListItem {
    description: string;
    complete:boolean;
    constructor(desc:string){
        this.description = desc;
        this.complete = false;
    }
}