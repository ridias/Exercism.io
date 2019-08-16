using System;

public static class ArmstrongNumbers
{
    public static bool IsArmstrongNumber(int number)
    {
        int len = number.ToString().Length;
        int sum = 0;
        int aux = number;
        while(number > 0)
        {
            int digit = number % 10;
            sum += (int)(double)Math.Pow(digit, len);
            number = (int)Math.Floor((double)number / 10);
        }
        return sum == aux;
    }
}