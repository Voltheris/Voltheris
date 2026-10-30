export interface Value {
  icon: string;
  title: string;
  statement: string;
  example: string;
}

export const values: Value[] = [
  {
    icon: "TbFocus2",
    title: "Precision",
    statement: "We’d rather automate one workflow perfectly than five adequately.",
    example:
      "Every engagement scopes a single workflow first — lead response, intake, booking — and holds it to a working standard before anything else gets added.",
  },
  {
    icon: "TbShieldCheck",
    title: "Trust",
    statement: "Every system we build is one you could audit — we don’t hide the logic.",
    example:
      "Qualification logic is written to be inspected, not guessed at: every decision is logged and explainable, never a black-box score.",
  },
  {
    icon: "TbUsers",
    title: "Partnership",
    statement: "We stay after launch. A system nobody maintains isn’t finished.",
    example:
      "Launch is treated as the start of the relationship, not the end of the project — every engagement includes a direct line back to the person who built it.",
  },
  {
    icon: "TbBolt",
    title: "Momentum",
    statement: "Built for what keeps running, not what looks good in a demo.",
    example:
      "The question asked of every system isn’t “does this look impressive on day one” — it’s “will this still be running, unattended, a year from now.”",
  },
];
