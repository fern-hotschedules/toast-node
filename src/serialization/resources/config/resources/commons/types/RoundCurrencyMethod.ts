/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const RoundCurrencyMethod: core.serialization.Schema<
    serializers.config.RoundCurrencyMethod.Raw,
    HotschedulesToast.config.RoundCurrencyMethod
> = core.serialization.enum_(["HALF_UP", "HALF_EVEN", "ALWAYS_UP", "ALWAYS_DOWN"]);

export declare namespace RoundCurrencyMethod {
    type Raw = "HALF_UP" | "HALF_EVEN" | "ALWAYS_UP" | "ALWAYS_DOWN";
}
