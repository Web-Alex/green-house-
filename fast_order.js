$(document).ready(function () {
   /* $('#fast_order').fancybox({'href': '#fast_order_form', 'width': 650, 'height': 330});*/
    $('#fast_order_form .fast_order_center button').click(function () {
      var product_name = $('#product_name').val();
      var product_model = $('#product_model').val();
      var product_price = $('#product_price').val();
      var customer_name = $('#customer_name').val();
      var customer_phone = $('#customer_phone').val();
      var customer_message = $('#customer_message').val();
      $('#result').html('Обрабатываем введенные данные..');
      $.post('catalog/fast_order.php', { 'product_name': product_name, 'product_model': product_model, 'product_price': product_price, 'customer_name': customer_name, 'customer_phone': customer_phone, 'customer_message': customer_message }, function (data) { if (data == 'empty') { $('#fast_order_result').html('<span class="fast_order_error">Обязательно укажите ваше имя и телефон, иначе мы не сможем вам перезвонить!</span>'); } else { $('#fast_order_result').html('<span class="fast_order_success">Ваш заказ успешно оформлен!</span><br /><span>Мы перезвоним вам в течение дня. <a onclick="parent.$.fancybox.close();">Закрыть</a> это окно?</span>'); } });
    
    
    
    });
    $('#clear_form').click(function(){
     
     
     $('#customer_name').val("");
     $('#customer_phone').val("");
     $('#customer_message').val("");  
     
     
     });  
     
      
});