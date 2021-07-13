// import React from 'react';
import { CafeStore } from './CafeStore';

describe('Cafe tests', () => {
   it('Doesnt crash when calling provideCompanyCafes', (done) => {

       // TODO: Mock Client.js so the test doesn't hit the live endpoint
       const onChange = () => {
           CafeStore.removeChangeListener(onChange);
           CafeStore.unsubscribe();
           done();
       }
       CafeStore.addChangeListener(onChange);
       CafeStore.provideCompanyCafes();
   });


    it('Gets Cafes from Kenitco API', (done) => {

        // TODO: Mock Client.js so the test doesn't hit the live endpoint
        const onChange = () => {
            const cafes = CafeStore.getCompanyCafes();

            expect(cafes).toBeDefined();
            expect(cafes.length).toBeDefined();

            CafeStore.removeChangeListener(onChange);
            CafeStore.unsubscribe();
            done();
        }
        CafeStore.addChangeListener(onChange);
        CafeStore.provideCompanyCafes();
    });

});
