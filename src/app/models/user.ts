import { Address } from './address';

export class User{
    id:number;
    name:string
    email:string;
    address: Address;
    username: string
    constructor(){
        this.address= new Address();
    }
}