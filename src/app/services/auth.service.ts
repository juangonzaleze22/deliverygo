import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dataUser: any;
  /*  url = "https://api.mamidecor.com/api/";
   urlImage = "https://api.mamidecor.com/"; */

  /* url = "http://localhost:7915/api/";
  urlImage = "http://localhost:7915/"; */

  constructor(
    private router: Router
  ) { }

  isLoggedIn(): boolean {
    const token: any = localStorage.getItem('token');

    if (token) {
      const tokenExpires = new Date(token.split('.')[1] * 1000);
      const now = new Date();
      console.log("now", now >= tokenExpires)

      if (now >= tokenExpires) {

        localStorage.removeItem('token');
        this.router.navigate(['/auth']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
}

  private checkToken(): void {
    const userToken = localStorage.getItem('token');
  }

  getUser() {
    const userData = localStorage.getItem('user');
    this.dataUser = JSON.parse(userData);
    return this.dataUser;
  }

  /* LOGIN JWT */
  logIn(token: string, user: object): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.dataUser = user;
    this.getUser();
    this.router.navigate(['dashboard'])

  }

  updateDataUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.dataUser = user;
    this.getUser();
  }

  logOut() {
    this.dataUser = undefined;
    localStorage.removeItem("token");
    this.router.navigate(['auth'])
  }

  formatDate(date) {
    return date ? format(date, 'MM/dd/yyyy') : '';
  }

  getImg(path: string): string {

    let urlImg = "";

    if (path.indexOf("https://") == -1) {
      urlImg = environment.API_URL_IMAGE + path;
    }
    else {
      urlImg = path;
    }

    return urlImg;

  }

  prepareFormData(formData: FormData, file: File, name: string): FormData {
    formData.append(name, file, file.name);
    return formData;
  }

  calcDiscount(price, discount) {
    if (discount == '') {
      return false;
    }
    const result = parseInt(price) - (parseInt(price) * (parseInt(discount) / 100));
    return result
  }

  transformImageToBase64(event) {

    const file = event.target.files[0];
    let base64;


    let reader = new FileReader();
    reader.onloadend = () => {
      base64 = reader.result
    }
    reader.readAsDataURL(file);
    console.log(base64)
    return base64;
  }
}
