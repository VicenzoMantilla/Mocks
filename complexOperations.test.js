import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';
import { expect, it } from '@jest/globals';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('The email must be defined', () => {
      expect(complexOperations.checkEmail()).toMatch('The email should be a string');
    });
    it('The email is invalid if it is undefinded',()=>{
      expect(complexOperations.checkEmail(undefined)).toBe('The email should be a string');
    });
    it('The email must be a string',()=>{
      expect(complexOperations.checkEmail(12)).toBe('The email should be a string');
    });
    it('Every valid email contains at the end .com',()=>{
      expect(complexOperations.checkEmail('radium@gmail.com')).toBe('The email is valid');
    });
    it('Every valid email contains a @ character',()=>{
      expect(complexOperations.checkEmail('radium@gmail.com')).toBe('The email is valid');
    });
    it('Validate the structure of a valid email',()=>{
      expect(complexOperations.checkEmail('radium@gmail.com')).toBe('The email is valid');
    });
    it('An email without .com should not be valid',()=>{
      expect(complexOperations.checkEmail('radium@gmail')).toBe('The email is invalid');
    });
    it('An email without @ must be invalid',()=>{
      expect(complexOperations.checkEmail('radium.com')).toBe('The email is invalid');
    });
    it('An email without text between @ and .com should be invalid',()=>{
      expect(complexOperations.checkEmail('radium@.com')).toBe('The email is invalid');
    });
    it('An email that starts with @ should be invalid',()=>{
      expect(complexOperations.checkEmail('@gmail.com')).toBe('The email is invalid');
    });
  });

  describe('calculateArea', () => {
    it('The figure is incorrect', () => {
      expect(complexOperations.calculateArea('octagon',0,0)).toBe('octagon is not supported');
    });
    it('The function is undefined',()=>{
      expect(complexOperations.calculateArea()).toMatch('undefined is not supported')
    })
    it('Evaluate the area of a rectangle',()=>{
      expect(complexOperations.calculateArea('rectangle',2,5)).toBe(10)
    })
    it('Evaluate the area of a rectangle with float numbers',()=>{
      expect(complexOperations.calculateArea('rectangle',3.5,5.6)).toBeCloseTo(19.6);
    });
    it('Evaluate the area of a circle',()=>{
      expect(complexOperations.calculateArea('circle',10)).toBeCloseTo(314.159);
    });
    it('Evaluate the area of a triangle',()=>{
      expect(complexOperations.calculateArea('triangle',10,5)).toBe(25);
    })
    it('Pass a string as the first number should throw an error',()=>{
      expect(complexOperations.calculateArea('rectangle','test',5)).toBe('number1 and number2 should be numbers');
    });
    it('Pass a string as the second number should throw an error',()=>{
      expect(complexOperations.calculateArea('rectangle',4,'test')).toBe('number1 and number2 should be numbers');
    });
    it('Area is positive if the given numbers are negative',()=>{
      expect(complexOperations.calculateArea('rectangle',-4,-2)).toBe(8);
    })
  });

  describe('sumGreaterThan mocked', () => {
    it('Try to pass a string as a number', () => {
      expect(complexOperations.sumGreaterThan('test',2,3)).toBe('The params should be numbers');
    });
    it('Missing parameters thrown an error',()=>{
      expect(complexOperations.sumGreaterThan()).toBe('The params should be numbers');
    });
    it('If the parameters are negative numbers, the function should work anyway',()=>{
      expect(complexOperations.sumGreaterThan(-1,-5,-3)).toBe('-6 is less than -3');
      expect(complexOperations.sumGreaterThan(-3,-6,-15)).toBe('-9 is greater than -15');
    });
    it('The function can take float numbers',()=>{
      expect(complexOperations.sumGreaterThan(3.5,5,9.8)).toBe('8.5 is less than 9.8');
      expect(complexOperations.sumGreaterThan(4.5,6,3.2)).toBe('10.5 is greater than 3.2');
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('The arrays are undefined', () => {
      expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
    });
    it('One array is undefined',()=>{
      expect(complexOperations.intersectionBetweenArrays([],)).toBe('The params should be arrays');
    });
    it('One array lack parameters',()=>{
      expect(complexOperations.intersectionBetweenArrays([1,2,3],[])).toBe('There are not matching elements');
    });
    it('Pass a string as an array should not be allow',()=>{
      expect(complexOperations.intersectionBetweenArrays('string',[])).toBe('The params should be arrays');
    });
    it('The arrays do not have elements in common',()=>{
      expect(complexOperations.intersectionBetweenArrays(
        [1,3,4],[8,2,7])).toBe('There are not matching elements');
    });
    it('The arrays match',()=>{
      expect(complexOperations.intersectionBetweenArrays([2,5,9,7,1],[3,5,12,9,1])).toEqual([5,9,1]);
    });
    it('The array match with negatives numbers',()=>{
      expect(complexOperations.intersectionBetweenArrays([-2,-4,-7],[-5,-9,-2,-7])).toEqual([-2,-7]);
    });
    it('Array match with strings',()=>{
      expect(complexOperations.intersectionBetweenArrays(
        ['mouse','water','radium'],['day','one','water'])).toContainEqual('water');
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('The array lack parameters', () => {
      expect(complexOperations.sortArrayOfObjectsByKey()).toMatch('The first param should be an array');
    });
    it('The array is undefined', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(undefined,'city'))
      .toMatch('The first param should be an array');
    });
    it('The key is not a string, this should throw an error',()=>{
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{car:'mercedez'}],2)).toBe('The second param should be an string');
    });
    it('The key is undefined, this should throw an error',()=>{
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{movie:'cars'}],)).toBe('The second param should be an string');
    });
    it('The array is sort correctly with the key',()=>{
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{netflix:'narcos'},{netflix:'dr.house'},{netflix:'blindspot'}],'netflix'))
        .toEqual([{netflix:'blindspot'},{netflix:'dr.house'},{netflix:'narcos'}]);
    });
    it('The array contain the same parameters',()=>{
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{city:'madrid'},{city:'madrid'},{city:'madrid'}],'city'))
        .toEqual([{city:'madrid'},{city:'madrid'},{city:'madrid'}]);
    });
    it('The array cointains a different key element',()=>{
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{drink:'pepsi'},{drink:'coca-cola'},{drink:'fanta'}],'movie'))
        .toBe('Some elements in the array does not have the movie property');
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('The arrey is undefined', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(undefined)).toBe('The param should be an array');
    });
    it('The parameters are numbers',()=>{
      expect(complexOperations.numberOfOddAndEvenNumbers(23,4)).toBe('The param should be an array')
    });
    it('The array contain a string',()=>{
      expect(complexOperations.numberOfOddAndEvenNumbers(
        [12,'cars',13])).toBe('The array should have only numbers');
    });
    it('The array contain negative numbers',()=>{
      expect(complexOperations.numberOfOddAndEvenNumbers([-2,-6,3,-4,-7])).toEqual({odd:2,even:3});
    });
    it('The arrays contain odd and even numbers',()=>{
      expect(complexOperations.numberOfOddAndEvenNumbers([2,4,6,8,3,11,13,7,9])).toEqual({odd:5,even:4});
    });
    it('The array contain float numbers',()=>{
      expect(complexOperations.numberOfOddAndEvenNumbers([2.3,5.3,6.2,4.4,5.1,9.7])).toEqual({odd:6,even:0});
    });
  });
});

