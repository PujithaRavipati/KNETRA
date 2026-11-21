export const WORKING_DAYS = 26;
export const CONVERSION = 0.2;

export type LeakInput = { missed: number; value: number; hours: number; rate: number };

export function estimateLeak(n: LeakInput) {
  const fromMissed = Math.round(n.missed * WORKING_DAYS * CONVERSION * n.value);
  const fromHours = Math.round(n.hours * WORKING_DAYS * n.rate);
  return { fromMissed, fromHours, total: fromMissed + fromHours };
}

/** "empty" until every box has something, "invalid" unless all are whole numbers ≥ 0. */
export function parseLeak(fields: Record<keyof LeakInput, string>) {
  const values = [fields.missed, fields.value, fields.hours, fields.rate];
  if (values.some((v) => v.trim() === "")) return "empty" as const;
  if (values.some((v) => !/^\d+$/.test(v.trim()))) return "invalid" as const;
  const [missed, value, hours, rate] = values.map(Number);
  return estimateLeak({ missed, value, hours, rate });
}
