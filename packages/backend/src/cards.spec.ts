import { LanguageCollection, makeFetchLanguageCollection } from './cards';

describe('fetchLanguageCollection', () => {
  let collection: LanguageCollection | null = null;

  afterEach(async () => {
    if (collection === null) {
      return;
    }

    await collection.removeEntireCollection();
    collection = null;
  });

  it('works properly', async () => {
    const fetchLanguageCollection = makeFetchLanguageCollection('test-user-id');
    const fetchResult = await fetchLanguageCollection('nl');

    console.log({ fetchResult });

    if (fetchResult.success === false) {
      expect(fetchResult.success).toBeTruthy();
      return;
    }

    collection = fetchResult.value;

    expect(collection.collection).toEqual([]);

    const addedItemsResult = await collection.add([
      {
        language: 'nl',
        sideA: 'gemaakt',
        sideB: 'als iets niet natuurlijk is of gebeurt',
      },
      {
        language: 'nl',
        sideA: 'maken',
        sideB: `1. (iets dat nog niet bestond) laten ontstaan\n2. (iets dat kapot is) zorgen dat het weer heel is`,
      },
    ]);

    console.log({ addedItemsResult });

    if (addedItemsResult.success === false) {
      expect(addedItemsResult.success).toBeTruthy();
      return;
    }

    const addedItems = addedItemsResult.value;

    expect(addedItems.length).toEqual(2);
    expect(addedItems[0].data.sideA).toEqual('gemaakt');
    expect(addedItems[1].data.sideA).toEqual('maken');

    const updateResult = await collection.update([
      {
        id: addedItems[0].id,
        card: {
          sideB: 'created',
        },
      },
    ]);

    console.log({ updateResult });

    if (updateResult.success === false) {
      expect(updateResult.success).toBeTruthy();
      return;
    }

    expect(updateResult.value.length).toEqual(1);
    expect(updateResult.value[0].data.sideB).toEqual('created');

    const removeResult = await collection.remove([collection.collection[1].id]);

    console.log(removeResult);

    if (removeResult.success === false) {
      expect(updateResult.success).toBeTruthy();
      return;
    }

    expect(collection.collection.length).toEqual(1);
  });
});
