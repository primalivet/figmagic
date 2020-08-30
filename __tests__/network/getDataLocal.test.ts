import { getDataLocal } from '../../bin/frameworks/network/getDataLocal';

describe('Failure cases', () => {
  test('It should throw an error if no parameter is provided', () => {
    expect(() => {
      // @ts-ignore
      getDataLocal();
    }).toThrow();
  });

  /*
  test('It should throw an error if trying to convert to rem but having no remSize provided', () => {
    expect(() => {
      getDataRemote(400, 'px', 'rem');
    }).toThrow();
  });

  test('It should throw an error if being passed an invalid asdf, since it cannot set rootSize', () => {
    expect(() => {
      getDataRemote(400, 'px', 'asdf');
    }).toThrow();
  });
  */
});

describe('Success cases', () => {
  /*
  test('It should normalize a percent unit to unitless, when given a width value, current unit string, and a conversion type as float', () => {
    expect(getDataRemote(146.484375, 'percent', 'unitless')).toBe('1.46484375');
  });

  test('It should normalize a letter-spacing unit to a converted pixel value, when given a width value, current unit string, and a conversion type as string', () => {
    expect(getDataRemote(100, 'cornerRadius', 'adjustedRadius')).toBe('100px');
  });

  test('It should normalize a px value to base rem size, when given a width value, current unit string, and a conversion type as string', () => {
    expect(getDataRemote(48, 'px', 'rem', 16)).toBe('3rem');
  });
  */
});