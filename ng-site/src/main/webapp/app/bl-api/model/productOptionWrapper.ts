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
import { ProductOptionValueWrapper } from './productOptionValueWrapper';


export interface ProductOptionWrapper {
    allowedValue?: Array<ProductOptionValueWrapper>;
    archived?: Character;
    attributeName?: string;
    label?: string;
    productOptionType?: string;
    productOptionValidationStrategyType?: string;
    productOptionValidationType?: string;
    required?: boolean;
    validationString?: string;
}
