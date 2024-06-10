import { Component } from '@angular/core';
import {CountdownComponent} from '../../components/countdown/countdown.component'; 


@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CountdownComponent],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {

}

