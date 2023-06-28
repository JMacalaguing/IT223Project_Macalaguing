
function showModal() {
    var modalContainer = document.getElementById("modalContainer");
    modalContainer.style.display = "block";
  }

  function hideModal() {
    var modalContainer = document.getElementById("modalContainer");
    modalContainer.style.display = "none";
  }
$(document).ready(function(){
	
	$(".largeGrid").click(function(){											
    $(this).find('a').addClass('active');
    $('.smallGrid a').removeClass('active');
    
    $('.product').addClass('large').each(function(){											
		});						
		setTimeout(function(){
			$('.info-large').show();	
		}, 200);
		setTimeout(function(){

			$('.view_gallery').trigger("click");	
		}, 400);								
		
		return false;				
	});
	
	$(".smallGrid").click(function(){		        
    $(this).find('a').addClass('active');
    $('.largeGrid a').removeClass('active');
    
		$('div.product').removeClass('large');
		$(".make3D").removeClass('animate');	
    $('.info-large').fadeOut("fast");
		setTimeout(function(){								
				$('div.flip-back').trigger("click");
		}, 400);
		return false;
	});		
	
	$(".smallGrid").click(function(){
		$('.product').removeClass('large');			
		return false;
	});
  
  $('.colors-large a').click(function(){return false;});
	
	
	$('.product').each(function(i, el){					

		// Lift card and show stats on Mouseover
		$(el).find('.make3D').hover(function(){
				$(this).parent().css('z-index', "20");
				$(this).addClass('animate');
				$(this).find('div.carouselNext, div.carouselPrev').addClass('visible');			
			 }, function(){
				$(this).removeClass('animate');			
				$(this).parent().css('z-index', "1");
				$(this).find('div.carouselNext, div.carouselPrev').removeClass('visible');
		});	
	
	});
	
	$('.add-cart-large', 'add-cart-large').each(function(i, el){
		$(el).click(function(){
			var carousel = $(this).parent().parent().find(".carousel-container");
			var img = carousel.find('img').eq(carousel.attr("rel"))[0];						
			var position = $(img).offset();	

			var productName = $(this).parent().find('h4').get(0).innerHTML;				
	
			$("body").append('<div class="floating-cart"></div>');		
			var cart = $('div.floating-cart');		
			$("<img src='"+img.src+"' class='floating-image-large' />").appendTo(cart);
			
			$(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
			setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
			
			setTimeout(function(){
			$('div.floating-cart').remove();
			$("body").removeClass("MakeFloatingCart");


			var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+img.src+"' alt='' /></div><span>"+productName+"</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			

			$("#cart .empty").hide();			
			$("#cart").append(cartItem);
			$("#checkout").fadeIn(500);
			
			$("#cart .cart-item").last()
				.addClass("flash")
				.find(".delete-item").click(function(){
					$(this).parent().fadeOut(300, function(){
						$(this).remove();
						if($("#cart .cart-item").size() == 0){
							$("#cart .empty").fadeIn(500);
							$("#checkout").fadeOut(500);
						}
					})
				});
 		    setTimeout(function(){
				$("#cart .cart-item").last().removeClass("flash");
			}, 10 );
			
		}, 1000);
			
			
		});
	})
	
	$('.sizes a span, .categories a span').each(function(i, el){
		$(el).append('<span class="x"></span><span class="y"></span>');
		
		$(el).parent().on('click', function(){
			if($(this).hasClass('checked')){				
				$(el).find('.y').removeClass('animate');	
				setTimeout(function(){
					$(el).find('.x').removeClass('animate');							
				}, 50);	
				$(this).removeClass('checked');
				return false;
			}
			
			$(el).find('.x').addClass('animate');		
			setTimeout(function(){
				$(el).find('.y').addClass('animate');
			}, 100);	
			$(this).addClass('checked');
			return false;
		});
	});
	
	$('.add_to_cart',).click(function(){
		var productCard = $(this).parent();
		var position = productCard.offset();
		var productImage = $(productCard).find('img').get(0).src;
		var productName = $(productCard).find('.product_name').get(0).innerHTML;				

		$("body").append('<div class="floating-cart"></div>');		
		var cart = $('div.floating-cart');		
		productCard.clone().appendTo(cart);
		$(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
		setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
		setTimeout(function(){
			$('div.floating-cart').remove();
			$("body").removeClass("MakeFloatingCart");


			var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			

			$("#cart .empty").hide();			
			$("#cart").append(cartItem);
			$("#checkout").fadeIn(500);
			
			$("#cart .cart-item").last()
				.addClass("flash")
				.find(".delete-item").click(function(){
					$(this).parent().fadeOut(300, function(){
						$(this).remove();
						if($("#cart .cart-item").size() == 0){
							$("#cart .empty").fadeIn(500);
							$("#checkout").fadeOut(500);
						}
					})
				});
 		    setTimeout(function(){
				$("#cart .cart-item").last().removeClass("flash");
			}, 10 );
			
		}, 1000);
	});
});

// Create an array to store the clicked values
var cartItems = [];

// Get all elements with the class "add_to_cart"
var addToCartButtons = document.getElementsByClassName("add_to_cart");

// Loop through each element and attach a click event listener
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function() {
    // Retrieve the value attribute of the clicked element
    var value = parseInt(this.getAttribute("value")); // Convert value to an integer
    
    // Add the value to the cartItems array
    cartItems.push(value);
    
    // Output the updated cart items
    console.log("Cart items: " + cartItems.join(", "));
    
    // Calculate the total payment
    var totalPayment = cartItems.reduce(function(sum, item) {
      return sum + item;
    }, 0);
    
    // Output the total payment
    console.log("Total payment: " + totalPayment);
    
    // Update the span element with the total payment
    var totalPaymentSpan = document.getElementById("total_payment");
    totalPaymentSpan.textContent = totalPayment;
  });
}

// Function to handle decreasing the cart
function decreaseCart() {
  if (cartItems.length > 0) {
    // Remove the last item from the cartItems array
    var removedItem = cartItems.pop();
    
    // Output the removed item
    console.log("Removed item: " + removedItem);
    
    // Calculate the total payment after removing the item
    var totalPayment = cartItems.reduce(function(sum, item) {
      return sum + item;
    }, 0);
    
    // Output the updated total payment
    console.log("Total payment: " + totalPayment);
    
    // Update the span element with the updated total payment
    var totalPaymentSpan = document.getElementById("total_payment");
    totalPaymentSpan.textContent = totalPayment;
  }
}

var cart = document.getElementById("cart");
cart.addEventListener("click", decreaseCart);

function openModal() {
	// Hide the first modal
	var firstModal = document.getElementById("modalContent");
	firstModal.style.display = "none";
  
	// Show the second modal
	var secondModal = document.getElementById("myModal");
	secondModal.style.display = "block";
  
	// Reload the page after 10 seconds
	setTimeout(function() {
	  location.reload();
	}, 30000); // 10 seconds delay
  }