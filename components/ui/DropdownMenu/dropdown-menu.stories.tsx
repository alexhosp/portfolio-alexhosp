import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
} from './dropdown-menu';

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  subcomponents: { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
};

export const Default = () => (
  <DropdownMenu>
    <DropdownMenuTrigger>Options</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem>Save</DropdownMenuItem>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Settings</DropdownMenuLabel>
      <DropdownMenuRadioGroup
        value='light'
        onValueChange={(value) => {
          console.log(value);
        }}
      >
        <DropdownMenuRadioItem value='light'>Light Theme</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value='dark'>Dark Theme</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem checked={true}>
        Enable Notifications
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
