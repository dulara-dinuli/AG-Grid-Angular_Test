import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//Hosting web page on Github  
  // changed:- "outputPath": "dist/ag-grid-angular" to  "outputPath": "docs" in angular.json file