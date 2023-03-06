/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * A wrapper object containing identifier values for Toast platform entities.
 *
 */
export interface ConfigReference extends HotschedulesToast.orders.ToastReference {
    /**
     * A consistent identifier for Toast platform entities, such as menu items, that applies to all versions of a shared entity at all locations in a restaurant group. For example, you can use the `multiLocationId` value to identify menu entities that are versions of a shared menu entity. For more information about the menus API `multilocationId` value, see [the _Toast Developer Guide_](https://doc.toasttab.com/doc/devguide/apiUnderstandingGuidsEntityIdentifiersAndMultilocationIds_V2.html#apiMultilocationIdValues_V2).
     *
     */
    multiLocationId?: string;
    /**
     * An external identifier that is prefixed by a naming
     * authority. Deprecated for use in `ConfigReference`.
     *
     */
    externalId?: string;
}
