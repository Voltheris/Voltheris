export interface WorkflowStep {
  label: string;
}

/**
 * A concrete, single example used to explain what "one workflow" in
 * the pricing tiers actually refers to — shown once, generically,
 * rather than repeated per tier, since the underlying pattern is the
 * same regardless of how many workflows a tier includes.
 */
export const exampleWorkflow: WorkflowStep[] = [
  { label: "Lead submits a form on your site" },
  { label: "AI qualifies the lead against your criteria" },
  { label: "CRM record is created and updated automatically" },
  { label: "Qualified lead is prompted to book an appointment" },
  { label: "Confirmation email sent — no one lifted a finger" },
];
