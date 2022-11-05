export function unique(arr, length) {
    let newArr = []

    for (var i = 0; i < arr.length; i++) {

        const j = Math.floor(Math.random() * (i + 1));
        
        [arr[i], arr[j]] = [arr[j], arr[i]];

        if (newArr.indexOf(arr[j]) === -1) {
            newArr.push(arr[j])
        }
    }

   let result =  newArr.slice(0, length)

    return result
}

export function chunkArray(myArray, chunk_size, data24){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push({
            values: myChunk.join(', '),
            primary_index: data24.findIndex(item => item === myChunk[0])
        });
    }

    return tempArray;
}