import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axiosOrder';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import classes from './Orders.module.css'

export class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        this.getOrders();
    }

    getOrders = () => {
        axios.get('/orders.json')
            .then(response => {
                let orders = [];
                let obj = response.data;
                for (let odr in obj) {
                    let order = {
                        ...obj[odr],
                        orderId: odr
                    }
                    orders.push(order);
                }
                this.setState({ orders: orders, loading: false });
            })
            .catch(err => { this.setState({ loading: false }); });
    }
    render() {
        let orders = <Spinner />

        if (this.state.orders.length > 0) {
            orders = this.state.orders.map(order => (<Order key={order.orderId} ingredient={order.ingredient} price={+order.price} />));
        }
        return (
            <div >
                {orders}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);
