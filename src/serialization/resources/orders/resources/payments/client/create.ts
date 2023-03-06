/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const Request: core.serialization.Schema<
    serializers.orders.payments.create.Request.Raw,
    HotschedulesToast.orders.Payment[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../../../..")).orders.Payment));

export declare namespace Request {
    type Raw = serializers.orders.Payment.Raw[];
}