<template>
   <section>
      <div class="todoapp">
         <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" v-model="newItem" @keypress.enter="addItem()">
         </header>
         <!-- This section should be hidden by default and shown when there are todos -->
         <section class="main">
            <input class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
               <!-- These are here just to show the structure of the list items -->
               <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
               <li v-for="item in filtered" :class="{ completed: item.completed, editing: item.editing }">
                  <div class="view">
                     <input class="toggle" type="checkbox" v-model="item.completed">
                     <label @click="item.editing = true">{{item.text}}</label>
                     <button class="destroy" @click="removeItem( item )"></button>
                  </div>
                  <input class="edit" v-model="item.text" @blur="item.editing = false">
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
                  <a :class="{ selected: filter === 'all' }" @click="filter = 'all'" href="#3">All</a>
               </li>
               <li>
                  <a :class="{ selected: filter === 'active' }" @click="filter = 'active'" href="#3/active">Active</a>
               </li>
               <li>
                  <a :class="{ selected: filter === 'completed' }" @click="filter = 'completed'" href="#3/completed">Completed</a>
               </li>
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button class="clear-completed" v-if="completed.length" @click="clearCompleted">Clear completed</button>
         </footer>
      </div>
   </section>
</template>
<script>

export default {
   computed: {
      all() {
         return this.items;
      },
      active() {
         return this.items.filter( item => !item.completed );
      },
      completed() {
         return this.items.filter( item => item.completed );
      },
      filtered() {
         return this[this.filter];
      }
   },
   data() {
      return {
         filter: 'all',
         newItem: '',
         items: [
            {
               editing: false,
               completed: true,
               text: 'Taste JavaScript'
            },
            {
               editing: false,
               completed: false,
               text: 'Buy a unicorn'
            }
         ]
      };
   },
   methods: {
      addItem() {
         if( this.newItem ) {
            const item = {
               editing: false,
               completed: false,
               text: this.newItem
            };
            this.items.push( item );
            this.newItem = '';
         }
      },
      clearCompleted() {
         this.completed.forEach( item => { this.removeItem( item ) } );
      },
      removeItem( item ) {
         const index = this.items.indexOf( item );
         if( index >= 0 ) {
            this.items.splice( index, 1 );
         }
      }
   }
}

</script>
<style scoped>
</style>
