import logoIcon from "~assets/icon/logo.svg";
import { Container, Image, Link } from "~components/atoms";
import { IconButton } from "~components/molecules";
import { useNavbar } from "~hooks";
import { renderElement } from "~utils";

export function Navbar() {
    const {
        itsOnSmallScreen,
        menuIcon,
        renderNavigation,
        handleClickToggleVisibility,
        navigablePages,
        color,
        themeStatusIcon,
        handleClickToggleTheme
    } = useNavbar();

    return (
        <Container
            tag="header"
            $padding={{ top: "sm", right: "md", bottom: "sm", left: "md" }}
            $position="fixed"
            $zIndex={10}
            $display="grid"
            $gridColumn="max_width"
            $placeContent="center"
            $background={{
                color: "main"
            }}
        >
            <Container
                tag="nav"
                $display="flex"
                $flexWrap="wrap"
                $placeContent="space-between"
                $placeItems="center"
                $media={{
                    breakpoint: "md",
                    styles: {
                        $display: "grid",
                        $gridColumn: ["1fr", "2fr", "1fr"]
                    }
                }}
            >
                <Image
                    src={logoIcon}
                    alt="Logo"
                    $width={10}
                    $height="min-content"
                />
                {renderElement(
                    itsOnSmallScreen,
                    <IconButton
                        icon={menuIcon}
                        button={{
                            onClick: handleClickToggleVisibility
                        }}
                        iconStyles={{
                            $animation: {
                                name: "simpleRender",
                                duration: "primary",
                                iteration: "normal"
                            }
                        }}
                    />
                )}
                {renderElement(
                    renderNavigation,
                    <>
                        <Container
                            tag="ul"
                            $width="100%"
                            $height="min-content"
                            $display="flex"
                            $flexDirection="column"
                            $gap={{ row: "xs", column: "xl" }}
                            $placeItems="end"
                            $media={{
                                breakpoint: "md",
                                styles: {
                                    $flexDirection: "row",
                                    $placeContent: "center"
                                }
                            }}
                        >
                            {navigablePages.map(({ path, title }, index) => (
                                <Container
                                    tag="li"
                                    key={path}
                                    $width="max-content"
                                    $listStyle="none"
                                    $animation={{
                                        name: "renderFromRight",
                                        duration: "primary",
                                        iteration: "normal",
                                        delay: index / (navigablePages.length + index),
                                        fillMode: "forwards"
                                    }}
                                    $media={{
                                        breakpoint: "md",
                                        styles: {
                                            $margin: {},
                                            $animation: {
                                                name: "renderFromTop",
                                                duration: "primary",
                                                iteration: "normal",
                                                delay: 0,
                                                fillMode: "forwards"
                                            }
                                        }
                                    }}
                                >
                                    <Link
                                        to={path}
                                        onClick={handleClickToggleVisibility}
                                        $color={color(path)}
                                        $font="lg"
                                    >
                                        {title}
                                    </Link>
                                </Container>
                            ))}
                        </Container>
                        <IconButton
                            icon={themeStatusIcon}
                            button={{
                                onClick: () => handleClickToggleTheme(),
                                $margin: { left: "auto" },
                                $animation: {
                                    name: "renderFromRight",
                                    duration: "primary",
                                    iteration: "normal",
                                    delay:
                                        (navigablePages.length + 1) /
                                        (navigablePages.length + 1 + (navigablePages.length + 1)),
                                    fillMode: "forwards"
                                },
                                $media: {
                                    breakpoint: "md",
                                    styles: {
                                        $margin: {},
                                        $animation: {
                                            name: "renderFromTop",
                                            duration: "primary",
                                            iteration: "normal",
                                            delay: 0,
                                            fillMode: "forwards"
                                        }
                                    }
                                }
                            }}
                        />
                    </>
                )}
            </Container>
        </Container>
    );
}
