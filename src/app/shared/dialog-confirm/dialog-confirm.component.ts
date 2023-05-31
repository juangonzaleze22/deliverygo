import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})

export class DialogConfirmComponent implements OnInit {

  title:string;
  description:string;
  confirmButton: string;



  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    const {title, description, confirmButton} = this.data;

    this.title = title;
    this.description = description;
    this.confirmButton = confirmButton;

  }



  closeModal(status: boolean): void {
    this.dialogRef.close(status);
  }

}