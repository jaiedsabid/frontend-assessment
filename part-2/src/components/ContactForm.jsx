import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function ContactForm() {
    return (
        <div className="relative bg-gradient-to-b from-white to-gray-100 pb-5">
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div className="relative py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: 'opacity(0.7)' }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29273.862490028292!2d89.40296158150785!3d23.48812247201939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe567274bd4605%3A0xb9b2a7ea3735a68b!2sMagura!5e0!3m2!1sen!2sbd!4v1625314499339!5m2!1sen!2sbd"
                    />
                </div>
                <div className="px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12">
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <div className="pb-8 lg:pb-12">
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                Get in touch
                            </h2>
                            <p className="mt-3 text-lg leading-6 text-gray-500">
                                If you have any questions, please don't hesitate
                                to contact me. I'll be more than happy to help
                                you.
                            </p>
                        </div>
                        <form
                            action="#"
                            method="POST"
                            className="grid grid-cols-1 gap-y-6"
                        >
                            <div>
                                <label htmlFor="full-name" className="sr-only">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    name="full-name"
                                    id="full-name"
                                    autoComplete="name"
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
                                    placeholder="Full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autoComplete="tel"
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
                                    placeholder="Phone"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
                                    placeholder="Message"
                                    defaultValue={''}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
