import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskManagement from './components/TaskManagement';
import TaskSortControl from './components/TaskSortControl'



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAddTaskForm: false,
            tasks:[
                {
                    id:0,
                    name:'hoc reactjs',
                    status: true
                },
                {
                    id:1,
                    name:'hoc spring framework',
                    status: false
                },
                {
                    id:2,
                    name:'hoc nodejs',
                    status: false
                },
                {
                    id:3,
                    name:'hoc angular',
                    status: true
                }
			],
			taskEdition: {
				id:-1,
                name:'',
                status:true
			},
			filter: {
				name:'',
				status:'all'
			}
			
		}
	}

	onCloseFrom = () => {
		
		this.setState({
			showAddTaskForm: !this.state.showAddTaskForm
		})
		
	}
	onAddOrUpdateTask = (task) => {
		let {tasks} = this.state;
		if(task.id === -1){
			//add new task
			const maxTaskId = Math.max(...tasks.map(task => task.id), 0);
			task.id = maxTaskId + 1;
			tasks.push({...task});
			this.onOpenAddTask();
		}else{
			//update task
			tasks = tasks.map(el => el.id === task.id? task: el);
		}
		this.setState({
			tasks: tasks
		})
		localStorage && localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	onOpenAddTask = () => {
		const emptyTask =  {
			id:-1,
			name:'',
			status:true
		}
		this.setState({
			showAddTaskForm: true,
			taskEdition: emptyTask
		})
	}
	onEditTask = (taskId) => {
		let {taskEdition} = this.state;
		let task = this.state.tasks.find(task => task.id === taskId);
		this.setState({
			taskEdition: task
		})
		this.setState({
			showAddTaskForm: true
		})
	}
	onRemoveTask = (taskId) => {
		const tasks = this.state.tasks.filter(task => task.id !== taskId);
        this.setState({
            tasks: tasks
		})
		localStorage && localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	onFilterChange = (name, value) => {
		console.log('filter: ', name, value)
		const {filter} = this.state;
		filter[name] = value
		this.setState({
			filter:filter
		})
		// localStorage && localStorage.setItem('tasks', JSON.stringify(tasks));
	}
   
    render(){
        
      
        return(
           
		   <div className="container mt-30">
		   
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<h2>Quản Lý Công Việc</h2>
					
				</div>
			</div>
			
			<div className="row">
				{this.state.showAddTaskForm
				?<AddTask 
					showAddTaskForm= { this.state.showAddTaskForm }
					onCloseFrom={ this.onCloseFrom }
					onAddOrUpdateTask={ this.onAddOrUpdateTask }
					taskEdition={this.state.taskEdition}
				/>
				
				:null}


				<div className={this.state.showAddTaskForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8": "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            
				<TaskSortControl 
					onOpenAddTask={this.onOpenAddTask}
				/>
				<TaskManagement 
					// showAddTaskForm = {this.state.showAddTaskForm}
					onRemoveTask={ this.onRemoveTask }
					
					onEditTask={this.onEditTask}
					tasks={ this.state.tasks }
					onFilterChange={this.onFilterChange}
					filter={this.state.filter}
					/>
                  
            </div>


				
			</div>
		   	   
		   </div>
		   
        )
    }
}

export default App;
