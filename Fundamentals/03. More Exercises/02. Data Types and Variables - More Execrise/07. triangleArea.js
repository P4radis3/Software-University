function calculateTriangleArea(side1, side2, side3) {

    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {

        const s = (side1 + side2 + side3) / 2;
    
        const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

        console.log(area);
    }
}