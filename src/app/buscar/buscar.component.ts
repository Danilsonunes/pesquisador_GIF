import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  constructor() {}
  ask: string;

  ngOnInit(): void {}

  buscar(form) {
    location.href = `giphy_api/resultados/${form.value.ask}`;
  }
}
