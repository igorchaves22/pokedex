import { Container, Font, Icon, Link } from "~components/atoms";
import { myLinks } from "~utils";

export function Footer() {
    return (
        <Container
            tag="footer"
            $padding={{ top: "mega", right: "md", bottom: "mega", left: "md" }}
            $display="grid"
            $gridColumn="100%"
            $gap={{ row: "xl" }}
        >
            <Font
                tag="h4"
                $font="lg"
            >
                Developed by Igor
            </Font>
            <Container
                tag="section"
                $width="100%"
                $height="min-content"
                $display="flex"
                $flexWrap="wrap"
                $gap={{ row: "md", column: "xxl" }}
                $placeContent="center"
            >
                {myLinks.map(({ url, icon, title }) => (
                    <Link
                        key={title}
                        to={url}
                        target="_blank"
                        $width="max-content"
                        $height="min-content"
                        $display="grid"
                        $gridColumn="100%"
                        $gap={{ row: "xs" }}
                        $placeItems="center"
                    >
                        <Icon
                            icon={icon}
                            $iconSize="secondary"
                        />
                        <Font
                            tag="span"
                            $font="xs"
                        >
                            {title}
                        </Font>
                    </Link>
                ))}
            </Container>
        </Container>
    );
}
