import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './style.css'

createApp(App)
    .use(router)    
    .use(createPinia())
    .mount('#app')
    
//这些是不能自动注册的组件
// import { Pagination, PaginationList, PaginationListItem} from '@/components/ui/pagination'
// app.component("Pagination",Pagination)
//     .component("PaginationList",PaginationList)
//     .component("PaginationListItem",PaginationListItem)

