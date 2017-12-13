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
import { Money } from './money';


export interface AdjustmentWrapper {
    adjustmentValue?: Money;
    discountAmount?: number;
    discountType?: string;
    id?: number;
    marketingMessage?: string;
    offerid?: number;
    reason?: string;
}