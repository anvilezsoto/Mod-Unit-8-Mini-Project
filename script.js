

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
let comedy=[ "https://link-hosting-curriciulum-dev.glitch.me/uploaded/2254c5d6a60c3373096d1e1d9248612f.jpg", "https://whsat-imagehosting.glitch.me/uploaded/2730edfc300541103fb9733348090cee.jpg "];
	let action =["https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spidermannowayhome_onesheet_1400x2100_he.jpg?itok=ruA2hZJw", " https://static3.srcdn.com/wordpress/wp-content/uploads/2022/01/Avengers-Endgame-Hobbs-Shaw.jpg"];

let drama =["https://cdn.moviefone.com/image-assets/726208/lXvBgevABC9n5R6Gg76R3pN1h2M.jpg?d=360x540&q=50", "https://images.summitmedia-digital.com/spotph/images/2019/05/21/10lahatnggwapo-imdb-1558422407.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
   if(genreInput==="comedy"){
    for(let show of comedy){
 $(".shows").append("<img src="+show+">");
}
}
    else if(genreInput==="action"){
    for (let show of action){
  $(".shows").append("<img src="+ show+">");
}
}
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
}
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	 comedy.push(suggestion);
    console.log(comedy);
    comedy .push(suggestion);
    console.log(comedy);
    comedy.push(suggestion);
    console.log(comedy);

    
});