import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import "./RightPage.css"
const RightPage = () => {
    return (
        <div>
            {/* Section 1 */}
            <section>
            <div className='m-4'>
                <p className='font-semibold text-purple-800 text-2xl'>Connect Us On</p>
                <div className='flex text-center text-blue-800'>
                    <FaFacebook className='mr'></FaFacebook>
                    <p>Facebook</p>
                </div>
                <div className='flex text-center text-orange-600'>
                    <FaInstagram className='mr'></FaInstagram> 
                    Instagram
                </div>
                <div className='flex text-center text-red-700'>
                    <FaYoutube className='mr'></FaYoutube>
                    Youtube
                </div>
            </div>
            </section>
           
        </div>
    );
};

export default RightPage;