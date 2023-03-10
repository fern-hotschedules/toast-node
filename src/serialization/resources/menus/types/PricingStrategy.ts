/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../core";

export const PricingStrategy: core.serialization.Schema<
    serializers.menus.PricingStrategy.Raw,
    HotschedulesToast.menus.PricingStrategy
> = core.serialization.enum_(["BASE_PRICE", "MENU_SPECIFIC_PRICE", "TIME_SPECIFIC_PRICE", "SIZE_PRICE", "OPEN_PRICE"]);

export declare namespace PricingStrategy {
    type Raw = "BASE_PRICE" | "MENU_SPECIFIC_PRICE" | "TIME_SPECIFIC_PRICE" | "SIZE_PRICE" | "OPEN_PRICE";
}
