function areaAndVolume(area, volume, input) {

    let object = JSON.parse(input);
    function calculate(object) {

        let areaObject = Math.abs(area.call(object));
        let volumeObject = Math.abs(volume.call(object));
        return { area: areaObject, volume: volumeObject };


    }

    return object.map(calculate);

}