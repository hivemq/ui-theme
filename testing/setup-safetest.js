import { setup } from 'safetest/setup'

setup({
  // eslint-disable-next-line no-undef
  bootstrappedAt: require.resolve('./src/main.tsx'),
  // https://github.com/kolodny/safetest/issues/18
  matchImageSnapshotOptions: {
    comparisonMethod: 'ssim',
    // CI is installing a different version of chromium and ffmpeg than the one we use locally
    failureThreshold: 0.05,
    failureThresholdType: 'percent',
  },
  ciOptions: {
    usingArtifactsDir: 'artifacts',
  },
})
