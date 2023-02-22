<script setup lang="ts">
import { io } from "socket.io-client";
import {ref} from 'vue';
import { useRoute } from 'vue-router';


const socket = io("127.0.0.1:3000");
socket.on("connect", () => {
  socketId.value = `Connection established with id: ${socket.id}`
});

const route = useRoute();
const comments = ref();
const socketId = ref();
const sentMsg = ref();
const receivedMsg = ref();
const userName = ref(route.query.name);


const submitHandler=(e:any)=>{
  e.preventDefault();
  sentMsg.value = comments.value;
  socket.emit('sendVal', comments.value);
}

socket.on('receiveVal', message=>{
  receivedMsg.value = message
})
</script>

<template>
  
  <div class="text-start p-3">
      <RouterLink to="/">
          Home
      </RouterLink>
  </div>
  <h2 class="text-center mt-3">Logged-In as {{ userName }}</h2>
  <p>Please enter your comment</p>
  <div class="row">
        <div class="card col-sm-6 mt-3">
            <img  class="card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title mb-3 float-start">Sender: {{ sentMsg }}</h5>
                <!-- <p class="card-text float-end">Reciever{{ receivedMsg }}</p> -->
            </div>
            <div class="card-body text-center">
                <h5 class="card-title mb-3 float-end">Reciever: {{ receivedMsg }}</h5>
            </div>
        </div>
    </div>
    <div class="row text-center">
      <div class="col-sm-4 mt-3">
        <input type="text" class="me-3" v-model="comments"/><a class="btn btn-primary" @click="submitHandler($event)">Send</a>
      </div>

    </div>
</template>