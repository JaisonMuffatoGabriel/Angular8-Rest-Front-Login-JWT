import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; // requisicoes ajax
import { RouterModule, Routes } from '@angular/router'; // configura rotas
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { HttpInteceptorModule } from './service/header-inteceptor.service';




export const appRouters: Routes = [

  { path : 'home', component: HomeComponent }, // redireciona para o home 1
  { path : 'login', component: LoginComponent }, // redireciona para o login
  { path : '', component: LoginComponent }// acessar raiz tbm redireciona para o login
];

export const routers: ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [ // aqui declara as novas paginas criadas para poder acessa-las
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [// aqui declara os imports que faco mais acima
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routers,
    HttpInteceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
