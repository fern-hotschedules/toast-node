/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { HotschedulesToast } from "@fern-api/toast";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace DiningOptions {
    interface Options {
        environment?: environments.HotschedulesToastEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class DiningOptions {
    constructor(private readonly options: DiningOptions.Options) {}

    /**
     * Returns a `DiningOption` object
     * containing information about a type of service offered by a
     * restaurant. For example, dine in, take out, and delivery might
     * be dining options for a restaurant.
     *
     */
    public async get(
        guid: string,
        request: HotschedulesToast.config.DiningOptionRequest
    ): Promise<HotschedulesToast.config.DiningOption> {
        const { toastRestaurantExternalId } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `/diningOptions/${guid}`
            ),
            method: "GET",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.config.DiningOption.parseOrThrow(
                _response.body as serializers.config.DiningOption.Raw,
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
     * Returns an array of `DiningOption` objects
     * containing information about types of service offered by a
     * restaurant. For example, dine in, take out, and delivery might
     * be dining options for a restaurant. If a `lastModified` date is
     * specified, returns all objects that were created or modified
     * after that date.
     *
     */
    public async getAll(
        request: HotschedulesToast.config.DiningOptionsRequest
    ): Promise<HotschedulesToast.config.DiningOption[]> {
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
                "/diningOptions"
            ),
            method: "GET",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.config.diningOptions.getAll.Response.parseOrThrow(
                _response.body as serializers.config.diningOptions.getAll.Response.Raw,
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
