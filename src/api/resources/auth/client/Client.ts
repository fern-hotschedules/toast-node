/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Authentication } from "../resources/authentication/client/Client";

export declare namespace Auth {
    interface Options {
        environment?: environments.HotschedulesToastEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Auth {
    constructor(private readonly options: Auth.Options) {}

    private _authentication: Authentication | undefined;

    public get authentication(): Authentication {
        return (this._authentication ??= new Authentication(this.options));
    }
}