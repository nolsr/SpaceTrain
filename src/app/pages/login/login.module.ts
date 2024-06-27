import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from "../../components/components.module";
import { AuthService } from '../../core/services/auth.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ComponentsModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [AuthService],
})
export class LoginModule { }
