import {createStore} from 'redux'
// 新建store
// 通过reducer建立
// 根据老的状态和action，生成新的state

function counter(state=0,action){
    switch(action.type){
        case '加机关枪':
        return state+1
        case '减机关枪':
        return state-1
        default:
        return 10
    }
}

//  新建store
const store=createStore(counter)

const init = store.getState()
console.log(init,'>>')

function listener(){
    const current = store.getState()
    console.log(`现在有${current}把机关枪`)
}
store.subscribe(listener)// 订阅变化 // 10 11 10

// 派发事件 传递action
store.dispatch({type:'加机关枪'})
console.log(store.getState())
store.dispatch({type:'加机关枪'})
console.log(store.getState())
store.dispatch({type:'减机关枪'})
console.log(store.getState())