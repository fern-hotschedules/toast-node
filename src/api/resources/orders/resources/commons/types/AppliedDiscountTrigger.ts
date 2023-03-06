/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * The Selection that triggered the application of this discount
 */
export interface AppliedDiscountTrigger {
    selection?: HotschedulesToast.orders.ExternalReference;
    /** The amount of the selection used to trigger the applied discount. */
    quantity?: number;
}
