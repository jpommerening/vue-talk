<template>
   <section>
      <div class="todoapp">
         <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus>
         </header>
         <!-- This section should be hidden by default and shown when there are todos -->
         <section class="main">
            <input class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
               <!-- These are here just to show the structure of the list items -->
               <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
               <li class="completed">
                  <div class="view">
                     <input class="toggle" type="checkbox" checked>
                     <label>Taste JavaScript</label>
                     <button class="destroy"></button>
                  </div>
                  <input class="edit" value="Create a TodoMVC template">
               </li>
               <li>
                  <div class="view">
                     <input class="toggle" type="checkbox">
                     <label>Buy a unicorn</label>
                     <button class="destroy"></button>
                  </div>
                  <input class="edit" value="Rule the web">
               </li>
               <!--
               <li v-for="item in items" :class="{ editing: item.editing, completed: item.completed }">
                  <div class="view">
                     <input class="toggle" type="checkbox" v-model="item.completed">
                     <label @click="item.editing = true">{{item.text}}</label>
                     <button class="destroy" @click="items.splice( items.indexOf( item ), 1 )"></button>
                  </div>
                  <input class="edit" v-model="item.text" @blur="item.editing = false">
               </li>
               -->
            </ul>
         </section>
         <!-- This footer should hidden by default and shown when there are todos -->
         <footer class="footer">
            <!-- This should be `0 items left` by default -->
            <span class="todo-count"><strong>0</strong> item left</span>
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
               <li>
                  <a class="selected" href="#/">All</a>
               </li>
               <li>
                  <a href="#/active">Active</a>
               </li>
               <li>
                  <a href="#/completed">Completed</a>
               </li>
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button class="clear-completed">Clear completed</button>
         </footer>
      </div>
   </section>
</template>
<script>

export default {
   data() {
      return {
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
         const item = {
            editing: false,
            completed: false,
            text: this.newItem
         };
         this.items.push( item );
         this.newItem = '';
      }
   }
}

</script>
