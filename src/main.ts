import { createApp } from 'vue'
import App from './App.vue'

import { Pagination, PaginationList, PaginationListItem} from '@/components/ui/pagination'
import { Check, ChevronsUpDown, CircleUser, Copy, CreditCard, 
    File, GalleryVerticalEnd,
    Home, LineChart, ListFilter, MoreVertical, 
    Package, Package2, PanelLeft, 
    Search, Settings, ShoppingCart, 
    Truck, Users2 } from 'lucide-vue-next'
import './style.css'


const app = createApp(App)

//这些是不能自动注册的组件
app.component("Pagination",Pagination)
    .component("PaginationList",PaginationList)
    .component("PaginationListItem",PaginationListItem)
    .component("Check",Check)
    .component("ChevronsUpDown",ChevronsUpDown)
    .component("CircleUser",CircleUser)
    .component("Copy",Copy)
    .component("CreditCard",CreditCard)
    .component("File",File)
    .component("GalleryVerticalEnd",GalleryVerticalEnd)
    .component("Home",Home)
    .component("LineChart",LineChart)
    .component("ListFilter",ListFilter)
    .component("MoreVertical",MoreVertical)
    .component("Package",Package)
    .component("Package2",Package2)
    .component("PanelLeft",PanelLeft)
    .component("Search",Search)
    .component("Settings",Settings)
    .component("ShoppingCart",ShoppingCart)
    .component("Truck",Truck)
    .component("Users2",Users2)
app.mount('#app')
