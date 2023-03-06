/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HotschedulesToast } from "@fern-api/toast";
import * as core from "../../../../core";

export const Alcohol: core.serialization.ObjectSchema<serializers.menus.Alcohol.Raw, HotschedulesToast.menus.Alcohol> =
    core.serialization.object({
        containsAlcohol: core.serialization.string().optional(),
    });

export declare namespace Alcohol {
    interface Raw {
        containsAlcohol?: string | null;
    }
}
