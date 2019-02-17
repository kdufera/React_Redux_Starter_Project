import React from 'react';
import ReactDOM from 'react-dom';
import Temperature from './Termperature';

describe('Temperature Component test', () => {
    it('Renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Temperature />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('Celsius To Rankine conversion test', () => {
     const temperature = new Temperature();
       expect(temperature.c2r(-45)).toEqual(410.67);
       expect(temperature.c2r(0)).toEqual(491.67);
       expect(temperature.c2r(33.6)).toEqual(552.15);
       expect(temperature.c2r(433)).toEqual(1271.07);
    });

    it('Rankine To Celsius conversion test', () => {
      const temperature = new Temperature();
      expect(temperature.r2c(-40)).toEqual(-295.37);
      expect(temperature.r2c(0)).toEqual(-273.15);
      expect(temperature.r2c(23)).toEqual(-260.37);
      expect(temperature.r2c(343)).toEqual(-82.59);
    });
  
     it('Rankine To Fahrenheit( conversion test', () => {
      const temperature = new Temperature();
        expect(temperature.r2f(-40)).toEqual(-499.67);
        expect(temperature.r2f(0)).toEqual(-459.67);
        expect(temperature.r2f(23)).toEqual(-436.67);
        expect(temperature.r2f(100)).toEqual(-359.67);
     });
  
     it('Rankine To Kelvin conversion test', () => {
      const temperature = new Temperature();
        expect(temperature.r2k(-40)).toEqual(-22.22);
        expect(temperature.r2k(0)).toEqual(0);
        expect(temperature.r2k(20)).toEqual(11.11);
         expect(temperature.r2k(100)).toEqual(55.56);

     });

     it('Fahrenheit To Rankine conversion test', () => {
      const temperature = new Temperature();
        expect(temperature.f2r(-45)).toEqual(414.67);
        expect(temperature.f2r(0)).toEqual(459.67);
        expect(temperature.f2r(23)).toEqual(482.67);
        expect(temperature.f2r(100)).toEqual(559.67);
     });
   

     it('kelvin To Rankine conversion test', () => {
      const temperature = new Temperature();
        expect(temperature.k2r(-45)).toEqual(-81);
        expect(temperature.k2r(0)).toEqual(0);
        expect(temperature.k2r(23)).toEqual(41.4);
        expect(temperature.k2r(100)).toEqual(180);

     });
});
