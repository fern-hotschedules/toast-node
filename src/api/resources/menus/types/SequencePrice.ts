/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Defines the size, sequence, or size/sequence prices for modifier options contained in a modifier group that uses the Size Price, Sequence Price, or Size/Sequence Price pricing strategy.
 *
 */
export interface SequencePrice {
    /**
     * Specifies the order of the prices. For modifier groups that use the Size Price pricing strategy, the `sequence` is always 1 because only one price is defined per size for that strategy. For modifier groups that use the Sequence Price or Size/Sequence Price pricing strategy, this value starts at 1 and increases with each successive price in the sequence. For example, in the JSON snippet below, `"sequence":1` defines the first price in the sequence and `"sequence":2` defines the second price in the sequence. ``` "sequencePrices": [
     *           {
     *             "sequence": 1,
     *             "price": 3
     *           },
     *           {
     *             "sequence": 2,
     *             "price": 4
     *           }
     *         ]
     * ```
     *
     */
    sequence?: number;
    /**
     * The price for a modifier option when it is ordered at the specified point in the sequence.
     *
     */
    price?: number;
}
