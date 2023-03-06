/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../core";

export const ItemTag: core.serialization.ObjectSchema<serializers.menus.ItemTag.Raw, HotschedulesToast.menus.ItemTag> =
    core.serialization.object({
        name: core.serialization.string().optional(),
        guid: core.serialization.string().optional(),
    });

export declare namespace ItemTag {
    interface Raw {
        name?: string | null;
        guid?: string | null;
    }
}
