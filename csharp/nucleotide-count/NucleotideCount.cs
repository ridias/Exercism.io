using System;
using System.Collections.Generic;

public static class NucleotideCount
{
    public static IDictionary<char, int> Count(string sequence)
    {
        //Another possibility is to look first if the sequence is valid via RegExp and if it's valid then loop.

        var result = new Dictionary<char, int>
        {
            ['A'] = 0,
            ['C'] = 0,
            ['G'] = 0,
            ['T'] = 0
        };

        foreach(char letter in sequence)
        {
            if (result.ContainsKey(letter))
            {
                result[letter]++;
            }
            else
            {
                throw new ArgumentException();
            }
        }
        return result;
    }
}