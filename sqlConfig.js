const dbconfig = {
    development: {
        server: 'mssql', // Hostname หรือ IP ของ SQL Server
        database: 'team3_web_labDB',
        user: 'sa',
        password: 'P@ssw0rd',
        port: 1433, // พอร์ต SQL Server
        options: {
            encrypt: true, // จำเป็นถ้าใช้งานบน Azure SQL หรือ TLS
            setTimeout: 12000, // ระยะเวลารอการเชื่อมต่อ
            enableArithAbort: true, // ใช้เพื่อรองรับการจัดการข้อผิดพลาด
            trustServerCertificate: true, // จำเป็นถ้าใช้ self-signed certificate
            trustedConnection: true, // (กรณีใช้งาน Windows Authentication)
            instancename:  'mssql' 
        }
    },
    production: {
        server: '10.21.43.203',
        database:'team3_web_labDB',
        user:'sa',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '10.21.43.203'  // SQL Server instance name
        }
    },
    


};
module.exports = dbconfig;
