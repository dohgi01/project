const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json()); //axios 통신시 필요한 구문
app.use(cors);

//Login
const user = [
    { username : 'admin', userpass : '1234'},
    { username : 'front', userpass : 'abcd'},
    { username : 'back', userpass : 'end'},
]

app.post('/login', function(req, res){
    let id = req.body.username; 
    let pass = req.body.userpass; 
            
    var idcheck = user.filter(function(v){
        return id === v.username;
    }); 
    
    if(idcheck.length > 0){
        if(idcheck[0].userpass === pass){
            res.json({success : 1, message : 'login success'});
        } else {
            res.json({error : -1, message : 'no match password'});
        }
        
    } else {
        res.json({success : 2, message : 'go to register'});
    }
});


//Company
const companyList = require('./data'); //내보낸 data.js의 내용을 가져오기

app.get('/company', function(req,res){
    res.json(companyList); ///compnay의 경로로 들어가면 이 데이터를 전달해준다.
});



//Details
app.get('/company/:company_id', function(req,res){
    console.log(req.params.company_id); //실행시킨 서버(server.js)에서 입력된 숫자확인

    
    var all = companyList.company;
    console.log(all);
    
    /*
        [
            { id : 1, .....}
            { id : 2, .....}
            .......
        ]
    
    */
    
    const result = all.filter(function(v){
       return v.id == req.params.company_id;
            //들어온 id와 동일한 숫자일 경우의 데이터만 result의 값으로 리턴
            //결과 하나의 값만 reuslt에 들어가며 fiter는 배열.
    });
    res.json(result[0]);

});








const server = app.listen(4000);



















