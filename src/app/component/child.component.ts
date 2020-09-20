 
 
import { Component,EventEmitter,Input, OnInit, Output} from "@angular/core" ;
import { InteractionService } from '../interaction.service';


@Component({

    templateUrl:"./child.component.html",
    selector:"child"
})


export class ChildComponent {
    @Output() xEvent = new EventEmitter();


    constructor(private inter:InteractionService){}

    ngOnInit(){
        this.inter.observable$.subscribe(
            msg => {if(msg=="hi") {alert("hi sir")} else alert("bye sir")}
        )
    }

 

     declanchi=()=>{
      console.log("hi")
       this.xEvent.emit()
        
    }

}

