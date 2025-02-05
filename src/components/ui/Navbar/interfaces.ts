import { iconComponents } from "../../../constants";
import { ListItem } from "../../../types/types";

export type IconName = keyof typeof iconComponents;

export interface IconProps {
    iconName: IconName;
}

export interface ListItemIf {
    title: string;
    icon: string;
    url: string;
}

export interface NavbarListItemProps {
    listItem: ListItem[]
}