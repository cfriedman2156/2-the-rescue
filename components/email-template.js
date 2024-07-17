import React, { useState } from 'react';

export default function EmailTemplate() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Email sent successfully!");
        } else {
            alert("Failed to send email.");
        }
    };

    return (
        <form onSubmit={sendEmail} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block text-xl tracking-wide text-gray-700 font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-6 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={data.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xl font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-6 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        value={data.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xl font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-6 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="(123) 456-7890"
                        value={data.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xl font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-6 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        value={data.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xl font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="min-h-48 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-6 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        value={data.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6 md:mb-0 mt-4">
                    <button
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </div>
        </form>
    );
}
