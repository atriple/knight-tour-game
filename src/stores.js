import { writable, get } from 'svelte/store';
import { deepCopy } from './utils';

/*
level_list : constant level information that you can 
choosed_count : Count how many cell aleady choosed. This determine your win
current_index : Track what index to choose the level object, start from 0
current_level : Store level object
win_condition : Point required to complete the level
*/

/*
id : level number
size : the size of the board
blocks : number of blocked cell, written so 
because block is probably more than available space
*/

export const level_list = writable([
    {
        id: 0,
        size: 4,
        blocks: 2,
        grid: [
            [1, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    },
])

export const initiated = writable(false);
export const current_index = writable(0);
export const score = writable([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
export const hint_visible = writable(false);

export const knight_row_pos = writable();
export const knight_col_pos = writable();

export const current_level = writable();

export const choosed_count = writable(0);
export const win_condition = writable();

//Initialize current_level from level_list
current_level.set(get(level_list)[get(current_index)]);

// Fresh copy for reset
export const active_grid = writable(deepCopy(get(current_level).grid));

//Assign subscribtion to current_level, everytime it is updated, other variables will be updated too.
current_level.subscribe(val => {
    win_condition.set((val.size ** 2) - val.blocks)
    active_grid.set(deepCopy(get(current_level).grid))
})

export function loadLastSession() {
    /*
    Get index value from local storage
    */
    let session = localStorage.getItem('level_index');
    let session_score = JSON.parse(localStorage.getItem('score'));
    console.log(session_score);
    if (session) {
        //console.log(session)
        current_index.set(Number(session));
        current_level.set(get(level_list)[session]);
        score.set(session_score);
        return true;
        //return true? then check whether to render CONTINUE menu or NEW GAME menu
    }
}

export function resetSession() {
    localStorage.removeItem('level_index');
    localStorage.removeItem('score');
    current_index.set(0);
    current_level.set(get(level_list)[get(current_index)]);
    score.set([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    initiated.set(false);
    choosed_count.set(0);
}