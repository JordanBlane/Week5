using System;
using System.ComponentModel;
using System.Net.Http;
using System.Security.Cryptography;

namespace LearningCSharp
{
    class Game
    {
        //Questions
        
        //1
        public void one()
        {
            Console.WriteLine("Question 1");
            string one = Console.ReadLine();
            switch (one)
            {
                case "1":
                    Console.WriteLine("Correct");
                    two();
                    break;
                case "2":
                    Console.WriteLine("You Dies");
                    break;
                default:
                    Console.WriteLine("NAN");
                    break;
            }

        }
        //2
        public void two()
        {
            Console.WriteLine("Question 2");
            string two = Console.ReadLine();
            switch (two)
            {
                case "1":
                    Console.WriteLine("You Die");
                    break;
                case "2":
                    Console.WriteLine("Correct");
                    three();
                    break;
                case "3":
                    Console.WriteLine("You Die");
                    break;
                default:
                    Console.WriteLine("NAN");
                    break;
            }
        }
        //3
        public void three()
        {
            Console.WriteLine("Question 3");
            string three = Console.ReadLine();
            switch (three)
            {
                case "1":
                    Console.WriteLine("You Die");
                    break;
                case "2":
                    Console.WriteLine("You Die");
                    break;
                case "3":
                    Console.WriteLine("Correct");
                    four();
                    break;
                default:
                    Console.WriteLine("NAN");
                    break;
            }
        }
        //2
        public void four()
        {
            Console.WriteLine("Question 4");
            string four = Console.ReadLine();
            switch (four)
            {
                case "1":
                    Console.WriteLine("You Die");
                    break;
                case "2":
                    Console.WriteLine("correct");
                    five();
                    break;
                case "3":
                    Console.WriteLine("You die");
                    break;
                default:
                    Console.WriteLine("NAN");
                    break;
            }
        }
        //4
        public void five()
            {
                string five = Console.ReadLine();
                switch (five)
                {
                    case "1":
                        Console.WriteLine("You DIe");
                        break;
                    case "2":
                        Console.WriteLine("You DIw");
                        break;
                    case "3":
                        Console.WriteLine("You die");
                        break;
                    case "4":
                        Console.WriteLine("Correct");
                        break;
                    default:
                        Console.WriteLine("NAN");
                        break;
                }
            }
        }
    class Program
    {
        //Main function
        static void Main(string[] args)
        {
            var game = new Game();
            game.one();
        }
    }
}