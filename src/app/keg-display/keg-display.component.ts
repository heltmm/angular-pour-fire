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

  kegs: Keg[] = [
    new Keg('Fresh Squeezed', 'Deschutes', 'Bend OR', 'IPA', 6.4, 60, 16, 6, 1984, 8),
    new Keg('Delerium Tremens', 'Delerium', 'Belgium', 'Belgian Strong Ale', 8.5, 26, 12, 8, 992, 2),
    new Keg('Shower Beer', 'Champion', 'Charlotesville, Va', 'Czech Pils', 4.5, 35, 16, 5, 1984, 4),
    new Keg('Accumulation', 'New Belgium', 'Ft. Collins, CO', 'White IPA', 6.2, 55, 16, 6, 1984, 1)
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToDetailPage(clickedKeg: Keg) {
     this.router.navigate(['kegs', clickedKeg.tap]);
   }

}
