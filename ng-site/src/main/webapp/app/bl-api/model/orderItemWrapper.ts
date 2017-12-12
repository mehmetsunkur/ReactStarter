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
import { MediaWrapper } from './mediaWrapper';
import { Money } from './money';
import { OrderItemAttributeWrapper } from './orderItemAttributeWrapper';
import { OrderItemPriceDetailWrapper } from './orderItemPriceDetailWrapper';
import { OrderItemQualifierWrapper } from './orderItemQualifierWrapper';


export interface OrderItemWrapper {
    averagePrice?: Money;
    bundleItem?: Array<OrderItemWrapper>;
    cartMessages?: Array<string>;
    categoryId?: number;
    childOrderItems?: Array<OrderItemWrapper>;
    hasValidationError?: boolean;
    id?: number;
    isBundle?: boolean;
    isDiscountingAllowed?: boolean;
    name?: string;
    orderId?: number;
    orderItemAttribute?: Array<OrderItemAttributeWrapper>;
    orderItemPriceDetails?: Array<OrderItemPriceDetailWrapper>;
    parentOrderItemId?: number;
    priceBeforeAdjustments?: Money;
    primaryMedia?: MediaWrapper;
    productId?: number;
    productUrl?: string;
    qualifier?: Array<OrderItemQualifierWrapper>;
    quantity?: number;
    retailPrice?: Money;
    salePrice?: Money;
    skuId?: number;
    totalAdjustmentValue?: Money;
    totalPrice?: Money;
}
