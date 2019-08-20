export function deepCopy(arr){
    /*
    * Get deep copy value from level_list, based on curent index
    */
    let copyArray = [];

    //Do deep copy loop
    for (var i = 0; i < arr.length; i++) copyArray[i] = arr[i].slice();

    return copyArray.slice();
}