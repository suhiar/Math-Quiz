function adduser(){
    player1_name=document.getElementById("player1_names").value
    player2_name= document.getElementById("player2_names").value
    localStorage.setItem("Player 1",player1_name)
    localStorage.setItem("Player 2",player2_name)
    window.location="quiz.html"
}