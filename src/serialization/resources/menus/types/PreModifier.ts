/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../core";

export const PreModifier: core.serialization.ObjectSchema<
    serializers.menus.PreModifier.Raw,
    HotschedulesToast.menus.PreModifier
> = core.serialization.object({
    name: core.serialization.string().optional(),
    guid: core.serialization.string().optional(),
    fixedPrice: core.serialization.number().optional(),
    multiplicationFactor: core.serialization.number().optional(),
    displayMode: core.serialization.lazy(async () => (await import("../../..")).menus.PreModifierDisplay).optional(),
});

export declare namespace PreModifier {
    interface Raw {
        name?: string | null;
        guid?: string | null;
        fixedPrice?: number | null;
        multiplicationFactor?: number | null;
        displayMode?: serializers.menus.PreModifierDisplay.Raw | null;
    }
}