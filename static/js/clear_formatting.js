exports.postAceInit = function(hook, context){
  $('#clearFormatting').click(function(){
    context.ace.callWithAce(function(ace){

      var rep = ace.ace_getRep(); // get the current user selection
      var isSelection = (rep.selStart[0] !== rep.selEnd[0] || rep.selStart[1] !== rep.selEnd[1]);
      if(!isSelection) return false; // No point proceeding if no selection..

      var attrs = rep.apool.attribToNum; // get the attributes on this document
      $.each(attrs, function(k, v){ // for each attribute
        var attr = k.split(",")[0]; // get the name of the attribute
        if(attr !== "author"){ // if its not an author attribute
          ace.ace_setAttributeOnSelection(attr, false); // set the attribute to false
        }
      });
    },'clearFormatting' , true);
  });
}
