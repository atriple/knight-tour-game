import { writable, get } from 'svelte/store';
import { deepCopy } from './utils';

/*
level_list : constant level information that you can 
choosed_count : Count how many cell aleady choosed. This determine your win
current_index : Track what index to choose the level object, start from 0
current_level : Store level object
win_condition : Point required to complete the level
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
    {
        id: 1,
        size: 5,
        blocks: 11,
        grid: [
            [1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1]      
        ]
    },
    {
        id: 2,
        size: 5,
        blocks: 10,
        grid: [
            [0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 1],
            [1, 0, 1, 1, 1]      
        ]
    },
    {
        id: 3,
        size: 5,
        blocks: 9,
        grid: [
            [0, 1, 0, 0, 1],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 1, 0],
            [1, 1, 0, 1, 1]      
        ]
    },
    {
        id: 4,
        size: 5,
        blocks: 7,
        grid: [
            [0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
            [0, 1, 0, 0, 0],
            [0, 1, 0, 1, 0]      
        ]
    },
    {
        id: 5,
        size: 5,
        blocks: 7,
        grid: [
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1]      
        ]
    },
    {
        id: 6,
        size: 5,
        blocks: 5,
        grid: [
            [1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1],
            [0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0]      
        ]
    },
    {
        id: 7,
        size: 5,
        blocks: 1,
        grid: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0]      
        ]
    },
    {
        id: 8,
        size: 6,
        blocks: 8,
        grid: [
            [0, 0, 1, 0, 0, 1],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 1]
        ]
    },
    {
        id: 9,
        size: 6,
        blocks: 8,
        grid: [
            [0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0, 1],
            [0, 0, 0, 1, 0, 0]
        ]
    },
    {
        id: 10,
        size: 6,
        blocks: 4,
        grid: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [1, 0, 0, 0, 0, 1]
        ]
    }
])

export const initiated = writable(false);
export const current_index = writable(0);

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

export function loadLastSession(){
    /*
    Get index value from local storage
    */
    let session = localStorage.getItem('level_index');
    if(session){
        current_level.set(get(level_list)[session]);
    }
}

export function resetSession(){
    localStorage.removeItem('level_index');
    current_index.set(0);
    current_level.set(get(level_list)[get(current_index)]);
    initiated.set(false);
    choosed_count.set(0);
}