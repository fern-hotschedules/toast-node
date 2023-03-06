/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const DiscountSelection: core.serialization.Schema<
    serializers.config.DiscountSelection.Raw,
    HotschedulesToast.config.DiscountSelection
> = core.serialization.enum_(["CHECK", "ITEM", "BOGO"]);

export declare namespace DiscountSelection {
    type Raw = "CHECK" | "ITEM" | "BOGO";
}
