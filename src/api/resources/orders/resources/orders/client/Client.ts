/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { HotschedulesToast } from "@fern-api/toast";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Orders {
    interface Options {
        environment?: environments.HotschedulesToastEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Orders {
    constructor(private readonly options: Orders.Options) {}

    /**
     * Calculates the check price amounts, tax amounts, and service
     * charges for an `Order` object you supply as a _required message
     * body parameter_.
     * The `prices` endpoint validates the order you
     * submit to ensure all referenced data exists and that you include
     * item selections in the expected structure with all required modifier
     * options.
     * Some values that would be present in the response data when
     * creating an order are not present in the response data for the `prices`
     * endpoint. For example, the order GUID is not set because the
     * Toast platform does not create persistent data for the order.
     * The calculated price can change between requests to the
     * `prices` endpoint with the same `Order` object if enough time
     * passes between the requests. The difference in price is
     * possible because the restaurant configuration can change and
     * because some pricing configuration is based on time and date
     * schedules.
     *
     */
    public async getAllPrices(
        request: HotschedulesToast.orders.GetOrderPricesRequest
    ): Promise<HotschedulesToast.orders.OrderResponse> {
        const { toastRestaurantExternalId, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.HotschedulesToastEnvironment.Production, "prices"),
            method: "POST",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.orders.orders.getAllPrices.Request.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return await serializers.orders.OrderResponse.parseOrThrow(
                _response.body as serializers.orders.OrderResponse.Raw,
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
     * Retrieves detailed information about a single order, specified by its GUID.
     */
    public async get(
        guid: string,
        request: HotschedulesToast.orders.GetAnOrderRequest
    ): Promise<HotschedulesToast.orders.Order> {
        const { toastRestaurantExternalId } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `orders/${guid}`
            ),
            method: "GET",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
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
     * Returns an array of `Order` objects containing detailed
     * information about all of the orders opened during a period of time.
     * You can return the orders for either a specific period of time
     * or for one business day.
     * * Specify both `startDate` and `endDate` to return the orders
     *   modified during that period of time.
     * * Specify the `businessDate` to return the orders promised
     *   during that business day.
     *
     */
    public async getBulkOrders(
        request: HotschedulesToast.orders.GetMultipleOrdersRequest
    ): Promise<HotschedulesToast.orders.Order[]> {
        const { startDate, endDate, businessDate, pageSize, page, toastRestaurantExternalId } = request;
        const _queryParams = new URLSearchParams();
        if (startDate != null) {
            _queryParams.append("startDate", startDate);
        }

        if (endDate != null) {
            _queryParams.append("endDate", endDate);
        }

        if (businessDate != null) {
            _queryParams.append("businessDate", businessDate);
        }

        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                "ordersBulk"
            ),
            method: "GET",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.orders.orders.getBulkOrders.Response.parseOrThrow(
                _response.body as serializers.orders.orders.getBulkOrders.Response.Raw,
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
     * Adds one or more items to an existing check in an order. Include information about the items in an array of `Selection` objects in the message body. Specify the Toast platform GUID of the order and check in REST path parameters. For more information, see  <a href="https://doc.toasttab.com/doc/devguide/apiAddingItemsToACheck.html">the  _Toast Developer Guide_</a>.
     *
     */
    public async addItemToCheck(
        orderGuid: string,
        checkGuid: string,
        request: HotschedulesToast.orders.AddItemsToACheckRequest
    ): Promise<void> {
        const { toastRestaurantExternalId, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `orders/${orderGuid}/checks/${checkGuid}/selections`
            ),
            method: "POST",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.orders.orders.addItemToCheck.Request.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return;
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
     * Updates the delivery information of an order that uses the `DELIVERY` dining option. You can use this endpoint to update the delivery time, dispatch time, the employee who is delivering the order, the delivery state, or a combination of the four. Specify the Toast platform GUID of the order in the `PATCH` path parameters. Returns a JSON `Order` object if successful. For more information, see  <a href="https://doc.toasttab.com/doc/devguide/apiUpdatingDeliveryInfoForAnOrder.html"> the _Toast Developer Guide_</a>.
     *
     */
    public async update(
        orderGuid: string,
        request: HotschedulesToast.orders.UpdateDeliveryInformationRequest
    ): Promise<void> {
        const { toastRestaurantExternalId, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `orders/${orderGuid}/deliveryInfo`
            ),
            method: "PATCH",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.orders.orders.update.Request.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return;
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
     * Returns a list of the GUIDs of all orders opened during a period of
     * time. You can return the list of orders for either a period of up to
     * one hour or for one business day.
     * * Specify both `startDate` and `endDate` to return the list of orders
     *   modified during a period of up to one hour.
     * * Specify the `businessDate` to return the list of orders promised
     *   for delivery during a business day.
     *
     */
    public async getAll(request: HotschedulesToast.orders.GetOrderIdentifiersDeprecatedRequest): Promise<string[]> {
        const { startDate, endDate, businessDate, toastRestaurantExternalId } = request;
        const _queryParams = new URLSearchParams();
        if (startDate != null) {
            _queryParams.append("startDate", startDate);
        }

        if (endDate != null) {
            _queryParams.append("endDate", endDate);
        }

        if (businessDate != null) {
            _queryParams.append("businessDate", businessDate);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.HotschedulesToastEnvironment.Production, "orders"),
            method: "GET",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.orders.orders.getAll.Response.parseOrThrow(
                _response.body as serializers.orders.orders.getAll.Response.Raw,
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
     * Submits an order to the server. Returns a JSON `Order` object if successful.
     */
    public async create(
        request: HotschedulesToast.orders.PostAnOrderRequest
    ): Promise<HotschedulesToast.orders.OrderResponse> {
        const { toastRestaurantExternalId, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.HotschedulesToastEnvironment.Production, "orders"),
            method: "POST",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.orders.Order.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return await serializers.orders.OrderResponse.parseOrThrow(
                _response.body as serializers.orders.OrderResponse.Raw,
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
