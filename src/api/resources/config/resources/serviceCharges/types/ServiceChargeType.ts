/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of service charge.
 */
export type ServiceChargeType = "FIXED" | "PERCENT" | "OPEN";

export const ServiceChargeType = {
    Fixed: "FIXED",
    Percent: "PERCENT",
    Open: "OPEN",
} as const;