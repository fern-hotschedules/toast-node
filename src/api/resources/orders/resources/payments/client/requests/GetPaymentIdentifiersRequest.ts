/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface GetPaymentIdentifiersRequest {
    /**
     * Returns a list of the payments that were made during
     * one business day.
     * Specify the business day in the format yyyyMMdd.
     * For example, `20170101`.
     *
     */
    paidBusinessDate?: string;
    /**
     * Returns a list of the payments that were refunded
     * during one business day.
     * Specify the business day in the format
     * yyyyMMdd. For example, `20170101`.
     *
     */
    refundBusinessDate?: string;
    /**
     * Returns a list of the payments that were voided during
     * one business day.
     * Specify the business day in the format yyyyMMdd.
     * For example, `20170101`.
     *
     */
    voidBusinessDate?: string;
    /**
     * The GUID of the restaurant used as the context of the request.
     */
    toastRestaurantExternalId: string;
}
