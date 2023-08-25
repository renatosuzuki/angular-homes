import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Housinglocation} from '../../housinglocation'
import { HousingService } from 'src/app/housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  housingLocationId: any
  housingLocation: Housinglocation | undefined;
  HousingService = new HousingService

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private route: ActivatedRoute) { 
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.HousingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation
    })
  }

  submitApplication() {
    this.HousingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  ngOnInit(){
  }

}
