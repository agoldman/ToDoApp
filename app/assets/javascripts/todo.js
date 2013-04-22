window.TD = {

	Models: {}, 
	Collections: {},
	Views: {},
	Routers: {},

	initialize: function($sidebar, $content, tasksData) {

		var tasks = new TD.Collections.Tasks(tasksData);
		this.installSideBar($sidebar, tasks);
		new TD.Routers.TasksRouter($content, tasks);
		Backbone.history.start();
	},

	installSideBar: function($sidebar, tasks) {
		var that = this;
		var TaskListView = new TD.Views.TaskListView({
			collection: tasks
		});
		$sidebar.html(TaskListView.render().$el);
	}
};