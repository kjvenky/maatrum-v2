import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-global-header',
   // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './header.component.sass' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public localState: any;
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    // this.asyncDataWithWebpack();
  }
  // private asyncDataWithWebpack() {
  //   // you can also async load mock data with 'es6-promise-loader'
  //   // you would do this if you don't want the mock-data bundled
  //   // remember that 'es6-promise-loader' is a promise
  //   setTimeout(() => {

  //     System.import('../../assets/mock-data/mock-data.json')
  //       .then((json) => {
  //         console.log('async mockData', json);
  //         this.localState = json;
  //       });

  //   });
  // }

}

