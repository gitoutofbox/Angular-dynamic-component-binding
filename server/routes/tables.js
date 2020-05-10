exports.getColumns = (req, res) => {
    let where       = ` WHERE page_id=${req.params.page_id}`;
    const sql       = `SELECT * FROM arc_tables ${where}`;

    database.query(sql, (err, rows) => {
        if (err) { throw err; }       
        res.send({
            "status": "success", 
            data: {
                "columns": JSON.parse(rows[0]['columns'])
            }
        });
      
    });
}

exports.getData = (req, res) => {
    const page_id = req.params.page_id;

    let sql = `SELECT table_name FROM  arc_table_page WHERE page_id = ${page_id}`;
    database.query(sql, (err, tableNameRow) => {
        if (err) { throw err; }
        let where   = ` WHERE 1 = 1`;
        sql         = `SELECT * FROM ${tableNameRow[0]['table_name']}  ${where}`;
        // console.log(sql)
        database.query(sql, (err, rows) => {
            if (err) { throw err; }       
            res.send({
                "status": "success", 
                data: {
                    "rows": rows,
                    "totalRows": 100
                }
            });
        
        });
    })
    
}