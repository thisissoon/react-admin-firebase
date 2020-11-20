import { parseDocGetAllUploads } from "../src/misc";
import { ParsedRefDoc } from "../src/misc/internal.models";

describe('reference-document-parser.spec', () => {
  test("test document references", () => {
    const doc = {
      name: "Some guy",
      items: [
        {
          ___refid: 'ref',
          ___refpath: 'my/ref'
        } as ParsedRefDoc,
      ],
    };
    const result = parseDocGetAllUploads(doc);
    expect(result.refdocs.length).toBe(1);
    expect(result.refdocs[0].fieldDotsPath).toBe("items.0");
    expect(result.refdocs[0].refPath).toBe("my/ref");
  });
})