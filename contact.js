$('form.form').on('submit',function(){
  var emptyValue = false;
  var that = $(this),
  url  = that.attr('action'),
  type = that.attr('method'),
  data = {};

  that.find('[name]').each(function(index,value){
    var that = $(this),
    name = that.attr('name'),
    value = that.val();
    if(that.val() == "" || that.val() == null){
      emptyValue = true;
    }
    data[name] = value;
  })

  if (emptyValue == false){
    $.ajax({
      url: url,
      type: type,
      data: data,
      success: function(response){
        alert("Thanks! I will get back to you as soon as possbile.")

      }
    })
  }
  else{
    alert("please fill out all blank fields")
  }

  return false;
})
