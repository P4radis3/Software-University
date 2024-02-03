describe('Converting RGB input to Hexadecimal #ColorNumber', () => {
    it ('works with the numbers for black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    
    it ('works with the numbers for white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it ('works with the numbers for navy blue', () => {
        expect(rgbToHexColor(41,55,129)).to.equal('#293781');
    });

    it ('should return UNDEFINED with numbers out of the lower bound', () => {
        expect(rgbToHexColor(-1,55,129)).to.equal(undefined);
    });
    
    it ('should return UNDEFINED with numbers out of the upper bound', () => {
        expect(rgbToHexColor(88,55,256)).to.equal(undefined);
    });
    
    it ('should return UNDEFINED with non-integers', () => {
        expect(rgbToHexColor('88',55,256)).to.equal(undefined);
    });
});