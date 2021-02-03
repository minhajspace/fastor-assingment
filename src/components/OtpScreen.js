import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();




const OtpScreen = (props) => {
    const history = useHistory();
    const [otp, setOtp] = useState()

    const handleOtp = (e) => {
        e.preventDefault()
        const { phone, dial_code } = props.location.state
        const varify = Number(otp)
        axios.post('https://staging.fastor.in/v1/pwa/user/login', {
            phone,
            dial_code,
            "otp": varify
        }).then((res) => {
            cookies.set("token", res.data.data.token)
            history.push({
                pathname: "/restaurant-list",
                res
            })
        }).catch((err) => {
            console.log(err)
        })


    }

    return (

        < div >
            <form className="mt-8 space-y-6"  >
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div className="my-2">
                        <label for="email-address" className="sr-only">Mobile Number</label>
                        <input id="email-address" type="tel" value={otp} onChange={e => setOtp(e.target.value)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Otp" />
                    </div>

                </div>
                <div>
                    <button type="submit" onClick={handleOtp} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">


                        </span>
         Otp
        </button>
                </div>
            </form>
        </div >
    )
}


export default OtpScreen
