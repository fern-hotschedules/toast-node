/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const TaxRateType: core.serialization.Schema<
    serializers.config.TaxRateType.Raw,
    HotschedulesToast.config.TaxRateType
> = core.serialization.enum_(["PERCENT", "FIXED", "TABLE", "NONE", "EXTERNAL"]);

export declare namespace TaxRateType {
    type Raw = "PERCENT" | "FIXED" | "TABLE" | "NONE" | "EXTERNAL";
}
