using System;

public static class Grains
{
    public static ulong Square(int n)
    {
        if (n < 1 || n > 64) { throw new ArgumentOutOfRangeException(); }
        return (ulong) Math.Pow(2.00, (double)n - 1);
    }

    public static ulong Total()
    {
        ulong sum = 0UL;
        ulong accumulate = 1;

        for(int i = 0; i < 64; i++)
        {
            sum += accumulate;
            accumulate *= 2;
        }
        return sum;
        
    }
}