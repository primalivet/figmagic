import { setupShadowTokens } from '../bin/entities/Tokens/tokens/setupShadowTokens';

import { shadowsFrame, shadowsFrameMultipleShadows } from '../testdata/shadowsFrame';

/*
test('It should return a complete object when passing in valid input', () => {
  expect(setupShadowTokens(shadowsFrame)).toEqual(
    expect.objectContaining({
      deep: '3px 3px 3px rgba(196, 196, 196, 0.75)',
      medium: '0px 0px 5px rgba(0, 0, 0, 0.5)',
      soft: '0px 0px 5px rgba(196, 196, 196, 1)'
    })
  );
});

test('It should combine multiple shadows into same key', () => {
  expect(setupShadowTokens(shadowsFrameMultipleShadows)).toEqual(
    expect.objectContaining({
      deep: '3px 3px 3px rgba(196, 196, 196, 0.75), 3px 3px 3px rgba(196, 196, 196, 0.75)'
    })
  );
});

test('It should throw an error if frame is missing "children" array', () => {
  expect(() => {
    setupShadowTokens({});
  }).toThrow();
});

test('It should throw an error if frame does not have "effects" array', () => {
  expect(() => {
    setupShadowTokens({
      children: [
        {
          somethingElse: 123
        }
      ]
    });
  }).toThrow();
});

test('It should throw an error if no parameter is provided', () => {
  expect(() => {
    setupShadowTokens();
  }).toThrow();
});
*/
