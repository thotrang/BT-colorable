import { Colorable } from "./Colorable";
import {Rectangle} from "./Rectangle";
export class Square extends Rectangle implements Colorable{
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
    howToColor() {
        return 'all four sides'
    }
}
