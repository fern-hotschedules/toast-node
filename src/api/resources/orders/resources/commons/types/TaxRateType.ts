/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of the tax rate. Default is `PERCENT`.
 * The value `EXTERNAL` indicates that the tax is for a marketplace
 * facilitator order, and that the marketplace facilitator
 * organization calculated the tax amount.
 *
 */
export type TaxRateType = "PERCENT" | "FIXED" | "NONE" | "TABLE" | "EXTERNAL";

export const TaxRateType = {
    Percent: "PERCENT",
    Fixed: "FIXED",
    None: "NONE",
    Table: "TABLE",
    External: "EXTERNAL",
} as const;