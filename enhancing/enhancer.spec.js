const { success } = require('./enhancer.js');
// test away!




describe('enhancer.js', () => {
    
    describe('success', () => {
        it('should return an item with a durability score of 100', () => {

            let item = {
                durability: 50
            }

            const newItem = {
                durability: 100
            };

            expect(newItem).toStrictEqual(success(item));
        });
    })
})