describe('complexOperations - Mocked Tests', () => {
  describe('checkEmail mocked',() =>{
    beforeEach(()=> {
        jest.restoreAllMocks()
    });
    it('Mocking a valid email',() =>{
        jest.spyOn(basicOperations, 'validateEmail').mockReturnValue('example@email.com');
        expect(complexOperations.checkEmail('mocked')).toBe('The email is valid')
    });
    it('Mocking an invalid email',() =>{
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(undefined);
      expect(complexOperations.checkEmail('mocked')).toBe('The email is invalid')
    });
  });
  describe('calculateArea Mocked',()=>{
    beforeEach(()=>{
      jest.restoreAllMocks()
    });
    it('Mocking figure not supported',()=>{
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(undefined);
      expect(complexOperations.calculateArea('square',0,0)).toBe('square is not supported');
    });
    it('Figure default',()=>{
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue('default');
      expect(complexOperations.calculateArea('default',0,0)).toBe('default is not supported');
    });
    it('Mocking area in rectangle',()=>{
      jest.spyOn(basicOperations, 'multip').mockReturnValue(10);
      expect(complexOperations.calculateArea('rectangle',0,0)).toBe(10);
    });
    it('Mocking area in square',()=>{
      jest.spyOn(basicOperations, 'multip').mockReturnValue(4);
      expect(complexOperations.calculateArea('square',0,0)).toBe(4);
    });
    it('Mocking area in triangle',()=>{
      jest.spyOn(basicOperations, 'division').mockReturnValue(15.62);
      expect(complexOperations.calculateArea('triangle',0,0)).toBeCloseTo(15.62);
    });
    it('Mocking area in circle',()=>{
      jest.spyOn(basicOperations, 'exponent').mockReturnValue(10);
      expect(complexOperations.calculateArea('circle',0,0)).toBeCloseTo(31.4159);
    })
  })

  describe('sumGreaterThan mocked',() =>{
    beforeEach(()=> {
        jest.restoreAllMocks()
    });
    it('Mocking sum to be greater than third number',() =>{
        jest.spyOn(basicOperations, 'sum').mockReturnValue('10');
        expect(complexOperations.sumGreaterThan(0,0,8)).toBe('10 is greater than 8')
    });
    it('Mocking sum to be less than third number',() =>{
      jest.spyOn(basicOperations, 'sum').mockReturnValue('5');
      expect(complexOperations.sumGreaterThan(0,0,8)).toBe('5 is less than 8')
    });
    it('Mocking isNumber to undefined',() =>{
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(undefined);
      expect(complexOperations.sumGreaterThan(0,0,1)).toBe('The params should be numbers')
    });
  });
  
  describe('intersectionBetweenArrays mocked',() =>{
    beforeEach(()=> {
        jest.restoreAllMocks()
    });
    it('An undefined array',() =>{
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(undefined);
      expect(complexOperations.intersectionBetweenArrays([1,2,3],[3,4,5])).toBe('The params should be arrays');
    });
    it('arrayIntersection with no elements',() =>{
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([]);
      expect(complexOperations.intersectionBetweenArrays([0,0,0],[1,1,1])).toBe('There are not matching elements');
    });
    it('arrayIntersection to match',() =>{
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([1,2,3]);
      expect(complexOperations.intersectionBetweenArrays([1,1,1],[2,2,2])).toEqual([1,2,3]);
    });
  });
  
  describe('sortArrayOfObjectsByKey mocked',() =>{
    beforeEach(()=> {
        jest.restoreAllMocks()
    });
    it('mocking sortArrayByKey to match',() =>{
        jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(
          [{page:'google'},{page:'twitch'},{page:'netflix'}],'page');
        expect(complexOperations.sortArrayOfObjectsByKey([{key:1},{key:2},{key:3}],'key')).toEqual(
          [{page:'google'},{page:'twitch'},{page:'netflix'}]);
    });
    it('mocking isArray as undefined',() =>{
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(undefined);
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{key:1},{key:2},{key:3}],'key')).toBe('The first param should be an array');
    });
    it('mocking isString as undefined',() =>{
      jest.spyOn(basicOperations, 'isString').mockReturnValue(undefined);
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{key:1},{key:2},{key:3}],'key')).toBe('The second param should be an string');
    });
    it('mocking arrayElementsAreObjectWithKey as undefined',() =>{
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(undefined);
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{key:1},{key:2},{key:3}],'key')).toBe('Some elements in the array does not have the key property');
    });
  });
  
  describe('numberOfOddAndEvenNumbers mocked',() =>{
    beforeEach(()=> {
        jest.restoreAllMocks()
    });
    it('mocking getOddNumbersFromArray to have 4 odds',() =>{
        jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1,3,5,7]);
        expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3])).toEqual(
          {odd:4, even:1})
    });
    it('mocking getEvenNumbersFromArray to have 5 even',() =>{
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([2,4,6,8,10]);
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3])).toEqual(
        {odd:2,even:5})
    });
    it('mocking even and odd',() =>{
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1,3,5,7]);
        expect(complexOperations.numberOfOddAndEvenNumbers([2,4,6])).toEqual({odd:4,even:3});
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([2,4,6,8,10]);
        expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3])).toEqual({odd:4,even:5});
    });
    it('mocking isArray',() =>{
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(undefined);
      expect(complexOperations.numberOfOddAndEvenNumbers([1,1,1])).toBe('The param should be an array')
    });
    it('mocking isNumber',() =>{
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(undefined);
      expect(complexOperations.numberOfOddAndEvenNumbers([1,1,1])).toBe('The array should have only numbers')
    });
  });
});