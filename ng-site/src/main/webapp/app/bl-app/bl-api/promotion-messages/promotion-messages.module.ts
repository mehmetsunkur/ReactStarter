import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionMessagesService } from './promotion-messages.service';
import { PromotionMessagesComponent } from './promotion-messages/promotion-messages.component';

@NgModule({
  imports: [
    CommonModule,
    PromotionMessagesService
  ],
  declarations: [PromotionMessagesComponent]
})
export class PromotionMessagesModule { }
