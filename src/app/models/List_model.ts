import { ListItem } from './wishes_item_model';
export class List {
    id:number;
    title:string;
    created_date:Date;
    finish_date:Date;
    finished:boolean;
    items:ListItem[];
    constructor(title:string){
        
        this.title = title;
        this.created_date = new Date();
        this.finished = false;
        this.items = [];
        this.id = new Date().getTime();

    }
}