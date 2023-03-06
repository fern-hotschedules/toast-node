/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const TaxRateType: core.serialization.Schema<
    serializers.orders.TaxRateType.Raw,
    HotschedulesToast.orders.TaxRateType
> = core.serialization.enum_(["PERCENT", "FIXED", "NONE", "TABLE", "EXTERNAL"]);

export declare namespace TaxRateType {
    type Raw = "PERCENT" | "FIXED" | "NONE" | "TABLE" | "EXTERNAL";
}