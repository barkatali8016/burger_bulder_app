import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
          this.reqInterceptor=axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            })
            this.resInterceptor=axios.interceptors.response.use(res => res, err => {
                this.setState({ error: err })

            })
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }
        errorConfirmHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <React.Fragment>
                    <Modal
                        purchasing={this.state.error}
                        modalClosed={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </React.Fragment>
            )
        }
    }
}

export default withErrorHandler;