import { UtilityStoreService } from './services/utility-store.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tandem-frontend';

  constructor(
    private utilitiesService: UtilityStoreService
  ) {

  }
}
