import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {

  constructor(
   
    private router : Router 
  ) { }

  ngOnInit(): void {
  }
  redirigir(destino){
    this.router.navigate([destino])
    
  
} 

}
