/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../../../core";

export const SelectionType: core.serialization.Schema<
    serializers.orders.SelectionType.Raw,
    HotschedulesToast.orders.SelectionType
> = core.serialization.enum_(["NONE", "OPEN_ITEM", "SPECIAL_REQUEST", "PORTION", "HOUSE_ACCOUNT_PAY_BALANCE"]);

export declare namespace SelectionType {
    type Raw = "NONE" | "OPEN_ITEM" | "SPECIAL_REQUEST" | "PORTION" | "HOUSE_ACCOUNT_PAY_BALANCE";
}
