/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Config } from "./api/resources/config/client/Client";
import { Labor } from "./api/resources/labor/client/Client";
import { Orders } from "./api/resources/orders/client/Client";
import { Auth } from "./api/resources/auth/client/Client";
import { Menus } from "./api/resources/menus/client/Client";

export declare namespace HotschedulesToastClient {
    interface Options {
        environment?: environments.HotschedulesToastEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class HotschedulesToastClient {
    constructor(private readonly options: HotschedulesToastClient.Options) {}

    private _config: Config | undefined;

    public get config(): Config {
        return (this._config ??= new Config(this.options));
    }

    private _labor: Labor | undefined;

    public get labor(): Labor {
        return (this._labor ??= new Labor(this.options));
    }

    private _orders: Orders | undefined;

    public get orders(): Orders {
        return (this._orders ??= new Orders(this.options));
    }

    private _auth: Auth | undefined;

    public get auth(): Auth {
        return (this._auth ??= new Auth(this.options));
    }

    private _menus: Menus | undefined;

    public get menus(): Menus {
        return (this._menus ??= new Menus(this.options));
    }
}
