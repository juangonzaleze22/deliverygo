import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as mapboxgl from 'mapbox-gl';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-address-map',
  templateUrl: './address-map.component.html',
  styleUrls: ['./address-map.component.scss']
})
export class AddressMapComponent implements OnInit {

  map: mapboxgl.Map;
  closeResult: string;
  mapForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private mapService: MapService
  ) { }

  ngOnInit() {
    
    setTimeout(() => {
      this.initializeMap();
    }, 500)
    
    this.mapForm = this.formBuilder.group({
      selectedPoint: ['']
    });

  }


  initializeMap() {
    this.map = this.mapService.initializeMap()

    this.map.on('click', (event) => {
      const selectedPoint = [event.lngLat.lng, event.lngLat.lat];
      this.mapForm.patchValue({ selectedPoint });
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
