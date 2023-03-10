/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const Menu: core.serialization.ObjectSchema<serializers.config.Menu.Raw, HotschedulesToast.config.Menu> =
    core.serialization
        .object({
            name: core.serialization.string().optional(),
            orderableOnline: core.serialization.string().optional(),
            visibility: core.serialization
                .lazy(async () => (await import("../../../../..")).config.MenuDisplay)
                .optional(),
            groups: core.serialization
                .list(
                    core.serialization.lazyObject(async () => (await import("../../../../..")).config.ExternalReference)
                )
                .optional(),
            images: core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../../../..")).config.Image))
                .optional(),
            unitOfMeasure: core.serialization
                .lazy(async () => (await import("../../../../..")).config.PriceUnit)
                .optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).config.ExternalReference));

export declare namespace Menu {
    interface Raw extends serializers.config.ExternalReference.Raw {
        name?: string | null;
        orderableOnline?: string | null;
        visibility?: serializers.config.MenuDisplay.Raw | null;
        groups?: serializers.config.ExternalReference.Raw[] | null;
        images?: serializers.config.Image.Raw[] | null;
        unitOfMeasure?: serializers.config.PriceUnit.Raw | null;
    }
}
