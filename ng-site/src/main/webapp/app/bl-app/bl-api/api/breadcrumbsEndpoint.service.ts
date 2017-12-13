/**
 * Broadleaf Commerce API
 * The default Broadleaf Commerce APIs
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { BreadcrumbDTO } from '../model/breadcrumbDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class BreadcrumbsEndpointService {

    protected basePath = 'https://localhost:3000/api/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * getBreadcrumbs
     * 
     * @param entityURI entityURI
     * @param entityType entityType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBreadcrumbsUsingDELETE1(entityURI: string, entityType: string, observe?: 'body', reportProgress?: boolean): Observable<Array<BreadcrumbDTO>>;
    public getBreadcrumbsUsingDELETE1(entityURI: string, entityType: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingDELETE1(entityURI: string, entityType: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingDELETE1(entityURI: string, entityType: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getBreadcrumbsUsingDELETE1.');
        }
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getBreadcrumbsUsingDELETE1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
        }
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.delete<Array<BreadcrumbDTO>>(`${this.basePath}/breadcrumbs`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getBreadcrumbs
     * 
     * @param entityURI entityURI
     * @param entityType entityType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBreadcrumbsUsingGET1(entityURI: string, entityType: string, observe?: 'body', reportProgress?: boolean): Observable<Array<BreadcrumbDTO>>;
    public getBreadcrumbsUsingGET1(entityURI: string, entityType: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingGET1(entityURI: string, entityType: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingGET1(entityURI: string, entityType: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getBreadcrumbsUsingGET1.');
        }
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getBreadcrumbsUsingGET1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
        }
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<BreadcrumbDTO>>(`${this.basePath}/breadcrumbs`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getBreadcrumbs
     * 
     * @param entityURI entityURI
     * @param entityType entityType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBreadcrumbsUsingHEAD1(entityURI: string, entityType: string, observe?: 'body', reportProgress?: boolean): Observable<Array<BreadcrumbDTO>>;
    public getBreadcrumbsUsingHEAD1(entityURI: string, entityType: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingHEAD1(entityURI: string, entityType: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingHEAD1(entityURI: string, entityType: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getBreadcrumbsUsingHEAD1.');
        }
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getBreadcrumbsUsingHEAD1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
        }
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.head<Array<BreadcrumbDTO>>(`${this.basePath}/breadcrumbs`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getBreadcrumbs
     * 
     * @param entityURI entityURI
     * @param entityType entityType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBreadcrumbsUsingOPTIONS1(entityURI: string, entityType: string, observe?: 'body', reportProgress?: boolean): Observable<Array<BreadcrumbDTO>>;
    public getBreadcrumbsUsingOPTIONS1(entityURI: string, entityType: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingOPTIONS1(entityURI: string, entityType: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingOPTIONS1(entityURI: string, entityType: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getBreadcrumbsUsingOPTIONS1.');
        }
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getBreadcrumbsUsingOPTIONS1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
        }
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.options<Array<BreadcrumbDTO>>(`${this.basePath}/breadcrumbs`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getBreadcrumbs
     * 
     * @param entityURI entityURI
     * @param entityType entityType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBreadcrumbsUsingPATCH1(entityURI: string, entityType: string, observe?: 'body', reportProgress?: boolean): Observable<Array<BreadcrumbDTO>>;
    public getBreadcrumbsUsingPATCH1(entityURI: string, entityType: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingPATCH1(entityURI: string, entityType: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingPATCH1(entityURI: string, entityType: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getBreadcrumbsUsingPATCH1.');
        }
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getBreadcrumbsUsingPATCH1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
        }
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.patch<Array<BreadcrumbDTO>>(`${this.basePath}/breadcrumbs`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getBreadcrumbs
     * 
     * @param entityURI entityURI
     * @param entityType entityType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBreadcrumbsUsingPOST1(entityURI: string, entityType: string, observe?: 'body', reportProgress?: boolean): Observable<Array<BreadcrumbDTO>>;
    public getBreadcrumbsUsingPOST1(entityURI: string, entityType: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingPOST1(entityURI: string, entityType: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingPOST1(entityURI: string, entityType: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getBreadcrumbsUsingPOST1.');
        }
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getBreadcrumbsUsingPOST1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
        }
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<Array<BreadcrumbDTO>>(`${this.basePath}/breadcrumbs`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getBreadcrumbs
     * 
     * @param entityURI entityURI
     * @param entityType entityType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBreadcrumbsUsingPUT1(entityURI: string, entityType: string, observe?: 'body', reportProgress?: boolean): Observable<Array<BreadcrumbDTO>>;
    public getBreadcrumbsUsingPUT1(entityURI: string, entityType: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingPUT1(entityURI: string, entityType: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BreadcrumbDTO>>>;
    public getBreadcrumbsUsingPUT1(entityURI: string, entityType: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getBreadcrumbsUsingPUT1.');
        }
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getBreadcrumbsUsingPUT1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
        }
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.put<Array<BreadcrumbDTO>>(`${this.basePath}/breadcrumbs`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}