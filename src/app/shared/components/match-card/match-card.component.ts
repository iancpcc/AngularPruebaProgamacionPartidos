import { Component, Input } from '@angular/core';

import { MathcDescription } from '../../../core/models/dates-prg.interface';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.scss'
})
export class MatchCardComponent {
@Input() matchDescription!: MathcDescription
}
