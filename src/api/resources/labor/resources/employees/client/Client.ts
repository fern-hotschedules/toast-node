/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { HotschedulesToast } from "@fern-api/toast";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Employees {
    interface Options {
        environment?: environments.HotschedulesToastEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Employees {
    constructor(private readonly options: Employees.Options) {}

    /**
     * Returns an array of `Employee` objects containing information
     * about restaurant employees.
     *
     */
    public async getAll(
        request: HotschedulesToast.labor.EmployeesRequest
    ): Promise<HotschedulesToast.labor.Employee[]> {
        const { employeeIds, toastRestaurantExternalId } = request;
        const _queryParams = new URLSearchParams();
        if (employeeIds != null) {
            _queryParams.append("employeeIds", employeeIds);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                "/employees"
            ),
            method: "GET",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.labor.employees.getAll.Response.parseOrThrow(
                _response.body as serializers.labor.employees.getAll.Response.Raw,
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
     * Creates a restaurant employee record.
     *
     */
    public async create(request: HotschedulesToast.labor.EmployeeRequest): Promise<HotschedulesToast.labor.Employee> {
        const { toastRestaurantExternalId, contentType, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                "/employees"
            ),
            method: "POST",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                "Content-Type": contentType,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.labor.employees.create.Request.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return await serializers.labor.Employee.parseOrThrow(_response.body as serializers.labor.Employee.Raw, {
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
     * Returns an `Employee` object containing information about one
     * restaurant employee.
     *
     */
    public async get(
        employeeId: string,
        request: HotschedulesToast.labor.InformationAboutOneEmployeeRequest
    ): Promise<HotschedulesToast.labor.Employee> {
        const { toastRestaurantExternalId } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `/employees/${employeeId}`
            ),
            method: "GET",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.labor.Employee.parseOrThrow(_response.body as serializers.labor.Employee.Raw, {
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
     * Deletes a restaurant employee record by marking the record as
     * deleted. A deleted employee cannot log in at the restaurant or
     * open new time entries.
     * If you `GET` an employee record that has been deleted, its
     * `deleted` value is `true` and its `deletedDate` value contains
     * the date and time the record was deleted. If you `GET` all
     * employees for a restaurant, the GUIDs for deleted employees are
     * not included in the return data.
     * If you delete an employee that has already been deleted then
     * the result is successful (200) and no change is made.
     * The deleted record appears in the list of deleted employees for
     * the restaurant in the Toast administration back-end. From the
     * list of deleted employees, you can enable a deleted record so
     * that the employee can use it again. You cannot enable a deleted
     * employee using the labor API. Information about deleted
     * employees remains available in reports.
     * You cannot delete employees who have open time entries (time
     * entries that do not have an out date value).
     *
     */
    public async delete(
        employeeId: string,
        request: HotschedulesToast.labor.DeleteEmployeeRequest
    ): Promise<HotschedulesToast.labor.Employee> {
        const { toastRestaurantExternalId } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `/employees/${employeeId}`
            ),
            method: "DELETE",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.labor.Employee.parseOrThrow(_response.body as serializers.labor.Employee.Raw, {
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
     * Updates the first name, chosen name, last name, external employee ID, and/or  passcode of a restaurant employee. The `PATCH` operation cannot  update any other employee information.
     *
     */
    public async update(
        employeeId: string,
        request: HotschedulesToast.labor.EmployeeInformationRequest
    ): Promise<HotschedulesToast.labor.Employee> {
        const { toastRestaurantExternalId, contentType, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `/employees/${employeeId}`
            ),
            method: "PATCH",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                "Content-Type": contentType,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.labor.employees.update.Request.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return await serializers.labor.Employee.parseOrThrow(_response.body as serializers.labor.Employee.Raw, {
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
     * Adds or replaces the external identifier for an
     * existing employee. Include the string value of the new external
     * identifier in the message body.
     * The Toast platform uses this external identifier as one of the
     * unique, persistent identifiers for an employee record.
     * _Changing the external identifier for an existing employee
     * might affect reporting and other Toast platform functions that
     * select employees using the `externalId` value._
     *
     */
    public async updateEmployeeExternalId(
        employeeId: string,
        request: HotschedulesToast.labor.ReplaceAnExternalIdentifierRequest
    ): Promise<HotschedulesToast.labor.Employee> {
        const { toastRestaurantExternalId, contentType, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `/employees/${employeeId}/externalId`
            ),
            method: "PUT",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                "Content-Type": contentType,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.labor.employees.updateEmployeeExternalId.Request.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return await serializers.labor.Employee.parseOrThrow(_response.body as serializers.labor.Employee.Raw, {
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
     * Adds an external identifier for an existing employee. Include
     * the string value of the new external identifier in the message
     * body.
     * You cannot change an existing external identifier with another
     * `POST` request; use `PUT` instead. The Toast platform uses this
     * external identifier as one of the unique, persistent
     * identifiers for an employee record.
     *
     */
    public async createEmployeeExternalId(
        employeeId: string,
        request: HotschedulesToast.labor.ExternalIdentifierRequest
    ): Promise<HotschedulesToast.labor.Employee> {
        const { toastRestaurantExternalId, contentType, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `/employees/${employeeId}/externalId`
            ),
            method: "POST",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                "Content-Type": contentType,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.labor.employees.createEmployeeExternalId.Request.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return await serializers.labor.Employee.parseOrThrow(_response.body as serializers.labor.Employee.Raw, {
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
     * Replaces the list of jobs for an employee. Include a JSON
     * array of job identifiers in the message body.
     * If a job is defined at the restaurant group or subgroup level,
     * this operation adds or removes that job for the the employee at
     * _all restaurant locations_ in the group or subgroup.
     *
     */
    public async replaceJobs(
        employeeId: string,
        request: HotschedulesToast.labor.AJobsListRequest
    ): Promise<HotschedulesToast.labor.Employee> {
        const { toastRestaurantExternalId, contentType, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `/employees/${employeeId}/jobs`
            ),
            method: "PUT",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                "Content-Type": contentType,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.labor.employees.replaceJobs.Request.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return await serializers.labor.Employee.parseOrThrow(_response.body as serializers.labor.Employee.Raw, {
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
     * Replaces the list of wage overrides for the jobs that are
     * assigned to an employee. Include a JSON  array of
     * `JobWageOverride` objects in the message body. Include the new
     * wage for the employee in the `wage` value. Specify the wage in
     * U.S. dollars.
     * You must include all existing wage overrides in the message
     * body. Any wage overrides that are not present in the array are
     * removed from the employee record.
     *
     */
    public async replaceWageOverrides(
        employeeId: string,
        request: HotschedulesToast.labor.WageOverridesRequest
    ): Promise<HotschedulesToast.labor.Employee> {
        const { toastRestaurantExternalId, contentType, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HotschedulesToastEnvironment.Production,
                `/employees/${employeeId}/wageOverrides`
            ),
            method: "PUT",
            headers: {
                "Toast-Restaurant-External-ID": toastRestaurantExternalId,
                "Content-Type": contentType,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.labor.employees.replaceWageOverrides.Request.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return await serializers.labor.Employee.parseOrThrow(_response.body as serializers.labor.Employee.Raw, {
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
