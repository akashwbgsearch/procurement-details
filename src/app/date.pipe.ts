import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'dateFormatPipe' })

export class DateFormatPipe implements PipeTransform {

    transform(value: string, locale: string): string {      

        if (value !== undefined && locale !== undefined) {
          
            let m = moment.utc(value);
			
            let formatedDate = '';
            if (value.search("T00:00:00Z") == -1 )               
                 formatedDate = m.locale(locale).format('MMM DD, Y h:mm:ss');
            else
            formatedDate = m.locale(locale).format('MMM DD, Y');
               
            return formatedDate;       
    	}
    }
}