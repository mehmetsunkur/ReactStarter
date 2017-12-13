import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './layouts/main/main.component';
import { RootContainerComponent } from './layouts/root-container/root-container.component';
import { FullPageLayoutComponent } from './layouts/full-page-layout/full-page-layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HeaderSearchInputComponent } from './layouts/header-search-input/header-search-input.component';
import { SearchInputComponent } from './layouts/search-input/search-input.component';
import { HeaderLogoComponent } from './layouts/header-logo/header-logo.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { MessagePortalComponent } from './layouts/message-portal/message-portal.component';
import { PortalComponent } from './layouts/portal/portal.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderControlsAnonymousComponent } from './layouts/header-controls-anonymous/header-controls-anonymous.component';
import { HeaderControlsRegisteredComponent } from './layouts/header-controls-registered/header-controls-registered.component';
import { MyProfileDropdownLinkComponent } from './layouts/my-profile-dropdown-link/my-profile-dropdown-link.component';
import { LocaleSelectorComponent } from './layouts/locale-selector/locale-selector.component';
import { MiniCartComponent } from './layouts/mini-cart/mini-cart.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FormattedMessageComponent } from './layouts/formatted-message/formatted-message.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    
  ],
  declarations: [MainComponent,
    RootContainerComponent,
    FullPageLayoutComponent,
    HeaderComponent,
    HeaderSearchInputComponent,
    SearchInputComponent,
    HeaderLogoComponent,
    MenuComponent,
    MessagePortalComponent,
    PortalComponent,
    FooterComponent,
    HeaderControlsAnonymousComponent,
    HeaderControlsRegisteredComponent,
    MyProfileDropdownLinkComponent,
    LocaleSelectorComponent,
    MiniCartComponent,
    FormattedMessageComponent,
    NavbarComponent],
  bootstrap: [ MainComponent ]
})
export class BlAppModule { }
