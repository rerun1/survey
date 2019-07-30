$(document).ready(function(){
  $("form#test").submit(function(event){
    event.preventDefault();
    var user1 = $("input[name=question1]:checked").val();
    var user2 = $("input[name=question2]:checked").val();
    var user3 = $("input[name=question3]:checked").val();
    var user4 = $("input[name=question4]:checked").val();
    var user5 = $("input[name=question5]:checked").val();
    var user6 = $("input[name=question6]:checked").val();
    var user7 = $("input[name=question7]:checked").val();

    alert(user1+user2+user3+user4+user5+user6+user7);
  });
});
