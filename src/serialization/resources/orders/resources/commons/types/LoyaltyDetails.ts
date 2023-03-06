/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const LoyaltyDetails: core.serialization.ObjectSchema<
    serializers.orders.LoyaltyDetails.Raw,
    HotschedulesToast.orders.LoyaltyDetails
> = core.serialization.object({
    vendor: core.serialization.lazy(async () => (await import("../../../../..")).orders.VendorType),
    referenceId: core.serialization.string(),
});

export declare namespace LoyaltyDetails {
    interface Raw {
        vendor: serializers.orders.VendorType.Raw;
        referenceId: string;
    }
}