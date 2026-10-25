export type FieldType = "text" | "textarea" | "number" | "checkbox";

export interface AgentField {
  name: string;
  label: string;
  type: FieldType;
  rows?: number;
  placeholder?: string;
}

export interface AgentConfig {
  slug: string;
  title: string;
  tagline: string;
  purpose: string;
  accent: string;
  features: string[];
  limitations: string[];
  fields: AgentField[];
  sample: Record<string, string | number | boolean>;
  repo: string;
}

export const agent: AgentConfig = {
  "slug": "plotxyz-autonomous-qa-agent",
  "title": "Autonomous QA",
  "tagline": "Turn requirements into a test plan you can run.",
  "purpose": "Derives happy-path, invalid-input, and boundary test cases from requirements, adds high-risk security and recovery checks, and flags ambiguous acceptance criteria.",
  "accent": "#4ade80",
  "features": [
    "Requirement-to-test-case generation",
    "Ambiguity detection",
    "Risk-based extra coverage"
  ],
  "limitations": [
    "Expected results must be confirmed by a human.",
    "No test runner or browser automation is included."
  ],
  "fields": [
    {
      "name": "requirements",
      "label": "Requirements (one per line)",
      "type": "textarea",
      "rows": 8,
      "placeholder": ""
    },
    {
      "name": "risk_level",
      "label": "Risk level (low, medium, high)",
      "type": "text",
      "rows": 4,
      "placeholder": ""
    }
  ],
  "sample": {
    "requirements": "- Users can reset a password by email.\n- The reset link expires after 15 minutes.\n- Invalid tokens show a clear error.",
    "risk_level": "medium"
  },
  "repo": "https://github.com/sukhee-2626/plotxyz-autonomous-qa-agent"
};
