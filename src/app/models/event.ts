import { User } from './user';

export class Event {
    constructor(
        public id?: number,
        public name?: string,
        public location?: string,
        public cost?: number,
        public eventDate?: Date,
        public users?: User[]
       
    ){};
}
