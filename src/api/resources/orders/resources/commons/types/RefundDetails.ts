/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * Information about refunded currency amounts for an item
 * selection, modifier option, or service charge. The refund
 * information includes separate values for the pre-tax value
 * being refunded and the tax amount being refunded.
 *
 */
export interface RefundDetails {
    /**
     * The value of the menu item or service charge (excluding taxes) being
     * refunded. Includes the value of any nested modifier options that
     * increased the price of the item or modifier option (an upcharge for
     * the modifier option).
     *
     */
    refundAmount?: number;
    /**
     * The tax amount being refunded.
     *
     */
    taxRefundAmount?: number;
    refundTransaction?: HotschedulesToast.orders.ToastReference;
}