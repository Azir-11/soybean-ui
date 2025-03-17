import { createContext } from '@soybean-ui/primitives';
import type { SidebarContext } from './types';

export const [provideSidebarContext, useSidebar] = createContext<SidebarContext>('Sidebar');
