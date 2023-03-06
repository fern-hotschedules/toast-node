/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const ServiceArea: core.serialization.ObjectSchema<
    serializers.config.ServiceArea.Raw,
    HotschedulesToast.config.ServiceArea
> = core.serialization
    .object({
        name: core.serialization.string().optional(),
        revenueCenter: core.serialization
            .lazyObject(async () => (await import("../../../../..")).config.ExternalReference)
            .optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).config.ToastReference));

export declare namespace ServiceArea {
    interface Raw extends serializers.config.ToastReference.Raw {
        name?: string | null;
        revenueCenter?: serializers.config.ExternalReference.Raw | null;
    }
}