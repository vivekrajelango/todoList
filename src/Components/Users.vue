<script>
import Draggable from "vue3-draggable";

export default {
    components: {
        Draggable,
    },
data(){
    return {
    area: {
      width: 500,
      height: 500
    },
    draggableItems: [
      {
        id: 1,
        title: 'Hello',
        width: 150,
        height: 100
      },
      {
        id: 2,
        title: 'Hello123',
        width: 200,
        height: 80
      }
    ]
  };
},

}
</script>

<template>
    <div class="container">
        <!-- <button @click="clickMe">Click</button> -->
        <draggable v-model="draggableItems">
            <template v-slot:item="{item}">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </template>
        </draggable>
    </div>

</template>