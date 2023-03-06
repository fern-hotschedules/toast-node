/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../core";

export const MenuGroup: core.serialization.ObjectSchema<
    serializers.menus.MenuGroup.Raw,
    HotschedulesToast.menus.MenuGroup
> = core.serialization.object({
    name: core.serialization.string().optional(),
    guid: core.serialization.string().optional(),
    multiLocationId: core.serialization.string().optional(),
    masterId: core.serialization.number().optional(),
    description: core.serialization.string().optional(),
    image: core.serialization.string().optional(),
    visibility: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).menus.MenuEntityVisibility))
        .optional(),
    itemTags: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).menus.ItemTag))
        .optional(),
    menuGroups: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).menus.MenuGroup))
        .optional(),
    menuItems: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).menus.MenuItem))
        .optional(),
});

export declare namespace MenuGroup {
    interface Raw {
        name?: string | null;
        guid?: string | null;
        multiLocationId?: string | null;
        masterId?: number | null;
        description?: string | null;
        image?: string | null;
        visibility?: serializers.menus.MenuEntityVisibility.Raw[] | null;
        itemTags?: serializers.menus.ItemTag.Raw[] | null;
        menuGroups?: serializers.menus.MenuGroup.Raw[] | null;
        menuItems?: serializers.menus.MenuItem.Raw[] | null;
    }
}
