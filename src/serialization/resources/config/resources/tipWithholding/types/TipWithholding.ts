/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const TipWithholding: core.serialization.ObjectSchema<
    serializers.config.TipWithholding.Raw,
    HotschedulesToast.config.TipWithholding
> = core.serialization
    .object({
        enabled: core.serialization.boolean().optional(),
        percentage: core.serialization.number().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).config.ToastReference));

export declare namespace TipWithholding {
    interface Raw extends serializers.config.ToastReference.Raw {
        enabled?: boolean | null;
        percentage?: number | null;
    }
}