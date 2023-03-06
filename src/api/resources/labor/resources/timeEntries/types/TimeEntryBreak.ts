/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * Information about a period of time that an employee is not
 * working during a shift. For example, an employee might take a
 * break to eat at some time during a shift. An employee can be paid
 * or unpaid for the break period.
 *
 */
export interface TimeEntryBreak {
    /**
     * The GUID maintained by the Toast platform.
     *
     */
    guid?: string;
    breakType?: HotschedulesToast.labor.ToastReference;
    /**
     * Indicates whether the employee was paid for the break.
     * * `true` - The break was a paid break.
     * * `false` - The break was an unpaid break.
     *
     */
    paid?: boolean;
    /**
     * The date and time that the employee started the break period,
     * in UTC.
     *
     */
    inDate?: string;
    /**
     * The date and time that the employee ended the break period
     * and returned to work, in UTC.
     *
     */
    outDate?: string;
    /**
     * Indicates whether the break was a missed break.
     * * `true` - The break was missed.
     * * `false` - The break was taken.
     *
     */
    missed?: boolean;
    /**
     * Indicates whether the employee was asked to take the break.
     * * `true` - The employee was asked to take the break.
     * * `false` - The employee was not asked to take the break.
     * Null for break types that do not use break acknowledgement
     * tracking or when the employee did not complete the audit
     * response prompt.
     *
     */
    auditResponse?: boolean;
}