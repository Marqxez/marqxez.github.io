import java.util.Scanner;
public class Assign_5
{
   public static void main (String[] args)
   {
      Scanner keyboard = new Scanner(System.in);
      System.out.print("Enter a Y or y; ");
      String str = keyboard.nextLine();
      char ch1 = str.charAt(0);
      while( ch1=='Y' || ch1 =='y')
      {
         System.out.println("You enter Yor y "+str);
         break;
      }
   }
}