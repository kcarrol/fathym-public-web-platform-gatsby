// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6fZSWkofPMXR1NLi1bFj7o
// Component: asC7ZWwCfTlcUW
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
import Header2 from "../../Header2"; // plasmic-import: QRI3WiNK3jkO2A/component
import Button from "../../Button"; // plasmic-import: 7une6Ae6nQQ_5/component
import HeroSection from "../../HeroSection"; // plasmic-import: vYpH_54Wpi34Q8/component
import FooterBlack from "../../FooterBlack"; // plasmic-import: OF8nqCrALhqFVT/component

import { useScreenVariants as useScreenVariantsj2POtptfJbgbHl } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: J2pOTPTFJbgbHl/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_new_habistack_com_css from "../new_habistack_com/plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as plasmic_habistack_marketing_css from "../habistack_marketing/plasmic_habistack_marketing.module.css"; // plasmic-import: cEHjHBABazmDxgQhPGAjL/projectcss
import * as projectcss from "./plasmic_fathym_platform_marketing.module.css"; // plasmic-import: 6fZSWkofPMXR1NLi1bFj7o/projectcss
import * as sty from "./PlasmicAboutUs.module.css"; // plasmic-import: asC7ZWwCfTlcUW/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: UoPjMarBjLAJl_/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: dgkW2n0oQvm_D7/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: k7cMur7qg7sXO1/icon
import corinneKutzTMi2R5NfoUnsplashjpgVesFlC5HjeKF7 from "./images/corinneKutzTMi2R5NfoUnsplashjpg.jpeg"; // plasmic-import: vesFlC5hjeK-F7/picture
import brookeCagleWhwyBmtn30Unsplashjpg42XfnMbCIhXDuS from "./images/brookeCagleWhwyBmtn30Unsplashjpg.jpeg"; // plasmic-import: 42xfnMbCIhXDuS/picture
import about2JpgKkOzL1TZwl87Vc from "./images/about2Jpg.jpeg"; // plasmic-import: kkOzL1tZwl87vc/picture
import reading9255891920JpgLj0Zvf8954YScb from "./images/reading9255891920Jpg.jpeg"; // plasmic-import: Lj0ZVF8954YScb/picture

export type PlasmicAboutUs__VariantMembers = {};
export type PlasmicAboutUs__VariantsArgs = {};
type VariantPropType = keyof PlasmicAboutUs__VariantsArgs;
export const PlasmicAboutUs__VariantProps = new Array<VariantPropType>();

export type PlasmicAboutUs__ArgsType = {};
type ArgPropType = keyof PlasmicAboutUs__ArgsType;
export const PlasmicAboutUs__ArgProps = new Array<ArgPropType>();

export type PlasmicAboutUs__OverridesType = {
  root?: p.Flex<"div">;
  header2?: p.Flex<typeof Header2>;
  pageBanner?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  features?: p.Flex<"section">;
  container4?: p.Flex<"div">;
  outerRow2?: p.Flex<"div">;
  row2?: p.Flex<"div">;
  container5?: p.Flex<"div">;
  outerRow3?: p.Flex<"div">;
  row4?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  container6?: p.Flex<"div">;
  outerRow4?: p.Flex<"div">;
  row3?: p.Flex<"div">;
  heroSection?: p.Flex<typeof HeroSection>;
  footerBlack?: p.Flex<typeof FooterBlack>;
};

export interface DefaultAboutUsProps {
  className?: string;
}

export function Head() {
  return <></>;
}

