"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React from 'react';


const page = () => {

    const router = useRouter()
    const isloading = false;
    const Condition = () => {
        if (isloading) {
            router.push('Service/Find')
        }
        else {
            router.push('/')
        }

    };

    const data = [
        {
            "service_id": 1,
            "service_name": "Web Development",
            "service_description": "Building responsive and scalable websites using modern technologies."
        },
        {
            "service_id": 2,
            "service_name": "Mobile App Development",
            "service_description": "Creating user-friendly mobile apps for Android and iOS platforms."
        },
        {
            "service_id": 3,
            "service_name": "SEO Optimization",
            "service_description": "Improving website visibility and ranking on search engines."
        },
        {
            "service_id": 4,
            "service_name": "Cloud Services",
            "service_description": "Deploying and managing applications on cloud platforms like AWS and Azure."
        },
        {
            "service_id": 5,
            "service_name": "UI/UX Design",
            "service_description": "Designing intuitive user interfaces and smooth user experiences."
        }
    ]



    return (
        <div>
            <h2>this is service page</h2>
            <p><Link href={'/Service/Find'}>Nested</Link></p>

            <button onClick={Condition}> Conditional Login  </button>

            {
                data.map((d) => {
                    return (
                        <div>
                            <p>
                                Id are {d.service_id}
                            </p>

                        </div>
                    )


                })
            }

        </div>
    );
};

export default page;