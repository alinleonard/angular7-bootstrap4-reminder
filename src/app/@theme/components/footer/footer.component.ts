import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b><a href="https://github.com/alinleonard" target="_blank">Alin Busila</a></b> 2018</span>
    <div class="socials">
      <a href="https://github.com/alinleonard" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/alin-busila-1a5725107/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `
})
export class FooterComponent {
}
