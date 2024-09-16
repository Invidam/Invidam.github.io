import React from "react";
import DocItemFooter from "@theme-original/DocItem/Footer";
import type DocItemFooterType from "@theme/DocItem/Footer";
import type { WrapperProps } from "@docusaurus/types";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import Comments from "@site/src/components/Comments";

type Props = WrapperProps<typeof DocItemFooterType>;

export default function DocItemFooterWrapper(props: Props): JSX.Element {
    const { metadata } = useDoc();
    const { comments = true } = metadata.frontMatter;

    return (
        <>
            <h1>test123</h1>
            <DocItemFooter {...props} />
            {comments && <Comments/>}
        </>
    );
}