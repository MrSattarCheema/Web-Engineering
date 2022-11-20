import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class MyServlet extends HttpServelt{
    public void doGet(HttpServletRequest request,HttpServletResponse response)
    throws ServletException,IOException{
        static final String driver="com.mysql.jdbc.Driver"
        static final String DB_URL="jdbc:mysql://localhost/Database";

        static final String USER="root";
        static final String PASS="password";

        response.setContentType("text/html");
        PrintWriter out=response.getWriter();

        out.println("<html><body><ol>");
        try{
            Class.forName(driver);
            Connection conn=DriverManager.getConnection(DB_URL,USER,PASS);
            Statement stt=conn.createStatement();
            String sql="select name,capital_city from Country";
            ResultSet rs=stt.executeQuery(sql);
            while(rs.next()){
                Sting Name=rs.getString("name");
                String CName=rs.getString("capital_city");

                out.println("<li>"+Name+"</li>");
                out.println("<li>"+CName+"</li>");

            }
            out.println("</ol></body></html>")
            rs.close();
            stt.close();
            conn.close();
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
}