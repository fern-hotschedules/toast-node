/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { HotschedulesToast } from "@fern-api/toast";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Menus {
    interface Options {
        environment?: environments.HotschedulesToastEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Menus {
    constructor(private readonly options: Menus.Options) {}

    /**
     * Get menus
     *
     */
    public async getAll(request: HotschedulesToast.menus.GetMenusRequest): Promise<HotschedulesToast.menus.Restaurant> {
        const { toastRestaurantExternalId } = request;
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.HotschedulesToastEnvironment.Production, "menus"),
            method: "GET",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.menus.Restaurant.parseOrThrow(_response.body as serializers.menus.Restaurant.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HotschedulesToastError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HotschedulesToastError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HotschedulesToastTimeoutError();
            case "unknown":
                throw new errors.HotschedulesToastError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * A lightweight endpoint that allows you to determine if a restaurant's menu data has been updated. Toast support strongly recommends that you do not make a call to the `/menus` endpoint unless the date and time returned by the `/metadata` endpoint is more recent than the `lastUpdated` date and time. While this recommendation applies to all clients of the menus API, it is particularly important for clients that have limited bandwidth.
     *
     */
    public async getMetaData(
        request: HotschedulesToast.menus.GetMenuLastModifiedTimestampRequest
    ): Promise<HotschedulesToast.menus.Metadata> {
        const { toastRestaurantExternalId } = request;
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.HotschedulesToastEnvironment.Production, "metadata"),
            method: "GET",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.menus.Metadata.parseOrThrow(_response.body as serializers.menus.Metadata.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HotschedulesToastError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HotschedulesToastError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HotschedulesToastTimeoutError();
            case "unknown":
                throw new errors.HotschedulesToastError({
                    message: _response.error.errorMessage,
                });
        }
    }
}