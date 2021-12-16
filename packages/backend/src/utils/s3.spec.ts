import {
  buildSaveFunction,
  buildLoadFunction,
  buildRemoveFunction,
} from './s3';

describe('s3 functionality', () => {
  it('properly saves, loads, and removes data', async () => {
    const bucket = process.env.CARDS_S3_BUCKET;
    const key = 'test-key';

    const save = buildSaveFunction<any>(bucket);
    const saveResult = await save(key, { a: 'b' });
    console.log({ saveResult });
    expect(saveResult.success).toBeTruthy();

    const load = buildLoadFunction<any>(bucket);
    const loadResult = await load(key);
    console.log({ loadResult });
    expect(loadResult.success).toBeTruthy();
    // @ts-ignore
    expect(loadResult.value).toEqual({ a: 'b' });

    const remove = buildRemoveFunction(bucket);
    const removeResult = await remove(key);
    console.log({ removeResult });
    expect(removeResult.success).toBeTruthy();
  });

  it('creates necessary object', async () => {
    const bucket = process.env.CARDS_S3_BUCKET;
    const key = 'eu-central-1:acd8c175-7270-4f58-a683-33f0abea919a/en';

    const save = buildSaveFunction<any>(bucket);
    const saveResult = await save(key, ['a', 'b', 'c', 'e']);
    console.log({ saveResult });
    expect(saveResult.success).toBeTruthy();
  });

  it('fetches non existing key', async () => {
    const bucket = process.env.CARDS_S3_BUCKET;
    const key = 'non-existing-key';

    const load = buildLoadFunction<any>(bucket);
    const loadResult = await load(key);
    console.log({ loadResult });

    if (loadResult.success === true) {
      expect(loadResult.success).toBeFalsy();
      return;
    }

    expect(loadResult.errorCode).toEqual('S3_LOAD_MISSING_KEY');
  });
});
