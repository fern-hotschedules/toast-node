/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const AppliedDiscount: core.serialization.ObjectSchema<
    serializers.orders.AppliedDiscount.Raw,
    HotschedulesToast.orders.AppliedDiscount
> = core.serialization
    .object({
        name: core.serialization.string().optional(),
        discountAmount: core.serialization.number().optional(),
        nonTaxDiscountAmount: core.serialization.number().optional(),
        discount: core.serialization
            .lazyObject(async () => (await import("../../../../..")).orders.ToastReference)
            .optional(),
        triggers: core.serialization
            .list(
                core.serialization.lazyObject(
                    async () => (await import("../../../../..")).orders.AppliedDiscountTrigger
                )
            )
            .optional(),
        approver: core.serialization
            .lazyObject(async () => (await import("../../../../..")).orders.ExternalReference)
            .optional(),
        processingState: core.serialization
            .lazy(async () => (await import("../../../../..")).orders.ProcessingStateType)
            .optional(),
        loyaltyDetails: core.serialization
            .lazyObject(async () => (await import("../../../../..")).orders.LoyaltyDetails)
            .optional(),
        comboItems: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../../..")).orders.ExternalReference))
            .optional(),
        appliedPromoCode: core.serialization.string().optional(),
        discountType: core.serialization
            .lazy(async () => (await import("../../../../..")).orders.DiscountBehavior)
            .optional(),
        discountPercent: core.serialization.number().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).orders.ExternalReference));

export declare namespace AppliedDiscount {
    interface Raw extends serializers.orders.ExternalReference.Raw {
        name?: string | null;
        discountAmount?: number | null;
        nonTaxDiscountAmount?: number | null;
        discount?: serializers.orders.ToastReference.Raw | null;
        triggers?: serializers.orders.AppliedDiscountTrigger.Raw[] | null;
        approver?: serializers.orders.ExternalReference.Raw | null;
        processingState?: serializers.orders.ProcessingStateType.Raw | null;
        loyaltyDetails?: serializers.orders.LoyaltyDetails.Raw | null;
        comboItems?: serializers.orders.ExternalReference.Raw[] | null;
        appliedPromoCode?: string | null;
        discountType?: serializers.orders.DiscountBehavior.Raw | null;
        discountPercent?: number | null;
    }
}