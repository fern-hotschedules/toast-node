/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A string that indicates how the pre-modifier is displayed on tickets and receipts:
 *   * PREFIX: The pre-modifier name is placed before the modifier option name, for example, "EXTRA Cheese".
 *   * SUFFIX: The pre-modifier name is placed after the modifier option name, for example, "Cheese EXTRA".
 *
 */
export type PreModifierDisplay = "PREFIX" | "SUFFIX";

export const PreModifierDisplay = {
    Prefix: "PREFIX",
    Suffix: "SUFFIX",
} as const;