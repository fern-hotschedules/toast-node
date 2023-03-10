/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of service charge. Response only. Valid values: * `FIXED` - The service charge is for a specific currency amount. * `PERCENT` - The service charge is for a percentage of the check amount. * `OPEN` - The service charge is not configured with an amount. The amount is specified by the restaurant employee.
 *
 */
export type ServiceChargeType = "FIXED" | "PERCENT" | "OPEN";

export const ServiceChargeType = {
    Fixed: "FIXED",
    Percent: "PERCENT",
    Open: "OPEN",
} as const;
