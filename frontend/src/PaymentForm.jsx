import { useFormik } from 'formik'
import React from 'react'
import { MdError } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const PaymentForm = function() {
    const navigate = useNavigate();
    const isValidExpiry = function(value) {
        if (!value || !/^\d{2}\/\d{2}$/.test(value)) return false;

        const [mm, yy] = value.split('/').map(Number);
        if (mm < 1 || mm > 12) return false;

        const now = new Date();
        const currentYear = now.getFullYear() % 100; // last 2 digits
        const currentMonth = now.getMonth() + 1;

        return yy > currentYear || (yy === currentYear && mm >= currentMonth);
    }
    const validatePayment = Yup.object({
        cardnumber: Yup.string().matches(/^\d{12,16}$/, "Enter a valid 12-16 digit card Number").required("Enter Card Number"),
        validity: Yup.string().required("Enter Validity Date on Card").test("is-valid-expiry", "Invalid or expired date", isValidExpiry),
        cvv: Yup.string().matches(/^\d{3}$/, "Enter a valid 3 digit CVV").required("Enter CVV Number"),
        nameoncard: Yup.string().required("Enter Name on Card"),
    })
   const formik = useFormik({
        initialValues: {
            cardnumber: "",
            validity: "",
            cvv: "",
            nameoncard: ""
        },
        validationSchema: validatePayment,
        onSubmit: values => {
           console.log(JSON.stringify(values, null, 2));
        },
   })
   const paymentHandeler = async () =>{
    const validatePayment = await formik.validateForm();
    console.log(validatePayment)
    if (Object.keys(validatePayment).length !== 0) return;
    navigate(`/thank-you`)
   }
   
  return (
    <div className=''>
        <form onSubmit={formik.handleSubmit}>
            <div className="flex -mx-4 flex-wrap">
                <div className="w-full px-4 mb-3">
                    <label htmlFor="cardnumber">Enter Card Number</label>
                    <input type="text" inputMode="numeric" value={formik.values.cardnumber} maxLength={16} onChange={e => {const digitsOnly = e.target.value.replace(/\D/g, ''); formik.setFieldValue('cardnumber', digitsOnly)}} onBlur={formik.handleBlur} className='w-full px-2 py-2 border border-gray-300 rounded-sm' name="cardnumber" id='cardnumber' placeholder='Enter Card Number'/>

                    {formik.touched.cardnumber && formik.errors.cardnumber ? <div className='py-1 px-2 flex items-center bg-red-100 text-red-600 border-red-600 text-xs rounded-xs mt-1'><MdError className='mr-1'/>{formik.errors.cardnumber}</div> : null}
                </div>
                <div className="w-1/2 px-4 mb-3">
                    <label htmlFor="validity">Validity Upto</label>
                    <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full px-2 py-2 border border-gray-300 rounded-sm' name="validity" id="validity" placeholder='MM/YY' value={formik.values.validity} />

                    {formik.touched.validity && formik.errors.validity ? <div className='py-1 px-2 flex items-center bg-red-100 text-red-600 border-red-600 text-xs rounded-xs mt-1'><MdError className='mr-1'/>{formik.errors.validity}</div> : null}
                </div>
                <div className="w-1/2 px-4 mb-3">
                    <label htmlFor="cvv">Enter CVV</label>
                    <input type="text" inputMode="numeric" maxLength={3} onChange={e => {const digitsOnly = e.target.value.replace(/\D/g, ''); formik.setFieldValue("cvv", digitsOnly)}} onBlur={formik.handleBlur} className='w-full px-2 py-2 border border-gray-300 rounded-sm' name="cvv" id="cvv" placeholder='Enter CVV' value={formik.values.cvv}/>

                    {formik.touched.cvv && formik.errors.cvv ? <div className='py-1 px-2 flex items-center bg-red-100 text-red-600 border-red-600 text-xs rounded-xs mt-1'><MdError className='mr-1'/>{formik.errors.cvv}</div> : null}
                </div>
                <div className="w-full px-4 mb-3">
                    <label htmlFor="nameoncard">Enter Name on Card</label>
                    <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full px-2 py-2 border border-gray-300 rounded-sm' name="nameoncard" id="nameoncard" placeholder='Full Name on Card' value={formik.values.nameoncard} />

                    {formik.touched.nameoncard && formik.errors.nameoncard ? <div className='py-1 px-2 flex items-center bg-red-100 text-red-600 border-red-600 text-xs rounded-xs mt-1'><MdError className='mr-1'/>{formik.errors.nameoncard}</div> : null}
                </div>
                <div className="w-full px-4">
                   <button type='submit' className='cursor-pointer bg-cyan-950 hover:bg-cyan-600 text-white transition-all duration-300 ease-in-out rounded-sm px-6 py-2' onClick={paymentHandeler}>Complete Payment</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default PaymentForm
