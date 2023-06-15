export class Foods{
    id!: number;
    price!:string;
    name!:string;
    favorite:boolean = false;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    coockTime!:string;
    origins!:string[];
    static id: number;

}