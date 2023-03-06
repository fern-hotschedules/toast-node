/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.config.noSaleReasons.getAll.Response.Raw,
    HotschedulesToast.config.NoSaleReason[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../../../..")).config.NoSaleReason)
);

export declare namespace Response {
    type Raw = serializers.config.NoSaleReason.Raw[];
}
