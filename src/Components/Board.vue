<script setup>
import {ref} from 'vue';
import {useTodoStore} from '@/Stores/todo'

const storeTodo = useTodoStore();
const arrayItem = ref(storeTodo.todoItems)
const newForm = ref(false);
const titleVal = ref();
const subTitleVal = ref();
const descVal = ref();
const colorButton = ref();

const createNew=()=>{
    newForm.value = true
}


const closeHandler=()=>{
    newForm.value = false
}

const formSubmit=(e)=>{
    const payload = {
        "id": arrayItem.value.length +1,
        "title": titleVal.value,
        "subTitle":subTitleVal.value,
        "type": colorButton.value.value,
        "content": descVal.value
    }
    console.log('xx', colorButton.value.value)
    storeTodo.addItem(payload)
    newForm.value = false;
    
}
</script>
<template>
    <div class="container mt-5 vh-100" v-on:click.self="createNew">
        <div class="row">
            <div class="text-end">
                <RouterLink to="/">
                    Logout
                </RouterLink>
            </div>
            
            <div class="col-3 mt-3" v-for="(item, index) in arrayItem">
                <div class="card text-white mb-3" :class="item.type">
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

    <div v-if="newForm" class="newForm">
        <div class="mt-3">
            <div class="card text-white bg-danger mb-3">
                <div class="card-header">Add new Items
                    <span class="float-end" @click="closeHandler">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                </div>
                <div class="card-body">
                    <form @submit.prevent="formSubmit">
                        <input type="text" name="title" v-model="titleVal" class="form-control my-2" id="floatingInput" placeholder="title" required>
                        <input type="text" name="subtitle"  v-model="subTitleVal" class="form-control my-2" id="floatingInput" placeholder="subtitle" required>
                        <input type="text" name="desc"  v-model="descVal" class="form-control my-2" id="floatingInput" placeholder="description" required>
                        <div>
                            <input type="radio" name="colorButton1" ref='colorButton' class="btn-check" id="btn-check-1" autocomplete="off" value="bg-primary">
                            <label class="btn btn-primary btn-sm " for="btn-check-1">Blue</label>

                            <input type="radio" name="colorButton2"  ref='colorButton' class="btn-check" id="btn-check-2" autocomplete="off" value="bg-secondary">
                            <label class="btn btn-secondary btn-sm " for="btn-check-2">Grey</label>

                            <input type="radio" name="colorButton3"  ref='colorButton' class="btn-check" id="btn-check-3" autocomplete="off" value="bg-success">
                            <label class="btn btn-success btn-sm " for="btn-check-3">Green</label>

                            <input type="radio" name="colorButton4"  ref='colorButton' class="btn-check" id="btn-check-4" autocomplete="off" value="bg-warning">
                            <label class="btn btn-warning btn-sm " for="btn-check-4">Yellow</label>
                        </div>
                        <div class="text-center mt-3">
                            <button class="btn btn-light px-5" type="submit">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    

</template>

<style>
.newForm{
    position: absolute;
    top: 50%;
    left:50%;
}
</style>