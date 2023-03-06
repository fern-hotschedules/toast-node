/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const ToastReference: core.serialization.ObjectSchema<
    serializers.config.ToastReference.Raw,
    HotschedulesToast.config.ToastReference
> = core.serialization.object({
    guid: core.serialization.string(),
    entityType: core.serialization.string(),
});

export declare namespace ToastReference {
    interface Raw {
        guid: string;
        entityType: string;
    }
}
