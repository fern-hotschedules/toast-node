/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const PricingFeaturesType: core.serialization.Schema<
    serializers.orders.PricingFeaturesType.Raw,
    HotschedulesToast.orders.PricingFeaturesType
> = core.serialization.enum_(["TAXESV2", "TAXESV3"]);

export declare namespace PricingFeaturesType {
    type Raw = "TAXESV2" | "TAXESV3";
}
