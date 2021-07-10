const { getDefaultConfig } = require("metro-config");

// React Native SVG
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);

  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: [...assetExts.filter(ext => ext !== 'svg'), 'bin'],
      sourceExts: [...sourceExts, 'svg']
    }
  };
})();