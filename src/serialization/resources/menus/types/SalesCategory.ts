/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../core";

export const SalesCategory: core.serialization.ObjectSchema<
    serializers.menus.SalesCategory.Raw,
    HotschedulesToast.menus.SalesCategory
> = core.serialization.object({
    name: core.serialization.string().optional(),
    guid: core.serialization.string().optional(),
});

export declare namespace SalesCategory {
    interface Raw {
        name?: string | null;
        guid?: string | null;
    }
}
