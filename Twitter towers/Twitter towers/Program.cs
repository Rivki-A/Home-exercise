// See https://aka.ms/new-console-template for more information

while (true)
{
    Console.WriteLine("Select an option:");
    Console.WriteLine("1:Rectangular tower");
    Console.WriteLine("2:Triangle tower");
    Console.WriteLine("3:Exit");
    int choice = int.Parse(Console.ReadLine());

    switch (choice)
    {
        case 1:
            RectangleTower();
            break;
        case 2:
            TriangleTower();
            break;
        case 3:
            Environment.Exit(0);
            break;
        default:
            Console.WriteLine("Invalid selection, please try again.");
            break;
    }
}

static void RectangleTower()
{
    Console.WriteLine("Enter the height of the tower:");
    int height = int.Parse(Console.ReadLine());
    Console.WriteLine("Enter the width of the tower:");
    int width = int.Parse(Console.ReadLine());

    if (height==width || Math.Abs(height - width) > 5)
    {
        int area = height * width;
        Console.WriteLine("The area of the tower is: " + area);
    }
    else
    {
        int perimeter = 2 * (height + width);
        Console.WriteLine("The perimeter of the RectangleTower is: " + perimeter);
    }
}

static void TriangleTower()
{
    Console.WriteLine("Select an option:");
    Console.WriteLine("1: Calculation of the perimeter of the triangle");
    Console.WriteLine("2: The triangle print");
    int option = int.Parse(Console.ReadLine());

    Console.WriteLine("Enter the height of the tower:");
    int height = int.Parse(Console.ReadLine());
    Console.WriteLine("Enter the width of the tower:");
    int width = int.Parse(Console.ReadLine());

    switch (option)
    {
        case 1:
            int rib = (height * height) + ((width / 2) * (width / 2));
            rib = (int)Math.Sqrt(rib);
            Console.WriteLine("Perimeter of the triangle: " + (2 * rib + width));
            break;
        case 2:
            if (width % 2 == 0 || height * 2 < width)
            {
                Console.WriteLine("The triangle cannot be printed.");
            }
            else
            {   int num=(height-2)/((width-2)/2);
                int num2 = (height - 2) % ((width - 2)/2);
                int count = 1, p = width / 2;
                for (int i = 0; i < p; i++)
                {
                    Console.Write(" ");
                }
                Console.Write("*");
                Console.WriteLine();
                count += 2;
                p--;
                for (int i = 0; i < num2; i++)
                {
                    for (int j = 0; j < p ; j++)
                    {
                        Console.Write(" ");
                    }
                    for (int j = 0; j < count; j++)
                    {
                        Console.Write("*");
                    }
                    Console.WriteLine();
                }
                while (count != width)
                {
                    for (int i = 0; i < num; i++)
                    {
                        for (int j = 0; j < p; j++)
                        {
                            Console.Write(" ");
                        }
                        for (int j = 0; j < count; j++)
                        {
                            Console.Write("*");
                        }
                        Console.WriteLine();
                    }
                    p--;
                    count += 2;
                }
                for (int i = 0; i < width; i++)
                {
                    Console.Write("*");
                }
                Console.WriteLine();

            }
            break;
        default:
            Console.WriteLine("Bad choice.");
            break;
    }
}
