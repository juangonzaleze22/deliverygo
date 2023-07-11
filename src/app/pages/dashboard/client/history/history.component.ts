import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailDeliveryComponent } from '../dialogs/dialog-detail-delivery/dialog-detail-delivery.component';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  deliveries: any;
  filteredDeliveries: any[] = [];
  searchKeyword: string = '';

  loading: boolean = false;

  constructor(
    public globalService: GlobalService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllDeliveries();
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
          this.deliveries = data.filter(item => item.status == 'COMPLETE' || item.status === 'CANCEL');
          this.filteredDeliveries = [...this.deliveries];
        }
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })
  }

  searchDeliveries() {
    console.log("searchDeliveries", this.searchKeyword)
    if (this.searchKeyword) {
      this.filteredDeliveries = this.deliveries.filter(item => item.title.toLowerCase().includes(this.searchKeyword.toLowerCase()) && (item.status === 'COMPLETE' || item.status === 'CANCEL'));
    } else {  
      this.filteredDeliveries = this.deliveries.filter(item => item.status === 'COMPLETE' || item.status === 'CANCEL');
    }
  }

  openDetailDelivery(data: any) {
    this.dialog.open(DialogDetailDeliveryComponent, {
      data: data,
      panelClass: 'dialog-add-delivery',
    })
  }

  showDelivery(delivery){ 
    console.log(delivery)
  }

  updateDelivery(delivery){ 
    console.log(delivery)
  }

  deleteDelivery(IdDelivery){ 
    console.log(IdDelivery)
  }

}
