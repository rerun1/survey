$(document).ready(function(){
  $("form#test").submit(function(event){
    event.preventDefault();
    var personalityStatement = $("select#type").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var age = parseInt($("input#age").val());

    console.log(personalityStatement);
    console.log(gender);
    console.log(age);
    $("div#showType").show();
    $("p#picturePara").empty();
    $("form#test").hide();
    $("p#introParagraph").hide();

    if (age <= 5) {
      $("p#picturePara").text("Come on, that's not your right age");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/monster.jpg", "alt": "picture of stranger things monster"});
    } else if (personalityStatement === "ISFP" && gender === "female") {
      $("p#picturePara").text("Appropriate text here, Julia?");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/elevenAdventurerkISFP800x1000.png", "alt": "eleven with bloody nose"});
    } else if (personalityStatement === "ISFP" && gender !== "female") {
      $("p#picturePara").text("Appropriate text here, Julia?");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/jonathonLogicianINFP790x100.png", "alt": "jonathon the logician"});
    } else if (personalityStatement === "INFJ" && gender === "female") {
      $("p#picturePara").text("Appropriate text here, Julia?");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/suzieINFJ.png", "alt": "suzie"});
    } else if (personalityStatement === "INFJ" && gender !== "female") {
      $("p#picturePara").text("Appropriate text here, Julia?");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/wheelerAdvocateINFJ845x1000.png", "alt": "mike wheeler the advocate"});
    } else if (personalityStatement === "ESTJ" && gender === "female") {
      $("p#picturePara").text("Appropriate text here, Julia?");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/florenceESTJ.png", "alt": "florence"});
    } else if (personalityStatement === "ESTJ" && gender !== "female") {
      $("p#picturePara").text("Appropriate text here, Julia?");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/sinclairExecutiveESTJ800x1000.png", "alt": "sinclair"});
    } else if (personalityStatement === "ISFJ" && gender === "female") {
      $("p#picturePara").text("Appropriate text here, Julia?");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/joyceDefenderISFJ662x1000.png", "alt": "joyce"});
    } else if (personalityStatement === "ISFJ" && gender !== "female") {
      $("p#picturePara").text("Personality okay, not quite a ISFJ...Appropriate text also");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/jonathonLogicianINFP790x100.png", "alt": "jonathon the logician"});
    } else if (personalityStatement === "ENTP" && gender === "female") {
      $("p#picturePara").text("Appropriate text here, Julia?");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/joyceDefenderISFJ662x1000.png", "alt": "joyce"});
    } else if (personalityStatement === "ENTP" && gender !== "female") {
      $("p#picturePara").text("Appropriate text also");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/dustinDebaterENTP833x1000.png", "alt": "dustin"});
    } else if (personalityStatement === "ESFJ" && gender === "female") {
      $("p#picturePara").text("Appropriate text here, Julia?");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/nancyConsulESFJ800x1000.png", "alt": "nancy"});
    } else if (personalityStatement === "ESFJ" && gender !== "female") {
      $("p#picturePara").text("Appropriate text also");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/newby.png", "alt": "newby"});
    } else if ((personalityStatement === "INFP" || personalityStatement === "INFP2") && gender === "female") {
      $("p#picturePara").text("Appropriate text here, Julia?");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/elevenAdventurerkISFP800x1000.png", "alt": "eleven with bloody nose"});
    } else if (personalityStatement === "INFP" && gender !== "female") {
      $("p#picturePara").text("Appropriate text also");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/willMediatorINFP800x1000.png", "alt": "newby"});
    } else if (personalityStatement === "INFP2" && gender !== "female") {
      $("p#picturePara").text("Personality okay, not quite a ISFJ...Appropriate text also");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/jonathonLogicianINFP790x100.png", "alt": "jonathon the logician"});
    } else if (personalityStatement === "ISTP" && gender === "female") {
      $("p#picturePara").text("Appropriate text here, Julia?");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/maxISTP.png", "alt": "max"});
    } else if (personalityStatement === "ISTP" && gender !== "female") {
      $("p#picturePara").text("Appropriate text also");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/jimVirtuosoISTP887x1000.png", "alt": "jim the virtuoso"});
    } else {
      $("p#picturePara").text("Something strange happened, you should try again with different answers");
      $("img#imageType").removeAttr("src alt").attr({"src": "img/monster.jpg", "alt": "picture of stranger things monster"});
    }
  });

  $("button#tryAgain").click(function(){
      $("form#test").show();
      $("div#showType").hide();
  });

});
