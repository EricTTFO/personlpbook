const state = {
    singleInfos:[]
}
const getters = {
    allTelInfo: state => state.singleInfos
}
const mutations = {
    putInfo: (state,singleInfos) => (state.singleInfos = singleInfos)
}
const actions = {
    
    async pullInterface({
        commit
    }){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response);
        commit('putInfo', response.data);
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}