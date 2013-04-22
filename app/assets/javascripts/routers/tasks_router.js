TD.Routers.TasksRouter = Backbone.Router.extend ({

	initialize: function(rootEl, tasks) {
		this.$rootEl = $(rootEl);
		this.tasks = tasks;
	}, 

	routes: {
		"": "index",
		"tasks/new": "new",
		"tasks/:id": "show"
	},

	index: function() {
		var that = this;

		that.$rootEl.empty();
	},

	new: function() {
		var that = this;
		var NewTaskView = new TD.Views.NewTaskView({
			collection: that.tasks
		});
		that.$rootEl.html(NewTaskView.render().$el);
	},

	show: function(id) {
		var that = this;
		var task = that.tasks.get(id);

		var TaskDetailView = new TD.Views.TaskDetailView({
			model: task
		});

		that.$rootEl.html(TaskDetailView.render().$el);
	},
});