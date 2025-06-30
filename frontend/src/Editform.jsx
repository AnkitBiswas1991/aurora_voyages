import { useFormik } from 'formik'
import React from 'react'
import { MdError } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'


const Editform = function({dataNum}) {
    const navigate = useNavigate();
    const formValidate = Yup.object({
       firstname: Yup.string().required("First name is required"),
        lastname: Yup.string().required("Last name is required"),
        email: Yup.string().email("Not a Valid Email").required("Email is required"),
        numberofpeople: Yup.string().required("Select Number of People"),
        numberofroom: Yup.string().required("Select number of room"),
        phone: Yup.string().matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number").required("Phone Number is required"),
        address: Yup.string().required("Address is required")
    })
    const data = JSON.parse(localStorage.getItem("Booked_Data"))
    let getData = data[dataNum];
    const formik = useFormik({
        initialValues: {
            firstname: getData.firstname,
            lastname: getData.lastname,
            email: getData.email,
            phone: getData.phone,
            numberofpeople: getData.numberofpeople,
            numberofroom: getData.numberofroom,
            address: getData.address,
            message: getData.message,
        },
        validationSchema: formValidate,
        onSubmit: values =>{
            const updateData = [...data]
            updateData[dataNum] = {...updateData[dataNum], ...values}
            localStorage.setItem("Booked_Data", JSON.stringify(updateData));
            navigate('/bookedhotel')
        },
    })

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div className="flex -mx-4 flex-wrap">
                <div className="w-1/2 px-4 mb-3">
                    <label htmlFor="firstname" className='mb-1'>First Name<span className='text-sm text-red-600'>*</span></label>
                    <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name="firstname" className='w-full px-2 py-2 border border-gray-300 rounded-sm' id="firstname" placeholder='First Name' value={formik.values.firstname}/>

                    {formik.touched.firstname && formik.errors.firstname ? <div className='py-1 px-2 flex items-center bg-red-100 text-red-600 border-red-600 text-xs rounded-xs mt-1'><MdError className='mr-1'/>{formik.errors.firstname}</div> : null}
                </div>
                <div className="w-1/2 px-4 mb-3">
                    <label htmlFor="lastname" className='mb-1'>Last Name<span className='text-sm text-red-600'>*</span></label>
                    <input type="text" name="lastname" onChange={formik.handleChange} onBlur={formik.handleBlur} id="lastname" className='w-full px-2 py-2 border border-gray-300 rounded-sm' placeholder='Last Name' value={formik.values.lastname}/>

                    {formik.touched.lastname && formik.errors.lastname ? <div className='py-1 px-2 flex items-center bg-red-100 text-red-600 border-red-600 text-xs rounded-xs mt-1'><MdError className='mr-1'/>{formik.errors.lastname}</div> : null}
                </div>
                <div className="w-1/2 px-4 mb-3">
                    <label htmlFor="email" className='mb-1'>Email Id<span className='text-sm text-red-600'>*</span></label>
                    <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" className='w-full px-2 py-2 border border-gray-300 rounded-sm' placeholder='Email Id' value={formik.values.email}/>

                    {formik.touched.email && formik.errors.email ? <div className='py-1 px-2 flex items-center bg-red-100 text-red-600 border-red-600 text-xs rounded-xs mt-1'><MdError className='mr-1'/>{formik.errors.email}</div> : null}
                </div>
                <div className="w-1/2 px-4 mb-3">
                    <label htmlFor="phone" inputMode="numeric" className='mb-1'>Phone Number<span className='text-sm text-red-600'>*</span></label>
                    <input type="text" name="phone" maxLength={10} onChange={e => {const digitsonly = e.target.value.replace(/\D/g, ''); formik.setFieldValue('phone', digitsonly)}} onBlur={formik.handleBlur} id="phone" className='w-full px-2 py-2 border border-gray-300 rounded-sm' placeholder='Phone Number' value={formik.values.phone}/>

                    {formik.touched.phone && formik.errors.phone ? <div className='py-1 px-2 flex items-center bg-red-100 text-red-600 border-red-600 text-xs rounded-xs mt-1'><MdError className='mr-1'/>{formik.errors.phone}</div> : null}
                </div>
                <div className="w-1/2 px-4 mb-3">
                    <label htmlFor="numberofpeople" className='mb-1'>Total Number of People<span className='text-sm text-red-600'>*</span></label>
                    <select name="numberofpeople" onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full px-2 py-2 border border-gray-300 rounded-sm' id="numberofpeople" value={formik.values.numberofpeople}>
                        <option disabled defaultValue value="">Select Number of People</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    {formik.touched.numberofpeople && formik.errors.numberofpeople ? <div className='py-1 px-2 flex items-center bg-red-100 text-red-600 border-red-600 text-xs rounded-xs mt-1'><MdError className='mr-1'/>{formik.errors.numberofpeople}</div> : null}
                </div>
                <div className="w-1/2 px-4 mb-3">
                    <label htmlFor="numberofroom" className='mb-1'>Total Number of Rooms<span className='text-sm text-red-600'>*</span></label>
                    <select name="numberofroom" onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full px-2 py-2 border border-gray-300 rounded-sm' value={formik.values.numberofroom} id="numberofroom">
                        <option disabled defaultValue value="">Select Number of Rooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    {formik.touched.numberofroom && formik.errors.numberofroom ? <div className='py-1 px-2 flex items-center bg-red-100 text-red-600 border-red-600 text-xs rounded-xs mt-1'><MdError className='mr-1'/>{formik.errors.numberofroom}</div> : null}
                </div>
                <div className="w-full px-4 mb-3">
                    <label htmlFor="address" className='mb-1'>Address<span className='text-sm text-red-600'>*</span></label>
                    <input type="text" name="address" onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full px-2 py-2 border border-gray-300 rounded-sm' id="address" value={formik.values.address} placeholder='Your Address'/>

                    {formik.touched.address && formik.errors.address ? <div className='py-1 px-2 flex items-center bg-red-100 text-red-600 border-red-600 text-xs rounded-xs mt-1'><MdError className='mr-1'/>{formik.errors.address}</div> : null}
                </div>
                <div className="w-full px-4 mb-3">
                    <label htmlFor="message" className='mb-1'>Message</label>
                    <textarea name="message" onChange={formik.handleChange} id="message" placeholder='Enter Your Message' rows={7} className='w-full px-2 py-2 border border-gray-300 rounded-sm' value={formik.values.message}></textarea>
                </div>
                <div className='w-full px-4'>
                    <button className='cursor-pointer bg-cyan-950 hover:bg-cyan-600 text-white transition-all duration-300 ease-in-out rounded-sm px-6 py-2' type="submit" >Update Form</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Editform
