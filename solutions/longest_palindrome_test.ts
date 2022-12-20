
import { assertStrictEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import longestPalindrome from "./longest_palindrome.ts";

Deno.test("409. Longest Palindrome", () => {
  assertStrictEquals(longestPalindrome("abccccdd"), 7);
  assertStrictEquals(longestPalindrome("bb"), 2);
  assertStrictEquals(longestPalindrome("aaaAaaaa"), 7);
  assertStrictEquals(
    longestPalindrome(
      "zeusnilemacaronimaisanitratetartinasiaminoracamelinsuez"
    ),
    55
  );
  assertStrictEquals(
    longestPalindrome(
      "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
    ),
    983
  );
});
