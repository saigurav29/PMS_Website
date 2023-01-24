import {Pipe,PipeTransform} from "@angular/core";

@Pipe({
    name:"resolveProperty"
})
export class ResolvePropertyPipe implements PipeTransform{
    transform(object: any,keyName:string, ...args: any[]):any {
        return object[keyName];
    }
}