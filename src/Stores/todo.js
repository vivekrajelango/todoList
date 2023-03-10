import {defineStore} from 'pinia'

export const useTodoStore=defineStore({
    id: 'todo',
    state:()=>({
        todoItems: [
            {
                id:1,
                title: 'Todo Title',
                subTitle: 'Sub title',
                type: 'bg-primary',
                content: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                createdBy: 'user1'
            },
            {
                id:2,
                title: 'Todo Title',
                subTitle: 'Sub title',
                type: 'bg-secondary',
                content: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                createdBy: 'user2'
            },
            {
                id:3,
                title: 'Todo Title',
                subTitle: 'Sub title',
                type: 'bg-success',
                content: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                createdBy: 'user1'
            },
            {
                id:4,
                title: 'Todo Title',
                subTitle: 'Sub title',
                type: 'bg-warning',
                content: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                createdBy: 'user3'
            }
        ]
    }),
    actions:{
        addItem(payload){
            this.todoItems.push(payload)
        },
        removeItem(id) {
            this.todoItems.splice(id, 1)
        }
    }
})
