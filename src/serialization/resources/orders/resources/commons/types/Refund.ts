/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const Refund: core.serialization.ObjectSchema<serializers.orders.Refund.Raw, HotschedulesToast.orders.Refund> =
    core.serialization.object({
        refundAmount: core.serialization.number().optional(),
        tipRefundAmount: core.serialization.number().optional(),
        refundDate: core.serialization.string().optional(),
        refundBusinessDate: core.serialization.number().optional(),
        refundTransaction: core.serialization
            .lazyObject(async () => (await import("../../../../..")).orders.ToastReference)
            .optional(),
        refundStrategy: core.serialization
            .lazy(async () => (await import("../../../../..")).orders.RefundStrategyType)
            .optional(),
    });

export declare namespace Refund {
    interface Raw {
        refundAmount?: number | null;
        tipRefundAmount?: number | null;
        refundDate?: string | null;
        refundBusinessDate?: number | null;
        refundTransaction?: serializers.orders.ToastReference.Raw | null;
        refundStrategy?: serializers.orders.RefundStrategyType.Raw | null;
    }
}
