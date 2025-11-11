import { Temporal } from 'temporal-polyfill';

const now = Temporal.Now.instant();
console.log('temporal string:', now.toString());
// returned from backend: YYYY-MM-DD
const strDate = '2025-12-30';

const temporalDate = Temporal.PlainDate.from(strDate);
console.log('temporal date string:', temporalDate.toString());
console.log('temporal date:', temporalDate);
console.log('temporal date year:', temporalDate.year);
console.log('temporal date month:', temporalDate.month);
console.log('temporal date day:', temporalDate.day);



/**
 * Formatting date to string
 * sources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toLocaleString
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 */

// Inline with Temporal API
const temporalFormattedDate = Temporal.PlainDate.from(strDate).toLocaleString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "2-digit",
    },
  )
console.log('Temporal formatted date:', temporalFormattedDate); // Dec 30, 2025

// Temporal API with dateStyle: "long" - December 30, 2025
const temporalFormattedDateWithLong = Temporal.PlainDate.from("2025-12-30").toLocaleString("en-US", {
    dateStyle: "long",
  });
  console.log('Temporal formatted date with dateStyle: "long":', temporalFormattedDateWithLong); // December 30, 2025

// Temporal API with dateStyle: "medium" - Dec 30, 2025
const temporalFormattedDateWithMedium = Temporal.PlainDate.from("2025-12-30").toLocaleString("en-US", {
    dateStyle: "medium",
});
console.log('Temporal formatted date with dateStyle: "medium":', temporalFormattedDateWithMedium); // December 30, 2025

// Temporal API with dateStyle: "short" - 12/30/25
const temporalFormattedDateWithShort = Temporal.PlainDate.from("2025-12-30").toLocaleString("en-US", {
    dateStyle: "short",
  });
  console.log('Temporal formatted date with dateStyle: "short":', temporalFormattedDateWithShort); // December 30, 2025

// Manual formatting using string concatenation
const d = Temporal.PlainDate.from("2025-12-30");
const manualFormattedDate = `${d.year}-${String(d.month).padStart(2, "0")}-${String(d.day).padStart(2, "0")}`;
console.log('Manual formatted date:', manualFormattedDate); // 2025-11-06

// const todayDate = new Date();
// console.log('new Date string:', todayDate.toISOString());
// console.log('new Date object:', todayDate);


/**
 * Convert to Date Object
 * 
 * 
 */
const pd = Temporal.PlainDate.from("2025-12-30");
// Temporal API to Date Object
// converts to UTC midnight
const temporalDateToDateObject = new Date(pd.toString());
console.log('Temporal date object to UTC midnight:', temporalDateToDateObject);

// Temporal API to Date Object
// converts to Local midnight
const temporalDateToDateObjectNumberic = new Date(pd.year, pd.month-1, pd.day);
console.log('Temporal date object to local time:', temporalDateToDateObjectNumberic);





