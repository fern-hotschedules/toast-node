/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { AlternatePaymentTypes } from "../resources/alternatePaymentTypes/client/Client";
import { BreakTypes } from "../resources/breakTypes/client/Client";
import { CashDrawers } from "../resources/cashDrawers/client/Client";
import { DiningOptions } from "../resources/diningOptions/client/Client";
import { Discounts } from "../resources/discounts/client/Client";
import { MenuGroups } from "../resources/menuGroups/client/Client";
import { MenuItems } from "../resources/menuItems/client/Client";
import { Menus } from "../resources/menus/client/Client";
import { ModifierGroups } from "../resources/modifierGroups/client/Client";
import { NoSaleReasons } from "../resources/noSaleReasons/client/Client";
import { PayoutReasons } from "../resources/payoutReasons/client/Client";
import { PreModifierGroups } from "../resources/preModifierGroups/client/Client";
import { PreModifiers } from "../resources/preModifiers/client/Client";
import { PriceGroups } from "../resources/priceGroups/client/Client";
import { Printers } from "../resources/printers/client/Client";
import { RestaurantServices } from "../resources/restaurantServices/client/Client";
import { RevenueCenters } from "../resources/revenueCenters/client/Client";
import { SalesCategories } from "../resources/salesCategories/client/Client";
import { ServiceAreas } from "../resources/serviceAreas/client/Client";
import { ServiceCharges } from "../resources/serviceCharges/client/Client";
import { Tables } from "../resources/tables/client/Client";
import { TaxRates } from "../resources/taxRates/client/Client";
import { TipWithholding } from "../resources/tipWithholding/client/Client";
import { VoidReasons } from "../resources/voidReasons/client/Client";

export declare namespace Config {
    interface Options {
        environment?: environments.HotschedulesToastEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Config {
    constructor(private readonly options: Config.Options) {}

    private _alternatePaymentTypes: AlternatePaymentTypes | undefined;

    public get alternatePaymentTypes(): AlternatePaymentTypes {
        return (this._alternatePaymentTypes ??= new AlternatePaymentTypes(this.options));
    }

    private _breakTypes: BreakTypes | undefined;

    public get breakTypes(): BreakTypes {
        return (this._breakTypes ??= new BreakTypes(this.options));
    }

    private _cashDrawers: CashDrawers | undefined;

    public get cashDrawers(): CashDrawers {
        return (this._cashDrawers ??= new CashDrawers(this.options));
    }

    private _diningOptions: DiningOptions | undefined;

    public get diningOptions(): DiningOptions {
        return (this._diningOptions ??= new DiningOptions(this.options));
    }

    private _discounts: Discounts | undefined;

    public get discounts(): Discounts {
        return (this._discounts ??= new Discounts(this.options));
    }

    private _menuGroups: MenuGroups | undefined;

    public get menuGroups(): MenuGroups {
        return (this._menuGroups ??= new MenuGroups(this.options));
    }

    private _menuItems: MenuItems | undefined;

    public get menuItems(): MenuItems {
        return (this._menuItems ??= new MenuItems(this.options));
    }

    private _menus: Menus | undefined;

    public get menus(): Menus {
        return (this._menus ??= new Menus(this.options));
    }

    private _modifierGroups: ModifierGroups | undefined;

    public get modifierGroups(): ModifierGroups {
        return (this._modifierGroups ??= new ModifierGroups(this.options));
    }

    private _noSaleReasons: NoSaleReasons | undefined;

    public get noSaleReasons(): NoSaleReasons {
        return (this._noSaleReasons ??= new NoSaleReasons(this.options));
    }

    private _payoutReasons: PayoutReasons | undefined;

    public get payoutReasons(): PayoutReasons {
        return (this._payoutReasons ??= new PayoutReasons(this.options));
    }

    private _preModifierGroups: PreModifierGroups | undefined;

    public get preModifierGroups(): PreModifierGroups {
        return (this._preModifierGroups ??= new PreModifierGroups(this.options));
    }

    private _preModifiers: PreModifiers | undefined;

    public get preModifiers(): PreModifiers {
        return (this._preModifiers ??= new PreModifiers(this.options));
    }

    private _priceGroups: PriceGroups | undefined;

    public get priceGroups(): PriceGroups {
        return (this._priceGroups ??= new PriceGroups(this.options));
    }

    private _printers: Printers | undefined;

    public get printers(): Printers {
        return (this._printers ??= new Printers(this.options));
    }

    private _restaurantServices: RestaurantServices | undefined;

    public get restaurantServices(): RestaurantServices {
        return (this._restaurantServices ??= new RestaurantServices(this.options));
    }

    private _revenueCenters: RevenueCenters | undefined;

    public get revenueCenters(): RevenueCenters {
        return (this._revenueCenters ??= new RevenueCenters(this.options));
    }

    private _salesCategories: SalesCategories | undefined;

    public get salesCategories(): SalesCategories {
        return (this._salesCategories ??= new SalesCategories(this.options));
    }

    private _serviceAreas: ServiceAreas | undefined;

    public get serviceAreas(): ServiceAreas {
        return (this._serviceAreas ??= new ServiceAreas(this.options));
    }

    private _serviceCharges: ServiceCharges | undefined;

    public get serviceCharges(): ServiceCharges {
        return (this._serviceCharges ??= new ServiceCharges(this.options));
    }

    private _tables: Tables | undefined;

    public get tables(): Tables {
        return (this._tables ??= new Tables(this.options));
    }

    private _taxRates: TaxRates | undefined;

    public get taxRates(): TaxRates {
        return (this._taxRates ??= new TaxRates(this.options));
    }

    private _tipWithholding: TipWithholding | undefined;

    public get tipWithholding(): TipWithholding {
        return (this._tipWithholding ??= new TipWithholding(this.options));
    }

    private _voidReasons: VoidReasons | undefined;

    public get voidReasons(): VoidReasons {
        return (this._voidReasons ??= new VoidReasons(this.options));
    }
}
