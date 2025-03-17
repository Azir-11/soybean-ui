<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import {
  SBreadcrumb,
  SButtonIcon,
  SButtonLink,
  SCollapsibleContent,
  SCollapsibleRoot,
  SCollapsibleTrigger,
  SDropdownMenu,
  SLabel,
  SPopover,
  SRadioGroup,
  SSeparator,
  SSidebarContent,
  SSidebarGroup,
  SSidebarGroupLabel,
  SSidebarHeader,
  SSidebarInset,
  SSidebarMenu,
  SSidebarMenuButton,
  SSidebarMenuItem,
  SSidebarMenuSub,
  SSidebarMenuSubButton,
  SSidebarMenuSubItem,
  SSidebarProvider,
  SSidebarRail,
  SSidebarRoot,
  SSidebarTrigger,
  STooltip
} from 'soy-ui';
import type { MenuOptionData, RadioGroupItemProps, SidebarCollapsible, SidebarVariant } from 'soy-ui';
import {
  AudioWaveform,
  BadgeCheck,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  SwatchBook
} from 'lucide-vue-next';
import ThemeToggle from '@/components/theme-toggle.vue';

defineOptions({
  name: 'DemoSidebar'
});

const teams: MenuOptionData[] = [
  {
    label: 'Acme Inc',
    value: 'acme-inc',
    icon: GalleryVerticalEnd
  },
  {
    label: 'Acme Corp.',
    value: 'acme-corp',
    icon: AudioWaveform
  },
  {
    label: 'Evil Corp.',
    value: 'evil-corp',
    icon: Command
  }
];

const menus: MenuOptionData[] = [
  {
    label: 'Platform',
    value: 'platform',
    isGroupLabel: true,
    icon: BadgeCheck,
    children: [
      {
        label: 'Playground',
        value: 'playground',
        icon: SquareTerminal,
        children: [
          {
            label: 'History',
            value: 'history'
          },
          {
            label: 'Starred',
            value: 'starred'
          },
          {
            label: 'Settings',
            value: 'settings'
          }
        ]
      },
      {
        label: 'Models',
        value: 'models',
        icon: Bot,
        children: [
          {
            label: 'Genesis',
            value: 'genesis'
          },
          {
            label: 'Explorer',
            value: 'explorer'
          },
          {
            label: 'Quantum',
            value: 'quantum'
          }
        ]
      },
      {
        label: 'Documentation',
        value: 'documentation',
        icon: BookOpen,
        children: [
          {
            label: 'Introduction',
            value: 'introduction'
          },
          {
            label: 'Get Started',
            value: 'get-started'
          },
          {
            label: 'Tutorials',
            value: 'tutorials'
          },
          {
            label: 'Changelog',
            value: 'changelog'
          }
        ]
      },
      {
        label: 'Settings',
        value: 'settings',
        icon: Settings2,
        children: [
          {
            label: 'General',
            value: 'general'
          },
          {
            label: 'Team',
            value: 'team'
          },
          {
            label: 'Billing',
            value: 'billing'
          },
          {
            label: 'Limits',
            value: 'limits'
          }
        ]
      }
    ]
  },
  {
    label: 'Projects',
    value: 'projects',
    icon: Frame,
    children: [
      {
        label: 'Design Engineering',
        value: 'design-engineering',
        icon: Frame
      },
      {
        label: 'Sales & Marketing',
        value: 'sales-marketing',
        icon: PieChart
      },
      {
        label: 'Travel',
        value: 'travel',
        icon: Map
      }
    ]
  }
];

const activeTeam = ref(teams[0]) as Ref<MenuOptionData>;

function setActiveTeam(_event: Event, team: MenuOptionData) {
  activeTeam.value = team;
}

const variant = ref<SidebarVariant>('floating');

const variants: RadioGroupItemProps[] = [
  {
    label: 'Sidebar',
    value: 'sidebar'
  },
  {
    label: 'Inset',
    value: 'inset'
  },
  {
    label: 'Floating',
    value: 'floating'
  }
];

const collapsible = ref<SidebarCollapsible>('icon');

const collapsibleOptions: RadioGroupItemProps[] = [
  {
    label: 'Icon',
    value: 'icon'
  },
  {
    label: 'Offcanvas',
    value: 'offcanvas'
  },
  {
    label: 'None',
    value: 'none'
  }
];
</script>

