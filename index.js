    // LOADER
    
   var myVar;
   function myFunction() {
      myVar = setTimeout(showPage, 4000);
   }
    
   function showPage() {
      document.getElementById("load").style.display = "none";
      document.getElementById("mainBod").style.display = "block";
   } 

