/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const PreModifierGroup: core.serialization.ObjectSchema<
    serializers.config.PreModifierGroup.Raw,
    HotschedulesToast.config.PreModifierGroup
> = core.serialization
    .object({
        name: core.serialization.string().optional(),
        isDefault: core.serialization.boolean().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).config.ToastReference));

export declare namespace PreModifierGroup {
    interface Raw extends serializers.config.ToastReference.Raw {
        name?: string | null;
        isDefault?: boolean | null;
    }
}