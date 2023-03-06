/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const WageFrequency: core.serialization.Schema<
    serializers.labor.WageFrequency.Raw,
    HotschedulesToast.labor.WageFrequency
> = core.serialization.enum_(["HOURLY", "SALARY"]);

export declare namespace WageFrequency {
    type Raw = "HOURLY" | "SALARY";
}
