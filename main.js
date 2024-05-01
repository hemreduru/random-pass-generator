// Password show-hide
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('eye-icon').addEventListener('click', function() {
      var input = document.getElementById('password');
      var icon = document.getElementById('eye-icon').querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });
  
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=";
  var password = "0";
  function generateRandomNumber() {
    console.log('Random Num');
    var min = 0;
    var max = charset.length - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generatePassword(){
    console.log('Generate Pass');
    var password = "";
    for (let i = 0; i < 24; i++) {
      var index = generateRandomNumber();
      password = password + charset[index];
      document.getElementById('password').value = password;

    }
  }
    