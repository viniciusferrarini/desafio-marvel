import { Entity } from '../service/entity';

export class Character implements Entity<number> {
    
    id: number;
    name: string;

}