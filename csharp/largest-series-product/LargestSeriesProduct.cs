using System;

public static class LargestSeriesProduct
{
    public static long GetLargestProduct(string digits, int span) 
    {
        long maxProduct = 1;
        for (int i = 0; i < digits.Length && i < span; i++) maxProduct = maxProduct * Convert.ToInt64(digits[i]);
        long product = 1;

        /*while(i < digits.Length)
        {
            if(digits[i] == '0')
            {
                while(digits[i] == '0' && i < digits.Length) { i++; }
                product = GetProductSpecificPosition(digits, span, i);
                i += span;
            }
            else
            {
                product /= (long)digits[i - span];
                product *= (long)digits[i];
                i++;
            }
            if(maxProduct < product) { maxProduct = product; }
        }*/
        return maxProduct;
    }
}