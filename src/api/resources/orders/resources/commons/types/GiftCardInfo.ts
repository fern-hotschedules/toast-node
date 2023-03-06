/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * Reserved for future use.
 */
export interface GiftCardInfo extends HotschedulesToast.orders.ToastReference {
    /** Reserved for future use. */
    storedValueBalance?: number;
    /** Reserved for future use. */
    rewardsBalance?: number;
    /** Reserved for future use. */
    authRequestId?: string;
    /** Reserved for future use. */
    authorizationState?: HotschedulesToast.orders.AuthorizationStateType;
    /** Reserved for future use. */
    cardNumberIdentifier?: string;
}
