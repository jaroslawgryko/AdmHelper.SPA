import { Jednostka } from './Jednostka';

export interface User {
    id: number;
    username: string;
    email: string;
    jednostkaNazwa: string;
    dataModyfikacji: Date;
    jednostki?: Jednostka[];
}
