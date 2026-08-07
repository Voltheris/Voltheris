export interface FAQEntry {
  question: string;
  answer: string;
}

export const servicesFAQ: FAQEntry[] = [
  {
    question: "How long does implementation take?",
    answer:
      "Most single-workflow builds go live in 11 to 18 days. Multi-workflow engagements typically take four to six weeks, staged so the first automation is running well before the rest are finished.",
  },
  {
    question: "Do I need technical staff to maintain this?",
    answer:
      "No. Voltheris builds, hosts, and monitors every system we deliver. Your team interacts with it through your existing CRM and calendar — nothing new to learn, nothing to maintain.",
  },
  {
    question: "What CRMs and tools do you integrate with?",
    answer:
      "HubSpot, Salesforce, Pipedrive, GoHighLevel, and most calendar and telephony platforms out of the box. If you're on something less common, we scope integration feasibility during discovery, free of charge.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Data is encrypted in transit and at rest, access is scoped per integration, and nothing is used to train third-party models. We'll walk through our data-handling practices in detail on request.",
  },
  {
    question: "What happens if I want to change the workflow later?",
    answer:
      "Adjustments are part of the engagement, not a change order. Qualification criteria, messaging, and routing logic can all be updated as your business evolves.",
  },
  {
    question: "Do you offer a trial or pilot?",
    answer:
      "For most engagements we start with a single, narrowly-scoped workflow — effectively a paid pilot with a defined success metric — before expanding to the rest of the pipeline.",
  },
];
