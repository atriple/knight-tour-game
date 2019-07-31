import { writable, get } from 'svelte/store';

/*
choosed_count : Count how many cell aleady choosed. This determine your win
current_index : Track what index to choose the level object, start from 0
current_level : Store level object
win_condition : Point required to complete the level
*/

export const level_list = writable([
    {
        id: 1,
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
        id: 2,
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
        id: 13,
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
    }
])

export const initiated = writable(false);
export const current_index = writable(0);

export const current_level = writable();
level_list.subscribe(val => current_level.set(val[0]));

export const choosed_count = writable(0);
export const win_condition = writable();

current_level.subscribe(val => {
    win_condition.set((val.size ** 2) - val.blocks)
})


var copyArray = [];
var state = get(current_level)
for (var i = 0; i < state.grid.length; i++) copyArray[i] = state.grid[i].slice();

export const initial_current_grid_state = writable(copyArray);


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