function select(sql) {
	var promise = new Promise(function(resolve,reject) {
		var result = null;
		var mysql = require('mysql');
		var connection = mysql.createConnection({
		  host: '127.0.0.1',
		  user: 'root',
		  password: 'root'
		});

		connection.connect();
		connection.query("USE test");
		console.log(sql);
		connection.query(sql, function (err, results, fields) { 
		    if (err) { 
		    	console.log(err);
		      	reject(err); 
		    }else {
		    	if(results.length > 0) {
		    		resolve({status: 99999,results:results});
		    	}else {
		    		resolve({status: 00000,results:results});
		    	}	    	
		    } 
		  } 
		);
		connection.end(); 
	})

	return promise;	
}

module.exports = select;