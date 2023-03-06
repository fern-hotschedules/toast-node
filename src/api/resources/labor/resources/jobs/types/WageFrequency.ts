/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An enumerated type specifying how to interpret the
 * default wage for this job.
 *
 */
export type WageFrequency = "HOURLY" | "SALARY";

export const WageFrequency = {
    Hourly: "HOURLY",
    Salary: "SALARY",
} as const;
