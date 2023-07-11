import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  dataUser: any;

  constructor() { }

  ngOnInit(): void {
    this.dataUser = JSON.parse(localStorage.getItem('user')!);


      console.log("dataUser", this.dataUser);

    const defaultImage = 'https://placehold.it/100x100';
    const url = this.dataUser.photo ? environment.API_URL_IMAGE + this.dataUser.photo : defaultImage
    this.dataUser.photoURL = url;

  }

}
