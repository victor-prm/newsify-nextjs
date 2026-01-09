import { z } from "zod";

export const footerLinkSchema = z.object({
  title: z.string(),
  icon: z.string(),
  href: z.string(),
});

export const footerListSchema = z.array(footerLinkSchema);

// TypeScript type inferred from schema
export type FooterLinkType = z.infer<typeof footerLinkSchema>;