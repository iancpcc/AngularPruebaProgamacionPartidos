import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../../../core/pipes/date-format.pipe';
import { DateProgramation } from '../../../core/models/dates-prg.interface';

@Component({
  selector: 'app-slider-programacion',
  standalone: true,
  imports: [CommonModule, DateFormatPipe],
  templateUrl: './slider-programacion.component.html',
  styleUrl: './slider-programacion.component.scss'
})
export class SliderProgramacionComponent {

  @Input() dateIn! :DateProgramation
  @Input() currentDateSelected! :string | Date
  @Output() dateOutEmmit = new EventEmitter<string | Date>();


  onSelectDate(date:string | Date){
    this.dateOutEmmit.emit(date);
  }

}
