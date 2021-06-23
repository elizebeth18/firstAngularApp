import { Pipe,PipeTransform } from '@angular/core'

@Pipe({
    name : 'myUpperText'
})

export class MyUpperText implements PipeTransform {
    //transform method which is defined in the PipeTransform interface
    //required to create a custom pipe
    transform(value: string,kindof: string,uname: string) {
        if(kindof === 'upper'){ 
            value = value.toUpperCase();
        }else{
            value = value.toLowerCase();
        }
        return value;
    }
    
}

/*
value = value.toUpperCase();
        value = uname + '_' + value;
*/