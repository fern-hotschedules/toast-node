/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../core";

export const ContentAdvisories: core.serialization.ObjectSchema<
    serializers.menus.ContentAdvisories.Raw,
    HotschedulesToast.menus.ContentAdvisories
> = core.serialization.object({
    alcohol: core.serialization.lazyObject(async () => (await import("../../..")).menus.Alcohol).optional(),
});

export declare namespace ContentAdvisories {
    interface Raw {
        alcohol?: serializers.menus.Alcohol.Raw | null;
    }
}
