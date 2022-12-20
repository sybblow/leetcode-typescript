// 1220. Count Vowels Permutation
// https://leetcode.com/problems/count-vowels-permutation/
export default function countVowelPermutation(n: number): number {
  function traverse(nextChars: string[], n: number): number {
    if (n === 1) return nextChars.length;

    let permutation = 0;
    for (const char of nextChars) {
      permutation += calcChar(char, n);
    }

    return permutation % DIVISOR;
  }

  function calcChar(char: string, n: number): number {
    return calcThroughCache(
      `${char}*${n}`,
      () => traverse(NEXT_CHARS_EACH_CHAR.get(char)!, n - 1),
    );
  }

  function calcThroughCache(key: string, calcCall: () => number): number {
    let v = memo.get(key);
    if (v === undefined) {
      v = calcCall();
      memo.set(key, v);
    }
    return v;
  }

  return traverse(["a", "e", "i", "o", "u"], n);
}

const memo: Map<string, number> = new Map();

const DIVISOR = 1e9 + 7;

const NEXT_CHARS_EACH_CHAR = new Map([
  ["a", ["e"]],
  ["e", ["a", "i"]],
  ["i", ["a", "e", "o", "u"]],
  ["o", ["i", "u"]],
  ["u", ["a"]],
]);
