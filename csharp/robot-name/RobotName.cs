using System;
using System.Collections.Generic;

public class Robot
{
    private string _name;
    private Random r;
    public static List<string> repeatedNames = new List<string>();

    public Robot()
    {
        this.r = new Random();
        this._name = this.generate();
        repeatedNames.Add(this._name);
    }

    public string Name
    {
        get
        {
            return this._name;
        }
    }

    public void Reset()
    {
        repeatedNames.Remove(this._name);
        this._name = this.generate();
    }

    public string generate()
    {
        string code = this.generate_code();
        while (repeatedNames.Contains(code))
        {
            code = this.generate_code();
        }
        repeatedNames.Add(code);
        return code;
    }

    private string generate_code()
    {
        return "" + Char.ToUpper((char)('a' + this.r.Next(0, 25))) + Char.ToUpper((char)('a' + this.r.Next(0, 25))) + this.r.Next(100, 999);
    }
}
