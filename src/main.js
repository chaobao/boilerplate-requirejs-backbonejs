/**
 * Created by Xiaoqiang on 2015/5/5.
 */

require(['_config'], function () {
    require([
        'underscore', 'jquery', 'backbone', 'backbone.layoutmanager', 'handlebars'
    ], function (_, $, Backbone) {
        require(['common', 'router', 'views/todos-view'], function (common, Workspace, TodosView) {
            common.Workspace = new Workspace();
            Backbone.history.start();

            var todosView = new TodosView({
                el: 'body'
            }).render();
        });
    });
});
