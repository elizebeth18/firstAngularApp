//import statement
import { Component } from '@angular/core'

//decorator
@Component({
    selector : 'app-main', // to use the component that is declared
    /* template : `<div>
                    <h1>This is the Main Component</h1>
                    <app-movies></app-movies>
                </div>` */
    templateUrl : './app.component.html'
})

//export statement
export class AppComponent {

}