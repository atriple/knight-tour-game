import { writable } from 'svelte/store';

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
        blocks: ["1,0", "3,0"]
    },
    {
        id: 2,
        size: 5,
        blocks: [
            '0,0','3,0','4,0',
            '0,1','2,1',
            '4,2',
            '1,3','2,3',
            '0,4','3,4','4,4'
        ]
    }
])

export const current_index = writable(0);

export const current_level = writable();
level_list.subscribe(val => current_level.set(val[0]))

export const choosed_count = writable(0);

export const win_condition = writable();
current_level.subscribe(val => win_condition.set((val.size ** 2) - val.blocks.length))


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