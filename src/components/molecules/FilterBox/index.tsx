import { Button, Container } from "~components/atoms";
import { useFilterBox } from "~hooks";
import { FilterType } from "~types";
import { renderElement, replaceHyphensWithSpaces } from "~utils";

interface IFilterBoxProps {
    name: FilterType;
}

export function FilterBox({ name }: IFilterBoxProps) {
    const { visibility, handleClickToggleVisibility, handleClickFetchPokemonByFilter, options, optionColor } =
        useFilterBox(name);

    return (
        <Container
            tag="section"
            $width={8}
            $height="min-content"
            $borderRadius="primary"
            $position="relative"
            $background={{
                color: "secondary"
            }}
        >
            <Button
                onClick={handleClickToggleVisibility}
                $width="100%"
                $padding="sm"
                $font="sm"
                $textTransform="capitalize"
            >
                {name}
            </Button>
            {renderElement(
                visibility,
                <Container
                    tag="section"
                    $width="100%"
                    $height={10}
                    $borderRadius="primary"
                    $overflow={{ y: "scroll" }}
                    $position="absolute"
                    $zIndex={2}
                    $inset={{ top: "100%" }}
                    $display="flex"
                    $flexDirection="column"
                    $gap={{ row: "sm" }}
                    $background={{
                        color: "secondary"
                    }}
                    $scrollBar={{
                        size: "primary",
                        color: "brand",
                        bgColor: "transparent"
                    }}
                >
                    {options?.map(({ name }) => (
                        <Button
                            key={name}
                            onClick={() => handleClickFetchPokemonByFilter(name)}
                            $width="100%"
                            $padding="xs"
                            $color={optionColor(name)}
                            $font="xs"
                            $textTransform="capitalize"
                        >
                            {replaceHyphensWithSpaces(name)}
                        </Button>
                    ))}
                </Container>
            )}
        </Container>
    );
}
