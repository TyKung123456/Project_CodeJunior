<?php

class SignupContr {
    
    private $uid;
    private $pwd;
    private $pwdRepeat;
    private $email;

    public function _construct($uid, $pwd, $pwdRepeat, $email) {
        $this->$uid = $uid;
        $this->$pwd = $pwd;
        $this->$pwdRepeat = $pwdRepeat;
        $this->$email = $email;
    }

    private function emptyInput() {
        $result;
        if(empty($this->$uid) || empty($this->$pwd) || empty($this->$pwdRepeat) || empty($this->$email)) {
            $result = false;
        }
        else {
            $result = true;
        }
    }

}