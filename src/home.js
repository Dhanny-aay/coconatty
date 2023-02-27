import logo from './logo.png';
import heart from './heart.png';
import coco from './coco.png';
import cart from './cart.png';
import profile from './profile.png';
import pro1 from './pro1.png';
import pro2 from './pro2.png';
// import pro3 from './pro3.png';
import pro4 from './pro4.png';
import male from './male.png';
import female from './female.png';
import right from './right.png';
import arr1 from './arr1.png';
// import arr2 from './arr2.png';
import arr3 from './arr3.png';
import arr4 from './arr4.png';
import promo from './promo.png';
import frame from './Frame.png';
import lm from './lm.png';
import blog1 from './blog1.png';
import blog2 from './blog2.png';
import blog3 from './blog3.png';
import s1 from './s1.png';
import s2 from './s3.png';
import s3 from './s3.png';
import menu from './menu.png'


const Home = () => {
    return ( 
        <div className=' font-montserrat text-[#062b09]'>
            <div className=" h-[702px] w-full bg-[#e3f0e9] lg:py-8 py-5 lg:px-10 px-5">
                <div className=" navBar flex justify-between">
                    <span className=" flex flex-row justify-center items-center">
                        <img src={ logo } className=" " alt="" />
                        <p className=" font-medium text-2xl text-[#062b09] font-sung">Coconatty</p>
                    </span>
                    <span className=' hidden lg:flex flex-row justify-center items-center space-x-10'>
                        <img src={ heart } className='' alt="" />
                        <img src={ profile } className='' alt="" />
                        <img src={ cart } className='' alt="" />
                    </span>
                    <span className=' flex lg:hidden items-center justify-center'>
                        <img src={ menu } className='w-[18px] h-[12px]' alt="" />
                    </span>
                </div>
                <div className=' flex lg:flex-row flex-col lg:justify-between justify-center items-center'>
                    <div className=' mt-[41px] lg:mt-0 flex flex-col justify-center lg:justify-start lg:items-start items-center '>
                        <p className=' font-montserrat lg:text-[40px] text-[32px] font-semibold text-[#062b09] lg:leading-[49px] leading-[39.01px] lg:text-left text-center'>Discover Natural Coconut<br></br>Products with<br></br>Coconatty</p>
                        <button className='mt-[12px] hidden lg:block p-[10px] bg-white w-[150px] hover:bg-[#062b09] hover:bg-opacity-70 transition-all delay-100 hover:text-white hover:border rounded-md text-[#062b09] font-montserrat font-semibold text-[18px]'>Shop Now</button>
                    </div>
                    <img src={ coco } className='lg:w-[500px] lg:h-[500px] w-[300px] h-[300px]' alt="" />
                    <button className='mt-[12px] block lg:hidden p-[10px] bg-white w-[150px] hover:bg-[#062b09] hover:bg-opacity-70 transition-all delay-100 hover:text-white hover:border rounded-md text-[#062b09] font-montserrat font-semibold text-[18px]'>Shop Now</button>
                </div>
            </div>
            <span className=' flex justify-center items-center flex-row mt-6 space-x-2'>
                <button className=' lg:w-[50px] w-[27px] h-[8px] bg-[#062b09] rounded-md'></button>
                <button className=' lg:w-[50px] w-[27px] h-[8px] bg-[#D9D9D9] rounded-md'></button>
            </span>
            <div className=' flex flex-col w-full justify-center items-center mt-[110px] px-5 lg:px-14'>
                <p className=' text-[#062b09] lg:text-[32px] text-xl font-montserrat font-semibold'>Most Viewed Products</p>
                <p className=' text-[#062b09] lg:text-[18px] text-base text-center  font-montserrat font-medium mt-[20px]'>Vorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className=' lg:justify-between justify-center space-y-8 lg:space-y-0 items-center w-full flex flex-col lg:flex-row mt-[63px]'>
                    <div className=' flex- flex-col justify-center items-center relative '>
                        <button className=' py-[10px] px-[20px] bg-[#062b09] rounded-tl-[10px] font-medium font-montserrat text-white text-sm absolute top-0 left-0'>New</button>
                        <div className=' bg-[#E3F0E9] bg-opacity-50 rounded-[10px] flex justify-center items-center px-12 py-7'>
                            <img src={ pro1 } className=' w-[100px] h-[200px]' alt="" />
                        </div>
                        <p className=' text-sm font-medium text-center'>Hello Coconut Deodorant<br></br> With Shea Butter</p>
                        <p className=' font-medium text-center text-black text-sm'>$8.49</p>
                    </div>

                    <div className=' flex- flex-col justify-center items-center relative'>
                        <button className=' py-[10px] px-[20px] bg-[#062b09] rounded-tl-[10px] font-medium font-montserrat text-white text-sm absolute top-0 left-0'>New</button>
                        <div className=' bg-[#E3F0E9] bg-opacity-50 rounded-[10px] flex justify-center items-center px-12 py-7'>
                            <img src={ pro2 } className=' w-[100px] h-[200px]' alt="" />
                        </div>
                        <p className=' text-sm font-medium text-center'>Dr. Bronner's Organic Virgin<br></br> Coconut Oil</p>
                        <p className=' font-medium text-center text-black text-sm'>$13.99</p>
                    </div>

                    <div className=' flex- flex-col justify-center items-center relative'>
                        <button className=' py-[10px] px-[20px] bg-[#062b09] rounded-tl-[10px] font-medium font-montserrat text-white text-sm absolute top-0 left-0'>New</button>
                        <div className=' bg-[#E3F0E9] bg-opacity-50 rounded-[10px] flex justify-center items-center px-12 py-7'>
                            <img src={ pro1 } className=' w-[100px] h-[200px]' alt="" />
                        </div>
                        <p className=' text-sm font-medium text-center'>Hello Coconut Deodorant<br></br> With Shea Butter</p>
                        <p className=' font-medium text-center text-black text-sm'>$20.99</p>
                    </div>

                    <div className=' flex- flex-col justify-center items-center relative'>
                        <button className=' py-[10px] px-[20px] bg-[#062b09] rounded-tl-[10px] font-medium font-montserrat text-white text-sm absolute top-0 left-0'>New</button>
                        <div className=' bg-[#E3F0E9] bg-opacity-50 rounded-[10px] flex justify-center items-center px-12 py-7'>
                            <img src={ pro4 } className='w-[100px] h-[200px]' alt="" />
                        </div>
                        <p className=' text-sm font-medium text-center'>Energizing Coffee 2-in-1<br></br>Scrub & Cleanser Stick</p>
                        <p className=' font-medium text-center text-black text-sm'>$11.99</p>
                    </div>
                </div>
                <button className=' py-[10px] px-[20px] mt-[63px] bg-[#e3f0e9] rounded-md font-semibold text-base'>View More</button>
            </div>

            <div className=' lg:px-14 px-5 w-full flex lg:flex-row flex-col justify-between items-center mt-[100px] space-y-8 lg:space-y-0'>
                <div className=' lg:w-[47%] w-full h-[350px] bg-[#e3f0e9] rounded-[10px] relative '>
                    <img src={ female } className=' absolute -bottom-1 -left-1 w-[153.1px] h-[231px] lg:w-[254px] lg:h-[350px]' alt="" />
                    <div className=' absolute right-7 top-24'>
                        <p className=' font-medium text-[16px]'>Our Female Skincare Products</p>
                        <span className=' flex flex-row justify-center items-center mt-[20px] space-x-3'>
                            <p className=' text-sm font-medium '>View Collections</p>
                            <img src={ right } className=' h-4' alt="" />
                        </span>                  
                    </div>
                </div>
                <div className=' lg:w-[47%] w-full h-[350px] bg-[#e3f0e9] rounded-[10px] relative '>
                    <img src={ male } className=' absolute bottom-0 w-[153.1px] h-[231px] lg:w-[254px] lg:h-[350px]' alt="" />
                    <div className=' absolute right-7 top-24'>
                        <p className=' font-medium text-[16px]'>Our Male Skincare Products</p>
                        <span className=' flex flex-row justify-center items-center mt-[20px] space-x-3'>
                            <p className=' text-sm font-medium '>View Collections</p>
                            <img src={ right } className=' h-4' alt="" />
                        </span>  
                    </div>
                </div>
            </div>

            <div className=' lg:px-14 px-5 mt-[100px] flex flex-col justify-center items-center'>
                <p className=' lg:text-[32px] text-xl font-semibold'>New Arrivals</p>
                <p className=' text-[#062b09] lg:text-[18px] text-base text-center font-montserrat font-medium mt-[20px]'>Vorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className=' justify-between items-center w-full flex lg:flex-row flex-col space-y-8 lg:space-y-0 mt-[63px]'>
                    <div className=' flex- flex-col justify-center items-center relative'>
                        <button className=' py-[10px] px-[20px] bg-[#062b09] rounded-tl-[10px] font-medium font-montserrat text-white text-sm absolute top-0 left-0'>New</button>
                        <div className=' bg-[#E3F0E9] bg-opacity-50 rounded-[10px] flex justify-center items-center px-12 py-7'>
                            <img src={ arr1 } className=' w-[100px] h-[200px]' alt="" />
                        </div>
                        <p className=' text-sm font-medium text-center'>PATCH Kids Bamboo<br></br> Coconut Oil </p>
                        <p className=' font-medium text-center text-black text-sm'>$6.99</p>
                    </div>

                    <div className=' flex- flex-col justify-center items-center relative'>
                        <button className=' py-[10px] px-[20px] bg-[#062b09] rounded-tl-[10px] font-medium font-montserrat text-white text-sm absolute top-0 left-0'>New</button>
                        <div className=' bg-[#E3F0E9] bg-opacity-50 rounded-[10px] flex justify-center items-center px-12 py-7'>
                            <img src={ arr1 } className=' w-[100px] h-[200px]' alt="" />
                        </div>
                        <p className=' text-sm font-medium text-center'>Soapbox Coconut Oil<br></br> Nourish Conditioner</p>
                        <p className=' font-medium text-center text-black text-sm'>$11.99</p>
                    </div>

                    <div className=' flex- flex-col justify-center items-center relative'>
                        <button className=' py-[10px] px-[20px] bg-[#062b09] rounded-tl-[10px] font-medium font-montserrat text-white text-sm absolute top-0 left-0'>New</button>
                        <div className=' bg-[#E3F0E9] bg-opacity-50 rounded-[10px] flex justify-center items-center px-12 py-7'>
                            <img src={ arr3 } className=' w-[100px] h-[200px]' alt="" />
                        </div>
                        <p className=' text-sm font-medium text-center'>Burt’s Bees Coconut<br></br>Foot Cream</p>
                        <p className=' font-medium text-center text-black text-sm'>$10.69</p>
                    </div>

                    <div className=' flex- flex-col justify-center items-center relative'>
                        <button className=' py-[10px] px-[20px] bg-[#062b09] rounded-tl-[10px] font-medium font-montserrat text-white text-sm absolute top-0 left-0'>New</button>
                        <div className=' bg-[#E3F0E9] bg-opacity-50 rounded-[10px] flex justify-center items-center px-12 py-7'>
                            <img src={ arr4 } className=' w-[100px] h-[200px]' alt="" />
                        </div>
                        <p className=' text-sm font-medium text-center'>Alba Botanica Coconut<br></br>Milk Conditioner</p>
                        <p className=' font-medium text-center text-black text-sm'>$11.99</p>
                    </div>
                </div>
                <button className=' py-[10px] px-[20px] mt-[63px] bg-[#e3f0e9] rounded-md font-semibold text-base'>View More</button>
            </div>

            <div className=' lg:px-14 px-5 mt-[100px]'>
                <div className=' bg-[#062b09] w-full h-[350px] p-[30px] flex justify-center items-center rounded-[20px] relative'>
                    <img src={ lm } className='hidden lg:block absolute top-[30px] right-[30px]' alt="" />
                    <img src={ frame } className='hidden lg:block absolute bottom-[30px] right-[30px]' alt="" />
                    <img src={ promo } className='hidden lg:block absolute bottom-0 left-[25%]' alt="" />
                    <div className=' lg:absolute bottom-[30px] left-[30px]'>
                        <p className=' text-white font-medium text-base'>Free Shipping On<br></br> All Order of $100</p>
                        <button className=' px-[20px] py-[10px] border border-[#e3f0f9] mt-3 rounded-md text-white text-base'>Learn More</button>
                    </div> 
                </div>
            </div>  

            <div className=' mt-[83px] lg:px-14 px-5 flex flex-col justify-center items-center'>
                <p className=' lg:text-[32px] text-xl  font-semibold'>From Our Blogs</p>
                <p className=' text-[#062b09] lg:text-[18px] text-base text-center font-montserrat font-medium mt-[20px]'>Join Our Community for Coconut Skincare Insights and Wellness Tips</p>
                <div className=' mt-[62px] flex lg:flex-row flex-col justify-between space-y-8 lg:space-y-0'>
                    <div className=' lg:w-[28%] w-full text-left space-y-3 md:w-[400px] md:flex items-center flex-col'>
                        <img src={ blog1 } className=' rounded-md' alt="" />
                        <p className=' text-[24px] font-semibold leading-[29.26px]'>6 benefits to using activated charcoal on skin, teeth, hair & more.</p>
                        <p className=' text-base font-normal leading-[30px]'>Here’s how to use activated charcoal in your health and beauty routine to help clear your skin, whiten your teeth, refresh your hair, and improve your health.</p>
                    </div>

                    <div className=' lg:w-[28%] w-full text-left space-y-3 md:flex md:w-[400px] items-center flex-col'>
                        <img src={ blog2 } className=' rounded-md' alt="" />
                        <p className=' text-[24px] font-semibold leading-[29.26px]'>Behind the brand with Alaffia's founder Olowo-n’djo Tchala.</p>
                        <p className=' text-base font-normal leading-[30px]'>Looking to create more just and equitable systems in his native West Africa, Olowo-n’djo Tchala, founder of personal care brand Alaffia, launched a company that not only produces clean, sustainable products but also is the start of a revolution..</p>
                    </div>

                    <div className='lg:w-[28%] w-full text-left md:flex md:w-[400px] items-center flex-col space-y-3'>
                        <img src={ blog3 } className=' rounded-md' alt="" />
                        <p className=' text-[24px] font-semibold leading-[29.26px]'>What is African black soap and how do you use it?</p>
                        <p className=' text-base font-normal leading-[30px]'>We’ve got the dirt on this cult beauty cleanser so you can join the legions of African black soap devotees who can’t believe they ever lived without it.</p>
                    </div>
                </div>
            </div>

            <div className=' mt-[105px] lg:px-14 w-full px-5 bg-[#E3F0E9] md:py-12 py-6 flex  md:flex-row flex-col'>
                <div className=''>
                    <p className=' text-[#101828] lg:text-[30px] text-[24px] font-semibold'>Get notified when we launch a product</p>
                    <p className='text-[#667085] mt-4 font-normal text-base lg:text-[20px]'>Stay up to date with the latest news, announcements, and articles.</p>
                </div>
                <div className=' md:ml-auto mt-5 md:mt-0 flex md:flex-row flex-col md:space-x-3 space-x-0 space-y-3 md:space-y-0'>
                    <input type="text" className=' px-[10px] h-[44px] py-[7px] font-montserrat text-base lg:w-[280px] w-full border border-[#d0d5dd] bg-white shadow-sm shadow-[rgba(16,24,40,0.05)] rounded-lg' placeholder='Enter Your Email' name="" id="" />
                    <button className=' px-[14px] py-[10px] h-[44px] bg-[#062b09] border shadow-sm rounded-lg text-white font-medium text-base'>Subscribe</button>
                </div>
            </div>

            <div className=' footer lg:px-14 px-5  mt-[63px] '>
                <div className=' pb-[62px] border-b flex lg:flex-row flex-col justify-between'>
                <div className=' space-y-5'>
                    <span className=' flex flex-row items-center'>
                        <img src={ logo } className=' w-[32px] h-[32px]' alt="" />
                        <p className=' font-sung font-normal text-[24px] text-black'>Coconatty</p>
                    </span>
                    <p className=' font-normal text-base text-[#667085] leading-[24px]'>Nourish Your Skin, Nourish Your<br></br> Life with Coconatty.</p>
                </div>
                <div className=' flex flex-col lg:mt-0 mt-5 '>
                    <p className=' text-opacity-70 text-[#062b09] font-semibold text-sm'>Product</p>
                    <p className=' mt-3 text-sm font-semibold'>Overview</p>
                    <p className=' mt-1 text-sm font-semibold'>Features</p>
                    <p className=' mt-1 text-sm font-semibold'>Solutions</p>
                    <p className=' mt-1 text-sm font-semibold'>Pricing</p>
                    <p className=' mt-1 text-sm font-semibold'>Releases</p>
                </div>

                <div className=' flex flex-col lg:mt-0 mt-5'>
                    <p className=' text-opacity-70 text-[#062b09] font-semibold text-sm'>Company</p>
                    <p className=' mt-3 text-sm font-semibold'>About us</p>
                    <p className=' mt-1 text-sm font-semibold'>Careers</p>
                    <p className=' mt-1 text-sm font-semibold'>News</p>
                    <p className=' mt-1 text-sm font-semibold'>Contact</p>
                </div>

                <div className=' lg:flex hidden flex-col'>
                    <p className=' text-opacity-70 text-[#062b09] font-semibold text-sm'>Resources</p>
                    <p className=' mt-3 text-sm font-semibold'>Blog</p>
                    <p className=' mt-1 text-sm font-semibold'>Newsletter</p>
                    <p className=' mt-1 text-sm font-semibold'>Events</p>
                    <p className=' mt-1 text-sm font-semibold'>Help centre</p>
                    <p className=' mt-1 text-sm font-semibold'>Tutorials</p>
                    <p className=' mt-1 text-sm font-semibold'>Support</p>
                </div>

                <div className=' lg:flex hidden flex-col'>
                    <p className=' text-opacity-70 text-[#062b09] font-semibold text-sm'>Social</p>
                    <p className=' mt-3 text-sm font-semibold'>Twitter</p>
                    <p className=' mt-1 text-sm font-semibold'>Instagram</p>
                    <p className=' mt-1 text-sm font-semibold'>Facebook</p>
                </div>
                
                <div className=' lg:flex hidden flex-col'>
                    <p className=' text-opacity-70 text-[#062b09] font-semibold text-sm'>Legal</p>
                    <p className=' mt-3 text-sm font-semibold'>Terms</p>
                    <p className=' mt-1 text-sm font-semibold'>Privacy</p>
                    <p className=' mt-1 text-sm font-semibold'>Cookies</p>
                    <p className=' mt-1 text-sm font-semibold'>Licenses</p>
                    <p className=' mt-1 text-sm font-semibold'>Settings</p>
                    <p className=' mt-1 text-sm font-semibold'>Contact</p>
                </div>
                </div>
            </div>

            <div className=' copyrights mb-8 flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center mt-6 px-5 lg:px-14 lg:space-y-0'>
                <p className=' text-base font-normal text-[#98A2B3] mt-3 lg:mt-0'>© 2023 Coconatty. All rights reserved.</p>
                <span className=' space-x-5 flex flex-row '>
                    <img src={ s1 } className='' alt="" />
                    <img src={ s2 } className='' alt="" />
                    <img src={ s3 } className='' alt="" />
                </span>
            </div>
        </div>
     );
}
 
export default Home;