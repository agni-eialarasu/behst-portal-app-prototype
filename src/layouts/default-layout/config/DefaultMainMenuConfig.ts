import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "Home",
        route: "/dashboard",
        bootstrapIcon: "bi-app-indicator",
        keenthemesIcon: "element-11",
      },
      {
        heading: "Customers",
        route: "/customers",
        bootstrapIcon: "bi-app-indicator",
        keenthemesIcon: "element-11",
      },
      {
        heading: "Quotations",
        route: "/quotations",
        bootstrapIcon: "bi-app-indicator",
        keenthemesIcon: "element-11",
      },
      {
        heading: "Products",
        route: "/products",
        bootstrapIcon: "bi-app-indicator",
        keenthemesIcon: "element-11",
      },
    ],
  },
];

export default MainMenuConfig;
