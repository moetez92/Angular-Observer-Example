 
 
import { Component} from "@angular/core" ;
import { InteractionService } from '../interaction.service';


@Component({

    templateUrl:"./parent.component.html",
    selector:"parent"
})


export class ParentComponent   {

 
 constructor( private inter:InteractionService){}

     sayHi(){
         this.inter.notify("hi")
     }
     
     sayBye(){
        this.inter.notify("bye")
    }
}

