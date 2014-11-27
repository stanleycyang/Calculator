// All code within this will be in local scope and protected
(function(){
	// Constructor function for Calculator object
	function Calculator(){
		// Declare self
		var self = this;		
		// This grabs all the divs within the #calculator-buttons
		var elements = document.querySelectorAll("#calculator-buttons div");
		// Placeholder for values displayed
		var placeholder = document.getElementById("placeholder");
		// This function initializes when the object is created
		(function init(){
			for(var i = 0; i < elements.length; i++){
				elements[i].addEventListener("click", function(){
				    
				    // Figure out what is within the div
				    switch(this.innerHTML){
				    	case "AC":
				    		self.clear();
				    		break;
				    	case "=":
				    		self.equals();
				    		break;
				    	default:
				    		placeholder.value = placeholder.value + this.innerHTML;
				    		break;
				    }
				});
			}
		})();
		// Equals 
		this.equals = function(){					
			placeholder.value = eval(placeholder.value);			
		}
		// Clear
		this.clear = function(){
			placeholder.value = "";	
		}
	}
	var CALCULATOR = new Calculator();	
})();




