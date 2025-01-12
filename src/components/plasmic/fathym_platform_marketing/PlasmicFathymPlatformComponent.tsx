// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6fZSWkofPMXR1NLi1bFj7o
// Component: PwalIDIYTo
import * as React from "react";

import { Link, GatsbyLinkProps as LinkProps } from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import HabistackFooterComponent from "../../HabistackFooterComponent"; // plasmic-import: oRUnjdUovS/component

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_new_habistack_com_css from "../new_habistack_com/plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as plasmic_habistack_marketing_css from "../habistack_marketing/plasmic_habistack_marketing.module.css"; // plasmic-import: cEHjHBABazmDxgQhPGAjL/projectcss
import * as projectcss from "./plasmic_fathym_platform_marketing.module.css"; // plasmic-import: 6fZSWkofPMXR1NLi1bFj7o/projectcss
import * as sty from "./PlasmicFathymPlatformComponent.module.css"; // plasmic-import: PwalIDIYTo/css

export type PlasmicFathymPlatformComponent__VariantMembers = {};
export type PlasmicFathymPlatformComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicFathymPlatformComponent__VariantsArgs;
export const PlasmicFathymPlatformComponent__VariantProps =
  new Array<VariantPropType>();

export type PlasmicFathymPlatformComponent__ArgsType = {};
type ArgPropType = keyof PlasmicFathymPlatformComponent__ArgsType;
export const PlasmicFathymPlatformComponent__ArgProps =
  new Array<ArgPropType>();

export type PlasmicFathymPlatformComponent__OverridesType = {
  root?: p.Flex<typeof HabistackFooterComponent>;
};

export interface DefaultFathymPlatformComponentProps {
  className?: string;
}

function PlasmicFathymPlatformComponent__RenderFunc(props: {
  variants: PlasmicFathymPlatformComponent__VariantsArgs;
  args: PlasmicFathymPlatformComponent__ArgsType;
  overrides: PlasmicFathymPlatformComponent__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  return (
    true ? (
      <HabistackFooterComponent
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames("__wab_instance", sty.root)}
      />
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof HabistackFooterComponent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFathymPlatformComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFathymPlatformComponent__VariantsArgs;
    args?: PlasmicFathymPlatformComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFathymPlatformComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFathymPlatformComponent__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFathymPlatformComponent__ArgProps,
          internalVariantPropNames: PlasmicFathymPlatformComponent__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFathymPlatformComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFathymPlatformComponent";
  } else {
    func.displayName = `PlasmicFathymPlatformComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicFathymPlatformComponent = Object.assign(
  // Top-level PlasmicFathymPlatformComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFathymPlatformComponent
    internalVariantProps: PlasmicFathymPlatformComponent__VariantProps,
    internalArgProps: PlasmicFathymPlatformComponent__ArgProps
  }
);

export default PlasmicFathymPlatformComponent;
/* prettier-ignore-end */
