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
});
