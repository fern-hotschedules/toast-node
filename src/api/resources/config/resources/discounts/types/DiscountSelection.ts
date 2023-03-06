/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `CHECK` - the discount can be applied to a check.
 * * `BOGO` - a buy one get one (BOGO) discount.
 * * `ITEM` - the discount can be applied to an item
 * selection in a check.
 *
 */
export type DiscountSelection = "CHECK" | "ITEM" | "BOGO";

export const DiscountSelection = {
    Check: "CHECK",
    Item: "ITEM",
    Bogo: "BOGO",
} as const;