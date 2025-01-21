import {Genre} from '@prisma/client'
export interface IGenresRepository {
    create(name: string): Promise<Genre>;
    //findByName(name: string): Promise<Genre>;
}