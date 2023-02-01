import {defineStore} from 'pinia'

export const useUserStore=defineStore({
    id: 'user',
    state:()=>({
        userItems: [
            {
                id:1,
                name: 'user1',
            },
            {
                id:2,
                name: 'user2',
            },
            {
                id:3,
                name: 'user3',
            },
        ]
    }),
    actions:{
        
    }
})
