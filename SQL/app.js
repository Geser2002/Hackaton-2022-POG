const sql = require ('mssql/msnodesqlv8');
var config={
    user: 'localhost',
    password: '',
    database: '122112',
    server: 'LAPTOP-9CO7AQUJ',
    driver: 'msnodesqlv8',
    options:{
        trustedConnection:true
    }
};

sql.connect(config,function(err){
    if(err){
        console.log(err);
    }
    var request = new sql.Request();
    request.query('select * from Ведомость', function(err,recordSet){
        if(err){
            console.log(err)
        }else{
            console.log(recordSet)
        }
    });

});