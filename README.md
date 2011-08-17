# FormHelper

FormBuilder aims to port ruby on rails like form helper methods to JSMC

Have a look at [form_builder](https://github.com/itkin/form_builder) which adds some rails like form builder methods

Basically given a model like that:

    $.Model.extend("BlogPost",{
      attributes : {
        title : 'string',
        lead   : 'text',
      },
      init: function(){
        this.hasMany('Comment', 'comments')
      }
    }, {});



Instead of doing :

  <%= text_field_tag 'blog_post[title]', myBlogPostInstance.attr('title'), {id: 'blog_post_title'} %>

Simply write :

  <%= text_field myBlogPostInstance, 'title' %>

## Supported helpers functions

* text_field
* text_area
* password_field
* hidden_field
* check_box
* select

## TODO

* datetime helpers functions
* code cleanup