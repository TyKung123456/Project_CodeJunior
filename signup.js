function signForm(){

// ดึงข้อมูล username หรือ email และ password sign In
var username = signinForm.elements["username"].value;
var password = signinForm.elements["password"].value;

// สร้าง JSON object ข้อมูลการเข้าสู่ระบบ
var signInCredentials = {
  username: username,
  password: password
};

// ดึงข้อมูล username, email, password และ confirm password sign Up
var username = signupForm.elements["username"].value;
var email = signupForm.elements["email"].value;
var password = signupForm.elements["password"].value;
var confirmPassword = signupForm.elements["confirm-password"].value;

// ตรวจรหัสผ่านตรงกันมั๊ย
if (password !== confirmPassword) {
  alert("Passwords do not match");
  return;
}

// สร้าง JSON object ข้อมูลการลงทะเบียน
var signUpCredentials = {
  username: username,
  email: email,
  password: password
};
}