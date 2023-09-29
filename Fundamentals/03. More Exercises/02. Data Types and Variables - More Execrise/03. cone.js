function calculateConeProperties(radius, height) {

    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;

    const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    const surfaceArea = Math.PI * radius * (radius + slantHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}
