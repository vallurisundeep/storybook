import StyleDictionary from 'style-dictionary';
import { register, permutateThemes } from '@tokens-studio/sd-transforms';

register(StyleDictionary);

const sd = new StyleDictionary({
  source: ['tokens/**/*.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    scss: {
      transformGroup: 'tokens-studio',
      prefix: '',
      buildPath: 'src/styles/tokens/',
      files: [
        {
          destination: '_generated.scss',
          format: 'css/variables',
          options: {
            selector: '@theme',
            outputReferences: true,
          },
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
