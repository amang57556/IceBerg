
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


//Text that is truncated to a certain link, and is then expanded after being clicked
export function ShorteningExpandableText(textObjectID,text,length){
    //ID of the text object being manipulated
    this.textObjectID = textObjectID;
    //The text that goes into the text object
    this.text = text;
    this.shortTextShown = true;
    this.length = length || 40;

    //Upon the website loading, the text object contains just the first 40 characters of the text
    //TODO; Customizable Text Length
    this.initialize = function(){
        $w(textObjectID).text = shortenText(this.text, this.length)+" ... Expand More";
        $w(textObjectID).onClick(thing => this.toggleLength());
    }
    //Basically all this does is when called toggle between the text between being shortened and naw
    this.toggleLength=function(){
        if(this.shortTextShown){
            $w(this.textObjectID).text = this.text+ " ... Collapse";
            this.shortTextShown=false;
        }
        else{
            $w(this.textObjectID).text = shortenText(this.text, this.length)+" ... Expand More";
            this.shortTextShown=true;
        }
    }
}

/*

This is for text that you want changing between two messages based on it being clicked

*/
export function ChangingExpandableText(textObjectID,shortText,longText){
    //ID of the text object being manipulated
    this.textObjectID = textObjectID;
    //The text that goes into the text object
    this.shortText = shortText;// The inital text shown
    this.shortTextShown = true;
    this.longText = longText; // The expanded text

    //Upon the website loading, the text object contains just the first 40 characters of the text
    //TODO; Customizable Text Length
    this.initialize = function(){
        $w(textObjectID).text = this.shortText+" ... Expand More";
        $w(textObjectID).onClick(thing => this.toggleLength());
    }
    //Basically all this does is when called toggle between the text between being shortened and naw
    this.toggleLength=function(){
        if(this.shortTextShown){
            $w(this.textObjectID).text = this.longText+ " ... Collapse";
            this.shortTextShown=false;
        }
        else{
            $w(this.textObjectID).text = this.shortText+" ... Expand More";
            this.shortTextShown=true;
        }
    }
}

export function test(){
    console.log("Howdy");
}

function shortenText(text,maxChars){
    return text.substr(0,maxChars);
}