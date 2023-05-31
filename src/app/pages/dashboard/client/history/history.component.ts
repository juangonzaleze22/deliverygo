import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  deliveries: any;
  loading: boolean = false;

  constructor(
    public globalService: GlobalService,
    private authService: AuthService
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
