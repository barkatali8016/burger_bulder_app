import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axiosOrder';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';

class ContactData extends Component {
    state = {
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false

            },
            street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Street'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            zipCode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Zip Code'
                },
                value:'',
                validation:{
                    required:true,
                    minlenght:5,
                    maxlenght:5,
                },
                valid:false,
                touched:false
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Country'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your E-Mail'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                   options:[
                        {value:'fastest',displayValue:'Fastest'},
                        {value:'cheapest',displayValue:'Cheapest'},
                    ]
                },
                value:'fastest',
                validation:{
                    
                },
                valid:true,
                touched:true
            },
        },
        loading: false,
        formIsValid:false
    }
    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        let formData={}
            for (const elementIdentifier in this.state.orderForm) {
                formData[elementIdentifier]=this.state.orderForm[elementIdentifier].value;
            }
        const order = {
            ingredient: this.props.ings,
            price: this.props.price,
            orderData:formData
        }

        //making http request to firebase 
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false })
            });
    }

    checkValidity=(value,rules)=>{
        let  isValid=true;
        if(rules.required){
            isValid=value.trim() !== '' && isValid
        }

        if(rules.minlenght){
            isValid=value.length >= rules.minlenght && isValid
        }
        if(rules.maxlenght){
            isValid=value.length <= rules.maxlenght && isValid
        }
        return isValid;
    }
    formHandleChange=(event,elementIdentifier)=>{
        let updatedForm={
           ...this.state.orderForm
        }
        let updatedFormElement={
            ...updatedForm[elementIdentifier]
        }
        updatedFormElement.value=event.target.value;
        updatedFormElement.touched=true;
        updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
        updatedForm[elementIdentifier]=updatedFormElement;
        let  formIsValid=true;
        for (const elementIdentifier in updatedForm) {
            formIsValid=updatedForm[elementIdentifier].valid && formIsValid;
           
        }
        this.setState({orderForm:updatedForm,formIsValid:formIsValid})

    }
    render() {
        const orderFormArray=[];
        for (const key in this.state.orderForm) {
            if (this.state.orderForm.hasOwnProperty(key)) {
               orderFormArray.push({id:key,config:this.state.orderForm[key]});
                
            }
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {
                    this.state.loading ? <Spinner />
                        : <form  onSubmit={this.orderHandler}>
                         {orderFormArray.map(formElement=>(
                                <Input 
                                key={formElement.id}
                                elementType={formElement.config.elementType} 
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                changed={(event)=>this.formHandleChange(event,formElement.id)}
                                invalid={!formElement.config.valid}
                                shouldValidate={formElement.config.validation}
                                touched={formElement.config.touched}
                                />
                            ))}
                            <Button disabled={!this.state.formIsValid} btnType="Success">Order</Button>
                        </form>
                }

            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        ings:state.ingredient,
        price:state.burgerPrice
    }
}
export default connect(mapStateToProps)(ContactData);
