const { success, repair, fail } = require('./enhancer.js');
// test away!


// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

describe('enhancer.js', () => {
    
    describe('repair', () => {
        it('should return an item with a durability score of 100', () => {

            let item = {
                name: 'item',
                enhancement: 20,
                durability: 50
            }

            const newItem = {
                name: 'item',
                enhancement: 20,
                durability: 100
            };

            expect(newItem).toStrictEqual(repair(item));
        });
    })

    describe('success', () => {

        it('should increase enhancement by 1 for any enhancement values less than 20', () => {
            let item = {
                name: 'item',
                enhancement: 15,
                durability: 50
            }

            const newItem = {
                name: 'item',
                enhancement: 16,
                durability: 50
            };

            expect(newItem).toStrictEqual(success(item));
        })

        it('should not add 1 to items with enhancement values of 20', () => {
            let item = {
                name: 'item',
                enhancement: 20,
                durability: 50
            }

            const newItem = {
                name: 'item',
                enhancement: 20,
                durability: 50
            };

            expect(newItem).toStrictEqual(success(item));
        })

    })

    describe('fail', () => {
        it('should decrease the durability by 5 if the enhancement is less than 15', () => {
            let item = {
                name: 'item',
                enhancement: 14,
                durability: 50
            }

            const newItem = {
                name: 'item',
                enhancement: 14,
                durability: 45
            }

            expect(newItem).toStrictEqual(fail(item));
        })

        it('should decrease durability by 10 for any enhancement values 15 or greater', () => {
            let item = {
                name: 'item',
                enhancement: 15,
                durability: 50
            }

            const newItem = {
                name: 'item',
                enhancement: 15,
                durability: 40
            }

            expect(newItem).toStrictEqual(fail(item)); 
        })

        it('should decrease the enhancement level by 1 for any items with an enhancement value greater than 16', () => {
            let item = {
                name: 'item',
                enhancement: 17,
                durability: 50
            }

            const newItem = {
                name: 'item',
                enhancement: 16,
                durability: 40
            }

            expect(newItem).toStrictEqual(fail(item)); 
        })
    })

})
