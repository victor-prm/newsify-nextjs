import type { FooterLinkType } from "./schemas/footer";
import { FaGlobeAfrica, FaBookmark, FaStar } from "react-icons/fa";

export const footerList: FooterLinkType[] = [
  {
    title: "Home",
    href: "/",
    icon: FaGlobeAfrica,
  },
  {
    title: "Saved",
    href: "/saved",
    icon: FaBookmark,
  },
  {
    title: "Popular",
    href: "/popular",
    icon: FaStar,
  },
];

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
