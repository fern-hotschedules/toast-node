/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../core";

export const TimeSpecificPrice: core.serialization.ObjectSchema<
    serializers.menus.TimeSpecificPrice.Raw,
    HotschedulesToast.menus.TimeSpecificPrice
> = core.serialization.object({
    timeSpecificPrice: core.serialization.number().optional(),
    basePrice: core.serialization.number().optional(),
    schedule: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).menus.Schedule))
        .optional(),
});

export declare namespace TimeSpecificPrice {
    interface Raw {
        timeSpecificPrice?: number | null;
        basePrice?: number | null;
        schedule?: serializers.menus.Schedule.Raw[] | null;
    }
}