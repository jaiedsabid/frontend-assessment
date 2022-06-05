import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function NavBar() {
    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex-shrink-0 flex items-center">
                                {/* Brand */}
                                <img src="/brand.svg" alt="" />
                            </div>
                            {/* Navigation Links */}
                            <div className="flex px-2 lg:px-0">
                                <div className="hidden lg:ml-6 lg:flex lg:space-x-8 lg:justify-self-end">
                                    <a
                                        href="#"
                                        className="border-cyan-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="#"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        href="#"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        About
                                    </a>
                                    <a
                                        href="#"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {/* Current: "bg-cyan-50 border-cyan-500 text-cyan-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="bg-cyan-50 border-cyan-500 text-cyan-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Blog
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                About
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Contact
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
