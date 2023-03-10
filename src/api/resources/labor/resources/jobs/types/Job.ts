/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * A restaurant job.
 */
export interface Job extends HotschedulesToast.labor.ExternalReference {
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
     * Title of the job.
     *
     */
    title?: string;
    /**
     * If the job is deleted in the Toast platform.
     *
     */
    deleted?: boolean;
    /**
     * An enumerated type specifying how to interpret the
     * default wage for this job.
     *
     */
    wageFrequency?: HotschedulesToast.labor.WageFrequency;
    /**
     * The default wage of the job.
     *
     */
    defaultWage?: number;
    /**
     * Indicates whether the job receives gratuities (tips).
     *
     */
    tipped?: boolean;
    /**
     * A reference identifier for the job. This is an optional
     * field entered when the job is created. For example, it
     * can be used to match Toast platform jobs to jobs
     * configured in external labor management systems.
     *
     */
    code?: string;
}
