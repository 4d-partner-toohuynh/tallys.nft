import { lazy, LazyExoticComponent } from "react";

interface IRoute {
  path: string;
  element: LazyExoticComponent<React.ComponentType<any>>;
  children?: IRoute[];
  index?: boolean;
}

const CommonLayout = lazy(() => import("~/layouts/common"));
const Marketplace = lazy(() => import("~/pages/marketplace"));

const RoutesConfig: any[] = [
  {
    path: "/",
    element: CommonLayout,
    children: [
      // This makes Marketplace the default component to show at the "/" path.
      {
        index: true,
        element: Marketplace,
      },
      // The old "/marketplace" path is removed, so it's no longer a valid URL.
    ],
  },
];

export default RoutesConfig;

