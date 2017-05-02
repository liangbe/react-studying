/**
 * Created by liangbe on 2017/3/28.
 */


import React, {Component} from 'react';
import {
    CSSTransitionGroup,
    // ReactTransitionGroup
} from 'react-transition-group';
import './index.css';
// import ReactDataGrid from 'react-data-grid';
export default class myApp extends Component {
    // constructor(props){
    //     super(props);
    //     const columns = [{ key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }];
    //     const rows = [{ id: 1, title: 'Title 1' }];
    //     const rowGetter = rowNumber => this.state.rows[rowNumber];
    //     this.state = {
    //         columns:columns,
    //         rows:rows,
    //         rowGetter:rowGetter
    //     }
    // }
    //
    // render() {
    //
    //     return (
    //         <div className="App-middle">
    //             <ReactDataGrid columns={this.state.columns}
    //                            rowGetter={this.state.rowGetter}
    //                            rowsCount={this.state.rows.length}
    //                            minHeight={500}
    //                            />
    //         </div>
    //     )
    // }
    constructor(props){
        super(props);
        this.state = {
            items:['hello', 'world', 'click', 'me']}
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd() {
        var newItems =
            this.state.items.concat([prompt('Enter some text')]);
        this.setState({items: newItems});
    }
    handleRemove(i) {
        var newItems = this.state.items;
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }
    render() {
        var items = this.state.items.map(function(item, i) {
            return (
                <div key={item} onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </div>
            );
        }.bind(this));
        return (
            <div className="App-middle">
                <button onClick={this.handleAdd}>Add Item</button>
                <CSSTransitionGroup transitionName="example"
                                    transitionEnterTimeout={0}
                                    transitionLeaveTimeout={0}>
                    {items}
                </CSSTransitionGroup>
            </div>
        );
    }



}