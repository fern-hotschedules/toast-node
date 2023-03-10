/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * A tax rate that is applied to an item or service charge.
 */
export interface AppliedTaxRate extends HotschedulesToast.orders.ToastReference {
    /** The type of object this is. */
    taxRateEntityType?: string;
    taxRate?: HotschedulesToast.orders.ToastReference;
    /** The name of the tax rate. */
    name?: string;
    /** The tax rate, which can be a fixed amount, a percentage, or null. */
    rate?: number;
    /** The tax amount that was actually applied. */
    taxAmount?: number;
    /**
     * The type of the tax rate. Default is `PERCENT`.
     * The value `EXTERNAL` indicates that the tax is for a marketplace
     * facilitator order, and that the marketplace facilitator
     * organization calculated the tax amount.
     *
     */
    type?: HotschedulesToast.orders.TaxRateType;
    /**
     * Indicates whether the marketplace facilitator that
     * received a guest order remitted the tax amount on behalf
     * of the Toast platform restaurant.
     * You can use this information to identify tax amounts that
     * have already been paid by an ordering service provider
     * and do not need to be paid again.
     * * `true` - The marketplace facilitator paid the tax
     * amount on behalf of the Toast platform restaurant
     * location.
     * * `false` - The marketplace facilitator has not paid the
     * tax amount. The Toast platform restaurant location may be
     * required to pay the tax amount.
     * **Note**: Toast API response data is not guidance or
     * advice for tax compliance.
     *
     */
    facilitatorCollectAndRemitTax?: boolean;
}
