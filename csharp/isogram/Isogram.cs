using System;
using System.Text.RegularExpressions;

public static class Isogram
{
    public static bool IsIsogram(string word)
    {
        int[] numberOfTimesLetters = new int[26];
        word = Regex.Replace(word, @"[^A-Za-z]", "");
        word = word.ToLower();
        for(int i = 0; i < word.Length; i++)
        {
            if(numberOfTimesLetters[(int) word[i] - 97] > 0)
            {
                return false;
            }
            else
            {
                numberOfTimesLetters[(int)word[i] - 97] += 1;
            }
        }

        return true;
    }
}
