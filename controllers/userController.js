const connection = require('../config/db');

exports.getAllUsers = (req, res) => {
    connection.query('SELECT * FROM enrollment_bills', (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
    });
};

exports.createUser=(req,res)=>{
    const {student,name, course, units, tuition}=req.body;
   
    connection.query('INSERT INTO enrollment_bills (student_id, student_name,course_program, units_enrolled, tuition_total) VALUES (?,?,?,?,?)',[student,name, course, units, tuition],(err,result)=>{
        if(err) throw err;
        res.status(201).json({message:'Enrollement assessment created successfully',id:result.insertId});
    });
}

exports.updateUser=(req,res)=>{
    const {amount,ids}=req.body;
    connection.query('UPDATE enrollment_bills SET course_program=?  WHERE id=? ',[amount,ids],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'Course program updated successfully'});
        else
            res.status(404).json({message:'Id not found'});

        exports.deleteUser=(req,res)=>{

    const ids=req.body.ids;

    connection.query('DELETE FROM enrollment_bills WHERE id=?',[ids],(err,result)=>{

        if(err) throw err;

        if(result.affectedRows>0)

            res.json({message:'User deleted successfully'});

        else

            res.status(404).json({message:'User not found'});

    });



}

});
}
