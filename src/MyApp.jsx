/**
 * Created by liangbe on 2017/3/28.
 */


import React, {Component} from 'react';
// import {
//     CSSTransitionGroup,
//     // ReactTransitionGroup
// } from 'react-transition-group';
import {
    TweenLite,
    // TimelineMax
} from 'gsap';
import './index.css';
import $ from "jquery";

let refNode;
// import ReactDataGrid from 'react-data-grid';
export default class myApp extends Component {

    // region =====1.======//
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
    //endregion  =====1.======//



    // region =====2.======//
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         items:['hello', 'world', 'click', 'me']}
    //     this.handleAdd = this.handleAdd.bind(this);
    // }
    // handleAdd() {
    //     var newItems =
    //         this.state.items.concat([prompt('Enter some text')]);
    //     this.setState({items: newItems});
    // }
    // handleRemove(i) {
    //     var newItems = this.state.items;
    //     newItems.splice(i, 1);
    //     this.setState({items: newItems});
    // }
    // render() {
    //     var items = this.state.items.map(function(item, i) {
    //         return (
    //             <div key={item} onClick={this.handleRemove.bind(this, i)}>
    //                 {item}
    //             </div>
    //         );
    //     }.bind(this));
    //     return (
    //         <div className="App-middle">
    //             <button onClick={this.handleAdd}>Add Item</button>
    //             <CSSTransitionGroup transitionName="example"
    //                                 transitionEnterTimeout={0}
    //                                 transitionLeaveTimeout={0}>
    //                 {items}
    //             </CSSTransitionGroup>
    //         </div>
    //     );
    // }

    //endregion  =====2.======//

    // region =====3.======//
    componentDidMount () {
        var _this=this,
             speed=5;
        this.tween=TweenLite.to(refNode,speed, {
            x: 400,
            y: 400,
            opacity:0.1,
            backgroundColor: '#2196f3',
            onComplete:_this.onFinishTween.bind(this),
            onCompleteParams:[speed, refNode]
        });
        this.tween.pause();
        $("#play").click(function () {
            this.tween.resume();
        }.bind(this));

        $("#stop").click(function () {
            this.tween.pause();
        }.bind(this));
        // TweenMax 可以做什么？
        // 暂停
        // tween.pause();

        // 继续播放
        // tween.resume();

        // 反转播放
        // tween.reverse();

        // 跳转到1s进度处开始播放
        // tween.seek(1);

        // 重播
        // TweenMax.restart();

        // 动画变为三倍速
        // tween.timeScale(3);
    }

    onFinishTween(speed,refNode){
        this.tween.reverse();
        // TweenMax.from(refNode, speed, { x: -400,backgroundColor:"red"});
    }


    render () {
        return (
            <div className="App-middle">
            <div style={{width:"100%",height:"450px"}}>
                <div
                    id="ball"
                    ref={c => (refNode = c)}
                    style={{
                        width: '100px',
                        height: '100px',
                        margin: '100px',
                        borderRadius: '50%',
                        opacity:1,
                        backgroundColor: 'red'
                    }}>
                </div>
            </div>
            <div >
                <div style={{width:'100px',
                             height: '35px',
                             margin: '100px 100px 0px 250px',
                             float: 'left',
                             textAlign:'center',
                             paddingTop:'10px',
                             color:'#FFF',
                             backgroundColor:'#2196f3'}}
                     id="play">Play
                </div>
                <div style={{width:'100px',
                             height: '35px',
                             margin: '100px 100px 0px 100px',
                             float: 'left',
                             textAlign:'center',
                             paddingTop:'10px',
                             color:'#FFF',
                             backgroundColor:'red'}}
                     id="stop">Stop
                </div>

            </div>

            </div>
        );
    }

    //endregion  =====3.======//

    // region =====4.======//
    // componentDidMount () {
    //     debugger;
    //     var tl = new TimelineMax({repeat:2, repeatDelay:6, yoyo:true});
    //     debugger;
    //     tl.staggerTo(".App-middle h2", 0.2, {className:"+=superShadow", top:"-=10px"}, "0.3", "start")
    // }
    // render () {
    //     return (
    //             <div className="App-middle">
    //                 <h2>3d text</h2>
    //                 <h2>animated</h2>
    //                 <h2>with multiple</h2>
    //                 <h2>text-shadows</h2>
    //             </div>
    //         )
    // }

    //endregion  =====4.======//

}