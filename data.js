function data() {
    var connection = new ActiveXObject("employeelist.Connection");

    var connectionstring = "Data Source=elabsqldb2.db.11460868.hostedresource.com;Initial Catalog=elabsqldb2;User ID=elabsqldb2;password=elab17TRACK#14";
    connection.Open(connectionstring);
    var rs = new ActiveXObject("employeelist.Recordset");

    rs.Open("SELECT * FROM employeelist", connection);
    rs.MoveFirst
    while (!rs.eof) {
        document.write(rs.fields(1));
        rs.movenext;
    }

    rs.close;
    connection.close;

}