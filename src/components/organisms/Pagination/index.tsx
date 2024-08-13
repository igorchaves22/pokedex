import { Container, Font } from "~components/atoms";
import { IconButton } from "~components/molecules";
import { usePagination } from "~hooks";
import { renderElement } from "~utils";

export function Pagination() {
    const {
        renderPagination,
        currentPage,
        totalPage,
        handleClickToFirstPage,
        handleClickToPrevPage,
        handleClickToNextPage,
        handleClickToLastPage
    } = usePagination();

    return renderElement(
        renderPagination,
        <Container
            tag="section"
            $width="100%"
            $height="min-content"
            $display="flex"
            $flexWrap="wrap"
            $gap="sm"
            $placeContent="center"
            $placeItems="center"
        >
            <IconButton
                icon="CaretDoubleLeft"
                button={{
                    onClick: handleClickToFirstPage
                }}
            />
            <IconButton
                icon="CaretLeft"
                button={{
                    onClick: handleClickToPrevPage
                }}
            />
            <Font
                tag="p"
                $width="max-content"
            >{`${currentPage} / ${totalPage}`}</Font>
            <IconButton
                icon="CaretRight"
                button={{
                    onClick: handleClickToNextPage
                }}
            />
            <IconButton
                icon="CaretDoubleRight"
                button={{
                    onClick: handleClickToLastPage
                }}
            />
        </Container>
    );
}
