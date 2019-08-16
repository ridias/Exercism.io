using System;
using System.Collections.Generic;
using System.Linq;

public static class SumOfMultiples
{
    public static int Sum(IEnumerable<int> multiples, int max)
    {
        int sum = 0;
        for(int i = 1; i < max; i++)
        {
            IEnumerator<int> array = multiples.GetEnumerator();
            while (array.MoveNext())
            {
                int multiple = array.Current;
                if(multiple > 0) {
                    if(i % multiple == 0)
                    {
                        sum += i;
                        break;
                    }
                }
            }
        }
        return sum;
    }
}