function PlasmicAboutUs__RenderFunc(props: {
  variants: PlasmicAboutUs__VariantsArgs;
  args: PlasmicAboutUs__ArgsType;
  overrides: PlasmicAboutUs__OverridesType;

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
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <div className={classNames(projectcss.all, sty.freeBox__tMv0M)}>
            <Header2
              data-plasmic-name={"header2"}
              data-plasmic-override={overrides.header2}
              className={classNames("__wab_instance", sty.header2)}
            />
          </div>

          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___4DBbi)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__itJfd)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__mH0JT)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"About us"}
                    </h1>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gLuLw
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                      }
                    </div>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column___7LOb)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___5ZYdI)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: corinneKutzTMi2R5NfoUnsplashjpgVesFlC5HjeKF7,
                      fullWidth: 1920,
                      fullHeight: 1280,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </p.Stack>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__asZlG)}>
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <section
                data-plasmic-name={"features"}
                data-plasmic-override={overrides.features}
                className={classNames(projectcss.all, sty.features)}
              >
                <div className={classNames(projectcss.all, sty.column___3E1TU)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__zWYbe
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "WHY CHOOSE US"
                      : "WHY CHOOSE US"}
                  </h2>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pqdnR
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    }
                  </div>

                  <div
                    data-plasmic-name={"container4"}
                    data-plasmic-override={overrides.container4}
                    className={classNames(projectcss.all, sty.container4)}
                  >
                    <div
                      data-plasmic-name={"outerRow2"}
                      data-plasmic-override={overrides.outerRow2}
                      className={classNames(projectcss.all, sty.outerRow2)}
                    >
                      <div
                        data-plasmic-name={"row2"}
                        data-plasmic-override={overrides.row2}
                        className={classNames(projectcss.all, sty.row2)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__thwEf
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__hTPck
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__hZsEu
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3___7GbZ
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Some value proposition of your service."
                                  : "Some value proposition of your service."}
                              </h3>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__kUKwN
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                              </div>

                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__nrQRa
                                )}
                                color={"blue" as const}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg___922Hl
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded" as const}
                                showEndIcon={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__b60Cx
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__pO2Dp)}
                            displayHeight={"400px" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"none" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"400px" as const}
                            loading={"lazy" as const}
                            src={{
                              src: brookeCagleWhwyBmtn30Unsplashjpg42XfnMbCIhXDuS,
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"container5"}
                    data-plasmic-override={overrides.container5}
                    className={classNames(projectcss.all, sty.container5)}
                  >
                    {true ? (
                      <div
                        data-plasmic-name={"outerRow3"}
                        data-plasmic-override={overrides.outerRow3}
                        className={classNames(projectcss.all, sty.outerRow3)}
                      >
                        <div
                          data-plasmic-name={"row4"}
                          data-plasmic-override={overrides.row4}
                          className={classNames(projectcss.all, sty.row4)}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__j3Qwp
                            )}
                          >
                            <p.PlasmicImg
                              alt={""}
                              className={classNames(sty.img__qu7LT)}
                              displayHeight={"auto" as const}
                              displayMaxHeight={"none" as const}
                              displayMaxWidth={
                                hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? ("100%" as const)
                                  : ("100%" as const)
                              }
                              displayMinHeight={"0" as const}
                              displayMinWidth={"0" as const}
                              displayWidth={"auto" as const}
                              loading={
                                hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? ("lazy" as const)
                                  : ("lazy" as const)
                              }
                              src={
                                hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? {
                                      src: about2JpgKkOzL1TZwl87Vc,
                                      fullWidth: 570,
                                      fullHeight: 650,
                                      aspectRatio: undefined
                                    }
                                  : {
                                      src: about2JpgKkOzL1TZwl87Vc,
                                      fullWidth: 570,
                                      fullHeight: 650,
                                      aspectRatio: undefined
                                    }
                              }
                            />
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__sh4Nt
                            )}
                          >
                            <h2
                              className={classNames(
                                projectcss.all,
                                projectcss.h2,
                                projectcss.__wab_text,
                                sty.h2___5SzrU
                              )}
                            >
                              {hasVariant(
                                globalVariants,
                                "screen",
                                "mobileOnly"
                              )
                                ? "We Execute Our Ideas \nThe Start To Finish."
                                : "We Execute Our Ideas \nThe Start To Finish."}
                            </h2>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__zIzMp
                              )}
                            >
                              {
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                              }
                            </div>

                            <p.Stack
                              as={p.PlasmicLink}
                              data-plasmic-name={"link"}
                              data-plasmic-override={overrides.link}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link
                              )}
                              component={Link}
                              platform={"gatsby"}
                            >
                              {false ? (
                                <IconIcon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg___9LMS
                                  )}
                                  role={"img"}
                                />
                              ) : null}

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__tn3O1
                                )}
                              >
                                {"LEARN More"}
                              </div>

                              {false ? (
                                <IconIcon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg___6MFer
                                  )}
                                  role={"img"}
                                />
                              ) : null}
                            </p.Stack>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div
                    data-plasmic-name={"container6"}
                    data-plasmic-override={overrides.container6}
                    className={classNames(projectcss.all, sty.container6)}
                  >
                    <div
                      data-plasmic-name={"outerRow4"}
                      data-plasmic-override={overrides.outerRow4}
                      className={classNames(projectcss.all, sty.outerRow4)}
                    >
                      <div
                        data-plasmic-name={"row3"}
                        data-plasmic-override={overrides.row3}
                        className={classNames(projectcss.all, sty.row3)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__jCDuJ
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__yThYe)}
                            displayHeight={"400px" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"none" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"400px" as const}
                            loading={"lazy" as const}
                            src={{
                              src: reading9255891920JpgLj0Zvf8954YScb,
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            }}
                          />
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__tVzTa
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__qhgz1
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__pcSYi
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__eFxdI
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Some value proposition of your service."
                                  : "Some value proposition of your service."}
                              </h3>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text___0MtNg
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                              </div>

                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__ky4Si
                                )}
                                color={"blue" as const}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__ramIx
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded" as const}
                                showEndIcon={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}

            <HeroSection
              data-plasmic-name={"heroSection"}
              data-plasmic-override={overrides.heroSection}
              className={classNames("__wab_instance", sty.heroSection)}
            />
          </div>

          <FooterBlack
            data-plasmic-name={"footerBlack"}
            data-plasmic-override={overrides.footerBlack}
            className={classNames("__wab_instance", sty.footerBlack)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header2",
    "pageBanner",
    "columns",
    "h1",
    "features",
    "container4",
    "outerRow2",
    "row2",
    "container5",
    "outerRow3",
    "row4",
    "link",
    "container6",
    "outerRow4",
    "row3",
    "heroSection",
    "footerBlack"
  ],
  header2: ["header2"],
  pageBanner: ["pageBanner", "columns", "h1"],
  columns: ["columns", "h1"],
  h1: ["h1"],
  features: [
    "features",
    "container4",
    "outerRow2",
    "row2",
    "container5",
    "outerRow3",
    "row4",
    "link",
    "container6",
    "outerRow4",
    "row3"
  ],
  container4: ["container4", "outerRow2", "row2"],
  outerRow2: ["outerRow2", "row2"],
  row2: ["row2"],
  container5: ["container5", "outerRow3", "row4", "link"],
  outerRow3: ["outerRow3", "row4", "link"],
  row4: ["row4", "link"],
  link: ["link"],
  container6: ["container6", "outerRow4", "row3"],
  outerRow4: ["outerRow4", "row3"],
  row3: ["row3"],
  heroSection: ["heroSection"],
  footerBlack: ["footerBlack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header2: typeof Header2;
  pageBanner: "div";
  columns: "div";
  h1: "h1";
  features: "section";
  container4: "div";
  outerRow2: "div";
  row2: "div";
  container5: "div";
  outerRow3: "div";
  row4: "div";
  link: "a";
  container6: "div";
  outerRow4: "div";
  row3: "div";
  heroSection: typeof HeroSection;
  footerBlack: typeof FooterBlack;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAboutUs__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAboutUs__VariantsArgs;
    args?: PlasmicAboutUs__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAboutUs__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAboutUs__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAboutUs__ArgProps,
          internalVariantPropNames: PlasmicAboutUs__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAboutUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutUs";
  } else {
    func.displayName = `PlasmicAboutUs.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutUs = Object.assign(
  // Top-level PlasmicAboutUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header2: makeNodeComponent("header2"),
    pageBanner: makeNodeComponent("pageBanner"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    features: makeNodeComponent("features"),
    container4: makeNodeComponent("container4"),
    outerRow2: makeNodeComponent("outerRow2"),
    row2: makeNodeComponent("row2"),
    container5: makeNodeComponent("container5"),
    outerRow3: makeNodeComponent("outerRow3"),
    row4: makeNodeComponent("row4"),
    link: makeNodeComponent("link"),
    container6: makeNodeComponent("container6"),
    outerRow4: makeNodeComponent("outerRow4"),
    row3: makeNodeComponent("row3"),
    heroSection: makeNodeComponent("heroSection"),
    footerBlack: makeNodeComponent("footerBlack"),

    // Metadata about props expected for PlasmicAboutUs
    internalVariantProps: PlasmicAboutUs__VariantProps,
    internalArgProps: PlasmicAboutUs__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAboutUs;
/* prettier-ignore-end */
