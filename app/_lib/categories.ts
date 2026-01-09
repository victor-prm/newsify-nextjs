import { footerListSchema } from "../_lib/schemas/footer";
import type { FooterLinkType } from "../_lib/schemas/footer";

const rawFooterList = [
  {
    title: "Home",
    icon: "fas fa-home",
    href: "/",
  },
  {
    title: "Saved",
    icon: "fas fa-bookmark",
    href: "/saved",
  },
  {
    title: "Popular",
    icon: "fas fa-star",
    href: "/popular",
  },
];

export const footerList: FooterLinkType[] =
  footerListSchema.parse(rawFooterList);


export const categoryList = [
    {
        title: "Europe",
        icon: "fas fa-euro",
    },
    {
        title: "Health",
        icon: "fas fa-doctor",
    },
    {
        title: "Sports",
        icon: "fas fa-ball",
    },
    {
        title: "Business",
        icon: "fas fa-chart",
    },
    {
        title: "Travel",
        icon: "far fa-map",
    }
]


export const popularList = [
    {
        title: "Today",
        icon: "fas fa-calendar-day",
    },
    {
        title: "This Week",
        icon: "fas fa-calendar-week",
    },
    {
        title: "This Month",
        icon: "fas fa-calendar",
    },
]