<template>
  <SSidebarProvider v-slot="{ isMobile }">
    <SSidebarRoot v-slot="{ dataCollapsible }" :variant="variant" :collapsible="collapsible">
      <SSidebarHeader>
        <SSidebarMenu>
          <SSidebarMenuItem>
            <SDropdownMenu
              :items="teams"
              content-class="w-[var(--soybean-popper-anchor-width)]"
              @select="setActiveTeam"
            >
              <template #trigger>
                <SSidebarMenuButton
                  size="lg"
                  class="h-12 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:!p-0"
                >
                  <div
                    class="aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                  >
                    <component :is="activeTeam.icon" class="size-4" />
                  </div>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ activeTeam.label }}</span>
                  </div>
                  <ChevronsUpDown class="ml-auto" />
                </SSidebarMenuButton>
              </template>
            </SDropdownMenu>
          </SSidebarMenuItem>
        </SSidebarMenu>
      </SSidebarHeader>

      <SSidebarContent>
        <SSidebarGroup v-for="item in menus" :key="item.label">
          <SSidebarGroupLabel>{{ item.label }}</SSidebarGroupLabel>
          <SSidebarMenu>
            <template v-for="subItem in item.children" :key="subItem.label">
              <template v-if="subItem.children">
                <SDropdownMenu
                  v-if="dataCollapsible === 'icon' && !isMobile"
                  :items="subItem.children"
                  side="right"
                  show-arrow
                >
                  <template #trigger>
                    <SSidebarMenuItem class="group/collapsible">
                      <SSidebarMenuButton>
                        <component :is="subItem.icon" />
                        <span>{{ subItem.label }}</span>
                      </SSidebarMenuButton>
                    </SSidebarMenuItem>
                  </template>
                </SDropdownMenu>
                <SCollapsibleRoot v-else as-child class="group/collapsible">
                  <SSidebarMenuItem>
                    <SCollapsibleTrigger as-child>
                      <SSidebarMenuButton>
                        <component :is="subItem.icon" />
                        <span>{{ subItem.label }}</span>
                        <ChevronRight
                          class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                        />
                      </SSidebarMenuButton>
                    </SCollapsibleTrigger>
                    <SCollapsibleContent>
                      <SSidebarMenuSub>
                        <SSidebarMenuSubItem v-for="subItem2 in subItem.children" :key="subItem2.label">
                          <SSidebarMenuSubButton as-child>
                            <span>{{ subItem2.label }}</span>
                          </SSidebarMenuSubButton>
                        </SSidebarMenuSubItem>
                      </SSidebarMenuSub>
                    </SCollapsibleContent>
                  </SSidebarMenuItem>
                </SCollapsibleRoot>
              </template>
              <SSidebarMenuItem v-else>
                <STooltip :disabled="dataCollapsible !== 'icon'" side="right" show-arrow>
                  <template #trigger>
                    <SSidebarMenuButton>
                      <component :is="subItem.icon" />
                      <span>{{ subItem.label }}</span>
                    </SSidebarMenuButton>
                  </template>
                  {{ subItem.label }}
                </STooltip>
              </SSidebarMenuItem>
            </template>
          </SSidebarMenu>
        </SSidebarGroup>
      </SSidebarContent>

      <SSidebarRail />
    </SSidebarRoot>

    <SSidebarInset>
      <header class="h-16 flex shrink-0 items-center gap-2 border-b px-4">
        <SSidebarTrigger class="-ml-1" />
        <SSeparator orientation="vertical" class="mr-2 h-4" />
        <SBreadcrumb
          v-if="!isMobile"
          :items="[
            {
              label: 'Building Your Application',
              value: 'building-your-application',
              url: '#'
            },
            {
              label: 'Data Fetching',
              value: 'data-fetching',
              url: '#'
            }
          ]"
          class="truncate"
        />
        <div class="ml-auto flex-y-center gap-4">
          <SButtonLink to="/">Go back to home</SButtonLink>
          <SPopover v-if="!isMobile" align="end">
            <template #trigger>
              <SButtonIcon size="lg">
                <SwatchBook />
              </SButtonIcon>
            </template>
            <div class="flex-y-center justify-between gap-2">
              <SLabel>Variant</SLabel>
              <SRadioGroup
                v-model="variant"
                :items="variants as RadioGroupItemProps[]"
                placeholder="Select variant"
                trigger-class="w-120px!"
              />
            </div>
            <div class="mt-3 flex-y-center justify-between gap-2">
              <SLabel>Collapsible</SLabel>
              <SRadioGroup
                v-model="collapsible"
                :items="collapsibleOptions as RadioGroupItemProps[]"
                placeholder="Select collapsible"
                trigger-class="w-120px!"
              />
            </div>
          </SPopover>
          <ThemeToggle />
        </div>
      </header>

      <div class="flex flex-1 flex-col gap-4 p-4">
        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </SSidebarInset>
  </SSidebarProvider>
</template>
