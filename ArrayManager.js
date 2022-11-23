class ArrayManager {
    getAverage(input_array) {
        var sum = 0;
        var count = 0;
    
        input_array.forEach(function(item, index) {
            sum += item;
            count++;
        });
    
        return sum / count;
    }
}