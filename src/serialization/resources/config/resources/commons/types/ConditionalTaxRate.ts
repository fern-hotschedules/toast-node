/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const ConditionalTaxRate: core.serialization.ObjectSchema<
    serializers.config.ConditionalTaxRate.Raw,
    HotschedulesToast.config.ConditionalTaxRate
> = core.serialization.object({
    condition: core.serialization.string().optional(),
    rate: core.serialization.number().optional(),
});

export declare namespace ConditionalTaxRate {
    interface Raw {
        condition?: string | null;
        rate?: number | null;
    }
}