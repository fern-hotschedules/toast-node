/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * For internal use only.
 *
 */
export type RefundStrategyType = "LEGACY_INCLUDE_REFUND_IN_AMOUNT_DUE" | "IGNORE_REFUND_IN_AMOUNT_DUE";

export const RefundStrategyType = {
    LegacyIncludeRefundInAmountDue: "LEGACY_INCLUDE_REFUND_IN_AMOUNT_DUE",
    IgnoreRefundInAmountDue: "IGNORE_REFUND_IN_AMOUNT_DUE",
} as const;