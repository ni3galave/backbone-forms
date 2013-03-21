/**
 * Bootstrap templates for Backbone Forms
 *
 * Include this file after backbone-forms.js and use Backbone.BootstrapForm instead
 * of Backbone.Form
 */
Backbone.BootstrapForm = Backbone.Form.extend({

  template: _.template($.trim('\
    <form class="form-horizontal" data-fieldsets></form>\
  '))

});


Backbone.BootstrapForm.Fieldset = Backbone.Form.Fieldset.extend({

  template: _.template($.trim('\
    <fieldset data-fields>\
      <% if (legend) { %>\
        <legend><%= legend %></legend>\
      <% } %>\
    </fieldset>\
  '))

});


Backbone.BootstrapForm.Field = Backbone.Form.Field.extend({

  template: _.template($.trim('\
    <div class="control-group field-<%= key %>">\
      <label class="control-label" for="<%= editorId %>"><%= title %></label>\
      <div class="controls">\
        <span data-editor></span>\
        <div class="help-inline" data-error></div>\
        <div class="help-block"><%= help %></div>\
      </div>\
    </div>\
  '))

});


Backbone.BootstrapForm.NestedField = Backbone.Form.Field.extend({

  template: _.template($.trim('\
    <div class="field-<%= key %>">\
      <div title="<%= title %>" class="input-xlarge">\
        <span data-editor></span>\
        <div class="help-inline" data-error></div>\
      </div>\
      <div class="help-block"><%= help %></div>\
    </div>\
  '))

});