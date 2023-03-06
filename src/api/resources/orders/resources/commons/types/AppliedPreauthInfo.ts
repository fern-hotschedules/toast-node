/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * For internal use only.
 */
export interface AppliedPreauthInfo {
    /** For internal use only. */
    guid?: string;
    /** For internal use only. */
    token: string;
    /** For internal use only. */
    oneTimeUse?: boolean;
    /** For internal use only. */
    preAuthAmount: number;
    /** For internal use only. */
    cardType: HotschedulesToast.orders.CardType;
    /** For internal use only. */
    readerType?: HotschedulesToast.orders.ReaderType;
    /** For internal use only. */
    last4CardDigits: string;
    /** For internal use only. */
    cardHolderFirstName?: string;
    /** For internal use only. */
    cardHolderLastName?: string;
    /** For internal use only. */
    cardHolderhash4?: string;
    /** For internal use only. */
    cardHolderhash6?: string;
    /** For internal use only. */
    magStripeName?: string;
    /** For internal use only. */
    cardHolderExpirationMonth?: string;
    /** For internal use only. */
    cardHolderExpirationYear?: string;
    /** For internal use only. */
    useCount?: number;
}
