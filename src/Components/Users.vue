<script setup>
import {useUserStore} from '@/Stores/user';

const storeUser = useUserStore();
</script>

<template>
    <div class="container">
        <div v-for="(user) in storeUser.userItems">


        <!-- <div class="user-title">{{ user.name }}</div> -->
        <router-link :to="{ name: 'user', params: { id: user.id }}">{{ user.name }}</router-link>
        <!-- <router-view></router-view> -->
        </div>

    </div>

</template>