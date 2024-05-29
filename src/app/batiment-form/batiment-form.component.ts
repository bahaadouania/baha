import { Component, OnInit } from '@angular/core';
import { Batiment } from '../models/batiment';
import { ActivatedRoute, Router } from '@angular/router';
import { batimentbahaadouaniaService } from '../services/bahaadouania';

@Component({
  selector: 'app-batiment-form',
  templateUrl: './batiment-form.component.html',
  styleUrls: ['./batiment-form.component.css']
})
export class BatimentFormComponent implements OnInit {
  batiment: Batiment = new Batiment();
  isEdit: boolean = false;

  constructor(
    private batimentService: batimentbahaadouaniaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.batimentService.getBatiment(Number(id)).subscribe(batiment => {
        this.batiment = batiment;
      });
    }
  }

  saveBatiment(): void {
    if (this.isEdit) {
      this.batimentService.updateBatiment(this.batiment).subscribe(response => {
        console.log('Modification effectuée :', response);
        this.router.navigate(['/']);
      });
    } else {
      this.batimentService.addBatiment(this.batiment).subscribe(response => {
        console.log('Ajout effectué :', response);
        this.router.navigate(['/']);
      });
    }
  }
}
