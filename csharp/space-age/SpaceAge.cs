using System;

public class SpaceAge
{

    private double ageBaseEarth;
    public SpaceAge(int seconds)
    {
        this.ageBaseEarth = (double) seconds / 31557600.00;
    }
    private double round(double number) => Math.Round(number, 2);
    public double OnEarth() => this.round(this.ageBaseEarth);
    public double OnMercury() => this.round(this.ageBaseEarth / 0.2408467);
    public double OnVenus() => this.round(this.ageBaseEarth / 0.61519726);
    public double OnMars() => this.round(this.ageBaseEarth / 1.8808158);
    public double OnJupiter() => this.round(this.ageBaseEarth / 11.862615);
    public double OnSaturn() => this.round(this.ageBaseEarth / 29.447498);
    public double OnUranus() => this.round(this.ageBaseEarth / 84.016846);
    public double OnNeptune() => this.round(this.ageBaseEarth / 164.79132);
}