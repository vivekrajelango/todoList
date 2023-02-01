<script setup>
import {ref} from 'vue';
import {useTodoStore} from '@/Stores/todo'

const storeTodo = useTodoStore();
const arrayItem = ref(storeTodo.todoItems)


const createNew=()=>{
    console.log('cicked')

    // document.body.addEventListener('click', clickBody, true);
}
const clickBody=()=>{

}
</script>
<template>
    <div class="container mt-5" @click="createNew">
        <div class="row">
            <RouterLink to="/">
                <a href="">Home</a> 
            </RouterLink>
            <RouterLink to="/users">
                <a href="">Back to users</a> 
            </RouterLink>
            <div class="col-3 mt-3" v-for="(item, index) in arrayItem">
                <div class="card text-white bg-primary mb-3">
                    <div class="card-header">{{ item.title }}{{ item.id }}
                        <span class="float-end" @click="storeTodo.removeItem(index)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                        </span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.subTitle }}</h5>
                        <p class="card-text">{{ item.content }}</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    

</template>