import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Place } from 'src/app/models/places.model';
import { PlaceService } from 'src/app/services/places.service';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit {

  constructor(public placeService:PlaceService, private router:Router) { }

  ngOnInit(): void {
  }

  submitForm(placeForm:NgForm){
    if(placeForm.value.id==null){
      this.placeService.CreatePlace(placeForm.value).subscribe((response) => {
        this.router.navigate(["/list-place"]);
      });
    }else{
      this.placeService.UpdatePlace(placeForm.value.id,placeForm.value).subscribe((response) => {
        this.router.navigate(["/list-place"]);
      });
      this.resetForm(placeForm);
    }
    this.resetForm(placeForm);
  }

  resetForm(placeForm:NgForm){
    if(placeForm!=null){
      placeForm.reset();
      this.placeService.selectPLace=new Place();
    }
  }

}
