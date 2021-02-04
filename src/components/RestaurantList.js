import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { signup_user } from '../redux/actions/index'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class RestaurantList extends React.Component {

    state = {
        data: "",
        loading: true,
        token: ""

    }

    getData = () => {
        const token = cookies.get("token")
        // this.setState({ token: this.props.location.res.data.data.token })
        // const token = this.props.location.res.data.data.token;
        // const { token } = this.state
        console.log(token)
        this.setState({ token })
        console.log(this.state.token)
        axios.get('https://staging.fastor.in/v1/m/restaurant?city_id=118', {
            headers: {
                'Authorization': token
            }
        })
            .then((res) => {
                console.log(res)
                this.setState({ data: res })
                this.props.signup_user(res.data)
                console.log(this.state)
                this.setState({ loading: false })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    handleClick = value => e => {
        this.props.history.push("/restaurant-details", { state: value });
    };


    componentDidMount = () => {
        this.getData()
    }
    render() {
        // console.log(this.props.location.res.data)
        console.log(this.props)
        console.log(this.state.data)
        console.log(this.props.list)

        const list = this.props.list && this.props.list.map((value) => {
            return <div onClick={this.handleClick(value)}
                key={value.restaurant_id}
            >
                <div className="flex justify-center align-center"  >
                    <body className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover flex justify-center `}>
                        <div className="p-4 md:p-4 text-center lg:text-left w-auto mb-2">
                            <div className="p-4 md:p-4 text-center lg:text-left pr-2 flex-wrap border-2 border-indigo-600 rounded mb-4">
                                <div className="">
                                    <div className="flex">
                                        <h1 className="text-xl my-2 font-semibold flex-1"> {value.restaurant_name}</h1>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </body>


                </div>
            </div>
        })


        return (
            <div >
                {this.state.loading && <h1>Loading</h1>}
                {list && list}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        list: state.signupReducer.item,

    }
}
export default connect(mapStatetoProps, { signup_user })(RestaurantList)
