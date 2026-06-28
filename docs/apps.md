---
layout: page
title: Apps & Services
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

import apps from './apps.json'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Apps & Services
    </template>
    <template #lead>
      Apps and services I build and maintain.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="apps"
  />
</VPTeamPage>
