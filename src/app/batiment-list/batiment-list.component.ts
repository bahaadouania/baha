import { Component, OnInit } from '@angular/core';

import { Batiment } from '../models/batiment';
import { Router } from '@angular/router';
import { batimentbahaadouaniaService } from '../services/bahaadouania';

@Component({
  selector: 'app-batiment-list',
  templateUrl: './batiment-list.component.html',
  styleUrls: ['./batiment-list.component.css']
})
export class BatimentListComponent implements OnInit {
  batiments: Batiment[] = [];

  constructor(private batimentService: batimentbahaadouaniaService, private router: Router) {}

  ngOnInit(): void {
    this.batimentService.getBatiments().subscribe(data => {
      this.batiments = data;
    });
  }

  deleteBatiment(id: number): void {
    this.batimentService.deleteBatiment(id).subscribe(() => {
      this.batiments = this.batiments.filter(b => b.id !== id);
    });
  }

  editBatiment(batiment: Batiment): void {
    this.router.navigate(['/edit', batiment.id]);
  }
}
