    var connection = require('./../config');
    module.exports.deleteuser=function(req,res){
        var email=req.body.email;
        
        connection.query('Delete FROM users WHERE email = ?',[email], function (error, results, fields) {
          if (error) throw error
		  
			  res.json({
				  status:true,
				  data:results,
				  message:'deleted successfull'
			  })
		  
        });
    }