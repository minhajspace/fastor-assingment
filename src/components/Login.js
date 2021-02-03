import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    state = {
        mobile: ""
    }

    handleLogin = (e) => {
        e.preventDefault()
        const { mobile } = this.state
        const phone = Number(mobile)
        axios.post("https://staging.fastor.in/v1/pwa/user/register",
            {
                phone,
                "dial_code": "+91"
            })
            .then((res) => {
                console.log(res)
                this.props.history.push("/otp", { phone, "dial_code": "+91" })
            }).catch((err) => {
                console.log(err)
            })

    }

    render() {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold text-green-700">
                            Sign in to your account
      </h2>

                    </div>
                    <form className="mt-8 space-y-6"  >
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="my-2">
                                <label for="email-address" className="sr-only">Mobile Number</label>
                                <input id="email-address" type="tel" value={this.state.mobile} onChange={e => this.setState({ mobile: e.target.value })} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your mobile number" />
                            </div>

                        </div>



                        <div>
                            <button type="submit" onClick={this.handleLogin} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">


                                </span>
         Login
        </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login
