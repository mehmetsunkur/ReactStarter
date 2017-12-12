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


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SeoEndpointService {

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
     * getSeoProperties
     * 
     * @param entityType entityType
     * @param entityURI entityURI
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSeoPropertiesUsingDELETE1(entityType: string, entityURI: string, observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: string; }>;
    public getSeoPropertiesUsingDELETE1(entityType: string, entityURI: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingDELETE1(entityType: string, entityURI: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingDELETE1(entityType: string, entityURI: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getSeoPropertiesUsingDELETE1.');
        }
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getSeoPropertiesUsingDELETE1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
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

        return this.httpClient.delete<{ [key: string]: string; }>(`${this.basePath}/seo`,
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
     * getSeoProperties
     * 
     * @param entityType entityType
     * @param entityURI entityURI
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSeoPropertiesUsingGET1(entityType: string, entityURI: string, observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: string; }>;
    public getSeoPropertiesUsingGET1(entityType: string, entityURI: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingGET1(entityType: string, entityURI: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingGET1(entityType: string, entityURI: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getSeoPropertiesUsingGET1.');
        }
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getSeoPropertiesUsingGET1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
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

        return this.httpClient.get<{ [key: string]: string; }>(`${this.basePath}/seo`,
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
     * getSeoProperties
     * 
     * @param entityType entityType
     * @param entityURI entityURI
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSeoPropertiesUsingHEAD1(entityType: string, entityURI: string, observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: string; }>;
    public getSeoPropertiesUsingHEAD1(entityType: string, entityURI: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingHEAD1(entityType: string, entityURI: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingHEAD1(entityType: string, entityURI: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getSeoPropertiesUsingHEAD1.');
        }
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getSeoPropertiesUsingHEAD1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
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

        return this.httpClient.head<{ [key: string]: string; }>(`${this.basePath}/seo`,
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
     * getSeoProperties
     * 
     * @param entityType entityType
     * @param entityURI entityURI
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSeoPropertiesUsingOPTIONS1(entityType: string, entityURI: string, observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: string; }>;
    public getSeoPropertiesUsingOPTIONS1(entityType: string, entityURI: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingOPTIONS1(entityType: string, entityURI: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingOPTIONS1(entityType: string, entityURI: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getSeoPropertiesUsingOPTIONS1.');
        }
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getSeoPropertiesUsingOPTIONS1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
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

        return this.httpClient.options<{ [key: string]: string; }>(`${this.basePath}/seo`,
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
     * getSeoProperties
     * 
     * @param entityType entityType
     * @param entityURI entityURI
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSeoPropertiesUsingPATCH1(entityType: string, entityURI: string, observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: string; }>;
    public getSeoPropertiesUsingPATCH1(entityType: string, entityURI: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingPATCH1(entityType: string, entityURI: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingPATCH1(entityType: string, entityURI: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getSeoPropertiesUsingPATCH1.');
        }
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getSeoPropertiesUsingPATCH1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
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

        return this.httpClient.patch<{ [key: string]: string; }>(`${this.basePath}/seo`,
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
     * getSeoProperties
     * 
     * @param entityType entityType
     * @param entityURI entityURI
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSeoPropertiesUsingPOST1(entityType: string, entityURI: string, observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: string; }>;
    public getSeoPropertiesUsingPOST1(entityType: string, entityURI: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingPOST1(entityType: string, entityURI: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingPOST1(entityType: string, entityURI: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getSeoPropertiesUsingPOST1.');
        }
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getSeoPropertiesUsingPOST1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
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

        return this.httpClient.post<{ [key: string]: string; }>(`${this.basePath}/seo`,
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
     * getSeoProperties
     * 
     * @param entityType entityType
     * @param entityURI entityURI
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSeoPropertiesUsingPUT1(entityType: string, entityURI: string, observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: string; }>;
    public getSeoPropertiesUsingPUT1(entityType: string, entityURI: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingPUT1(entityType: string, entityURI: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: string; }>>;
    public getSeoPropertiesUsingPUT1(entityType: string, entityURI: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (entityType === null || entityType === undefined) {
            throw new Error('Required parameter entityType was null or undefined when calling getSeoPropertiesUsingPUT1.');
        }
        if (entityURI === null || entityURI === undefined) {
            throw new Error('Required parameter entityURI was null or undefined when calling getSeoPropertiesUsingPUT1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (entityType !== undefined) {
            queryParameters = queryParameters.set('entityType', <any>entityType);
        }
        if (entityURI !== undefined) {
            queryParameters = queryParameters.set('entityURI', <any>entityURI);
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

        return this.httpClient.put<{ [key: string]: string; }>(`${this.basePath}/seo`,
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
