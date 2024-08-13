import { Font } from "~components/atoms";
import { IconButton } from "~components/molecules";
import { useSearchForm } from "~hooks";
import { renderElement, SetStyledComponent } from "~utils";

export function SearchForm() {
    const { register, errors, onSubmit } = useSearchForm();

    return (
        <SetStyledComponent
            as="form"
            onSubmit={onSubmit}
            $width="100%"
            $height="min-content"
            $padding={{ top: "sm", right: "xl", bottom: "sm", left: "xl" }}
            $borderRadius="secondary"
            $position="relative"
            $display="grid"
            $gridColumn={["max-content", "1fr"]}
            $gap={{ column: "sm" }}
            $placeItems="center"
            $background={{
                color: "secondary"
            }}
        >
            <IconButton
                icon="MagnifyingGlass"
                button={{
                    type: "submit"
                }}
                iconStyles={{
                    $iconSize: "secondary"
                }}
            />
            <SetStyledComponent
                as="input"
                type="search"
                placeholder="Pikachu, Pidgeot, Arceus..."
                spellCheck="false"
                autoComplete="off"
                $width="100%"
                $height="min-content"
                $border="none"
                $outline="none"
                $color="primary"
                $font="sm"
                {...register("search")}
            />
            {renderElement(
                !!errors.search,
                <Font
                    tag="p"
                    $position="absolute"
                    $zIndex={2}
                    $inset={{ top: "100%" }}
                    $color="brand"
                    $font="xs"
                >
                    {errors.search?.message}
                </Font>
            )}
        </SetStyledComponent>
    );
}
