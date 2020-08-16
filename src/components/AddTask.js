
import React,  {Component} from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // showAddTaskForm: false,
            task: {
                id:-1,
                name:'',
                status:true
            }
        }
    }
    componentWillMount(){
        console.log('componentWillMount', this.props.taskEdition)
        this.updateState(this.props.taskEdition)
        
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps)
        if(nextProps.showAddTaskForm!==this.props.showAddTaskForm){
            this.setState({
                showAddTaskForm: nextProps.showAddTaskForm
            })
        }
        this.updateState(nextProps.taskEdition)
    }
    updateState =(task) => {
        this.setState({
            task: task
        })
    }

    onCloseForm = () => {
        this.props.onCloseFrom();
    }

    onSaveTask = (e) => {
        
        console.log('save task', this.state.task);
        this.props.onAddOrUpdateTask(this.state.task);

    }
    onChange = (e) => {
        var target = e.target;
        var value = target.value;
        var name = target.name;
        this.setState((state) => {
            let {task} = {...state};
            task[name] = value;
            return {task: task}
        })
        /* work */
        // var stateCopy = Object.assign({}, this.state);
        // stateCopy.task[name] = value;
        // this.setState(stateCopy); 
        /* end work */
        // const task = {...this.state.task, name: value};
        // this.setState(()=>({task}));
        
    }


    render() {
        const isAddNewForm = this.props.taskEdition.id === -1;
       
        return(
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

					<div className={isAddNewForm?'panel panel-warning':'panel panel-primary'}>
						  <div className="panel-heading">
								<h3 className="panel-title">{isAddNewForm?'Thêm Công Việc':'Update Công Việc'}
								<i className="fa fa-times-circle float-right c-pointer" aria-hidden="true" onClick={ this.onCloseForm }></i>
								</h3>
                          </div>
                          
                          <form role="form">
                              <div className="form-group">
                                <div className="panel-body"> 
                                    {!isAddNewForm
                                        ? <div><label><strong>Id:</strong></label><label><strong>{this.props.taskEdition.id}</strong></label><br/></div>
                                        : null
                                        
                                    
                                    }
                                    
                                    <label><strong>Tên:</strong></label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="name" 
                                        placeholder="Input field" 
                                        value={this.state.task.name}
                                        onChange={ this.onChange }
                                        />
                                    <label><strong>Trạng Thái:</strong></label>
                                    
                                    <select 
                                        name="status" 
                                        className="form-control" 
                                        required="required"
                                        value={this.state.task.status}
                                        onChange={ this.onChange }
                                        >
                                        <option value={true}>Kích Hoạt</option>
                                        <option value={false}>Ẩn</option>
                                    </select>
                                    
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mb-10">
                                    
                                    <button type="button" className="btn btn-warning" onClick={ this.onSaveTask }><i className="fa fa-plus mr-5" aria-hidden="true"></i>Lưu</button>&nbsp;
                                    <button type="reset" className="btn btn-danger"><i className="fa fa-times mr-5" aria-hidden="true"></i>Hủy Bỏ</button>
                                    
                                </div>
                            </div>
                          </form>
                          
						  
                          
                          
                          
					</div>
					
				</div>
        )
    }
}
export default AddTask;