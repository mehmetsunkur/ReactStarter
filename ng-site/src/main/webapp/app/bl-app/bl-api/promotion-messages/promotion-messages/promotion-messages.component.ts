import { Component, OnInit } from '@angular/core';
import { PromotionMessagesService } from '../promotion-messages.service';
import { PromotionMessageDTOWrapper } from 'src/main/webapp/app/bl-app/bl-api';

@Component({
  selector: 'jhi-promotion-messages',
  templateUrl: './promotion-messages.component.html',
  styles: []
})
export class PromotionMessagesComponent implements OnInit {
  private promotionMessage: PromotionMessageDTOWrapper;

  constructor(private promotionMessagesService: PromotionMessagesService) { }

  ngOnInit() {
    
  }

}
