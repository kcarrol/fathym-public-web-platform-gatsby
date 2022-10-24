// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import GlobalContextsProvider from "../components/plasmic/fathym_platform_marketing/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/fathym_platform_marketing/PlasmicGlobalVariant__Screen";
import {
  PlasmicContact,
  Head
} from "../components/plasmic/fathym_platform_marketing/PlasmicContact";
import type { PageProps } from "gatsby";
export { Head };

function Contact({ location, params }: PageProps) {
  // Use PlasmicContact to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicContact are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicContact is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Gatsby "wrapRootElement" function
  // (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr#wrapRootElement).
  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={params}
        query={Object.fromEntries(new URLSearchParams(location.search))}
      >
        <PlasmicContact />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export default Contact;
