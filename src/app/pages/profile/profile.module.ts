import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from "../../components/components.module";
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketsService } from '../../core/services/tickets.service';

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ComponentsModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        TicketsService
    ],
})
export class ProfileModule { }
