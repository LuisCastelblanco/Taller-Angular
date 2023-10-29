import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  average: number = 0;

  constructor(private serieService: SerieService) { }

  // Function to fetch series and calculate the average number of seasons
  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.average = 0;

      series.forEach(serie => {
        this.average += serie.seasons;
      });
      this.average /= series.length;
    });
  }

  ngOnInit() {
    // Call the getSeries function when the component is initialized
    this.getSeries();
  }
}
