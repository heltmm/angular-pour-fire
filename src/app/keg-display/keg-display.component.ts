import { Component, OnInit } from '@angular/core';
import { Keg } from './../keg.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keg-display',
  templateUrl: './keg-display.component.html',
  styleUrls: ['./keg-display.component.css']
})
export class KegDisplayComponent implements OnInit {
  selectedKeg = null;
  kegs: Keg[];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToDetailPage(clickedKeg: Keg) {
     this.router.navigate(['kegs', clickedKeg.tap]);
   }

}
