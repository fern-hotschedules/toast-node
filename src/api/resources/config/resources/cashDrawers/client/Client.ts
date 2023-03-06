/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { HotschedulesToast } from "@fern-api/toast";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace CashDrawers {
    interface Options {
        environment?: environments.HotschedulesToastEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class CashDrawers {
    constructor(private readonly options: CashDrawers.Options) {}

    /**
     * Returns a `CashDrawer`
     * object containing information about a specific cash drawer
     * device.
     *
     */
    public async get(
        guid: string,
        request: HotschedulesToast.config.CashDrawerRequest
    ): Promise<HotschedulesToast.config.CashDrawer> {
        const { toastRestaurantExternalId } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `/cashDrawers/${guid}`
            ),
            method: "GET",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.config.CashDrawer.parseOrThrow(
                _response.body as serializers.config.CashDrawer.Raw,
                { allowUnknownKeys: true }
            );
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
     * Returns an array of `CashDrawer` objects
     * containing information about the cash drawer devices for the
     * restaurant. If a `lastModified` date is specified, returns all
     * objects that were created or modified after that date.
     *
     */
    public async getAll(
        request: HotschedulesToast.config.CashDrawersRequest
    ): Promise<HotschedulesToast.config.CashDrawer[]> {
        const { pageToken, pageSize, page, lastModified, toastRestaurantExternalId } = request;
        const _queryParams = new URLSearchParams();
        if (pageToken != null) {
            _queryParams.append("pageToken", pageToken);
        }

        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (lastModified != null) {
            _queryParams.append("lastModified", lastModified);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                "/cashDrawers"
            ),
            method: "GET",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.config.cashDrawers.getAll.Response.parseOrThrow(
                _response.body as serializers.config.cashDrawers.getAll.Response.Raw,
                { allowUnknownKeys: true }
            );
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