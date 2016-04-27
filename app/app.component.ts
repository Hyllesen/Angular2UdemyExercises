import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <h1 [textContent]="title"></h1>
        <courses></courses>
        <authors></authors>
        <h3> {{title}}</h3>
        <img src="{{ imageUrl }}"/>
        <img [src]="imageUrl" />
        <img bind-src="imageUrl"/>
        <button 
            (click)="onClick()"
            class="btn btn-primary"
            [style.backgroundColor]="isActive ? 'blue' : 'red'">Submit</button>    
         <button (click)="onClick()">Submit</button>    
         <button on-click="onClick()">Submit</button>    

        `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { 
    title = "Angular App";
    isActive = false;
    imageUrl = "http://api.ning.com/files/1R1gqINM7bz6Pmfx*ajN44R5D3kPtEchAyn1330EO09G-Q8WNLhBR6f6LPoJokwbLPaWm0zGisn8I2eBaQ1SiaeINq581HL9/HK5_3001.gif"

    onclick() {
        this.isActive = true;
    }

}
