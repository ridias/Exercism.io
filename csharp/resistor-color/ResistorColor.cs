using System;

public static class ResistorColor
{
    public static int ColorCode(string color)
    {
        string[] colorsArray = Colors();
        int numberColorResistor= Array.IndexOf(colorsArray, color);
        return numberColorResistor;
    }

    public static string[] Colors()
    {
        string[] colors = { "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white" };
        return colors;
    }
}