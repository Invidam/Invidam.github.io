import React from "react";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common";

export default function Comments(): JSX.Element {
    const {colorMode} = useColorMode();

    return (
        <div>
            <Giscus
                id="comments"
                repo="Invidam/Invidam.github.io"
                repoId="MDEwOlJlcG9zaXRvcnkzMjI2MjI3MzE="
                category="Announcements"
                categoryId="DIC_kwDOEzrVC84CigR6"
                mapping="url"
                strict="0"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme={colorMode === "dark" ? "dark" : "light"}
                lang="ko"
                loading="lazy"
            />
        </div>
    );
}