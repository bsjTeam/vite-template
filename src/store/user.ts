import { defineStore } from 'pinia';

const useUserStore = defineStore('user', () => {
    const userName = ref('Vue3 template');
    function increment(val: string) {
        userName.value = val;
    }

    return { userName, increment };
});

export default useUserStore;
