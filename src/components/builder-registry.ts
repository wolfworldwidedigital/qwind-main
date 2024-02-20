import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import CallToAction from "./widgets/CallToAction";
import Counter from "./counter/counter";
import Header from "./widgets/Header";
import Hero from "./widgets/Hero";
import Logo from "./common/Logo";
import { MyComponent } from "./FooterZever";
import { RouterHead } from "./common/RouterHead";
import Stats from "./widgets/Stats";

/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: CallToAction,
    name: "CallToAction1",
  },
  {
    component: Counter,
    name: "Counter",
    inputs: [
      {
        name: "initialValue",
        type: "number",
      },
    ],
  },
  {
    component: Header,
    name: "Header",
  },
  {
    component: Hero,
    name: "Hero",
  },
  {
    component: Logo,
    name: "Logo",
  },
  {
    component: MyComponent,
    name: "MyComponent",
  },
  {
    component: RouterHead,
    name: "RouterHead",
  },
  {
    component: Stats,
    name: "Stats",
  },
];
