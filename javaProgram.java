import java.applet.*;
import java.awt.*;

public class javaProgram extends Applet{
	String message;
	public void init(){
		message = "Hello";
	}
   public void paint(Graphics g){
   	Graphics2D screen = (Graphics2D) g;
   	screen.drawString(message, 25, 50);
    }
}