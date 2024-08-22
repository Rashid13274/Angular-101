import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'md rashid';
  public message : any;
  title = '';
  myId = 'testId';
  isDisabled = true;
  successClass = "text-success";
  isTrue = true;
  objectOfClass: any = {
    "text-success":!this.isDisabled,
    "text-danger": this.isDisabled,
    "text-special": !this.isDisabled
  }
  highlightColor = "orange";
  titleStyle = {
    // fontStyle: "italic",
    "font-style": "italic",
    color:"yellow"
  }
  greeting = "";
  
  onClick(event: any){
    console.log(event.type);
    this.greeting = "welcome to code evoluation."
  }
  
  inputDate(event:any){
    console.log(event.value);
  
  }

  logMessage(value:any){
console.log(value.value);
console.log(value);

  }

  userName = "";
  color = 'green';
  arr = ['Angular', 'React', 'Vue'];
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    }
  ]
  constructor() {}
}
