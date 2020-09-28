 
function countChars(obj){
    let charNum = document.getElementById("charNum");
    var maxLength = 20;
    var strLength = obj.value.length;
    
    
    if(strLength > maxLength){
        charNum.innerHTML  = '<span style="color: red;">'+strLength+' out of '+maxLength+' characters</span>';
    }else{
        charNum.innerHTML = strLength+' out of '+maxLength+' characters';
         
        
    }
   
}
(function(){

  var todo = document.querySelector( '#todo-list' ),
      form = document.querySelector( 'form' ),
      field = document.querySelector( '#new-item' );
    
  form.addEventListener( 'submit', function( ev ) {
    var text = field.value;
    if ( text !== '' ) {
      todo.innerHTML += '<p id="DeleteEl">' + text + ' <button onclick="Delete(this);">Delete</button> </p>';
      field.value = '';
      //field.focus();
    }
    ev.preventDefault();
  }, false);

  
})();
  function Delete(currentEl){
  currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
  }

