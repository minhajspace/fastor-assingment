import React from 'react'

class RestaurantDetails extends React.Component {

    handleBack = () => {
        this.props.history.push("/restaurant-list")
    }

    render() {
        console.log(this.props.location.state.state)
        const { location: { state: { state: { restaurant_name, image, status, address_complete, avg_cost_for_two, closes_at } } } } = this.props
        const { location: { state: { state: { rating: { restaurant_avg_rating } } } } } = this.props
        const cuisines = this.props.location.state.state.cuisines
        console.log(cuisines)
        console.log(restaurant_name, image, status)
        const menu = cuisines.map((item) => {
            return <div key={item.cuisine_id}>{item.cuisine_name}</div>

        })
        return (
            <div>
                <body className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-dark ">
                    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                        <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl  opacity-75 mx-6 lg:mx-0 bg-white">
                            <div className="p-4 md:p-12 text-center lg:text-left">
                                {/* image for mobile view  */}

                                <h1 className="text-3xl font-bold pt-8 lg:pt-0">{restaurant_name}</h1>
                                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">{address_complete}</p>
                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">{status}</p>
                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">Cost for two {avg_cost_for_two}</p>
                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">⭐ {restaurant_avg_rating}</p>
                                <p className="pt-8 text-sm">Menu</p>

                                {menu}
                            </div>

                        </div>
                        <div className="w-full lg:w-2/5 ">
                            <img src={image}></img>
                        </div>
                        <div className="absolute top-0 right-0 h-12 w-18 p-4">
                            <button onClick={this.handleBack} className="js-change-theme focus:outline-none">back</button>
                        </div>
                    </div>


                </body>



            </div>
        )
    }
}
export default RestaurantDetails
