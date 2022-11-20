<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%
String driver = "com.mysql.jdbc.Driver";
String connectionUrl = "jdbc:mysql://localhost:3306/";
String database = "Database";
String userid = "root";
String password = "";
try {
Class.forName(driver);
} catch (ClassNotFoundException e) {
e.printStackTrace();
}
Connection connection = null;
Statement statement = null;
ResultSet resultSet = null;
%>

<html>
<body>
	<table>
        <tbody>

<%
try{
connection = DriverManager.getConnection(connectionUrl+database, userid, password);
statement=connection.createStatement();
String sql ="select Hospital_name , hospital_location , ward_Incharge from CORONA ";
resultSet = statement.executeQuery(sql);
while(resultSet.next()){
%>  
<tr>
    <td><%= resultSet.getString("hospital_name")  %></td>
    <td><%= resultSet.getString("hospital_location")  %></td>
    <td><%= resultSet.getString("ward_Incharge")  %></td>
</tr>



<%
}
connection.close();
} catch (Exception e) {
e.printStackTrace();
}
%>
</tbody>
</table> 

</body>
</html>