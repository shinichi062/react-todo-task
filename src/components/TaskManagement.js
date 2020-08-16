import React, { Component } from 'react';

class TaskManagement extends Component {
    constructor(props) {
        super(props);
        
        
    }
    // componentWillMount(){
    //     if(localStorage && localStorage.getItem('tasks')){
    //         this.setState({
    //             tasks: JSON.parse(localStorage.getItem('tasks'))
    //         })
    //     }
    // }
    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     let newTask = this.props.task;
    //     if (this.props.task !== prevProps.task) {
    //        this.setState((state) => {
    //            let {tasks} = {...state};
    //            tasks.push(newTask);
    //            return {tasks: tasks};
           

    //        })
    //     }
    //   }

    onOpenAddTask = () => {
        this.props.onOpenAddTask();
    }

    editTask = (taskId) => {
        console.log(taskId);
        this.props.onEditTask(taskId);
    }
    removeTask = (taskId) => {
        this.props.onRemoveTask(taskId);
        
    }
    onChangeStatusFilter = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.props.onFilterChange(name, value);
        
    }
    onClickSort = () => {
        console.log('sort')
    }

    render(){
        // var showAddTaskForm = this.props.showAddTaskForm;
        const {name, status} = this.props.filter;
        console.log('filter: ', name, )
        var elements = this.props.tasks
            .filter(task => this.props.filter.status === 'all' || task.status === (this.props.filter.status=== 'active'))
            .filter(task => task.name.indexOf(name) > -1)
            .map((task, index) => {
            return(
                                <tr key={index}>
                                    <td>{task.id}</td>
                                    <td>{ task.name }</td>
                                    <td className="text-center">
                                        <span className={task.status?'label label-success':'label label-warning'}>{task.status?'Kích Hoạt':'Ẩn'}</span>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-warning" onClick={() => this.editTask(task.id)}><i className="fa fa-pencil mr-5" aria-hidden="true"></i>Sửa</button>&nbsp;
                                        <button type="button" className="btn btn-danger" onClick={() => this.removeTask(task.id)}><i className="fa fa-trash mr-5" aria-hidden="true"></i>Xóa</button>
                                    </td>
                                </tr>
            )
        })
        return(
           
                
                <div className="row">
                   
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            
                            <table className="table table-bordered table-hover ml-15 mt-20">
                                <thead>
                                    <tr className="text-center">
                                        <th>STT</th>
                                        <th>Tên</th>
                                        <th>Trạng Thái</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td><input 
                                            type="text" 
                                            name="name" 
                                            className="form-control" 
                                            placeholder="Search name" 
                                            onChange={this.onChangeStatusFilter}
                                            /></td>
                                        <td>
                                        <select 
                                            name="status" 
                                            className="form-control"
                                            onChange={this.onChangeStatusFilter}
                                            >
                                            <option value="all">Tất Cả</option>
                                            <option value="active">Kích Hoạt</option>
                                            <option value="inActive">Ẩn</option>
                                        </select>
                                        </td>
                                        <td></td>
                                    </tr>
                                    { elements }
                                
                                </tbody>
                            </table>
                            
                        </div>
                    </div>

                </div>      
           
        )
    }
}
export default TaskManagement;