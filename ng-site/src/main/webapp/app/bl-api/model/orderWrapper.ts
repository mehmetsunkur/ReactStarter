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
import { AdjustmentWrapper } from './adjustmentWrapper';
import { CartMessageWrapper } from './cartMessageWrapper';
import { CustomerWrapper } from './customerWrapper';
import { FulfillmentGroupWrapper } from './fulfillmentGroupWrapper';
import { Money } from './money';
import { OrderAttributeWrapper } from './orderAttributeWrapper';
import { OrderItemWrapper } from './orderItemWrapper';
import { OrderPaymentWrapper } from './orderPaymentWrapper';


export interface OrderWrapper {
    cartMessages?: Array<CartMessageWrapper>;
    customer?: CustomerWrapper;
    emailAddress?: string;
    fulfillmentGroup?: Array<FulfillmentGroupWrapper>;
    fulfillmentGroupAdjustmentsValue?: Money;
    id?: number;
    itemAdjustmentsValue?: Money;
    itemCount?: number;
    orderAdjustment?: Array<AdjustmentWrapper>;
    orderAdjustmentsValue?: Money;
    orderAttribute?: Array<OrderAttributeWrapper>;
    orderItem?: Array<OrderItemWrapper>;
    orderNumber?: string;
    payment?: Array<OrderPaymentWrapper>;
    status?: string;
    subTotal?: Money;
    submitDate?: Date;
    total?: Money;
    totalAdjustmentsValue?: Money;
    totalShipping?: Money;
    totalTax?: Money;
}
