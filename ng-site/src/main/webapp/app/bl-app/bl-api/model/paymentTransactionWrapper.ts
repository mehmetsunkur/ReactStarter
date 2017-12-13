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
import { Character } from './character';
import { MapElementWrapper } from './mapElementWrapper';


export interface PaymentTransactionWrapper {
    additionalField?: Array<MapElementWrapper>;
    amount?: number;
    archived?: Character;
    currency?: string;
    customerIpAddress?: string;
    id?: number;
    orderPaymentId?: number;
    parentTransactionId?: number;
    rawResponse?: string;
    success?: boolean;
    type?: string;
}