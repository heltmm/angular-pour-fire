import { Component, OnInit } from '@angular/core';
import { Keg } from './../keg.model';
import { Router } from '@angular/router';
import { KegService} from '../keg.service'

@Component({
  selector: 'app-keg-display',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [KegService]
})
export class AdminComponent implements OnInit {

  kegs: Keg[];

  constructor(private router: Router, private kegService: KegService) { }

  ngOnInit() {
    this.kegs = this.kegService.getKegs();
  }

  goToDetailPage(clickedKeg: Keg) {
     this.router.navigate(['kegs', clickedKeg.tap]);
   }

}
