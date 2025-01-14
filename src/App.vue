<script setup lang="ts">

</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup class="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <RouterLink to="/diashboard">
                <SidebarMenuButton><i-wpf-audiowave />Dashboard</SidebarMenuButton>
              </RouterLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <RouterLink to="/setting">
                <SidebarMenuButton><i-basil-picture-outline />Setting</SidebarMenuButton>
              </RouterLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <RouterLink to="/login">
                <SidebarMenuButton><i-basil-palette-outline />Login</SidebarMenuButton>
              </RouterLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <RouterLink to="/404">
                <SidebarMenuButton><i-basil-processor-outline />404</SidebarMenuButton>
              </RouterLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <RouterView />
    </SidebarInset>
  </SidebarProvider>
</template>