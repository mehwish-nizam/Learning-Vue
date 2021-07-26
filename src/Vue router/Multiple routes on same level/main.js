import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import usersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/teams"
      // We can also add any separatr component here But that will not change url Redirect will...
    },
    {
      name: "teams",
      path: "/teams",
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      //alias: "/" // Usign alias will load this component on '/' without changing url
      children: [
        // To load the component on the same page configure children here and
        // Then use <router-view></router-view> inside the parent component i.e TeamsList here
        {
          name: "team-members",
          // This object should always be placed after object with path of '/teams' or '/teams/something' if not used as achild
          path: ":teamId",
          //Any thing in the url after /teams/ will be treated ad teamID
          // We can access what's stored in teamId by using (this.$route.params.teamId) in that component i.e TeamMembers
          component: TeamMembers,
          props: true // To load component using prop in both cases via prop or via route
        }
      ]
    },
    {
      path: "/users",
      components: {
        default: usersList,
        footer: UsersFooter
      }
    },

    {
      path: "/:notFound(.*)", //should always be placed at last
      //component: NotFound, To load error page if you have
      redirect: "/users" // to redirect to other route
    }
  ]
  //linkActiveClass: 'activelink',
  // We can change link-active-class to any classname of our choice and style it usng this class
  //linkExactActiveClass: 'exactactivelink' //Similar case as linkActiveClass
});

const app = createApp(App)
app.use(router);
app.mount('#app');

