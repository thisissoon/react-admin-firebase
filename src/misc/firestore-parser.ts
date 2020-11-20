import { ParsedRefDoc } from "./internal.models";

export function parseAllDocFromFirestore(obj: any) {
  const isObject = !!obj && typeof obj === "object";
  if (!isObject) {
    return;
  }
  Object.keys(obj).map((key) => {
    const value = obj[key];
    obj[key] = recusivelyCheckObjectValue(value);
  });
}

export function recusivelyCheckObjectValue(input: any): any {
  const isFalsey = !input;
  if (isFalsey) {
    return input;
  }
  const isPrimitive = typeof input !== "object";
  if (isPrimitive) {
    return input;
  }
  const isTimestamp = !!input.toDate && typeof input.toDate === "function";
  if (isTimestamp) {
    return input.toDate();
  }
  const isArray = Array.isArray(input);
  if (isArray) {
    return (input as any[]).map((value) => recusivelyCheckObjectValue(value));
  }
  const isDocumentReference =
    typeof input.id === "string" &&
    typeof input.parent === "object" &&
    typeof input.path === "string";
  if (isDocumentReference) {
    const parsed: ParsedRefDoc = {
      ___refpath: input.path,
      ___refid: input.id,
    };
    return parsed;
  }
  const isObject = typeof input === "object";
  if (isObject) {
    Object.keys(input).map((key) => {
      const value = input[key];
      input[key] = recusivelyCheckObjectValue(value);
    });
    return input;
  }
}
