using System;
using System.Collections.Generic;

public static class PrimeFactors
{
    public static int[] Factors(long number)
    {
        List<int> result = new List<int>();
        while(number > 1)
        {
            for(int i = 2; i <= number; i++)
            {
                if(number % i == 0)
                {
                    number /= i;
                    result.Add(i);
                    break;
                }
            }
        }
        return result.ToArray();
    }


}