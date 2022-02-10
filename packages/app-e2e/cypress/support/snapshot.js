import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
  customSnapshotsDir: 'snapshots',
  failureThreshold: 0.05,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.1 },
  capture: 'viewport',
});
