using System;
using System.Text.RegularExpressions;

public class PhoneNumber
{
    public static string Clean(string phoneNumber)
    {
        Regex rgx = new Regex(@"[^0-9\-\(\)\+\.]");
        if (rgx.IsMatch(phoneNumber)) { throw new ArgumentException(); }
        phoneNumber = Regex.Replace(phoneNumber, @"[\-\(\)\+\. ]", "");

        return "";

    }
}