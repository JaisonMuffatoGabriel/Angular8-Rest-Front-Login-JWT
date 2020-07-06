import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario) {
    // baselogin passa a url
    // formatacao json
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      // retorno http
      // conversao string para json - tirando o autrhorization e o bierer - fica so o token puro
      var token = (JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1]);

      localStorage.setItem("token", token);

      // teste
      console.info("token" + localStorage.getItem("token"));

      this.router.navigate(['home']);
    },
      error => {
        console.error("Erro ao fazer o login");
        alert('Acesso Negado!!!');
      }

    );

  }
}
