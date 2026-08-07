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
    example: "A single lead-qualification workflow, tuned for six weeks before we’d call it done.",
  },
  {
    icon: "TbShieldCheck",
    title: "Trust",
    statement: "Every system we build is one you could audit — we don’t hide the logic.",
    example: "Every qualification decision is logged and explainable, never a black-box score.",
  },
  {
    icon: "TbUsers",
    title: "Partnership",
    statement: "We stay after launch. A system nobody maintains isn’t finished.",
    example: "Weekly optimization reviews are standard on every Momentum and Enterprise engagement.",
  },
  {
    icon: "TbBolt",
    title: "Momentum",
    statement: "Built for what keeps running, not what looks good in a demo.",
    example: "The metric we track isn’t “impressive at launch” — it’s “still running in year two.”",
  },
];
