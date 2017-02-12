import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from './pages/index.vue';
import PostPage from './pages/post.vue';
import TagsPage from './pages/tags.vue';
import AboutPage from './pages/about.vue';
import ArchivePage from './pages/archive.vue';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: IndexPage
    },
    {
      path: '/post',
      name: 'post',
      component: PostPage
    },
    {
      path: '/tags',
      name: 'tags',
      component: TagsPage
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchivePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
});