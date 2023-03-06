/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const ServiceChargeType: core.serialization.Schema<
    serializers.orders.ServiceChargeType.Raw,
    HotschedulesToast.orders.ServiceChargeType
> = core.serialization.enum_(["FIXED", "PERCENT", "OPEN"]);

export declare namespace ServiceChargeType {
    type Raw = "FIXED" | "PERCENT" | "OPEN";
}
