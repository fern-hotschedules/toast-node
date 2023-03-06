/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * A multi-use object that defines the pricing rules for modifier options that belong to a modifier group that uses the Size Price, Sequence Price, or Size/Sequence Price pricing strategy. The contents of this object depend on the pricing strategy that is in effect.
 *
 */
export interface SizeSequencePricingRule {
    /**
     * A string that represents the size of a modifier option in this modifier group, for example, Small, Medium, or Large. With Size Price and the Size/Sequence Price pricing strategies, the price of a modifier option changes based on the size of the menu item it is applied to, for example, a topping costs $1 on a small pizza and $2 on a large pizza. To determine which size and size-based price to use for a modifier option, the Toast POS system matches the size name of the modifier option to the size name of the menu item. For example, the Small size of a modifier option would match the Small size of a menu item. The `sizeName` value of the `SizeSequencePricingRule` object represents the modifier option size while the `sizeGuid` value represents the matching menu item size. The Toast POS system does allow a configuration where the size of the modifier option is specified independently from the size of the menu item it applies to. In this scenario, you could order a Large menu item and apply a Small size of the modifier option to it. This configuration is unusual but the menus API supports it. When this configuration is in use, the `sizeName` value is populated with the modifier option size but the `sizeGuid` value that represents the menu item size will be null because there is no matching menu item size. The `sizeName` value is null if the modifier group uses the Sequence Price pricing strategy because this strategy does not use sizes. See the <a href="https://doc.toasttab.com/doc/platformguide/adminPricingStrategiesOverview.html">Pricing strategies</a> section in the Toast Platform Guide for information on the Size Price, Sequence Price, and Size/Sequence Price pricing strategies.
     *
     */
    sizeName?: string;
    /**
     * The GUID of the modifier option where a menu item size has been defined that matches the `sizeName` value. For example, if a menu item has Small and Large sizes, those sizes are represented in a Size modifier group with a Small modifier option and a Large modifier option. It is the GUID of one of those size modifier options that appears in this value. If the `sizeName` value is Small, then the `sizeGuid` value would contain the Small modifier option’s GUID. With Size Price and the Size/Sequence Price pricing strategies, the price of a modifier option changes based on the size of the menu item it is applied to, for example, a topping costs $1 on a small pizza and $2 on a large pizza. To determine which size and size-based price to use for a modifier option, the Toast POS system matches the size name of the modifier option to the size name of the menu item. For example, the Small size of a modifier option would match the Small size of a menu item. The `sizeName` value represents the modifier option size while the `sizeGuid` value represents the matching menu item size. The Toast POS system does allow a configuration where the size of the modifier option is specified independently from the size of the menu item it applies to. In this scenario, you could order a Large menu item and apply a Small size of the modifier option to it. This configuration is unusual but the menus API supports it. When this configuration is in use, the `sizeName` value is populated with the modifier option size but there is no corresponding `sizeGuid` for the menu item size. The `sizeGuid` value is null if the modifier group uses the Sequence Price pricing strategy because this strategy does not use sizes. See the <a href="https://doc.toasttab.com/doc/platformguide/adminPricingStrategiesOverview.html">Pricing strategies</a> section in the Toast Platform Guide for information on the Size Price, Sequence Price, and Size/Sequence Price pricing strategies.
     *
     */
    sizeGuid?: string;
    /**
     * An array of `SequencePrices` objects that define the size, sequence, or size/sequence prices for the modifier options in this modifier group. Because they are multi use objects, the `SequencePrices` objects always contain `sequence` and `price` values for all three pricing strategies. However, the `sequence` is always 1 for the Size Price pricing strategy because only one price is defined per size for that strategy. For example, the `sequencePrices` value for a modifier group priced using the Size Price pricing strategy looks similar to the following: ``` "sizeSequencePricingRules": [
     *       {
     *         "sizeName": "Small",
     *         "sizeGuid": "e02d1a57-5f9f-4800-a8c3-a5fe1a0b029b",
     *         "sequencePrices": [
     *           {
     *             "sequence": 1,
     *             "price": 2
     *           }
     *         ]
     *       },
     *       {
     *         "sizeName": "Large",
     *         "sizeGuid": "0e206b2d-72ab-46d1-b273-a5425cbef9a5",
     *         "sequencePrices": [
     *           {
     *             "sequence": 1,
     *             "price": 4
     *           }
     *         ]
     *       }
     *     ]
     * ```              The modifier options in this group cost $2.00 for the Small size and $4.00 for the Large size. The `sequencePrices` value for a modifier group priced using the Sequence Price pricing strategy looks like this: ``` "sizeSequencePricingRules": [
     *       {
     *         "sizeName": null,
     *         "sizeGuid": null,
     *         "sequencePrices": [
     *           {
     *             "sequence": 1,
     *             "price": 1
     *           },
     *           {
     *             "sequence": 2,
     *             "price": 2
     *           },
     *           {
     *             "sequence": 3,
     *             "price": 2.5
     *           }
     *         ]
     *       }
     *     ]
     * ``` The first modifier option in this group costs $1.00, the second modifier option costs $2.00, and any additional modifier options from this group costs $2.50. The `sequencePrices` value for a modifier group using the Size/Sequence Price pricing strategy looks like this: ``` "sizeSequencePricingRules": [
     *       {
     *         "sizeName": "Small",
     *         "sizeGuid": "e02d1a57-5f9f-4800-a8c3-a5fe1a0b029b",
     *         "sequencePrices": [
     *           {
     *             "sequence": 1,
     *             "price": 1
     *           },
     *           {
     *             "sequence": 2,
     *             "price": 2
     *           }
     *         ]
     *       },
     *       {
     *         "sizeName": "Large",
     *         "sizeGuid": "0e206b2d-72ab-46d1-b273-a5425cbef9a5",
     *         "sequencePrices": [
     *           {
     *             "sequence": 1,
     *             "price": 3
     *           },
     *           {
     *             "sequence": 2,
     *             "price": 4
     *           }
     *         ]
     *       }
     *     ]
     * ``` The first modifier option on a Small menu item costs $1.00 and additional modifier options on a Small cost $2.00, while the first modifier option on a Large menu item costs $3.00 and additional modifier options on a Large cost $4.00.
     *
     */
    sequencePrices?: HotschedulesToast.menus.SequencePrice[];
}