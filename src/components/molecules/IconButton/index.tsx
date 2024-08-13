import { Button, Icon } from "~components/atoms";
import { ButtonType, IPhosphorIcon, IStyleProps } from "~types";

interface IIconButtonProps extends IPhosphorIcon {
    button?: IStyleProps | ButtonType;
    iconStyles?: IStyleProps | IPhosphorIcon;
}

export function IconButton({ button, icon, iconStyles }: IIconButtonProps) {
    return (
        <Button {...button}>
            <Icon
                icon={icon}
                {...iconStyles}
            />
        </Button>
    );
}
