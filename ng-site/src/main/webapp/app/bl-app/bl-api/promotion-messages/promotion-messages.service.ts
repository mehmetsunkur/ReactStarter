
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../../app.constants';

import { PromotionMessageDTOWrapper } from '../model/promotionMessageDTOWrapper'
import { ResponseWrapper, createRequestOption } from '../../../shared';

@Injectable()
export class PromotionMessagesService {

    private resourceUrl = SERVER_API_URL + 'api/tasks';

    constructor(private http: Http) { }

    find(id: number): Observable<PromotionMessageDTOWrapper> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }


    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to TaskMySuffix.
     */
    private convertItemFromServer(json: any): PromotionMessageDTOWrapper {
        const entity: PromotionMessageDTOWrapper = Object.assign(new PromotionMessageDTOWrapper(), json);
        return entity;
    }

    /**
     * Convert a TaskMySuffix to a JSON which can be sent to the server.
     */
    private convert(task: PromotionMessageDTOWrapper): PromotionMessageDTOWrapper {
        const copy: PromotionMessageDTOWrapper = Object.assign({}, task);
        return copy;
    }
}
