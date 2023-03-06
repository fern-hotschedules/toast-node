/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

export interface MenuGroup extends HotschedulesToast.config.ExternalReference {
    /** The name of the menu group as it appears in the Toast POS. */
    name?: string;
    menu?: HotschedulesToast.config.ExternalReference;
    /**
     * Deprecated. Indicates whether restaurant guests can order from the menu online. Toast is streamlining and improving the set of configuration options that restaurants use for configuring whether a menu entity can be ordered online. As part of this change, the `orderableOnline` value has been deprecated. Before 2020-05-25, you should transition to using the `visibility` array that the menus API returns for each menu entity, instead of this `orderableOnline` value, to determine if the entity should be available for online ordering. See <a href="https://doc.toasttab.com/doc/devguide/apiDeprecatedApiFunctions.html#apiMenuEntityVisibilityEnhancements">Menu entity visibility enhancements (rolled out)</a> for more information.
     *
     */
    orderableOnline?: string;
    /**
     * Deprecated. Indicates where the menu is displayed and who can see it. * ALL: Visible to everyone (servers and customers) * POS_ONLY: Only visible to servers * NONE: Hidden from everyone Toast is streamlining and improving the set of configuration options that restaurants use for configuring where a menu entity is visible (for example, on a Toast POS device or on a restaurant's Toast online ordering website). As part of this change, the `visibility` value in the configuration API has been deprecated. Before 2020-05-25, you should transition to using the `visibility` array that the menus API returns for each menu entity, instead of this `visibility` value, to determine where the entity should be visible. See <a href="https://doc.toasttab.com/doc/devguide/apiDeprecatedApiFunctions.html#apiMenuEntityVisibilityEnhancements">Menu entity visibility enhancements (rolled out)</a> for more information.
     *
     */
    visibility?: HotschedulesToast.config.MenuDisplay;
    parent?: HotschedulesToast.config.ExternalReference;
    /**
     * An array of `ExternalReference` objects containing the
     * identifiers of the `MenuItem`s in the menu
     * group.
     *
     */
    items?: HotschedulesToast.config.ExternalReference[];
    /**
     * An array of `ExternalReference` objects containing the
     * identifiers of the child `MenuGroup`s in
     * the menu group. Empty if the menu group does not include any child
     * menu groups.
     *
     */
    subgroups?: HotschedulesToast.config.ExternalReference[];
    /**
     * An array of `ExternalReference` objects containing the
     * identifiers of the child `MenuOptionGroup`s
     * that contain modifiers applicable to the group, its
     * subgroups and its items. Does not include
     * `MenuOptionGroup`s inherited from its parent `MenuGroup`.
     *
     */
    optionGroups?: HotschedulesToast.config.ExternalReference[];
    /**
     * True if this `MenuGroup` inherits `MenuOptionGroup`s
     * from its parent `MenuGroup`.
     *
     */
    inheritOptionGroups?: boolean;
    /**
     * An array of `Image`
     * objects associated with with the `MenuGroup`.
     *
     */
    images?: HotschedulesToast.config.Image[];
    /**
     * The unit of measure used to determine the price of items in this group. This value is not relevant if `inheritUnitOfMeasure` is true.
     *
     */
    unitOfMeasure?: HotschedulesToast.config.PriceUnit;
    /**
     * True if this `MenuGroup` inherits its unit of measure
     * from its parent `MenuGroup` or (if its parent is null)
     * its parent `Menu`.
     *
     */
    inheritUnitOfMeasure?: boolean;
}
