// 38. Count and Say
// https://leetcode.com/problems/count-and-say/
export default function countAndSay(n: number): string {
  function recursion(s: string): string {
    let result = "";
    for (const [ch, count] of uniq(s)) {
      result += `${count}${ch}`;
    }
    return result;
  }

  function* uniq(s: string): Generator<[string, number]> {
    let last = "";
    let count = 0;
    for (const ch of s + ".") {
      if (ch === last) {
        count++;
        continue;
      }
      if (count > 0) {
        yield [last, count];
      }
      last = ch;
      count = 1;
    }
  }

  let i = 1;
  let v = "1";
  while (i < n) {
    i++;
    v = recursion(v);
  }
  return v;
}
