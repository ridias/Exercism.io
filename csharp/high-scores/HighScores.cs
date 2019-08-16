using System;
using System.Collections.Generic;
using System.Linq;

public class HighScores
{
    private List<int> list;
    private int length;
    public HighScores(List<int> list)
    {
        this.list = list;
        this.length = this.list.Count();
    }

    public List<int> Scores() => this.list;
    public int Latest() => this.list[this.length - 1];
    public int PersonalBest() => this.list.Max();
    public List<int> PersonalTopThree()
    {
        List<int> result = new List<int>(this.list);
        result.Sort();
        result.Reverse();
        int lenResult = this.length;
        while(lenResult > 3)
        {
            result.RemoveAt(lenResult - 1);
            lenResult--;
        }
        return result;       
    }
}