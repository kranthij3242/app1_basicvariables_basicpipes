import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addsubtitle'
})
export class AddsubtitlePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    /*console.log(value);
    console.log(gender);
    console.log(gender.toLowerCase());*/
    if (gender.toLowerCase()==="male"){
      return "Mr. "+value
    }
    else{
      return "Miss. "+value
    }
  }

}
