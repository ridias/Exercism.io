using System;
using System.Text.RegularExpressions;

public static class Pangram
{
    public static bool IsPangram(string input)
    {
        input = input.ToLower();
        input = Regex.Replace(input, @"[^A-Za-z]", "");
        int[] alphabet = new int[26];
        int count = 0;
        for(int i = 0; i < input.Length; i++)
        {
            int pos = (int) input[i] - 97;
            if(alphabet[pos] == 0)
            {
                alphabet[pos] += 1;
                count++;
            }
        }

        return count == 26;
    }
}