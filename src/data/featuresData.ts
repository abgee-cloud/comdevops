// src/data/featuresData.ts
// ABG DCD Core Programme Areas

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export const featuresData: FeatureItem[] = [
  {
    title: "Child Protection",
    description: "Safeguarding the rights and welfare of children across all 13 districts of Bougainville through community-based protection networks and awareness programmes.",
    icon: "🤝"
  },
  {
    title: "Women & Gender",
    description: "Empowering women and promoting gender equality through targeted programmes, policy advocacy, and grassroots community engagement.",
    icon: "⚖️"
  },
  {
    title: "Youth Development",
    description: "Building resilient and skilled young Bougainvilleans through vocational training, leadership programmes, and community participation initiatives.",
    icon: "🌱"
  },
  {
    title: "Community Empowerment",
    description: "Strengthening village-level governance, community planning, and participatory development across urban and rural Bougainville.",
    icon: "🏘️"
  },
  {
    title: "Social Welfare",
    description: "Delivering targeted welfare support to vulnerable populations including persons with disabilities, elderly citizens, and marginalised communities.",
    icon: "🫶"
  },
  {
    title: "IS&CT Innovation",
    description: "Driving digital transformation across the DCD through data systems, ICT capacity building, and government-grade information infrastructure.",
    icon: "💻"
  },
];
