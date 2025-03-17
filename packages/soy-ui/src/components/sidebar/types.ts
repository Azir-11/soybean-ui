import type { ComputedRef, Ref } from 'vue';
import type { ClassValue, ClassValueProp, PrimitiveProps } from '@soybean-ui/primitives';
import type { SidebarCollapsible, SidebarSide, SidebarVariant } from '@soybean-ui/variants';
import type { SeparatorProps } from '../separator/types';

export interface SidebarContext {
  state: ComputedRef<SidebarState>;
  open: Ref<boolean>;
  setOpen: (value: boolean) => void;
  isMobile: Ref<boolean>;
  openMobile: Ref<boolean>;
  setOpenMobile: (value: boolean) => void;
  toggleSidebar: () => void;
}

export interface SidebarProviderProps extends ClassValueProp {
  open?: boolean;
  defaultOpen?: boolean;
}

export type SidebarProviderEmits = {
  'update:open': [value: boolean];
};

export interface SidebarRootProps extends ClassValueProp {
  side?: SidebarSide;
  variant?: SidebarVariant;
  collapsible?: SidebarCollapsible;
  mobileSheetClass?: ClassValue;
  wrapperClass?: ClassValue;
}

export interface SidebarSheetProps extends ClassValueProp {
  side?: SidebarSide;
  sheetClass?: ClassValue;
}

export interface SidebarHeaderProps extends ClassValueProp {}

export interface SidebarContentProps extends ClassValueProp {}

export interface SidebarInsetProps extends ClassValueProp {}

export interface SidebarFooterProps extends ClassValueProp {}

export interface SidebarGroupProps extends ClassValueProp {}

export interface SidebarGroupLabelProps extends ClassValueProp {}

export interface SidebarGroupActionProps extends ClassValueProp {}
export interface SidebarGroupActionPropsWithPrimitive extends SidebarGroupActionProps, PrimitiveProps {}

export interface SidebarGroupContentProps extends ClassValueProp {}

export interface SidebarMenuProps extends ClassValueProp {}

export interface SidebarMenuItemProps extends ClassValueProp {}

export interface SidebarMenuButtonProps extends ClassValueProp {}
export interface SidebarMenuButtonPropsWithPrimitive extends SidebarMenuButtonProps, PrimitiveProps {}

export interface SidebarMenuButtonChildProps extends ClassValueProp {}

export interface SidebarMenuSubButtonProps extends ClassValueProp {}
export interface SidebarMenuSubButtonPropsWithPrimitive extends SidebarMenuSubButtonProps, PrimitiveProps {}

export interface SidebarMenuActionProps extends ClassValueProp {
  showOnHover?: boolean;
}
export interface SidebarMenuActionPropsWithPrimitive extends SidebarMenuActionProps, PrimitiveProps {}

export interface SidebarMenuBadgeProps extends ClassValueProp {}

export interface SidebarMenuSkeletonProps extends ClassValueProp {
  showIcon?: boolean;
  iconClass?: ClassValue;
  textClass?: ClassValue;
}

export interface SidebarMenuSubProps extends ClassValueProp {}

export interface SidebarMenuSubItemProps extends ClassValueProp {}

export type SidebarState = 'expanded' | 'collapsed';

export interface SidebarRailProps extends ClassValueProp {}

export interface SidebarSeparatorProps extends SeparatorProps {}

export interface SidebarTriggerProps extends ClassValueProp {}

export type { SidebarVariant, SidebarCollapsible, SidebarSide };
