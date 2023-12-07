function sortAnArrayByTwoCriteria(array) {

    let criteriaSort = (current, next) =>
        current.length - next.length || current.localeCompare(next);

        array.sort(criteriaSort);
        return array.join('\n');

}