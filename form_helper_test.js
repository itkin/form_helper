steal.plugins(
	"jquery/class",
	'jquery/controller',
	'jquery/model',
	'funcunit',
  'jquery/dom/form_params',
	'jquery/view',

  'form_helper')
.then(function(){

  $.Controller.extend('Cntrlr', {
    init : function(){
      this.element.html($.View('form', {blog: blog}))
    }
  });

	$.Model.extend("BlogPost",{
		attributes : {
			title        : 'string',
			lead         : 'text',
			body         : 'text',
			is_published : 'boolean',
			status       : 'string',
			tags         : 'array',
			author       : 'string'
		}

	}, {});

  blog = new BlogPost({title:'my title', lead: 'myLead', password:"MyPassord", status: 'MyStatus', "title3": '', "title4": null, is_published: true});

  module("form_helper test", {
    setup: function(){
			$('<div id="content"></div>').appendTo($("#qunit-test-area"));
			$('#content').cntrlr();
    }
  });

  test("text_field is properly generated", function(){
    equals($("form input:eq(0)").val(), blog.title,"text_field value is not properly defined");
  });

  test("text_field html_options override default behaviour", function(){
    equals($("form input:eq(1)").attr('id'), 'testID', "text_field id is not overridden");
    equals($("form input:eq(1)").attr('name'), 'testName', "text_field name is not overridden");
  });

  test("password_field is properly generated", function(){
    equals($("form input[type='password']:eq(0)").val(), blog.password,"password_field value is not properly defined");
  });
  test("hidden_field is properly generated", function(){
    equals($("form input[type='hidden']:eq(0)").val(), blog.status,"password_field value is not properly defined");
  });

  test("password_field is properly generated", function(){
    equals($("form textarea:eq(0)").val(), blog.lead,"text_area value is not properly defined");
  });

  test("text_field optional default value is set when property is null, undefined or empty", function(){
    equals($("form input.test_optional_default_value:eq(0)").val(), 'testValue',"text_field value is not properly defined");
    equals($("form input.test_optional_default_value:eq(1)").val(), 'testValue',"text_field value is not properly defined");
    equals($("form input.test_optional_default_value:eq(2)").val(), 'testValue',"text_field value is not properly defined");
  });

  test("text_field optional default value is not set when property is not blank", function(){
    equals($("form input.test_optional_default_value_2:eq(0)").val(), 'my title',"text_field value is not properly defined");
  });


  test("check_box works as expected", function(){
    equals($("form input[type='checkbox']:eq(0)").val(), 121);
    equals($("form input[type='checkbox']:eq(0)").attr('checked'), 'checked');
    equals($("form input[type='checkbox']:eq(1)").val(), 122);
    equals($("form input[type='checkbox']:eq(1)").attr('checked'), undefined);
  });

  test("check_box groups works as expected", function(){
    var value = $("form").formParams()['blog_post']['is_published2']
    ok(value.length == 2)
    ok(value[0] == 121)
    ok(value[1] == 122)
  });

  test("select works as expected", function(){
    equals($("select").val(), 'a');
    var values = $("select:last").val()
    equals(values.length,1)
    equals(values[0],'b');

  });



})