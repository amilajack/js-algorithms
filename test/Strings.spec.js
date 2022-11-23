// @flow
import HasDupeChars from "../Strings/HasDupeChars";
import StringPermutationsRecursive, {
  StringPermutationsRecursiveFactorial,
} from "../Strings/Permutations";
import RandomString from "../Strings/RandomString";
import ReverseStringIterative, {
  ReverseStringIterativeInplace,
} from "../Strings/ReverseString";
import SubString from "../Strings/SubString";

describe("Strings", () => {
  test("HasDupeChars()", () => {
    expect(HasDupeChars("aaaaaaaaaaaaaa")).toEqual(true);
    expect(HasDupeChars("aaaaaaaabaaaaa")).toEqual(true);
    expect(HasDupeChars("abc")).toEqual(false);
    expect(HasDupeChars("def")).toEqual(false);
  });

  test.skip("StringPermutationsRecursive()", () => {
    expect(StringPermutationsRecursive("super")).toEqual(5 * 4 * 3 * 2 * 1);
    expect(StringPermutationsRecursive("some")).toEqual(4 * 3 * 2 * 1);

    expect(StringPermutationsRecursiveFactorial("super")).toEqual(
      5 * 4 * 3 * 2 * 1
    );
    expect(StringPermutationsRecursiveFactorial("some")).toEqual(4 * 3 * 2 * 1);
  });

  test("RandomString", () => {
    expect(typeof RandomString(10)).toBe("string");
    expect(RandomString(10)).toHaveLength(10);
  });

  test("ReverseString", () => {
    expect(ReverseStringIterative("some")).toEqual("emos");
    expect(ReverseStringIterativeInplace("some")).toEqual("emos");
  });

  test("SubString()", () => {
    expect(SubString("some", 2, 3)).toEqual("me");
  });
});
