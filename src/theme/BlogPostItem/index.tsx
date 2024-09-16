import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import type BlogPostItemType from "@theme/BlogPostItem";
import type { WrapperProps } from "@docusaurus/types";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import Comments from "@site/src/components/Comments";

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): JSX.Element {
    const { metadata, isBlogPostPage } = useBlogPost();
    const { comments = true } = metadata.frontMatter;

    return (
        <>
            <script src="https://giscus.app/client.js"
                    data-repo="Invidam/Invidam.github.io"
                    data-repo-id="MDEwOlJlcG9zaXRvcnkzMjI2MjI3MzE="
                    data-category="Announcements"
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
            <BlogPostItem {...props} />
            {comments && isBlogPostPage && <Comments/>}
        </>
    );
}