const GetMaxMin = (data) => {

    // Sort the unsorted array first
    data = data.sort((a, b) => a - b);

    // Get Max and Min Arrays From Above result
    const maxSet = data.slice(1);
    const minSet = data.slice(0, -1);

    // Calculate Some Of Sorted Array
    const sum = data.reduce((a, total) => a + total, 0);
    // print Result
    console.log(`Minimum = ${sum - data[data.length - 1]} \n Maximum = ${sum - data[0]}`);
};

GetMaxMin([1,4,5,6,7,9]);