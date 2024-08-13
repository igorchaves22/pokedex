import { IPhosphorIcon, IStyleProps } from "~types";
import { PhosphorIcon, SetStyledComponent } from "~utils";

interface IIconProps extends IPhosphorIcon, IStyleProps {}

export function Icon({ icon, ...rest }: IIconProps) {
    return (
        <SetStyledComponent
            as={PhosphorIcon[icon] as React.ComponentType<React.SVGProps<SVGSVGElement>>}
            $display="block"
            $iconSize="primary"
            {...rest}
        />
    );
}
