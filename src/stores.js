import { writable, get } from 'svelte/store';

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

export function deepCopy(arr){
    /*
    * Get deep copy value from level_list, based on curent index
    */
    let copyArray = [];

    //Do deep copy loop
    for (var i = 0; i < arr.length; i++) copyArray[i] = arr[i].slice();

    return copyArray.slice();
}

//Initialize current_level from level_list
current_level.set(get(level_list)[get(current_index)]);

// Fresh copy for reset
export const active_grid = writable(deepCopy(get(current_level).grid)); 

//Assign subscribtion to current_level, everytime it is updated, other variables will be updated too.
current_level.subscribe(val => {
    win_condition.set((val.size ** 2) - val.blocks)
    active_grid.set(deepCopy(get(current_level).grid))
})

//You can do export function too and then use the function using import, here's the example https://svelte.dev/examples#ondestroy
/*
EXAMPLES
function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

export const count = createCount();
*/