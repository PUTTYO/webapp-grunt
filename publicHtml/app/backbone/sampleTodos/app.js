define(['backbone'], function (
    Backbone
) {
    'use strict';
    //Model
    var Task = Backbone.Model.extend({
        defaults : {
            title: 'do something!',
            completed: false
        }
    });
    var task = new Task();

    //subview
    var Subview = Backbone.View.extend({
        tagName: 'div',
        className: 'subView',
        //template: _.template('<%- title %>'),
        render : function () {
            //var template = this.template( this.model.toJSON() );
            //this.$el.html(template);
            return this;
        }
    });

    //mainview
    var TasksView = Backbone.View.extend({
        tagName: 'div',
        className: 'mainView',
        initialize: function () {
            this.subview = new SubView();
        },
        render: function () {
            this.$el.html('<div class="setSubview"></div>');
            this.subview.setElement(this.$('setSubview')).render();
        }
    });

    var taskView = new TaskView({ model: task });
    $('#mainContents').append(taskView.render().el);
    return;
});
