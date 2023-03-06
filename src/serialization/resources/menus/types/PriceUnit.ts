/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../core";

export const PriceUnit: core.serialization.Schema<serializers.menus.PriceUnit.Raw, HotschedulesToast.menus.PriceUnit> =
    core.serialization.enum_(["NONE", "LB", "OZ", "KG", "G"]);

export declare namespace PriceUnit {
    type Raw = "NONE" | "LB" | "OZ" | "KG" | "G";
}
