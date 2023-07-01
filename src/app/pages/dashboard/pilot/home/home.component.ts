import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { DialogCreatePilotComponent } from '../dialogs/dialog-create-pilot/dialog-create-pilot.component';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  pilots;

  constructor(
    private dialog: MatDialog,
    private globalService: GlobalService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.getAllPilots();
  }

  openDialogCreatePilot(idPilots:string = null) {
    this.dialog.open(DialogCreatePilotComponent,{
      data: idPilots
    })
      .afterClosed().subscribe(resp => {
        console.log(resp)
        if (resp?.reload) {
           this.getAllPilots();
        }
      });
  }


  getAllPilots() {
    this.loading = true;

    this.globalService.getService(`users/getPilots`, 1).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (result: any) => {
        const { status, data } = result;
        if (status == 'success') {
          console.log("data", data)
          this.pilots = data.map(busines => { 
            const defaultImage = 'https://placehold.it/100x100';
            const url = busines.photo ? environment.API_URL_IMAGE + busines.photo : defaultImage
            busines.photoURL = url;
            return busines
          });
        }
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })
  }


  async deleteBusinessById(idBusiness: string) {
    try {
      const result = await this.globalService.deleteService(`users/deleteUser/${idBusiness}`).toPromise();
      const { status, data }: any = result;
      if (status == 'success') {
        this.toastService.showSuccess(`El negocio se ha eliminado correctamente`, "Success");
        this.getAllPilots();
      } else {
        throw new Error('An error occurred while fetching the data');
      }
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred while fetching the data');
    }
  }

}
