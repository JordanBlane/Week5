using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Where do you want to go Left or Right");
            string ch1 = Console.ReadLine();
            if (ch1 == "left")
            {
                Console.WriteLine("You Find a Spoon, do you pick it up");
                string ch2 = Console.ReadLine();
                if (ch2 == "yes")
                {
                    Console.WriteLine("the owner comes out, what do you do, 1.Kill him  2.give it back  3.run");
                    string ch3 = Console.ReadLine();
                    if (ch3 == "1")
                    {
                        Console.WriteLine("You take his eyes out with the spoon");
                    }
                    else if (ch3 == "2")
                    {
                        Console.WriteLine("Shouldnt of done that");
                    }
                    else if (ch3 == "3")
                    {
                        Console.WriteLine("he has a gun, you die");
                    }
                    else
                    {
                        Console.WriteLine("not a valid answer");
                    }
                }

                else if (ch2 == "no")
                    {
                        Console.WriteLine("Your going to die now");
                    }
                    else
                    {
                        Console.WriteLine("Not a valid answer");
                    }
                }
                else if (ch1 == "right")
                {
                    Console.WriteLine("You Died");
                }
                else
                {
                    Console.WriteLine("Not a Valid Answer");
                }
            }
        }
    }
