/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

export interface RestaurantService extends HotschedulesToast.config.ToastReference {
    /**
     * The name of this meal service (for example, `Lunch` or
     * `Dinner`).
     *
     */
    name?: string;
}
