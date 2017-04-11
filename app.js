var notes, count = 0;

    notes = document.getElementById("notes");
    
    loadNotes();

    document.getElementById("btnNew").addEventListener("click", addNewNote());

    if (count === 0) {
        
		addNewNote();
		
    }

function saveNotes() {
    var arraynt = [];
notes.find("li > div").each(function (i, e) {
        
        var colourClassname = document.body.getAttribute("class");
        var titlename = document.getElementsByClassName("note-title");
        var contentdata = document.getElementsByClassName("note-content");

        arraynt.push({ Index: i, Title: titlename.value, Content: contentdata.value, Class: colourClassname });
    });

   var jsonStrdata = JSON.stringify(arraynt);

  
    localStorage.setItem("notes", jsonStrdata);
	setStatus6v('Notes Saved.');

}


function (note1) {
    var div = note1.children[0];
    var Imgfun = document.getElementsByTagName("img");
div.focus(function () {
        Imgfun.classList.remove("hide");
		
    });

    div.children().focus(function () {
        Imgfun.classList.remove("hide");
       });

div.hover(function () {
        Imgfun.classList.remove("hide");
    }, function () {
        Imgfun.classList.add("hide");
        saveNotes();
    });

    div.children().hover(function () {
        Imgfun.classList.remove("hide");
    }, function () {
        Imgfun.classList.add("hide");
    });
}
			

function addNewNote(className, title, content) {
	
	if (!className) {
		className = "colour" + Math.ceil(Math.random() * 3);
	}
				
	
var li = document.createElement("li");              
var div = document.createElement("div");
	div.setAttribute("class",className);
var txt1 = document.createElement("textarea");
	txt1.classList.add("note-title");
	txt1.setAttribute("placeholder","Add Title");
var txt2 = document.createElement("textarea");
	txt2.classList.add("note-content");
	txt2.setAttribute("placeholder","Add Your Contents Here");
var btn = document.createElement("btn");
	btn.classList.add("btn_CloseTd52");
	btn.value="Close";
	btn.src="images/3.png";
	btn.setAttribute("click","fun1()");
	div.appendChild(txt1);
	div.appendChild(txt2);
	div.appendChild(btn);
	
	li.appendChild(div);
notes.appendChild(li); 
	
	
	var items = notes.querySelectorAll("li");
 var newNote= items[items.length-1];

	
	addNoteEvent(newNote);
				
	e
	if (title) {
	
		document.getElementsByClassName("note-title").value=title;
    }

	
if (content) {
		
		document.getElementsByClassName("note-content").value=content;
    }

   
    saveNotes();
	setStatus6v('Notes Created.');
}

 function fun1() {
       
		newNote.remove();
	    saveNotes();
		setStatus6v('Note Deleted.');

	    	}

function loadNotes() {
    var stNt = localStorage.getItem("notes");
    if (stNt) {
        
        var arraynt = JSON.parse(stNt);
        count = arraynt.length;

        var i;
          for (i = 0; i < count; i++) {
            var strdNt = arraynt[i];
            addNewNote(strdNt.Class, strdNt.Title, strdNt.Content);
        }
    }
	setStatus6v('Notes Loaded.');
}

function clearStatus6v(){
	document.getElementById("divStatus").innerHTML="";
}
function setStatus6v(str1){
	document.getElementById("divStatus").innerHTML=str1;	
	var intV = setTimeout(function(){clearStatus6v();},7000);
}
