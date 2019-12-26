import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss']
})
export class AppComponent {
  title = 'helloWorld';
  isDarkTheme = false;

  changeTheme(theme) {
    if (theme === 'dark') {
      this.isDarkTheme = true;
    } else if (theme === 'theme1') {
      this.isDarkTheme = false;
    }
  }

}
