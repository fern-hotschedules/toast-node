/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../core";

export const Restaurant: core.serialization.ObjectSchema<
    serializers.menus.Restaurant.Raw,
    HotschedulesToast.menus.Restaurant
> = core.serialization.object({
    restaurantGuid: core.serialization.string().optional(),
    lastUpdated: core.serialization.string().optional(),
    restaurantTimeZone: core.serialization.string().optional(),
    menus: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).menus.Menu))
        .optional(),
    modifierGroupReferences: core.serialization
        .record(
            core.serialization.string(),
            core.serialization.lazyObject(async () => (await import("../../..")).menus.ModifierGroup).optional()
        )
        .optional(),
    modifierOptionReferences: core.serialization
        .record(
            core.serialization.string(),
            core.serialization.lazyObject(async () => (await import("../../..")).menus.ModifierOption).optional()
        )
        .optional(),
    preModifierGroupReferences: core.serialization
        .record(
            core.serialization.string(),
            core.serialization.lazyObject(async () => (await import("../../..")).menus.PreModifierGroup).optional()
        )
        .optional(),
});

export declare namespace Restaurant {
    interface Raw {
        restaurantGuid?: string | null;
        lastUpdated?: string | null;
        restaurantTimeZone?: string | null;
        menus?: serializers.menus.Menu.Raw[] | null;
        modifierGroupReferences?: Record<string, serializers.menus.ModifierGroup.Raw | null | undefined> | null;
        modifierOptionReferences?: Record<string, serializers.menus.ModifierOption.Raw | null | undefined> | null;
        preModifierGroupReferences?: Record<string, serializers.menus.PreModifierGroup.Raw | null | undefined> | null;
    }
}
