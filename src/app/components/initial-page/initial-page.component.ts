import { Component, OnInit } from '@angular/core';
import { MessageService } from 'eter-ui';
import { MatDialog } from '@angular/material/dialog';
import { SubmenuComponent } from '../modals/submenu/submenu.component';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  constructor(
    private message : MessageService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.message.SuccessToast('Operacion realizada correctamente')
  }

  openSubmenu(menu): void {

    let width = screen.width

    const dialogRef = this.dialog.open(SubmenuComponent, {
      width: `500px`,      
      height: `500px`,      
      data: menu
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
