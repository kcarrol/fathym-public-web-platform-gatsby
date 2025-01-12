// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6fZSWkofPMXR1NLi1bFj7o
// Component: QRI3WiNK3jkO2A
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
import Button from "../../Button"; // plasmic-import: 7une6Ae6nQQ_5/component

import { useScreenVariants as useScreenVariantsj2POtptfJbgbHl } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: J2pOTPTFJbgbHl/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_new_habistack_com_css from "../new_habistack_com/plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as plasmic_habistack_marketing_css from "../habistack_marketing/plasmic_habistack_marketing.module.css"; // plasmic-import: cEHjHBABazmDxgQhPGAjL/projectcss
import * as projectcss from "./plasmic_fathym_platform_marketing.module.css"; // plasmic-import: 6fZSWkofPMXR1NLi1bFj7o/projectcss
import * as sty from "./PlasmicHeader2.module.css"; // plasmic-import: QRI3WiNK3jkO2A/css

import Fathymaqua01SvgIcon from "./icons/PlasmicIcon__Fathymaqua01Svg"; // plasmic-import: wGZm_aM5ir/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: k7cMur7qg7sXO1/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: UoPjMarBjLAJl_/icon

export type PlasmicHeader2__VariantMembers = {};
export type PlasmicHeader2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader2__VariantsArgs;
export const PlasmicHeader2__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader2__ArgsType = {};
type ArgPropType = keyof PlasmicHeader2__ArgsType;
export const PlasmicHeader2__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader2__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultHeader2Props {
  className?: string;
}

function PlasmicHeader2__RenderFunc(props: {
  variants: PlasmicHeader2__VariantsArgs;
  args: PlasmicHeader2__ArgsType;
  overrides: PlasmicHeader2__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsj2POtptfJbgbHl()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_new_habistack_com_css.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        plasmic_habistack_marketing_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__h5QpW)}
      >
        {true ? (
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__otLa9
            )}
            component={Link}
            href={`/`}
            platform={"gatsby"}
          >
            <Fathymaqua01SvgIcon
              className={classNames(projectcss.all, sty.svg__tKUxH)}
              role={"img"}
            />
          </p.PlasmicLink>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__r9GGr)}
        >
          {true ? (
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__pPvJ
              )}
              component={Link}
              href={`/about-us`}
              platform={"gatsby"}
            >
              {true ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__oLxaI)}
                  role={"img"}
                />
              ) : null}
              {true ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mRzN9
                  )}
                >
                  {"Technology"}
                </div>
              ) : null}
              {true ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__u1DwW)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          ) : null}
          {true ? (
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__abUf8
              )}
              component={Link}
              href={`/about-us`}
              platform={"gatsby"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___17J7W)}
                  role={"img"}
                />
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kiBM
                )}
              >
                {"Solutions"}
              </div>

              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___8Ij0D)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          ) : null}
          {true ? (
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__hoqxZ
              )}
              component={Link}
              href={"https://www.fathym.com/docs/" as const}
              platform={"gatsby"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__e6Yq)}
                  role={"img"}
                />
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bAgVu
                )}
              >
                {"Docs"}
              </div>

              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__pOaXw)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          ) : null}
          {true ? (
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__qd4Te
              )}
              component={Link}
              href={"https://www.fathym.com/blog/" as const}
              platform={"gatsby"}
            >
              {"Blog"}
            </p.PlasmicLink>
          ) : null}
          {true ? (
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__n8JYz
              )}
              component={Link}
              href={"https://www.fathym.com/dashboard" as const}
              platform={"gatsby"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__swFci)}
                  role={"img"}
                />
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__p48X
                )}
              >
                {"Login"}
              </div>

              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__l6USo)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          ) : null}
          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button__fjb7H)}
              color={"blue" as const}
              link={"https://www.fathym.com/dashboard" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zvi2D
                )}
              >
                {"Get started for Free"}
              </div>
            </Button>
          ) : null}

          <Button
            className={classNames("__wab_instance", sty.button___4LJf8)}
            link={"https://www.fathym.com/dashboard" as const}
          >
            {([2, 3, 4] ?? []).map((currentItem, currentIndex) => (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vs2H
                )}
                key={currentIndex}
              >
                {""}
              </div>
            ))}
          </Button>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader2__VariantsArgs;
    args?: PlasmicHeader2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader2__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHeader2__ArgProps,
          internalVariantPropNames: PlasmicHeader2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader2";
  } else {
    func.displayName = `PlasmicHeader2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader2 = Object.assign(
  // Top-level PlasmicHeader2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHeader2
    internalVariantProps: PlasmicHeader2__VariantProps,
    internalArgProps: PlasmicHeader2__ArgProps
  }
);

export default PlasmicHeader2;
/* prettier-ignore-end */
