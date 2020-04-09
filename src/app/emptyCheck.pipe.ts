import { Pipe, PipeTransform } from '@angular/core';  

@Pipe({name: 'empty'}) 
export class EmptyCheckPipe implements PipeTransform { 
    transform(value, locale): any {
        if (value === undefined || value === '') {
            if (locale == 'en') 
                return 'N/A';
            else if (locale == 'es') 
                return 'No Disponible';
            else if (locale == 'fr') 
                return 'N/D';
            else if (locale == 'pt') 
                return 'N/A';
            else if (locale == 'ar') 
                return 'غير متاح';
            else if (locale == 'zh') 
                return '暂无数据';
            else if (locale == 'ru') 
                return 'Н/п';
            else
                return 'N/A';
        } else {
            return value;   
        }        
    } 
} 