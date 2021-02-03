import React from 'react'
import axios from 'axios'

class RestaurantList extends React.Component {

    state = {
        data: "",
        loading: true

    }

    getData = () => {
        const token = this.props.location.res.data.data.token
        console.log(token)
        axios.get('https://staging.fastor.in/v1/m/restaurant?city_id=118', {
            headers: {
                'Authorization': token
            }
        })
            .then((res) => {
                this.setState({ data: res.data })
                console.log(this.state)
                this.setState({ loading: false })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    handleClick = (value) => {
        this.props.history.push("/restaurant-details", {
            state: {
                details: value
            }
        });
    };


    componentDidMount = () => {
        this.getData()
    }
    render() {
        console.log(this.props.location.res.data)

        const list = this.state.data && this.state.data.map((value) => {
            return <div className="flex justify-center align-center"  >
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
        })


        return (
            <div >
                {this.state.loading && <h1>Loading</h1>}
                {list && list}
            </div>
        )
    }
}


export default RestaurantList