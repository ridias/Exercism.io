using System;
using System.Collections.Generic;

public static class Series
{
    public static string[] Slices(string numbers, int sliceLength)
    {
        if(numbers.Length < sliceLength || numbers.Length == 0 || sliceLength <= 0) { throw new ArgumentException(); }
        List<string> result = new List<string>();

        for(int i = 0; i < numbers.Length - sliceLength + 1; i++)
        {
            result.Add(numbers.Substring(i, sliceLength));
        }
        return result.ToArray();
    }
}