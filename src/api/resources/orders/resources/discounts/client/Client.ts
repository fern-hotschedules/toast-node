/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { HotschedulesToast } from "@fern-api/toast";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Discounts {
    interface Options {
        environment?: environments.HotschedulesToastEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Discounts {
    constructor(private readonly options: Discounts.Options) {}

    /**
     * Adds one or more check-level discounts to a check in an existing order. Include an array of `Discount` objects in the message body. For more information, see  <a href="https://doc.toasttab.com/doc/devguide/apiDiscountingOrders.html#apiAddingDiscountsToChecks"> the _Toast Developer Guide_</a>.
     *
     */
    public async createCheckLevelDiscount(
        orderGuid: string,
        checkGuid: string,
        request: string
    ): Promise<HotschedulesToast.orders.Order> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `orders/${orderGuid}/checks/${checkGuid}/appliedDiscounts`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.orders.discounts.createCheckLevelDiscount.Request.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.orders.Order.parseOrThrow(_response.body as serializers.orders.Order.Raw, {
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
     * Adds one or more item-level discounts to menu item selections in a check in an existing order. Include an array of `Discount` objects in the message body. For more information, see <a href="https://doc.toasttab.com/doc/devguide/apiDiscountingOrders.html#apiAddingDiscountsToChecks"> the _Toast Developer Guide_</a>.
     *
     */
    public async createItemLevelDiscount(
        orderGuid: string,
        checkGuid: string,
        selectionGuid: string,
        request: string
    ): Promise<HotschedulesToast.orders.Order> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `orders/${orderGuid}/checks/${checkGuid}/selections/${selectionGuid}/appliedDiscounts`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.orders.discounts.createItemLevelDiscount.Request.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.orders.Order.parseOrThrow(_response.body as serializers.orders.Order.Raw, {
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
     * Returns an array of `ApplicableDiscount`
     * objects that contain information about the discounts that apply
     * to the checks and menu item selections in an order.
     * Each `ApplicableDiscount` object contains information that you can
     * use to determine which items and checks are eligible for the
     * discount.
     * If you include a `promoCode` value in the
     * `ApplicableDiscount` object, the `applicableDiscounts` endpoint
     * returns the only the discounts that are associated with that
     * promotional code.
     *
     */
    public async get(
        request: HotschedulesToast.orders.GetApplicableDiscountsRequest
    ): Promise<HotschedulesToast.orders.ApplicableDiscount[]> {
        const { toastRestaurantExternalId, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                "applicableDiscounts"
            ),
            method: "POST",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.orders.ApplicableDiscountsRequest.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return await serializers.orders.discounts.get.Response.parseOrThrow(
                _response.body as serializers.orders.discounts.get.Response.Raw,
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
