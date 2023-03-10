/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HotschedulesToast } from "@fern-api/toast";

/**
 * A multi-use object that is used to: * Define when a menu is available. * Define when a time-specific price is available for a menu item or modifier option. A `Schedule` object defines a set of days of the week and a set of time ranges for those days. Days that have identical time ranges are grouped into a single `Schedule` object, for example, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, and FRIDAY in the example below have identical time ranges and are in the same `Schedule` object while SATURDAY and SUNDAY are in a separate `Schedule` object because their time ranges differ from the weekday time ranges. ``` "availability": {
 *   "alwaysAvailable": false,
 *   "schedule": [
 *     {
 *       "days": [
 *         "MONDAY",
 *         "TUESDAY",
 *         "WEDNESDAY",
 *         "THURSDAY"
 *       ],
 *       "timeRanges": [
 *         {
 *           "start": "09:00",
 *           "end": "18:00"
 *         }
 *       ]
 *     },
 *     {
 *       "days": [
 *         "FRIDAY",
 *         "SATURDAY"
 *       ],
 *       "timeRanges": [
 *         {
 *           "start": "09:00",
 *           "end": "18:00"
 *         },
 *         {
 *           "start": "20:00",
 *           "end": "23:00"
 *         }
 *       ]
 *     }
 *   ]
 * } ``` Time ranges are in 24-hour HH:MM format. If a day is not represented in the `Schedule` objects, the menu or time-specific price is not available on that day.
 *
 */
export interface Schedule {
    /**
     * An array of days of the week that are associated with identical time ranges. The time ranges are defined in a corresponding `timeRanges` value. Names of the days are in upper case, for example, MONDAY.
     *
     */
    days?: HotschedulesToast.menus.DaysOfWeek[];
    /**
     * An array of `TimeRange` objects that define the time ranges that a menu or a time-specific price is available on the days defined by the corresponding `days` value. A `TimeRange` object contains a `start` time and an `end` time, expressed in the restaurant???s local time. If both the `start` and `end` times for a given day are 00:00, it indicates that the menu or the time-specific price is available 24 hours on the associated days. Time ranges may also run overnight, for example, a time range that starts at "07:00" and ends at "03:00" runs from 7am until 3am the next day.
     *
     */
    timeRanges?: HotschedulesToast.menus.TimeRange[];
}
