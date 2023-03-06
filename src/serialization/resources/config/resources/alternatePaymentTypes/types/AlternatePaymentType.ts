/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const AlternatePaymentType: core.serialization.ObjectSchema<
    serializers.config.AlternatePaymentType.Raw,
    HotschedulesToast.config.AlternatePaymentType
> = core.serialization
    .object({
        name: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).config.ExternalReference));

export declare namespace AlternatePaymentType {
    interface Raw extends serializers.config.ExternalReference.Raw {
        name?: string | null;
    }
}
