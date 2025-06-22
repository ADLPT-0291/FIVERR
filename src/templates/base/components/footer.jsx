import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest  } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faDollarSign } from '@fortawesome/free-solid-svg-icons';

import Logo from "../../../components/icon/cart/FVRR_BIG.svg";

export function Footer(){
    return<>
    <footer className="ml-60 mr-60">
        <div className='flex flex-wrap justify-between items-start p-4 gap-4 '>
            <div>
                <h3 className='text-xs font-bold pb-2'>Categories</h3>
                <ul className='text-xs text-[#797B82] font-medium flex flex-col gap-2'>
                    <li>Graphics & Design</li>
                    <li>Digital Marketing</li>
                    <li>Writing & Translation</li>
                    <li>Video & Animation</li>
                    <li>Music & Audio</li>
                    <li>Programming & Tech</li>
                    <li>Data</li>
                    <li>Business</li>
                    <li>Lifestyle</li>
                    <li>Sltemap</li>
                </ul>
            </div>
            <div>
                <h3 className='text-xs font-bold pb-2'>About</h3>
                <ul className='text-xs text-[#797B82] font-medium flex flex-col gap-2'>
                    <li>Careers</li>
                    <li>Press & News</li>
                    <li>Partnerships</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Intellectual Property Claims</li>
                    <li>Investor Relations</li>
                </ul>
            </div>
            <div>
                <h3 className='text-xs font-bold pb-2'>Support</h3>
                <ul className='text-xs text-[#797B82] font-medium flex flex-col gap-2'>
                    <li>Help & Support</li>
                    <li>Trust & Safety</li>
                    <li>Selling on Fiverr</li>
                    <li>Buying on Fiverr</li>
                </ul>
            </div>
            <div>
                <h3 className='text-xs font-bold pb-2'>Communlty</h3>
                <ul className='text-xs text-[#797B82] font-medium flex flex-col gap-2'>
                    <li>Events</li>
                    <li>Blog</li>
                    <li>Forum</li>
                    <li>Community Standards</li>
                    <li>Podcast</li>
                    <li>Affiliates</li>
                    <li>Invite a Friend</li>
                    <li>Become a Seller</li>
                    <li>Fiverr Elevate</li>

                </ul>
            </div>
            <div>
                <h3 className='text-xs font-bold pb-2'>More From Fiverr</h3>
                <ul className='text-xs text-[#797B82] font-medium flex flex-col gap-2'>
                    <li>Fiverr Pro</li>
                    <li>Fiverr Studios</li>
                    <li>Fiverr Logo Maker</li>
                    <li>Fiverr Guides</li>
                    <li>Get Inspired</li>
                    <li>ClearVoice</li>
                    <li>AND CO</li>
                    <li>Learn</li>

                </ul>
            </div>
        </div>
        <div className="flex p-2 justify-between items-center font-bold border-t-2 border-t-[#BBBBBD] bg-[#FFFFFF] h-[50px]">
            <div className='flex pl-4 text-[#BDB6BC] items-end'>
                <img src={Logo} alt="" className="w-[80px] cl-green-600"/>
                <p className='ml-3 font-medium text-xs'>© Fiverr International Ltd. 2021</p>
            </div>
            <div className="flex gap-7 text-white mr-5 cursor-pointer">
                <div className='flex gap-4 pr-4 justify-between items-center'>
                    <FontAwesomeIcon icon={faTwitter} size='x' color='#797B82'/>
                    <FontAwesomeIcon icon={faFacebook} size='x' color='#797B82'/>
                    <FontAwesomeIcon icon={faLinkedin} size='x' color='#797B82'/>
                    <FontAwesomeIcon icon={faPinterest} size='x' color='#797B82'/>
                    <FontAwesomeIcon icon={faInstagram} size='x' color='#797B82'/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGlobe} size='x' color='#797B82' />
                    <span className='ml-2 text-xs text-[#797B82]'>English</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faDollarSign} size='x' color='#797B82' />
                    <span className='text-xs text-[#797B82]'>USD</span>
                </div>
            </div>   
        </div>
    </footer>
    </>
}