/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const MenuGroup: core.serialization.ObjectSchema<
    serializers.config.MenuGroup.Raw,
    HotschedulesToast.config.MenuGroup
> = core.serialization
    .object({
        name: core.serialization.string().optional(),
        menu: core.serialization
            .lazyObject(async () => (await import("../../../../..")).config.ExternalReference)
            .optional(),
        orderableOnline: core.serialization.string().optional(),
        visibility: core.serialization.lazy(async () => (await import("../../../../..")).config.MenuDisplay).optional(),
        parent: core.serialization
            .lazyObject(async () => (await import("../../../../..")).config.ExternalReference)
            .optional(),
        items: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../../..")).config.ExternalReference))
            .optional(),
        subgroups: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../../..")).config.ExternalReference))
            .optional(),
        optionGroups: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../../..")).config.ExternalReference))
            .optional(),
        inheritOptionGroups: core.serialization.boolean().optional(),
        images: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../../..")).config.Image))
            .optional(),
        unitOfMeasure: core.serialization
            .lazy(async () => (await import("../../../../..")).config.PriceUnit)
            .optional(),
        inheritUnitOfMeasure: core.serialization.boolean().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).config.ExternalReference));

export declare namespace MenuGroup {
    interface Raw extends serializers.config.ExternalReference.Raw {
        name?: string | null;
        menu?: serializers.config.ExternalReference.Raw | null;
        orderableOnline?: string | null;
        visibility?: serializers.config.MenuDisplay.Raw | null;
        parent?: serializers.config.ExternalReference.Raw | null;
        items?: serializers.config.ExternalReference.Raw[] | null;
        subgroups?: serializers.config.ExternalReference.Raw[] | null;
        optionGroups?: serializers.config.ExternalReference.Raw[] | null;
        inheritOptionGroups?: boolean | null;
        images?: serializers.config.Image.Raw[] | null;
        unitOfMeasure?: serializers.config.PriceUnit.Raw | null;
        inheritUnitOfMeasure?: boolean | null;
    }
}
