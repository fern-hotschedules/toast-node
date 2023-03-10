/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const HotschedulesToastEnvironment = {
    Production: "https://ws-api.toasttab.com/menus/v2",
    Sandbox: "https://ws-sandbox-api.eng.toasttab.com/menus/v2",
} as const;

export type HotschedulesToastEnvironment =
    | typeof HotschedulesToastEnvironment.Production
    | typeof HotschedulesToastEnvironment.Sandbox;
