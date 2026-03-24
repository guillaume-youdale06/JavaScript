function tri(numbers, order) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {

            if (
                (order === "asc" && numbers[i] > numbers[j]) ||
                (order === "desc" && numbers[i] < numbers[j])
            ) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }

    return numbers;
}