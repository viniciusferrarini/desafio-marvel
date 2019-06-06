import { Thumbnail } from './thumbnail';

export class Character {
    
    id: number;
    name: string;
    description: string;
    thumbnail: Thumbnail;

    public getImageUrl() {
        return this.thumbnail.path + "." + this.thumbnail.extension;
    }

}