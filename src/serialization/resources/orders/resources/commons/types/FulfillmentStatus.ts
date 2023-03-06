/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const FulfillmentStatus: core.serialization.Schema<
    serializers.orders.FulfillmentStatus.Raw,
    HotschedulesToast.orders.FulfillmentStatus
> = core.serialization.enum_(["NEW", "HOLD", "SENT", "READY"]);

export declare namespace FulfillmentStatus {
    type Raw = "NEW" | "HOLD" | "SENT" | "READY";
}
