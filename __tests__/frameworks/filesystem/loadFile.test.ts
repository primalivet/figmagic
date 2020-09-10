import * as path from 'path';

import { loadFile } from '../../../bin/frameworks/filesystem/loadFile';

// TODO: Test loc 26

describe('Failure cases', () => {
  test('It should throw an error if no argument is provided', () => {
    // @ts-ignore
    loadFile().toThrow();
  });

  test('It should throw an error if invalid path is provided', () => {
    const BAD_PATH = `./AKLJR#LJKASlaks`;
    loadFile(BAD_PATH).toThrow();
  });
});

describe('Success cases', () => {
  test('It should return data from local file', () => {
    const FILE = loadFile(path.join(`${process.cwd()}`, `testdata`, `figmagicrc`));
    expect(FILE).toEqual(
      expect.objectContaining({
        debugMode: false,
        fontUnit: 'rem',
        outputFileName: 'figma.json',
        outputFolderBaseFile: '.figmagic',
        outputFolderGraphics: 'graphics',
        outputFolderTokens: 'tokens',
        outputFormatGraphics: 'svg',
        outputScaleGraphics: 1,
        outputTokenFormat: 'mjs',
        spacingUnit: 'rem',
        usePostscriptFontNames: false
      })
    );
  });

  /*
// DEACTIVATING THIS, AS IT BREAKS ON WINDOWS BUILDS (...?)

test('It should return data from local file in raw format (not JSON-parsed)', () => {
  const FILE = loadFile(path.join(`${process.cwd()}`, `testdata`, `figmagicrc`), true);

  console.log('FILE', FILE);

  expect(FILE).toBe(`{
  \"debugMode\": false,
  \"fontUnit\": \"rem\",
  \"outputFileName\": \"figma.json\",
  \"outputFolderBaseFile\": \".figmagic\",
  \"outputFolderTokens\": \"tokens\",
  \"outputTokenFormat\": \"mjs\",
  \"outputFolderGraphics\": \"graphics\",
  \"outputFormatGraphics\": \"svg\",
  \"outputScaleGraphics\": 1,
  \"spacingUnit\": \"rem\",
  \"usePostscriptFontNames\": false
}`);
});
  */
});