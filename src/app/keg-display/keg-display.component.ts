import { Component, OnInit } from '@angular/core';
import { Keg } from './../keg.model';
import { Router } from '@angular/router';
import { KegService} from '../keg.service'

@Component({
  selector: 'app-keg-display',
  templateUrl: './keg-display.component.html',
  styleUrls: ['./keg-display.component.css'],
  providers: [KegService]
})
export class KegDisplayComponent implements OnInit {

  kegs: Keg[];

  constructor(private router: Router, private kegService: KegService) { }

  ngOnInit() {
    this.kegs = this.kegService.getKegs();
  }
  
  goToDetailPage(clickedKeg: Keg) {
     this.router.navigate(['kegs', clickedKeg.tap]);
   }

}
