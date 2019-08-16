using System;
using System.Text.RegularExpressions;

public static class Acronym
{
    public static string Abbreviate(string phrase)
    {
        string result = "";
        bool mayus = false;
        Regex rgx = new Regex(@"[A-Za-z]");

        for(int i = 0; i < phrase.Length; i++)
        {
            if (!mayus) {
                result += phrase[i].ToString().ToUpper();
                mayus = true;
            }
            else if ((phrase[i].ToString().Equals(" ") || phrase[i].ToString().Equals("-") || phrase[i].ToString().Equals("_")) && rgx.IsMatch(phrase[i+1].ToString()))
            {
                mayus = false;
            }
        }

        return result;
    }
}