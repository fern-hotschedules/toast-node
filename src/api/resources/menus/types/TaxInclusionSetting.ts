/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A string that represents the tax inclusion setting for this menu item. Possible values include: * `TAXINCLUDED`: The menu item's price includes taxes. You should not display additional tax on top of the menu item price in your ordering UI. * `TAX_NOTINCLUDED`: The menu item's price does not include taxes. You should display tax values alongside the menu item price in your ordering UI. * `SMART_TAX`: The menu item is using smart tax, a feature that allows a restaurant to configure menu item prices to include or not include taxes, depending on the section of the restaurant that the item is ordered in (for example, the bar or the dining room). For example, a guest can order an item at either the bar or in the main dining room. To prevent bartenders from having to handle coins, which can slow down service, and to make tipping easier, the restaurant wants the price of the item to be a whole number that includes tax when it is ordered at the bar. In the main dining room, where speed of service is less of a concern, the restaurant doesn't want the item's price to include tax, so that it doesn't lose out on the extra revenue. Typically, the smart tax setting is used for in-store workflows where the efficiency of money handling is a priority. As such, it doesn't apply to online ordering integrations. If a menu item's `taxInclusion` value is set to `SMART_TAX`, your ordering integration should treat the menu item as if tax is not included. For more information on the smart tax feature, see <a href="https://doc.toasttab.com/doc/platformguide/adminSmartTax.html">Smart tax</a> in the Toast Platform Guide. _Note:_ A menu item's tax inclusion setting is inherited by any modifiers that are applied to that menu item. For more information, see <a href="https://doc.toasttab.com/doc/platformguide/adminTaxesOnModifiers.html#adminModifierTaxInteraction">Tax functionality interaction</a> in the Toast Platform Guide.
 *
 */
export type TaxInclusionSetting = "TAXINCLUDED" | "TAX_NOTINCLUDED" | "SMART_TAX";

export const TaxInclusionSetting = {
    Taxincluded: "TAXINCLUDED",
    TaxNotincluded: "TAX_NOTINCLUDED",
    SmartTax: "SMART_TAX",
} as const;