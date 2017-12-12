import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { BasicErrorControllerService } from './api/basicErrorController.service';
import { BreadcrumbsEndpointService } from './api/breadcrumbsEndpoint.service';
import { CheckoutEndpointService } from './api/checkoutEndpoint.service';
import { CustomerEndpointService } from './api/customerEndpoint.service';
import { FulfillmentEndpointService } from './api/fulfillmentEndpoint.service';
import { MenuEndpointService } from './api/menuEndpoint.service';
import { MessageEndpointService } from './api/messageEndpoint.service';
import { OrderHistoryEndpointService } from './api/orderHistoryEndpoint.service';
import { PreviewTemplateControllerService } from './api/previewTemplateController.service';
import { PromotionMessageEndpointService } from './api/promotionMessageEndpoint.service';
import { RatingEndpointService } from './api/ratingEndpoint.service';
import { ReactCartEndpointService } from './api/reactCartEndpoint.service';
import { ReactCatalogEndpointService } from './api/reactCatalogEndpoint.service';
import { ReactCheckoutEndpointService } from './api/reactCheckoutEndpoint.service';
import { ReactCustomerEndpointService } from './api/reactCustomerEndpoint.service';
import { ReactPageEndpointService } from './api/reactPageEndpoint.service';
import { RelatedProductsEndpointService } from './api/relatedProductsEndpoint.service';
import { SeoEndpointService } from './api/seoEndpoint.service';
import { SwaggerDocsReloadEndpointService } from './api/swaggerDocsReloadEndpoint.service';
import { ThemeEndpointService } from './api/themeEndpoint.service';
import { WishlistEndpointService } from './api/wishlistEndpoint.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    BasicErrorControllerService,
    BreadcrumbsEndpointService,
    CheckoutEndpointService,
    CustomerEndpointService,
    FulfillmentEndpointService,
    MenuEndpointService,
    MessageEndpointService,
    OrderHistoryEndpointService,
    PreviewTemplateControllerService,
    PromotionMessageEndpointService,
    RatingEndpointService,
    ReactCartEndpointService,
    ReactCatalogEndpointService,
    ReactCheckoutEndpointService,
    ReactCustomerEndpointService,
    ReactPageEndpointService,
    RelatedProductsEndpointService,
    SeoEndpointService,
    SwaggerDocsReloadEndpointService,
    ThemeEndpointService,
    WishlistEndpointService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
