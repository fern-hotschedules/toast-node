/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../core";

export const PreModifierDisplay: core.serialization.Schema<
    serializers.menus.PreModifierDisplay.Raw,
    HotschedulesToast.menus.PreModifierDisplay
> = core.serialization.enum_(["PREFIX", "SUFFIX"]);

export declare namespace PreModifierDisplay {
    type Raw = "PREFIX" | "SUFFIX";
}
