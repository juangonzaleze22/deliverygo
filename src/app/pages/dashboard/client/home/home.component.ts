import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddDeliveryComponent } from '../dialogs/dialog-add-delivery/dialog-add-delivery.component';
import { finalize } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';
import { DialogDetailDeliveryComponent } from '../dialogs/dialog-detail-delivery/dialog-detail-delivery.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  deliveries: any;
  loading: boolean = false;

  constructor(
    public dialog: MatDialog,
    public globalService: GlobalService,
    private authService: AuthService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.getAllDeliveries();

  }

  addDelivery() {
    this.dialog.open(DialogAddDeliveryComponent)
    .afterClosed().subscribe(resp => { 
      console.log(resp)
      if (resp?.reload){
        this.getAllDeliveries();
      }
    });
  }

  getAllDeliveries() {
    this.loading = true;

    const { _id } = this.authService.getUser();

    this.globalService.getService(`delivery/getAllDeliveriesByUser/${_id}`, 1).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (result: any) => {
        const { status, data } = result;
        if (status == 'success') {
          console.log("data", data)
          this.deliveries = data;
        }
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })
  }

  showDelivery(idDelivery: string) {
    const dialogRef = this.dialog.open(DialogDetailDeliveryComponent, {
      width: '360px', 
      data: {
        idDelivery
      } 
    });

  }

  updateDelivery(delivery) {
    console.log(delivery)
  }

  deleteDelivery(IdDelivery) {
    this.loading = true;

    this.globalService.deleteService(`delivery/${IdDelivery}`, 1).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (result: any) => {
        const { status, data } = result;
        if (status == 'success') {
          this.toastService.showSuccess('Delivery eliminado correctamente', 'Scuccess');
          this.getAllDeliveries()
        }
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })
  }

  confirmDeleteDelivery(id): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '360px', // define el ancho del modal
      data: {
        title: 'Eliminar delivery',
        description: "¿Esta seguro que desea eliminar este delivery?",
        confirmButton: 'Confirmar'
      } // define el mensaje que aparecerá en el modal
    });
  
    // Escuchar el resultado del modal
    dialogRef.afterClosed().subscribe(result => {
      if (result){ 
        this.deleteDelivery(id)
      }
    });
  }
}
