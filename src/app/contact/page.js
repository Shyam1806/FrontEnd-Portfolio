'use client';
import Head from 'next/head'
import React from 'react'
import Header from '../components/header'
import { useForm } from "react-hook-form";
import Footer from '../components/footer';

const contact = () => {

    const { register, handleSubmit } = useForm();
    // const [data, setData] = useState("");
    const onSubmits = datas =>
        console.log("Contactform-data", datas);
    return (
        <>
            <Header />
            <div className="contactus-wrapper mt-8 mb-8">
                <div className="container">
                    <div className="flex flex-nowrap">

                        <div className="contactus-form shadow p-4 bg-white">
                            <h4 className="pt-2 text-[22px] text-slate-600">Leave us a message</h4>
                            <form onSubmit={handleSubmit(onSubmits)}>
                                <input {...register("Name", { required: true })} placeholder="Name" className="border w-full mt-8 p-2 rounded" />
                                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className="border w-full mt-8 p-2 rounded" />
                                <textarea {...register("Message", { required: true })} placeholder="Message" className="border w-full mt-8 p-2 rounded" />

                                <input type="submit" className="mt-4 font-bold border-rounded form-submit text-white  p-2 hover:cursor-pointer pl-4 pr-4 rounded" />
                            </form>
                        </div>
                        <div className="contactus-img shadow">
                            <img src="./img/contact.png" alt="contact-snap" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497512.5774987501!2d79.87932317511219!3d13.047316837471575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1706189911772!5m2!1sen!2sin" style={{ border: "0", allowfullscreen: "", width: "100%", height: "450px" }} referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer />
        </>
    )
}

export default contact