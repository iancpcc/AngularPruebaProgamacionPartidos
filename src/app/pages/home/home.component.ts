import { AppState, DataState } from '../../core/models/data-state';
import { Component, OnInit, inject } from '@angular/core';
import {
  DateProgramation,
  MathcDescription,
} from '../../core/models/dates-prg.interface';
import { Observable, catchError, map, of, startWith } from 'rxjs';

import { AlertErrorComponent } from '../../shared/components/alert-error/alert-error.component';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../../core/pipes/date-format.pipe';
import { MatchCardComponent } from '../../shared/components/match-card/match-card.component';
import { MatchService } from '../../core/services/match.service';
import { SliderProgramacionComponent } from '../../shared/components/slider-programacion/slider-programacion.component';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderProgramacionComponent,
    MatchCardComponent,
    CommonModule,
    DateFormatPipe,
    SpinnerComponent,
    AlertErrorComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  matchService = inject(MatchService);
  DataState = DataState;
  datesProgramation$!: Observable<AppState<DateProgramation[]>>;
  currentDateSelected :string | Date = '20240127' ;
  mathsDescriptions: MathcDescription[] = [];
  stadiums = new Array();
  currentStadium = '';
  matchsDescriptionFiltered: MathcDescription[] = [];
  ngOnInit(): void {
    this.datesProgramation$ = this.matchService.getDates$().pipe(
      map((resp) => ({ state: DataState.LOADED, data: resp })),
      startWith({ state: DataState.LOADING }),
      catchError((err) => of({ state: DataState.ERROR, error: err }))
    );
    this.onLoadCard(this.currentDateSelected);
  }

  onLoadCard(date: Date | string) {
    this.currentDateSelected = date;
    this.matchService
      .getMatchesProgrammed$(date)
      .pipe(
        map((resp) => ({ state: DataState.LOADED, data: resp })),
        startWith({ state: DataState.LOADING }),
        catchError((err) => of({ state: DataState.ERROR, error: err }))
      )
      .subscribe({
        next: (resp: AppState<MathcDescription[]>) => {
          if (resp.state === DataState.LOADED) {
            this.mathsDescriptions = resp.data!;
            this.mathsDescriptions.forEach((r) => {
              if (!this.stadiums.includes(r.nombreEstadio)) {
                this.stadiums.push(r.nombreEstadio);
              }
            });
            // this.stadiums = []
            this.currentStadium = this.stadiums [0];
            this.loadMatchsByEstadium(this.currentStadium)
          }
        },
        error: (err) => {},
      });
  }

  loadMatchsByEstadium(estadio: string) {
    this.currentStadium  = estadio ;
    this.matchsDescriptionFiltered = this.mathsDescriptions.filter(match=> match.nombreEstadio === estadio )
  }
}
