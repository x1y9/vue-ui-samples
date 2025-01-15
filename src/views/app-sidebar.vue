
<script setup lang="ts">
import { useAppStore } from '@/store'
const appStore = useAppStore()
</script>
<template>
    <SidebarProvider :defaultOpen="!appStore.sidebarCollapse">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <!-- size="lg"大小更好，但收起时不好看 -->
          <SidebarMenuButton>
            <i-wpf-audiowave />
            <div className="grid flex-1 text-left text-sm">
              <span>Acme Inc</span>
              <span className="text-xs">Enterprise</span>
            </div>
          </SidebarMenuButton>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <RouterLink to="/dashboard"><i-wpf-audiowave />Dashboard</RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>                
                <SidebarMenuButton as-child>
                  <RouterLink to="/setting"><i-basil-picture-outline />Setting</RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <RouterLink to="/login"><i-basil-palette-outline />Login</RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <RouterLink to="/404"><i-basil-processor-outline />404</RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <SidebarMenuButton size="lg" class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                    <div class="grid flex-1 text-left text-sm leading-tight">
                      <span class="truncate font-semibold">name</span>
                      <span class="truncate text-xs">someone@xyz.com</span>
                    </div>
                    <i-lucide-chevrons-up-down class="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom" align="end" :side-offset="4">
                  <DropdownMenuItem><i-mdi-sparkles-outline />Upgrade to Pro</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem><i-f7-text-badge-checkmark/>Account</DropdownMenuItem>
                    <DropdownMenuItem><i-majesticons-creditcard-line/>Billing</DropdownMenuItem>
                    <DropdownMenuItem><i-lets-icons-bell-light/>Notifications</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><i-mynaui-logout/>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <slot />
      </SidebarInset>
    </SidebarProvider>
  </template>