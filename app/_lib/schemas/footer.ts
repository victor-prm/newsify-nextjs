import { z } from "zod";
import type { IconType } from "react-icons";

export const footerLinkSchema = z.object({
    title: z.string(),
    href: z.string(),
    icon: z.custom<IconType>(),
});

export const footerListSchema = z.array(footerLinkSchema);

// TypeScript type inferred from schema
export type FooterLinkType = z.infer<typeof footerLinkSchema>;