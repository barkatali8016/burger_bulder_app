import React ,{Component}from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class  Layout extends Component {
    state={
        hideSideDrawer:false,
    }
    hideSideDrawerHandler=()=>{
        this.setState({hideSideDrawer:false});
    }
    showSideDrawerHandler=()=>{
        this.setState(prevState=>{
            return {hideSideDrawer:!prevState.hideSideDrawer}
        });
    }
    render(){
        return(
            <React.Fragment>
               <Toolbar
                    show={this.state.hideSideDrawer}
                   showSideDrawer={this.showSideDrawerHandler}
                />
               <SideDrawer
                    show={this.state.hideSideDrawer} 
                    closedSideDrawer={this.hideSideDrawerHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
    
}

export default Layout;