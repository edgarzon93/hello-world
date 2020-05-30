import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SubmenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  redirigir(destino){
      this.router.navigate([destino])
      this.dialogRef.close()
    
  }

}

