import React from 'react';
import _ from 'lodash';
import {
CREATE_STREAM,
FETCH_STREAMS,
FETCH_STREAM,
DELETE_STREAM,
EDIT_STREAM 
} from '../actions/types';



export default (state = {}, action) => {
    switch (action.type){
        case FETCH_STREAMS:
          return {...state, ..._.mapKeys(action.payload,'id') };
          //把列表变为字典，字典的索引就是原key，这样字典就是{12:{id:12 ,a:ddd,b:ddd}}
        case FETCH_STREAM:
          return {...state, [action.payload.id]: action.payload }; 
          //字典的感觉，[abc]:就是类似于索引key的定义，不必理解太多，规范而已
        case CREATE_STREAM:
          return {...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
          return {...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
          return _.omit(state, action.payload);
        //这里payload就是个id，state拿出来忽略掉字典id的值,omit不改state的
        //original object，
        //它建一个新的除去后面的限制条件的state.
        default:
          return state;
    }
};
