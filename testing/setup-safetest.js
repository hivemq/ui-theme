import { setup } from 'safetest/setup';

setup({
  // eslint-disable-next-line no-undef
  bootstrappedAt: require.resolve('./src/main.tsx'),
  // https://github.com/kolodny/safetest/issues/18
  matchImageSnapshotOptions: {
    failureThreshold: 0.03,
    failureThresholdType: 'pixel',
  },
  ciOptions: {
    usingArtifactsDir: 'artifacts',
  },
});