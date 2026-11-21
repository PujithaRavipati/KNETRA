export const contact = {
  email: "kompellakartikeya@gmail.com",
  whatsapp: "917842939489",
  whatsappDisplay: "+91 78429 39489",
  instagram: "yourstrulykarthikeya",
};

export function whatsappLink(message = "Hi KNETRA, I'd like a free consultation") {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type GroupId = "ai-agents" | "automation" | "creative-web";

// Prices are null until decided; components show "Custom quote" for null.
// Group names and service pitches are translated in the dictionaries (groupNames, servicePitches).
export const groups: { id: GroupId; priceFrom: number | null }[] = [
  { id: "ai-agents", priceFrom: null },
  { id: "automation", priceFrom: null },
  { id: "creative-web", priceFrom: null },
];

// Service names stay in English in every language; they are the terms customers search for.
export const services = [
  { group: "ai-agents", name: "AI chatbots" },
  { group: "ai-agents", name: "RAG chatbots" },
  { group: "ai-agents", name: "AI calling agents" },
  { group: "ai-agents", name: "WhatsApp bots" },
  { group: "ai-agents", name: "Multi-agent orchestration" },
  { group: "automation", name: "Workflow automations" },
  { group: "automation", name: "Custom builds" },
  { group: "creative-web", name: "Video editing" },
  { group: "creative-web", name: "Graphic design" },
  { group: "creative-web", name: "Websites" },
] as const satisfies readonly { group: GroupId; name: string }[];

export type ServiceName = (typeof services)[number]["name"];

export const deskBuddyPricePerMonth: number | null = null;

export function formatRupees(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
