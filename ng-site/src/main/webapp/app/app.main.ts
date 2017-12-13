import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
//import { BroadleafAngularStarterAppModule } from './app.module';
import { BlAppModule } from './bl-app/bl-app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(BlAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
