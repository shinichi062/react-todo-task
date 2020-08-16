import React, { Component } from "react";

class TaskSortControl extends Component {
    constructor(props) {
        super(props);
    }

    onOpenAddTask = () => {
        this.props.onOpenAddTask();
    }

    onClickSort = () => {
        console.log('sort')
    }
    render(){
        return(
            <div>
                <div className="row mb-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                
                        <button type="button" className="btn btn-primary" onClick={ this.onOpenAddTask }>
                            <i className="fa fa-plus mr-5" aria-hidden="true"></i>
                            Thêm Công Việc
                        </button>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        
                        <div className="input-group">
                            <input type="text" className="form-control" id="exampleInputAmount" placeholder="Nhập từ khóa..." />
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-primary"><i className="fa fa-search mr-10" aria-hidden="true"></i>Tìm</button>
                            </span>
                        </div>
                        
                    </div>
                    
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" onClick={this.onClickSort} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sắp Xếp<i className="fa fa-caret-square-o-down ml-10" aria-hidden="true"></i>
                        </button>
                        
                        <ul className="dropdown-menu">
                            <li><a href="#"><i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>Tên A-Z <i className="fa fa-check" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-sort-alpha-desc" aria-hidden="true"></i>Tên Z-A <i className="fa fa-check" aria-hidden="true"></i></a></li>
                            
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Trạng Thái Kích Hoạt</a></li>
                            <li><a href="#">Trạng Thái Ẩn</a></li>
                        </ul>
                    </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskSortControl;