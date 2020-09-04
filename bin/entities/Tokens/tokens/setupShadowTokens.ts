import { FRAME as Frame } from '../../../contracts/Figma';
import { makeShadowTokens } from '../index';
import { ShadowTokens } from '../../../contracts/Tokens';

import { camelize } from '../../../frameworks/string/camelize';
import { roundColorValue } from '../../../frameworks/string/roundColorValue';

import {
  ErrorSetupShadowTokensNoFrame,
  ErrorSetupShadowTokensNoChildren,
  ErrorSetupShadowTokensMissingProps
} from '../../../frameworks/errors/errors';

/**
 * @description Places all Figma shadows into a clean object
 *
 * @param shadowFrame The shadows frame from Figma
 */
export function setupShadowTokens(shadowFrame: Frame): ShadowTokens {
  if (!shadowFrame) throw new Error(ErrorSetupShadowTokensNoFrame);
  if (!shadowFrame.children) throw new Error(ErrorSetupShadowTokensNoChildren);

  const shadows: Record<string, unknown> = {};

  shadowFrame.children.forEach((item: Frame) => {
    if (!item.name || !item.effects) throw new Error(ErrorSetupShadowTokensMissingProps);

    const name = camelize(item.name);

    const effects = item.effects.map((effect) => {
      if (effect.type === 'DROP_SHADOW') return effect;
      return null;
    });

    shadows[name] = ``;

    if (effects.length > 0) {
      effects.forEach((e, index) => {
        // Get rid of Typescript (strict) error
        if (e) {
          const X = e.offset.x;
          const Y = e.offset.y;
          const RADIUS = e.radius;
          const R = roundColorValue(e.color.r);
          const G = roundColorValue(e.color.g);
          const B = roundColorValue(e.color.b);
          const A = roundColorValue(e.color.a, 1);

          shadows[name] += `${X}px ${Y}px ${RADIUS}px rgba(${R}, ${G}, ${B}, ${A})`;
          if (index !== effects.length - 1) shadows[name] += `, `;
        }
      });
    }
  });

  const shadowTokens = makeShadowTokens(shadows);
  return shadowTokens;
}
