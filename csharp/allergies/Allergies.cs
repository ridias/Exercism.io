using System;
using System.Collections.Generic;

public enum Allergen
{
    Eggs = 1,
    Peanuts = 2,
    Shellfish = 4,
    Strawberries = 8,
    Tomatoes = 16,
    Chocolate = 32,
    Pollen = 64,
    Cats = 128
}

public class Allergies
{
    private int mask;
    public Allergies(int mask)
    {
        this.mask = mask;
    }

    public bool IsAllergicTo(Allergen allergen)
    {
        int score = this.mask;
        int value = 1;
        while(score > 0)
        {
            if(score % 2 == 1 && Enum.GetName(typeof(Allergen), value) == allergen.ToString()) return true;
            score = score >> 1;
            value = value << 1;
        }
        return false;
    }

    public Allergen[] List()
    {
        var list = new List<Allergen>();
        int score = this.mask;
        int value = 1;

        while (score > 0)
        {
            if (score % 2 == 1 && value == 1) list.Add(Allergen.Eggs);
            else if (score % 2 == 1 && value == 2) list.Add(Allergen.Peanuts);
            else if (score % 2 == 1 && value == 4) list.Add(Allergen.Shellfish);
            else if (score % 2 == 1 && value == 8) list.Add(Allergen.Strawberries);
            else if (score % 2 == 1 && value == 16) list.Add(Allergen.Tomatoes);
            else if (score % 2 == 1 && value == 32) list.Add(Allergen.Chocolate);
            else if (score % 2 == 1 && value == 64) list.Add(Allergen.Pollen);
            else if (score % 2 == 1 && value == 128) list.Add(Allergen.Cats);
            score = score >> 1;
            value = value << 1;
        }

        return list.ToArray();
    }
}