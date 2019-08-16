using System;

public static class ScrabbleScore
{
    public static int Score(string input)
    {
        input = input.ToLower();
        int[] points = { 1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10 };
        int score = 0;
        for(int i = 0; i < input.Length; i++)
        {
            int pos = (int)input[i] - 97;
            score += points[pos];
        }
        return score;
    }
}