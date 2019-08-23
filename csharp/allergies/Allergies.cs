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
            if(score % 2 == 1)
            {
                switch (value)
                {
                    case 1:
                        list.Add(Allergen.Eggs);
                        break;
                    case 2:
                        list.Add(Allergen.Peanuts);
                        break;
                    case 4:
                        list.Add(Allergen.Shellfish);
                        break;
                    case 8:
                        list.Add(Allergen.Strawberries);
                        break;
                    case 16:
                        list.Add(Allergen.Tomatoes);
                        break;
                    case 32:
                        list.Add(Allergen.Chocolate);
                        break;
                    case 64:
                        list.Add(Allergen.Pollen);
                        break;
                    case 128:
                        list.Add(Allergen.Cats);
                        break;
                }
            }
            score = score >> 1;
            value = value << 1;
        }

        return list.ToArray();
    }
}