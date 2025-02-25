import { FRAME as Frame } from '../../../contracts/Figma';
import { FontSizeTokens } from '../../../contracts/Tokens';

import { camelize } from '../../../frameworks/string/camelize';

import {
  ErrorMakeFontSizeTokensNoFrame,
  ErrorMakeFontSizeTokensNoChildren,
  ErrorMakeFontSizeTokensNoSizing,
  ErrorMakeFontSizeTokensMissingProps,
  ErrorMakeFontSizeTokensMissingSize
} from '../../../frameworks/errors/errors';

/**
 * @description Places all Figma font sizes into a clean object
 */
export function makeFontSizeTokens(
  fontSizeFrame: Frame,
  fontUnit: string,
  remSize: number
): FontSizeTokens {
  if (!fontSizeFrame) throw Error(ErrorMakeFontSizeTokensNoFrame);
  if (!fontSizeFrame.children) throw Error(ErrorMakeFontSizeTokensNoChildren);
  if (!fontUnit || !remSize) throw Error(ErrorMakeFontSizeTokensNoSizing);

  const fontSizes: Record<string, unknown> = {};
  const TOKENS = fontSizeFrame.children.reverse();
  TOKENS.forEach((item: Frame) => makeFontSizeToken(item, fontSizes, remSize, fontUnit));

  return fontSizes;
}

function makeFontSizeToken(
  item: Frame,
  fontSizes: Record<string, unknown>,
  remSize: number,
  fontUnit: string
) {
  if (!item.name || !item.style) throw Error(ErrorMakeFontSizeTokensMissingProps);
  if (!item.style.fontSize) throw Error(ErrorMakeFontSizeTokensMissingSize);

  const NAME = camelize(item.name);
  const FONT_SIZE = (() => {
    if (fontUnit === 'px') return item.style.fontSize + fontUnit;
    else return (item.style.fontSize as unknown as number) / remSize + fontUnit;
  })();

  fontSizes[NAME] = FONT_SIZE;
}
