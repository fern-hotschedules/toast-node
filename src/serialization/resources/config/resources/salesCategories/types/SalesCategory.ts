/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const SalesCategory: core.serialization.ObjectSchema<
    serializers.config.SalesCategory.Raw,
    HotschedulesToast.config.SalesCategory
> = core.serialization
    .object({
        name: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).config.ToastReference));

export declare namespace SalesCategory {
    interface Raw extends serializers.config.ToastReference.Raw {
        name?: string | null;
    }
}
