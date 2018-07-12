//How to use
/*

Basically, this is a class such that you essentially just assign a text object to it and initalize it and it becomes a toggle type of text.

How to Use:
1. Move JS file into PUBLIC part of code
2. Goto Which ever individual page you want to use and above the $w Onready thing
    Type, "import {ExpandableText} from '[PUT THE PATH TO THE JS FILE HITHER]';"
3. Now on a global scope, outside a function declare whatever is going to be holding this object
4. Invoke both the creation of the object and it's initalization inside of the $w Onready function
5. You're done.

*/


//Uncomment export, so that Wix can use it
/*export*/ function ExpandableText(textObjectID,text){
    //ID of the text object being manipulated
    this.textObjectID = textObjectID;
    //The text that goes into the text object
    this.text = text;
    this.shortTextShown = true;
    this.length = 40;

    //Upon the website loading, the text object contains just the first 40 characters of the text
    //TODO; Customizable Text Length
    this.initialize = function(){
        $w(textObjectID).text = shortenText(this.text, this.length);
        $w(textObjectID).onClick(thing => this.toggleLength());
    }
    //Basically all this does is when called toggle between the text between being shortened and naw
    this.toggleLength=function(){
        if(this.shortTextShown){
            $w(this.textObjectID).text = this.text;
            this.shortTextShown=false;
        }
        else{
            $w(this.textObjectID).text = shortenText(this.text, this.length);
            this.shortTextShown=true;
        }
    }
}

function shortenText(text,maxChars){
    return text.substr(0,maxChars);
}