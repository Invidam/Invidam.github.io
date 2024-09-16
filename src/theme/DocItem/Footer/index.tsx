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

            <script src="https://giscus.app/client.js"
                    data-repo="Invidam/Invidam.github.io"
                    data-repo-id="MDEwOlJlcG9zaXRvcnkzMjI2MjI3MzE="
                    data-category="General"
                    data-category-id="DIC_kwDOEzrVC84CigR6"
                    data-mapping="url"
                    data-strict="0"
                    data-reactions-enabled="1"
                    data-emit-metadata="0"
                    data-input-position="bottom"
                    data-theme="preferred_color_scheme"
                    data-lang="ko"
                    crossOrigin="anonymous"
                    async>
            </script>
            <h1>test123</h1>
            <DocItemFooter {...props} />
            {comments && <Comments/>}
        </>
    );
}