import { setup } from 'safetest/setup';

setup({
  // eslint-disable-next-line no-undef
  bootstrappedAt: require.resolve('./src/main.tsx'),
  // https://github.com/kolodny/safetest/issues/18
  matchImageSnapshotOptions: {
    failureThreshold: 10_000,
    failureThresholdType: 'pixel',
  },
  ciOptions: {
    usingArtifactsDir: 'artifacts',
  },
});