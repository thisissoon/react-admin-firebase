import {
  parseAllDocFromFirestore,
  recusivelyCheckObjectValue,
} from "../src/misc";
import { MakeMockClient } from "./integration-tests/utils/test-helpers";

describe("timestamp-parser tests", () => {
  test("retains number", () => {
    const doc = null;
    parseAllDocFromFirestore(doc);
    expect(doc).toBe(null);
  });

  test("retains falsey", () => {
    const doc = { a: null };
    parseAllDocFromFirestore(doc);
    expect(doc.a).toBe(null);
  });

  test("retains number", () => {
    const doc = { a: 1 };
    parseAllDocFromFirestore(doc);
    expect(doc.a).toBe(1);
  });

  test("retains string", () => {
    const doc = { a: "1" };
    parseAllDocFromFirestore(doc);
    expect(doc.a).toBe("1");
  });

  test("retains object", () => {
    const doc = { a: { f: "1" } };
    parseAllDocFromFirestore(doc);
    expect(doc.a.f).toBe("1");
  });

  test("converts timestamp simple", () => {
    const doc = { a: makeTimestamp() };
    parseAllDocFromFirestore(doc);
    expect(doc.a).toBeInstanceOf(Date);
  });

  test("converts timestamp deep nested", () => {
    const doc = { a: { b: makeTimestamp(), c: { d: makeTimestamp() } } };
    parseAllDocFromFirestore(doc);
    expect(doc.a.b).toBeInstanceOf(Date);
    expect(doc.a.c.d).toBeInstanceOf(Date);
  });

  test("converts timestamp array", () => {
    const doc = { a: { c: [makeTimestamp(), makeTimestamp()] } };
    parseAllDocFromFirestore(doc);
    expect(doc.a.c[0]).toBeInstanceOf(Date);
    expect(doc.a.c[1]).toBeInstanceOf(Date);
  });

  test("converts timestamp array", () => {
    const doc = { a: { c: [{ d: makeTimestamp() }] } };
    parseAllDocFromFirestore(doc);
    expect(doc.a.c[0].d).toBeInstanceOf(Date);
  });

  test("retains falsey", () => {
    const doc = ["okay"];
    recusivelyCheckObjectValue(doc);
    expect(doc[0]).toBe("okay");
  });

  test("check converts document references", () => {
    const doc = { ref: makeDocumentRef("something/here") } as any;
    recusivelyCheckObjectValue(doc);
    expect(doc.ref["___refpath"]).toBe("something/here");
  });
});

function makeTimestamp() {
  return new MockTimeStamp();
}

const client = MakeMockClient({ disableMeta: true });

function makeDocumentRef(path: string): firebase.firestore.DocumentReference {
  return client.db().doc(path);
}

class MockTimeStamp {
  toDate() {
    return new Date();
  }
}
