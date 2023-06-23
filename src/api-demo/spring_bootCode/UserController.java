package com.java.java21Feb.loginpassword;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepositiry userRepositiry;

    @PostMapping("saveUser")
    public ResponseEntity<?> setSaveUser(@RequestBody User user){
        User userObj=userRepositiry.save(user);

        ApiResponse response=new ApiResponse();

        if(userObj!=null){
            response.setMessage("Success");
            response.setStatusCode(HttpStatus.CREATED.value());
            response.setResult("User created successfully!!");
            return ResponseEntity.ok(response);
        }

        return ResponseEntity.ok(response);
    }

    @GetMapping("getUsers")
    public List<User>getUserList(){
        return userRepositiry.findAll();
    }

    @PutMapping("updatePassword")
    public String updateStudent(@RequestBody User user) {

        User us = userRepositiry.findByUserName(user.getUserName());
        us.setPassword(user.getPassword());
        userRepositiry.save(us);

        return "password update";
    }

    @DeleteMapping("deleteUser")
    public String deleteUser(@RequestBody User user){
        User us1=userRepositiry.findByUserName(user.getUserName());
        userRepositiry.deleteByUserName(us1);
        return "Record deleted";
    }


}
