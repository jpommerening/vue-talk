<template>
   <section>
      <div class="todoapp">
         <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" v-model="newItem" @keypress.enter="add">
         </header>
         <!-- This section should be hidden by default and shown when there are todos -->
         <section class="main">
            <input class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
               <!-- These are here just to show the structure of the list items -->
               <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
               <li v-for="item in items" :class="{ completed: item.completed, editing: item.editing }">
                  <div class="view">
                     <input class="toggle" type="checkbox" v-model="item.completed" @change="complete( item, arguments[ 0 ].target.checked )">
                     <label @click="edit( item )">{{item.text}}</label>
                     <button class="destroy" @click="remove( item )"></button>
                  </div>
                  <input class="edit" v-model="item.text" @blur="edit( item, false )">
               </li>
            </ul>
         </section>
         <!-- This footer should hidden by default and shown when there are todos -->
         <footer class="footer" v-if="all.length">
            <!-- This should be `0 items left` by default -->
            <span class="todo-count"><strong>{{active.length}}</strong> item left</span>
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
               <li>
                  <a :class="{ selected: selected === 'all' }" href="#/" @click.prevent="selected = 'all'">All</a>
               </li>
               <li>
                  <a :class="{ selected: selected === 'active' }" href="#/active" @click.prevent="selected = 'active'">Active</a>
               </li>
               <li>
                  <a :class="{ selected: selected === 'completed' }" href="#/completed" @click.prevent="selected = 'completed'">Completed</a>
               </li>
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button class="clear-completed">Clear completed</button>
         </footer>
      </div>
   </section>
</template>

<style scoped>
</style>

<script>

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
   state: {
      items: []
   },
   getters: {
      items: state => state.items,
      completed: (state, getters) =>
         getters.items.filter( item => item.completed ),
      active: (state, getters) =>
         getters.items.filter( item => !item.completed )
   },
   mutations: {
      add( state, { text } ) {
         state.items.unshift( {
            text,
            editing: false,
            completed: false
         } );
      },
      complete( state, { item, completed = true } ) {
         item.completed = completed;
      },
      edit( state, { item, editing = true } ) {
         item.editing = editing;
      },
      remove( state, { item } ) {
         state.items.splice( state.items.indexOf( item ), 1 );
      }
   }
});

export default {
   data() {
      return {
         newItem: '',
         selected: 'all'
      };
   },
   store,
   computed: Object.assign({
      items() {
         return this[ this.selected ];
      }
   }, Vuex.mapGetters({
      all: 'items',
      completed: 'completed',
      active: 'active'
   })),
   methods: {
      add() {
         this.$store.commit('add', { text: this.newItem });
         this.newItem = '';
      },
      remove( item ) {
         this.$store.commit('remove', { item });
      },
      complete( item, completed ) {
         this.$store.commit('complete', { item, completed });
      },
      edit( item, editing ) {
         this.$store.commit('edit', { item, editing });
      }
   }
}

</script>
