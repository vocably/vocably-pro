import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
  customSnapshotsDir: 'snapshots',
  failureThreshold: 0.003,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.003 },
  capture: 'viewport',
});
