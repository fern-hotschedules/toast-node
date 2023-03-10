/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * A scheduled shift in the Toast platform used to enforce employee
 * clock-in and clock outs. Shifts might be created in an external
 * scheduling system and pushed to the Toast platform.
 *
 */
export interface Shift extends HotschedulesToast.labor.ExternalReference {
    /**
     * Date created, in UTC format (read-only).
     *
     */
    createdDate?: string;
    /**
     * Date modified, in UTC format (read-only).
     *
     */
    modifiedDate?: string;
    /**
     * Date deleted, in UTC format (read-only).
     *
     */
    deletedDate?: string;
    /**
     * If the shift is deleted in the Toast platform.
     *
     */
    deleted?: boolean;
    jobReference?: HotschedulesToast.labor.ExternalReference;
    employeeReference?: HotschedulesToast.labor.ExternalReference;
    /**
     * Timestamp of the beginning of the shift. This is when the
     * employee can clock in. Expressed in the UTC time zone.
     *
     */
    inDate?: string;
    /**
     * Timestamp of the end of the shift. This is when the
     * employee can clock out. Expressed in the UTC time zone.
     *
     */
    outDate?: string;
}
