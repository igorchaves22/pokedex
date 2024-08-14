import { useContext } from "react";
import { IconButton } from "~components/molecules";
import { ScreenContext } from "~contexts";
import { renderElement } from "~utils";

export function ScrollToTopButton() {
    const { renderScrollToTopButton, handleClickScrollToTop } = useContext(ScreenContext);

    return renderElement(
        renderScrollToTopButton,
        <IconButton
            icon="CaretUp"
            button={{
                onClick: () => handleClickScrollToTop(),
                $width: "max-content",
                $height: "max-content",
                $padding: "xs",
                $border: {
                    size: "primary",
                    color: "primary"
                },
                $borderRadius: "100%",
                $position: "fixed",
                $zIndex: 5,
                $inset: {
                    top: "auto",
                    right: "lg",
                    bottom: "lg",
                    left: "auto"
                },
                $background: {
                    color: "main"
                },
                $cursor: "pointer",
                $animation: {
                    name: "simpleRender",
                    duration: "primary",
                    iteration: "normal"
                }
            }}
            iconStyles={{
                $iconSize: "secondary"
            }}
        />
    );
}
