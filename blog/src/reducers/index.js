import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
}); 

//什么时候用呢 ，没发现啊？？？posts ?? users???，
//后面有这个，但是是state.posts或users，跟这个有关系吗？？
//难道users,posts 就是state？意味着每次调用reducer，就更新一下state？ 好像
//是这样么回事儿！


//合并后的 reducer 可以调用各个子 reducer，并把它们返回的结果合并成一个 state 对象.
// 由 combineReducers() 返回的 state 对象，会将传入的每个 reducer 返回的 state
// 按其传递给 combineReducers() 时对应的 key 进行命名。

