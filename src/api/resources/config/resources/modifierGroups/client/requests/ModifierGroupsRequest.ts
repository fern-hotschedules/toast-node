/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ModifierGroupsRequest {
    /**
     * A string that identifies the set of data objects that the  endpoint will return in its response data. You can use this  parameter to retrieve one page of response data. You  get the value that you supply in the `pageToken` parameter  from the `Toast-Next-Page-Token` header field value of a  previous request to the endpoint. For more information, see  <a href="https://doc.toasttab.com/doc/devguide/apiResponseDataPagination.html">Paginating response data</a>.
     *
     */
    pageToken?: string;
    /**
     * The number of objects to return in the array. Deprecated. For more information, see  <a href="https://doc.toasttab.com/doc/devguide/apiResponseDataPagination.html">Paginating response data</a>.
     *
     */
    pageSize?: number;
    /**
     * The sequence number of the first object to return in the array. Deprecated. For more information, see  <a href="https://doc.toasttab.com/doc/devguide/apiResponseDataPagination.html">Paginating response data</a>.
     *
     */
    page?: number;
    /**
     * Limits the return data to objects created or modified after
     * a specific date and time. For example:
     * `2015-12-01T00:00:00.000+0000`.
     *
     */
    lastModified?: string;
    /**
     * The Toast POS GUID of the restaurant that the configuration
     * applies to.
     *
     */
    toastRestaurantExternalId: string;
}
