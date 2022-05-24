import { ADD_POST } from './actions';
import west from '../pict/west.jpg';
import dur from '../pict/dur.jpg'

let day = new Date();
export const DATE = `${day.getDate()}/${day.getUTCMonth() + 1}`;

export const POSTS = [
    {
        imgFile: dur,
        name: "Kevin Durant",
        link: "@notkevinnow",
        date: DATE,
        text: "WTF?! Where is my Westbrik bro? xD",
        image: west
    },
    {
        imgFile: dur,
        name: "Kevin Durant",
        link: "@notkevinnow",
        date: DATE,
        text: "Ok it's not funny -> we can't lost it",
    },
    {
        imgFile: dur,
        name: "Kevin Durant",
        link: "@notkevinnow",
        date: DATE,
        text: "Listen to me - BRON can comeback 3-1 and i grow up for 3-0",
    },
];

const initialState = {
    posts: POSTS,
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: 
            return {
                posts: [action.payload, ...state.posts]
            }
            default:
                return state;
    }
};