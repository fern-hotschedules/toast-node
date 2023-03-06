/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

export interface MenuOptionGroup extends HotschedulesToast.config.ExternalReference {
    /** The name of the `MenuOptionGroup` as it appears in the Toast POS. */
    name?: string;
    /**
     * An array of `ExternalReference` objects containing the
     * identifiers of the `MenuItem`s in
     * the menu group.
     *
     */
    options?: HotschedulesToast.config.ExternalReference[];
    /** The minimum number of selections that must be made from this option group. */
    minSelections?: number;
    /** The maximum number of selections that can be made from this option group. */
    maxSelections?: number;
}
