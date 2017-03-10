
/*var book = new function() {
	this.title = "JavaScript Applications";
	this.author = "Alan Clark";
	this.numberOfPages = 570;
	this.publishDate = Date;

	this.getTitle = function(){

		return this.title;
	};

	this.getAuthor =function() {
		return this.author;
	};

	this.getNumberOfPages = function() {
		return this.numberOfPages;
	};

	this.getPublishDate = function (){
		return (date.getMonth() + 1 + "-" + date.getDate() + " - " + date.getFullYear());
	};

	this.setTitle = function (newTitle) {
		this.title = newTitle;
	}

	this.setAuthor = function(newAuthor){
		this.author = newAuthor;
	}

	this.setNumberOfPages = function (newNumberOfPages){
		this.numberOfPages = newNumberOfPages;
	}

	this.setPublishDate = function(newPublishDate){
		this.publishDate = newPublishDate;
	}
}

var date = new Date("2011-9-7");

console.log(book.getTitle());

*/


//----------------------------  book array -----------------------------//



$(function(){

	//-----------the following is creation of each instance of individual book to be passed to addBook() as one parameter-------//
	window.myBook1 = new book({ title : "programming ace", author : "Alan All", numberOfPages : 110, publishDate : "2017-1-1"});
	window.myBook2 = new book({ title : "Java programming", author : "Helen Clark", numberOfPages : 310, publishDate : "2017-11-11"});
	window.myBook3 = new book({ title : "Javascript programming", author : "Jane Joe", numberOfPages : 210, publishDate : "2017-1-10"});
	window.myBook4 = new book({ title : "Java EE programming", author : "Jean Smith", numberOfPages : 410, publishDate : "2017-10-11"});
	window.myBook5 = new book({ title : "PHP programming", author : "Lisa Helen", numberOfPages : 300, publishDate : "2010-1-1"});
	window.myBook6 = new book({ title : "J2EE programming", author : "John Hankok", numberOfPages : 207, publishDate : "2012-11-11"});

	// ------- the following books are stored in an array to be passed to addBooks() as one parameter------//
	window.myBook7 = new book({ title : "Java EE programming tutorial", author : "Jean Smith", numberOfPages : 410, publishDate : "2017-10-11"});
	window.myBook8 = new book({ title : "PHP programming hacks", author : "Lisa Helen", numberOfPages : 300, publishDate : "2010-1-1"});
	window.myBook9 = new book({ title : "J2EE programming samples", author : "John Hankok", numberOfPages : 207, publishDate : "2012-11-11"});

	window.gLibrary = new library(); //fire off a library instance
	

	//--------------create a books array instance------------//
	window.books = new Array(myBook7, myBook8, myBook9);

	//------localStorage test------------//
	if (typeof(Storage) !== "undefined") {
	    // Store
	 	// localStorage.setItem("lastname", "Smith");
	 	// localStorage.setItem(JSON.stringify(library));

	    // Retrieve
	 	// document.getElementById("result").innerHTML = localStorage.getItem("lastname");
	 	//console.log("ok, it works");
	} else {
	    console.log("Sorry, your browser does not support Web Storage...");
	}
});



//-------------library constructor-------------//

var library = function(){

	return this;
	//this.BookArray = new Array("book"); //["book"]; 

}

//-------create a BookArray instance--------//

library.prototype.BookArray = new Array();


//------------------addBook-----------------//

library.prototype.addBook = function(book){
 
  	var i = 0;
  	if (window.gLibrary.BookArray.length === 0) {
		 
		this.BookArray.push(book);
		return "true";

	} else {

		for( ; i <window.gLibrary.BookArray.length; i++){

			if (((window.gLibrary.BookArray[i].author) === (book.author)) && ((window.gLibrary.BookArray[i].numberOfPages) === (book.numberOfPages)) && ((window.gLibrary.BookArray[i].publishDate) === (book.publishDate)) && ((window.gLibrary.BookArray[i].title) === (book.title)))
			{
				return "Duplicate book.";
			}else{
				this.BookArray.push(book);
				return true;
			}
		}
	}	
}


//-----------------addBooks----------------//

library.prototype.addBooks = function(books){

	var i; 
	if(this.length != 0){
		for ( i= 0; i < window.books.length; i++) {

			this.BookArray.push(books[i]);
		}
	}

	return window.gLibrary.BookArray;
}


//----------------getAuthors---------------//

library.prototype.getAuthors = function(){

	var authors = new Array();
	var i; 	
	for (i = 0; i < window.gLibrary.BookArray.length; i++) {
		authors.push(window.gLibrary.BookArray[i].author);
	}

	return authors;
}


//------------------removeAllBooks---------------//

library.prototype.removeAllBooks = function(){

	window.gLibrary.BookArray.length = 0;		
	return true;	
}


//-----------------removeBookByTitle-------------------//

library.prototype.removeBookByTitle = function(title){

	
	for ( var i = 0; i < this.BookArray.length; i++) {
		
		if(this.BookArray[i].title == title){

		//	delete this.BookArray[i];
		this.BookArray.splice(i, 1);

		}
	}
	return true;
}


//---------------removeBookByAuthor---------------------//

library.prototype.removeBookByAuthor = function(authorName){

	 var k;

	 for( k = 0; k < this.BookArray.length; k++) {

		if(this.BookArray[k].author === authorName){			
		//	delete window.gLibrary.BookArray[k];
			this.BookArray.splice(k,1);	

		}
	}
		return true;
}


//---------------getRandomBook---------------//

library.prototype.getRandomBook= function(){  //works

	 var randomBook = Math.floor(Math.random() * this.BookArray.length);	 
	 
	 if (window.gLibrary.BookArray.length != null) {
	 	return window.gLibrary.BookArray[randomBook];
	 }else{
	 	return "No book found.";
	 }
}

//-----------------getRandomAutherName---------------//

library.prototype.getRandomAuthorName = function(){

	 var randomBook = Math.floor(Math.random() * this.BookArray.length);	 
	 
	 if (window.gLibrary.BookArray.length != null) {
	 		return window.gLibrary.BookArray[randomBook].author;
	 }else{
	 		return "No book found.";
	 }
}

//----------------getBookByTitle------------------//

library.prototype.getBookByTitle = function(newTitle){
 

	var titleMatchedBook = new Array();
	var i;
	for( i = 0; i < window.gLibrary.BookArray.length; i++ ) {

		if ( window.gLibrary.BookArray[i].title == newTitle) {

			return window.gLibrary.BookArray[i];			
		}		
	}
}


//----------getBooksByAuthor -------//

library.prototype.getBooksByAuthor = function(authorName){
	
	var authorMatchedBook = new Array();
	var j;
	for( j = 0; j < window.gLibrary.BookArray.length; j++ ){

		if(window.gLibrary.BookArray[j].author == authorName){

			authorMatchedBook.push(window.gLibrary.BookArray[j]);	
		}
	}

	if (authorMatchedBook.length != 0) {
		return authorMatchedBook;
	}else{
		return "No matched book found.";	
	}	
}


//-----------book class constructor -----//

function book(newbook){

	this.title = newbook.title;
	this.author = newbook.author;
	this.numberOfPages = newbook.numberOfPages;
	this.publishDate = newbook.publishDate;

	return this;
}
