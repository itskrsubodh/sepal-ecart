import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  cities: string[] = ['Delhi', 'Jaipur', 'chandigrah'];
}
