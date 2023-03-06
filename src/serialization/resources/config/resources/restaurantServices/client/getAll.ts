/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.config.restaurantServices.getAll.Response.Raw,
    HotschedulesToast.config.RestaurantService[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../../../..")).config.RestaurantService)
);

export declare namespace Response {
    type Raw = serializers.config.RestaurantService.Raw[];
}