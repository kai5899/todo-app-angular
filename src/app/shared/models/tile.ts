import { CatFilter } from "./cat-filter";

export interface Tile {

    title:String ;
    icon : String;
    children : CatFilter[];
}
