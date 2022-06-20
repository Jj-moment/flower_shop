import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import * as ElIconModules from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
for(let iconName in ElIconModules){
    app.component(iconName,ElIconModules[iconName])
}
app.use(ElementPlus);
app.use(router);
app.mount("#app");
