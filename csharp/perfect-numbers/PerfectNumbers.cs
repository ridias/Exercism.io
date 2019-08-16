using System;

public enum Classification
{
    Perfect,
    Abundant,
    Deficient
}

public static class PerfectNumbers
{
    public static Classification Classify(int number)
    {
        if(number <= 0) { throw new ArgumentOutOfRangeException(); }
        if(number == 1) { return Classification.Deficient; }
        int sum = 1;
        for(int i = 2; i <= number / 2; i++) if (number % i == 0) sum += i;
        return sum == number ? Classification.Perfect : sum > number ? Classification.Abundant : Classification.Deficient;
    }
}
