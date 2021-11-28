import { Action, Reducer } from 'redux';


//let count = JSON.parse(localStorage.getItem('count'));
let count = 0;
export interface CounterState {
    count: number
}

const CounterState1 = {
    count: count ? count : 0
}


export interface IncrementCountAction { type: 'INCREMENT_COUNT' }
export interface DecrementCountAction { type: 'DECREMENT_COUNT' }

export type KnownAction = IncrementCountAction | DecrementCountAction;

export const actionCreators = {
    increment: () => ({ type: 'INCREMENT_COUNT' } as IncrementCountAction),
    decrement: () => ({ type: 'DECREMENT_COUNT' } as DecrementCountAction)
};


export const reducer = (state = CounterState1, action: any) => {
   

    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};
