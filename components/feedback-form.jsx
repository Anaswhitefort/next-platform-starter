'use client';

import { useState } from 'react';
import { Card } from './card';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const form = event.target;

            const formData = new FormData(form);

            // Submitting to Netlify
            const res = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });

            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`Error: ${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`Error: ${e.message}`);
        }
    };

    return (
        <div className="w-full md:w-full md:max-w-full bg-transparent">
            <Card title="Contact us">
                <form
                    name="feedback"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleFormSubmit}
                    className="text-black flex flex-col gap-3 align-center bg-transparent"
                >
                    <input type="hidden" name="form-name" value="feedback" />
                    <input name="name" type="text" placeholder="Name" required className="input input-bordered bg-transparent text-white placeholder-gray-400 border-white border border-white rounded-[15px]" />
                    <input name="email" type="email" placeholder="Email (optional)" className="input input-bordered bg-transparent text-white placeholder-gray-400 border-white border border-white rounded-[15px]" />
                    <input name="phone" type="tel" placeholder="Phone Number "  required className="input input-bordered bg-transparent text-white placeholder-gray-400 border-white border border-white rounded-[15px]" />
                    <textarea name="message" placeholder="Message" required className="input input-bordered bg-transparent text-white placeholder-gray-400 border-white border border-white rounded-[15px]"></textarea>
                    <button className="btn bg-[#35cbee] border border-white rounded-[15px]" type="submit" disabled={status === 'pending'}>
                        Submit
                    </button>
                    {status === 'ok' && (
                        <div className="alert alert-success">
                            <SuccessIcon />
                            Submitted!
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="alert alert-error">
                            <ErrorIcon />
                            {error}
                        </div>
                    )}
                </form>
            </Card>
        </div>
    );
}

function SuccessIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function ErrorIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
