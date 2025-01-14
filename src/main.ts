import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Pagination, PaginationList, PaginationListItem} from '@/components/ui/pagination'
import './style.css'


const app = createApp(App)

//这些是不能自动注册的组件
app.component("Pagination",Pagination)
    .component("PaginationList",PaginationList)
    .component("PaginationListItem",PaginationListItem)
app.use(router)    
app.mount('#app')
