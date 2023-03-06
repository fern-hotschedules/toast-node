/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ReplaceAnExternalIdentifierRequest {
    /**
     * The Toast platform GUID of the restaurant that is the
     * context for this operation.
     *
     */
    toastRestaurantExternalId: string;
    /**
     * The Internet Assigned Numbers Authority (IANA) media type
     * of the message body data. The value must be
     * `application/json`.
     *
     */
    contentType: string;
    body: string;
}
