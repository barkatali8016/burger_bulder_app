import React, { Component } from 'react';
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

 class CheckOut extends Component {

     checkOutCancelHandler=()=>{
         this.props.history.goBack();
     }
     checkOutContinueHandler=(event)=>{
         event.preventDefault();
        this.props.history.replace(this.props.match.path + '/contact-data');
     }
    render() {
        return (
            <div>
                <CheckOutSummary
                    ingredient={this.props.ings}
                    checkOutCancel={this.checkOutCancelHandler}
                    checkOutContinue={this.checkOutContinueHandler}
                 />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData}
                />
                </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        ings:state.ingredient
    }
}
export default connect(mapStateToProps)(CheckOut);
