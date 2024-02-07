describe('PaymentPackage Class', () => {

    describe('Instantiation and Structure', () => {
        it('should correctly initialize with valid parameters', () => {
            const instance = new PaymentPackage('Service', 100);
            expect(instance.name).to.equal('Service');
            expect(instance.value).to.equal(100);
            expect(instance.VAT).to.equal(20);
            expect(instance.active).to.be.true;
        });

        it('should throw when instantiated with invalid name (non-string)', () => {
            expect(() => new PaymentPackage(123, 100)).to.throw('Name must be a non-empty string');
        });

        it('should throw when instantiated with an empty string as name', () => {
            expect(() => new PaymentPackage('', 100)).to.throw('Name must be a non-empty string');
        });

        it('should throw when instantiated with invalid value (non-number)', () => {
            expect(() => new PaymentPackage('Service', '100')).to.throw('Value must be a non-negative number');
        });

        it('should throw when instantiated with a negative number as value', () => {
            expect(() => new PaymentPackage('Service', -100)).to.throw('Value must be a non-negative number');
        });
    });

    describe('Name property', () => {
        it('should allow changing the name with valid input', () => {
            const instance = new PaymentPackage('Service', 100);
            instance.name = 'New Service';
            expect(instance.name).to.equal('New Service');
        });

        it('should throw when trying to change name to an invalid value', () => {
            const instance = new PaymentPackage('Service', 100);
            expect(() => { instance.name = ''; }).to.throw('Name must be a non-empty string');
        });
    });

    describe('Value property', () => {
        it('should allow changing the value with valid input', () => {
            const instance = new PaymentPackage('Service', 100);
            instance.value = 200;
            expect(instance.value).to.equal(200);
        });

        it('should allow setting the value to 0', () => {
            const instance = new PaymentPackage('Service', 100);
            instance.value = 0;
            expect(instance.value).to.equal(0);
        });

        it('should throw when trying to change value to an invalid value', () => {
            const instance = new PaymentPackage('Service', 100);
            expect(() => { instance.value = -20; }).to.throw('Value must be a non-negative number');
        });
    });

    describe('VAT property', () => {
        it('should allow changing the VAT with valid input', () => {
            const instance = new PaymentPackage('Service', 100);
            instance.VAT = 30;
            expect(instance.VAT).to.equal(30);
        });

        it('should throw when trying to change VAT to an invalid value', () => {
            const instance = new PaymentPackage('Service', 100);
            expect(() => { instance.VAT = -5; }).to.throw('VAT must be a non-negative number');
        });
    });

    describe('Active property', () => {
        it('should allow changing the active status with valid input', () => {
            const instance = new PaymentPackage('Service', 100);
            instance.active = false;
            expect(instance.active).to.be.false;
        });

        it('should throw when trying to change active status to an invalid value', () => {
            const instance = new PaymentPackage('Service', 100);
            expect(() => { instance.active = 0; }).to.throw('Active status must be a boolean');
        });
    });

    describe('toString method', () => {
        it('should return a string containing all details for active package', () => {
            const instance = new PaymentPackage('Service', 100);
            const expected = [
                `Package: Service`,
                `- Value (excl. VAT): 100`,
                `- Value (VAT 20%): 120`
            ].join('\n');
            expect(instance.toString()).to.equal(expected);
        });

        it('should include the label (inactive) for inactive packages', () => {
            const instance = new PaymentPackage('Service', 100);
            instance.active = false;
            const expected = [
                `Package: Service (inactive)`,
                `- Value (excl. VAT): 100`,
                `- Value (VAT 20%): 120`
            ].join('\n');
            expect(instance.toString()).to.equal(expected);
        });
    });

});