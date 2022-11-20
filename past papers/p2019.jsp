<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%
String driver="com.mysql.jdbc.Driver";
String connectionUrl="jdbc:mysql://localhost:3306/";
String database="Database";
String userid="root";
String password="";

try{
    Class.forName("Driver");
}
catch(ClassNotFoundException e){
    e.printStackTrace();
}
Connection connection=null;
Statement statement=null;
ResultSet resultset=null;
%>
<html>
    <body>
        <select>
            <%
            try{
                connection=DriverManager.getConnection(connectionUrl+database,userid,password);
                statement=connection.createStatement();
                String sql="select model,company from Smartphone";
                resultSet=statement.executeQuery(sql);

                while(resultSet.next()){
                    %>
                    <option><%= resultSet.getString("model") %></option>
                    <option><%= resultSet.getString("company") %></option>
                    <%

                }
                connection.close();
            }
            catch(Exception e){
                e.printStackTrace();
            }
            %>
        </select>
    </body>
</html>