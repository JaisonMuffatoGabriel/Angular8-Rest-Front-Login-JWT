import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = { login: "", senha: "" };

  constructor(private loginService: LoginServiceService) { }

  public login() {// a tela html chama esse login() que vai chamar o loginService onde vai acontecer todo o processo
    this.loginService.login(this.usuario);
  }

  ngOnInit() {
  }

}
