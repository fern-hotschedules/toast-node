/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `PERCENT` - the discount reduces the price by a
 * preconfigured percent.
 * * `FIXED` - the discount reduces the price by a
 * preconfigured currency amount.
 * * `OPEN_PERCENT` - the discount reduces the price by a
 * percent entered by a restaurant employee.
 * * `OPEN_FIXED` - the discount reduces the price by a
 * currency amount entered by a restaurant employee.
 * * `BOGO` - a buy one get one (BOGO) discount.
 * * `FIXED_TOTAL` - a combo discount that reduces the
 * price of all eligible items to a preconfigured currency
 * amount.
 *
 */
export type DiscountType = "PERCENT" | "FIXED" | "OPEN_PERCENT" | "OPEN_FIXED" | "BOGO" | "FIXED_TOTAL";

export const DiscountType = {
    Percent: "PERCENT",
    Fixed: "FIXED",
    OpenPercent: "OPEN_PERCENT",
    OpenFixed: "OPEN_FIXED",
    Bogo: "BOGO",
    FixedTotal: "FIXED_TOTAL",
} as const;
