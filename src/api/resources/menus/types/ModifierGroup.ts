/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * Information about a modifier group configured for this restaurant, including an array of modifier options contained in the group.
 *
 */
export interface ModifierGroup {
    /**
     * A descriptive name for this modifier group, for example, "Pizza Toppings" or "Salad Dressings".
     *
     */
    name?: string;
    /**
     * A unique identifier for this modifier group, assigned by the Toast POS system.
     *
     */
    guid?: string;
    /**
     * An integer identifier that is used to refer to this modifier group by items and portions that use it.
     *
     */
    referenceId?: number;
    /**
     * An identifier that is used to identify and consolidate menu entities that are versions of each other. `multiLocationId` replaces `masterId`. `multiLocationId` and `masterId` always have the same value. Menu entities can be versioned. Those versions can be assigned to specific restaurant locations, or groups of locations, in a management group. For example, you could have two versions of a burger, one for a Boston location and another for a New York City location. Versioned menu entities share the majority of, but not all of, their data. For example, the Boston version is called the Minuteman Burger and has pickles, while the New York City version is called the Empire Burger and does not. You use the `multiLocationId` to identify menu entities that are versions of each other. To continue the example above, the Minuteman Burger in the JSON returned for the Boston location has the same `multilocationId` as the Empire Burger in the JSON returned for the New York City location. These matching `multlocationId` values indicate that the two items are related versions of the same item. In Toast reports, this allows a restaurant to track sales of the burger across both locations. The Toast POS system ensures that once a `multilocationId` value is assigned to a set of versions within a management group, that `multiLocationId` is not used for any other version sets in the same management group. It does not guarantee, however, that the `multiLocationId` is not used by another management group to identify a set of versions within it. For detailed information on the enterprise module and versioning, see <a href="https://doc.toasttab.com/doc/platformguide/sharingMenusAndOtherInformationAmongRestaurants.html">Enterprise module overview</a> in the Toast Platform Guide.
     *
     */
    multiLocationId?: string;
    /**
     * This value is deprecated. Instead of `masterId`, use `multiLocationId`. An identifier that is used to identify and consolidate menu entities that are versions of each other.
     *
     */
    masterId?: number;
    /**
     * An array of strings that indicate where this menu entity is visible: * POS: The menu entity is visible in the Toast POS app.  * KIOSK: The menu entity is visible on a Toast kiosk.  * TOAST_ONLINE_ORDERING: The menu entity is visible in the Toast online
     *   ordering site for this restaurant.
     * * ORDERING_PARTNERS: The restaurants wants this menu entity to be visible
     *   on online ordering sites that integrate with the Toast POS system using the orders API.
     * * GRUBHUB: Deprecated. The menu entity is included during a menu sync to
     *   Grubhub and will be visible on the Grubhub online ordering service after a
     *   menu sync has completed. _Note:_ Conceptually, the _Grubhub_ configuration
     *   option that was associated with the `GRUBHUB` string in this array has
     *   been replaced by the more general _Online orders: Ordering partners_
     *   configuration option and restaurants that used the _Grubhub_ option have
     *   been automatically migrated to the new _Online orders: Ordering partners_
     *   option. This means that any menu entity that had the _Grubhub_ option set
     *   to _Yes_ will now have the _Online orders: Ordering partners_ option
     *   enabled and the `ORDERING_PARTNERS` enum will be present in the
     *   `visibility` array for it. To support backwards compatibility, the
     *   `visibility` array for these entities will also continue to contain the
     *   `GRUBHUB` enum for a short period of time. See <a
     *   href="https://doc.toasttab.com/doc/devguide/apiDeprecatedApiFunctions.html#apiMenuEntityVisibilityEnhancements">Menu
     *   Visibility Enhancements (Rolled Out)</a> for more information.
     * The `visibility` array is empty if the menu entity is not configured to be visible for any of the use cases listed above.
     *
     */
    visibility?: HotschedulesToast.menus.MenuEntityVisibility[];
    /**
     * A string that represents the pricing strategy used for this modifier group. If there is no additional charge for the modifier options in this group, or if the modifier options in the group are priced individually, then the `pricingStrategy` value is NONE. If the modifier group is priced at the group level and is using the:
     *   * Fixed Price pricing strategy, then the `pricingStrategy` value is NONE.
     *   * Sequence Price pricing strategy, then the `pricingStrategy` value is SEQUENCE_PRICE.
     *   * Size Price pricing strategy, then the `pricingStrategy` value is SIZE_PRICE.
     *   * Size/Sequence Price pricing strategy, then the `pricingStrategy` value is SIZE_SEQUENCE_PRICE.
     * If the `pricingStrategy` value is NONE,  then the prices for the modifier options in this group are resolved down to the modifier option level and you can retrieve them from the `price` value of the individual `ModifierOption` objects. If the `pricingStrategy` value is SIZE_PRICE, SEQUENCE_PRICE, or SIZE_SEQUENCE_PRICE, then you must use the rules provided in _this modifier group's_ `pricingRules` value to calculate the prices for the modifier options in the group.
     *
     */
    pricingStrategy?: string;
    /**
     * A `PricingRules` object with information for calculating the prices for the modifier options contained in this modifier group. You use a modifier group's `pricingRules` object, in conjunction with its `pricingStrategy` value, to calculate prices for the group's modifier options when the group uses the Size Price, Sequence Price, or Size/Sequence Price pricing strategy. The `pricingRules` object takes different forms depending on the pricing strategy configured for the modifier group. Use the `pricingStrategy` value to determine which pricing strategy has been used so that you can properly interpret the data in the `pricingRules` object. If the `pricingStrategy` value is NONE, the `pricingRules` object is null because you can retrieve the price from a `ModifierOption` object's `price` value without additional calculation. For the SIZE_PRICE, SEQUENCE_PRICE, and SIZE_SEQUENCE_PRICE pricing strategies, the `pricingRules` object contains additional values that you use to calculate the modifier option prices.
     *
     */
    pricingRules?: HotschedulesToast.menus.PricingRules[];
    /**
     * Indicates whether the prices associated with any default modifiers in this group are added to the cost of the menu items they modify. Values are:
     *   * NO: The default modifier price is ignored. No change is made to the cost of the menu item.
     *   * YES: The default modifier price is added to the menu item price. YES is the default setting for `defaultOptionsChargePrice`.
     * For example, consider a scenario where Cheese is a default modifier for a Burger menu item (this means that Cheese is always included as a modifier option when you order a Burger unless it is explicitly removed). The price of the Cheese modifier option is $1 while the price of the Burger is $8. When `defaultOptionsChargePrice` is set to NO, a Burger costs $8 (the Cheese default modifier price is not added to the Burger price). When `defaultOptionsChargePrice` is set to YES, a Burger costs $9 (the Cheese default modifier price is added to the Burger price). If the Cheese default modifier is removed from the Burger menu item, the price of the Burger remains $8. Removing a default modifier from a menu item does not change the menu item???s price, regardless of the `defaultOptionsChargePrice` setting. The `defaultOptionsChargePrice` value must be set to NO in order to use substitution pricing. See `defaultOptionsSubstitutionPricing` for more information.
     *
     */
    defaultOptionsChargePrice?: string;
    /**
     * Indicates whether substitution pricing is enabled for the modifier group. In the Toast administrator???s back-end, you must set the `defaultOptionsChargePrice` configuration for a modifier group to NO before you can enable substitution pricing for the group. This means that the costs of default modifiers in the group do not increase the price of the menu items they apply to. These default modifiers continue to have a monetary value, however. By enabling substitution pricing, you are configuring the modifier group so that if any of its default modifiers are removed from a menu item, the monetary value of those default modifiers can be applied to the purchase of other modifier options within the same modifier group (even though the cost of those default modifiers was not explicitly added to the cost of the menu item). For example, a guest orders a salad that comes with chicken by default but asks to substitute salmon for the chicken. The price of the chicken option is $7. The price of the salmon option is $9. In this case, the Toast POS system calculates the difference and charges the substitution price of $2 for the salmon (not the regular price of $9). Values for `defaultOptionsSubstitutionPricing` include:
     *   * YES: Substitution pricing is enabled. Substitution pricing allows a guest to remove one or more default modifiers from a menu item and apply the value of those modifiers toward the purchase of one or more other modifier options in the same modifier group.
     *   * NO: Substitution pricing is not enabled. Removing a default modifier from a menu item has no impact on the price of the menu item or on any other modifier options that get added. For example, a guest orders a burger that comes with cheese by default but asks to substitute bacon instead of cheese. The price of the burger is $8. The price of the default cheese modifier is $1 but it is not added to the cost of the burger because `defaultOptionsChargePrice` is set to NO. The price of the bacon modifier option is $3. In this scenario, the customer would pay $11, $8 for the burger and $3 for the bacon. No credit is given for removing the cheese modifier option. `NO` is the default setting for `defaultOptionsSubstitutionPricing`.
     * Removing default modifiers from a menu item never reduces the price of the menu item. If you remove the chicken from a $10 salad that includes chicken by default, the price of the salad remains $10. If you remove the chicken and substitute other modifier options that cost less than the chicken, the price of the salad remains $10. If you remove the chicken and replace it with modifier options that cost more than the chicken, the price increases by the difference in modifier option cost if you have substitution pricing enabled.
     *
     */
    defaultOptionsSubstitutionPricing?: string;
    /**
     * The minimum number of modifier options that a customer can choose from this modifier group. If a server is not required to select a modifier option from this modifier group, `minSelections` is set to 0. If a server must select a modifier option from this modifier group, `minSelections` must be set to 1 or higher. For example, a Temperature modifier group could be set to 1 to require a server to choose a temperature (Rare, Medium Rare, Medium, or Well Done) when placing a steak order. The orders API rejects an order if it does not follow the `minSelections` requirement for a modifier group. The `minSelections` and `maxSelections` values can be used in conjunction with one another. For example, consider the following modifier group configuration: * Modifier Group: Cheese * Modifier Options: ( Cheddar, American, Swiss ) * maxSelections: 2 * minSelections: 1 With this configuration:
     *   * You can select AT MOST two different cheeses from this group to apply to the menu item (the `maxSelections` value).
     *   * You must select AT LEAST one cheese from this group to apply to the menu item (the `minSelections` value).
     *
     */
    minSelections?: number;
    /**
     * The maximum number of modifier options that a customer can choose from this modifier group. `maxSelections` is null if a customer can choose an unlimited number of modifier options from this modifier group. It is 1 if the modifier group is not enabled for multiple selections. The orders API rejects an order if it does not follow the `maxSelections` requirement for a modifier group. The `minSelections` and `maxSelections` values can be used in conjunction with one another. For example, consider the following modifier group configuration: * Modifier Group: Cheese * Modifier Options: ( Cheddar, American, Swiss ) * maxSelections: 2 * minSelections: 1 With this configuration:
     *   * You can select AT MOST two different cheeses from this group to apply to the menu item (the `maxSelections` value).
     *   * You must select AT LEAST one cheese from this group to apply to the menu item (the `minSelections` value).
     *
     */
    maxSelections?: number;
    /**
     * Specifies how the modifier group appears and behaves in the Toast POS app. Values include:
     *   * REQUIRED: Forces a server to make a selection from the modifier group before continuing to the next screen in the Toast POS app. Note that the orders API rejects an order if a modifier option is not included for a modifier group whose `requiredMode` value is set to REQUIRED.
     *   * OPTIONAL FORCE SHOW: Prompts the server to view the modifier group but does not force them to choose a modifier option from it before continuing to the next screen in the Toast POS app. This setting is typically used for upselling.
     *   * OPTIONAL: The modifier group does not appear when an associated menu item is selected but the server can access it on the Toast POS app if necessary.
     *
     */
    requiredMode?: HotschedulesToast.menus.ModifierGroupBehavior;
    /**
     * Indicates whether you can select more than one modifier option from this modifier group. The `isMultiSelect` value provides similar information to the `maxSelections` value in a different format. If `isMultiSelect` is TRUE, then by definition more than one modifier option can be selected from the modifier group, so `maxSelections` must be greater than 1 or null (a null value indicates that an unlimited number of selections can be made from the modifier group). If `isMultiSelect` is FALSE, then only one modifier option may be selected from the modifier group and the Toast POS system enforces a setting of 1 for `maxSelections`. Also, if `isMultiSelect` is FALSE for a modifier group, the Toast POS system enforces a setting of FALSE for the `allowsDuplicates`  value of the group???s modifier options. This prevents more than one instance of a modifier option being selected for the group. Similarly, the orders API rejects any orders that specify more than one modifier option for a modifier group whose `isMultiSelect` value is FALSE.
     *
     */
    isMultiSelect?: boolean;
    /**
     * The `referenceId` of a `PreModifierGroup` object. This object defines the premodifiers that can be applied to the modifier options contained in this modifier group. Premodifiers alter the display of modifier options on receipts and tickets to satisfy guest requests such as EXTRA or ON THE SIDE. Premodifiers can also be configured to modify the cost of the modifier options they are applied to, for example, by charging more for an EXTRA serving of a modifier option.
     *
     */
    preModifierGroupReference?: number;
    /**
     * An array of `referenceId`s for `ModifierOption` objects. These objects define the modifier options contained in this modifier group.
     *
     */
    modifierOptionReferences?: number[];
}
