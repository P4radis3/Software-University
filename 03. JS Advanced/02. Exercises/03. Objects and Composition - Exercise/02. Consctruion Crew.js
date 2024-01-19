function constructionCrew(object) {

    if (object.dizziness === true) {

        object.levelOfHydrated += 0.1 * object.weight * object.experience;
        object.dizziness = false;

    }

    return object;

}