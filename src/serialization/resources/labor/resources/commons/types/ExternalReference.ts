/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const ExternalReference: core.serialization.ObjectSchema<
    serializers.labor.ExternalReference.Raw,
    HotschedulesToast.labor.ExternalReference
> = core.serialization
    .object({
        externalId: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).labor.ToastReference));

export declare namespace ExternalReference {
    interface Raw extends serializers.labor.ToastReference.Raw {
        externalId?: string | null;
    }
}