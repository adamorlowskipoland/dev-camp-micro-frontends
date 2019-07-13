import { registerApplication, start } from 'single-spa'


registerApplication(
  'vue-nav',
  () => import('./src/vue-nav/vue-nav.app.js'),
  () => true
);

registerApplication(
  'vue',
  () => import('./src/vue/vue.app.js'),
  () => {
    const $vue = document.getElementById("vue")
    if (!$vue) {
      const div = document.createElement("div");
      div.id = "vue";
      document.body.appendChild(div);
    }
    return location.pathname === "/react" ? false : true
  }
);

registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  () => location.pathname === "/vue"  ? false : true
);

start();
