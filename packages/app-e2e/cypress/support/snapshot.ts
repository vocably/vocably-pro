import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
  customSnapshotsDir: 'snapshots',
  failureThreshold: 0.005,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.005 },
  capture: 'viewport',
});
