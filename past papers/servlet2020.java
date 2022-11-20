// Loading required libraries
import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
 
public class MyServlet extends HttpServlet{

   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
   
      // JDBC driver name and database URL
      static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
      static final String DB_URL="jdbc:mysql://localhost/Database";

      //  Database credentials
      static final String USER = "root";
      static final String PASS = "password";

      // Set response content type
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
      
      
     
      out.println(
         "<html>\n" +
         "<head></head>\n" +
         "<body >\n" +
         "<h1 >" + title + "</h1>\n");
         "<table>\n";
      try {
         // Register JDBC driver
         Class.forName("com.mysql.jdbc.Driver");

         // Open a connection
         Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);

         // Execute SQL query
         Statement stmt = conn.createStatement();
         String sql;
         sql = "SELECT patient_name, patient_cnic, patient_location FROM CORONA";
         ResultSet rs = stmt.executeQuery(sql);

         // Extract data from result set
         while(rs.next()){
            //Retrieve by column name
            String name  = rs.getInt("patient_name");
            int cnic = rs.getInt("patient_cnic");
            String location = rs.getString("patient_location");
            

            //Display values
            out.println("<tr>");
            out.println("<td>" + name + "</td>");
            out.println("<td>" + String.valueOf(cnic) + "</td>");
            out.println("<td>" + location + "</td>");
            out.println("</tr>");
            
            
         }
         out.println("</table></body></html>");

         // Clean-up environment
         rs.close();
         stmt.close();
         conn.close();
   
      } catch(Exception e) {
         //Handle errors for Class.forName
         e.printStackTrace();
      } 
}