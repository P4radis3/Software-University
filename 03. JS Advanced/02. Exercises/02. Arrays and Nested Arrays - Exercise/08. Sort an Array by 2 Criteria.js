function sortAnArrayByTwoCriteria(array) {

    return array
        .sort((first, second) =>
            first.length - second.length === 0
                ? first.toLocaleLowerCase().localeCompare(second.toLocaleLowerCase())
                : first.length - second.length

        )

        .join("\n");

}