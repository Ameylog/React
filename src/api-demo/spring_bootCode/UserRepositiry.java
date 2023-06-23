package com.java.java21Feb.loginpassword;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositiry  extends JpaRepository<User,Long> {

    User findByUserName(String usrnm);


    void deleteByUserName(User us1);
}
