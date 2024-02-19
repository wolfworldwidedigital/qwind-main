import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {
  getContent,
  RenderContent,
  getBuilderSearchParams,
} from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "~/components/builder-registry";

export const BUILDER_MODEL = "page";

export const useBuilderContent = routeLoader$(async ({ url, error }) => {
  const isPreviewing = url.searchParams.has("builder.preview");

  const builderContent = await getContent({
    model: BUILDER_MODEL,
    apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
    options: getBuilderSearchParams(url.searchParams),
    userAttributes: {
      urlPath: url.pathname,
    },
  });

  if (!builderContent && !isPreviewing) {
    throw error(404, "Page not found");
  }
  return builderContent;
});

export default component$(() => {
  const content = useBuilderContent();

  return (
    <RenderContent
      model={BUILDER_MODEL}
      content={content.value}
      apiKey={import.meta.env.PUBLIC_BUILDER_API_KEY}
      customComponents={CUSTOM_COMPONENTS}
    />
  );
});
