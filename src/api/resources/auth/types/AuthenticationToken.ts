/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Information about a Toast platform API session, including an
 * authentication token string that your Toast API client software can
 * present when using other Toast platform APIs.
 *
 */
export interface AuthenticationToken {
    /**
     * The OAuth 2 authentication scheme used for the authentication token.
     * Toast API authentication uses the bearer authentication scheme.
     *
     */
    tokenType?: string;
    /**
     * The scope value in the authentication token request response is
     * `null`. The `accessToken` JSON Web Token (JWT) contains the list of
     * [scopes for your Toast API
     * client](https://dev.toasttab.com/doc/devguide/apiScopes.html).
     *
     */
    scope?: string;
    /**
     * The number of seconds that the authentication token is valid.
     *
     */
    expiresIn?: number;
    /**
     * A JSON Web Token (JWT) string that contains an authentication token. You [present this string when you make requests](https://dev.toasttab.com/doc/devguide/authentication.html#using-authentication-token) to other Toast API resources. The JWT includes information about your Toast API client.
     *
     */
    accessToken?: string;
    /**
     * For internal use only.
     *
     */
    idToken?: string;
    /**
     * For internal use only.
     *
     */
    refreshToken?: string;
}
