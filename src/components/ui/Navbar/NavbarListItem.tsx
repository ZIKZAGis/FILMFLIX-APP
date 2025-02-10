import { Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { IconProps, ListItemIf, NavbarListItemProps } from './interfaces'
import { iconComponents } from '../../../constants'
import { FC } from 'react';

const Icon = ({iconName}: IconProps) => {
  const IconComponent = iconComponents[iconName]
  return <IconComponent />;
};

export const NavbarListItem:FC<NavbarListItemProps> = ({listItem}) => {
  return (
    <List>
      {listItem.map((item: ListItemIf) => (
          <Link key={item.title} component={RouterLink} to={item.url}>
              <ListItem disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                          <Icon iconName={item.icon}/>
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                  </ListItemButton>
              </ListItem>
          </Link>
      ))}
    </List>
  )
}
