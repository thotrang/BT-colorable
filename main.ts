import {Rectangle} from "./Rectangle";
import {Shape} from "./Shape";
import { Square } from "./Square";
import {Circle} from "./Circle";
let arr:Shape[]=[];
arr[0]=new Rectangle(5,6,'rectangle');
arr[1]=new Square('square',10);
arr[2]=new Circle('circle',5);

for(let i=0;i<arr.length;i++){
    console.log(arr[i].calculateArea());
    if(arr[i] instanceof Square){
        (arr[i] as Square).howToColor();
        console.log(        (arr[i] as Square).howToColor()        );
        
    }
    
}
