import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axiosOrder';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/action';


class BurgerBulder extends Component {
    state = {
        purchasing: false,
        loading: false,
        error:false
    }
    componentDidMount() {
        // this.getIngredient()
    }
    getIngredient = () => {
        axios.get('/indredient.json')
            .then(response => {
                this.setState({ ingredient: response.data });
            })
            .catch(err => {
                this.setState({error:true})
            });
    }
    purchasableHandle = (ingredient) => {

        let sum = Object.keys(ingredient).map(keys => {
            return ingredient[keys];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0)
        return  sum > 0
    }

    showModal = () => {

        this.setState({ purchasing: true });
    }

    purchaseCancelHandle = () => {

        this.setState({ purchasing: false });
    }
    purchaseContinueHandle = () => {
        this.props.history.push('/checkout');
    }
    orderSubmited=()=>{
        this.setState({isOrder:false})
    }
    render() {
        let orderSumary = <Spinner />
        let burger = this.state.error?<p style={{textAlign:'center'}}>Ingredient can't be load</p>:<Spinner />
        if (this.props.ings) {
            let disabledInfo = { ...this.props.ings }
            for (let key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key] <= 0
            }
            burger = (<React.Fragment>
                <Burger ingredient={this.props.ings} />
                <BuildControls
                    priceAdded={this.props.onIngredientAdded}
                    priceRemoved={this.props.onIngredientRemoved}
                    disabledInfo={disabledInfo}
                    burgerPrice={this.props.price}
                    purchasable={this.purchasableHandle(this.props.ings)}
                    showModalHandle={this.showModal}
                />
            </React.Fragment>)
            orderSumary = <OrderSummary
                ingredient={this.props.ings}
                purchaseContinue={this.purchaseContinueHandle}
                purchaseCancel={this.purchaseCancelHandle}
                burgerPrice={this.props.price}
            />;
            if (this.state.loading) {
                orderSumary = <Spinner />
            }
        }
        return (<React.Fragment>
            <Modal purchasing={this.state.purchasing} modalClosed={this.purchaseCancelHandle}>
                {orderSumary}
            </Modal>
            {burger}
        </React.Fragment>)
    }
}

const mapStateToProps=state=>{
   return{
    ings:state.ingredient,
    price:state.burgerPrice
   }
}
const mapDispatchToProps=dispatch=>{
   return{
    onIngredientAdded:(ingName)=>dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingName}),
    onIngredientRemoved:(ingName)=>dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingName}),
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBulder, axios));