import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-integration-description[features][url][buttonText]',
  template: `
    <div class='header'> For why do you need a backend admin dashboard?</div>
    <div class='subheader'> To save up to 300 hours on development. To use backend as ready to use examples. </div>
    <div class='header2'> Features </div>
    <ul class='features-list'>
      <li *ngFor='let feature of features'
           class='feature'
      >
        - {{ feature }}
      </li>
    </ul>
    <a nbButton
       [href]='url'
       status="primary"
       target="_blank"
    > {{buttonText}} </a>
  `,
  styleUrls: ['./integration-description.component.scss'],
})
export class IntegrationDescriptionComponent {

  @Input() features: string[];
  @Input() url: string;
  @Input() buttonText: string;

  constructor() { }

}
