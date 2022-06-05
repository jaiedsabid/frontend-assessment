/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    CreditCardIcon,
    GlobeIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
} from '@heroicons/react/outline';

export default function Features() {
    const features = [
        {
            name: 'Tavel the world',
            description:
                'Travel to the world of your dreams. Visit places that make you happy and make you feel good about yourself.',
            icon: GlobeIcon,
        },
        {
            name: 'Save Money',
            description:
                'Save money for your travel and travel to the world of your dreams.',
            icon: CreditCardIcon,
        },
        {
            name: 'Secure',
            description:
                'Secure your travel with our secure payment system. Always safe and secure.',
            icon: ShieldCheckIcon,
        },
    ];

    return (
        <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base font-semibold uppercase tracking-wider text-cyan-600">
                    Travelling is fun
                </h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Travel and enjoy the world
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                    Travelling is a journey of discovery, encountering new
                    people and experiencing new things.
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 auto-rows-auto gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="pt-6">
                                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 h-full">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center rounded-md bg-cyan-500 p-3 shadow-lg">
                                                <feature.icon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                                            {feature.name}
                                        </h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
