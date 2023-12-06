import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "Dashboard",
        route: "/dashboard",
        bootstrapIcon: "bi-app-indicator",
        keenthemesIcon: "element-11",
      },
    ],
  },
  // {
  //   heading: "Quotation",
  //   route: "quotation",
  //   pages: [
  //     {
  //       heading: "My Quotations",
  //       route: "/quotations",
  //       bootstrapIcon: "bi-app-indicator",
  //       keenthemesIcon: "abstract-38",
  //     },
  //   ],
  // },
];

export default MainMenuConfig;
