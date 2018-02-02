import { Jednostka } from './Jednostka';

export interface User {
    id: number;
    username: string;
    email: string;
    dataModyfikacji: Date;
    instytucjaNazwa: string;
    instytucjaSymbol: string;
    instytucjaOpis: string;
    jednostki?: Jednostka[];
}
