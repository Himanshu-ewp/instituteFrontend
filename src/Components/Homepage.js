import React from 'react'

function HomePage() {
    return (
        <div className=''>

            <div className='bg-[rgba(45,0,0,1)] h-[500px] py-5 '>

                <div className='pb-10 flex justify-evenly'>
                    <div className='text-white text-2xl w-[150px]'>
                        <img src="https://motion.ac.in/website/images/university-logo.png" alt="" />
                    </div>

                    <div>
                        <ul className='text-white flex items-center'>
                            <li className='mx-3 px-1 cursor-pointer'>Classroom</li>
                            <li className='mx-3 px-1 cursor-pointer'>Residential Program</li>
                            <li className='mx-3 px-1 cursor-pointer'>Online Courses</li>
                            <li className='mx-3 px-1 cursor-pointer'>Pay Fee</li>
                            <li className='mx-3 px-1 cursor-pointer'>Scholarship</li>
                            <li className='mx-3 px-1 cursor-pointer'>Results</li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-evenly'>

                    <div className='text-white'>

                        <div className='text-6xl font-bold leading-[70px]'>
                            <div>
                                <span className='text-yellow-300'>Motion</span> Hai To
                            </div>
                            <div>
                                <span className='text-yellow-300'>Bharosa</span> Hai
                            </div>
                        </div>

                        <div className='text-2xl pt-16 font-bold'>
                            JEE (Main + Advanced) | NEET | NTSE | Boards | Olympiads
                        </div>

                    </div>

                    <div>

                        <img src="https://motion.ac.in/storage/uploads/banner/1678948512815731.png" alt="" className='w-[600px]' />

                    </div>

                </div>

            </div>

            <div className='flex flex-col items-center py-16'>

                <div className='text-3xl font-bold text-red-700'>
                    Best Selection Ratio
                </div>
                <div className='text-lg py-5'>
                    Motion results reflect the passion, hard work and efforts of our students, so far, we have acquired remarkable selection ratios in competitive exams.
                </div>
                <div>
                    <img src="https://motion.ac.in/storage/uploads/banner/1669785977699141.jpg" alt="" className='w-[800px]' />
                </div>

            </div>

            <div className='flex flex-col items-center'>

                <div className='text-3xl font-bold text-red-700'>
                    Learn from Kota’s Best & Most Experienced Faculties
                </div>
                <div className='text-lg py-5  w-[1300px] text-center'>
                    Every student is our top priority. To provide the best education we have various Classroom Courses available in Kota for JEE, NEET & Foundation. These courses include a thorough learning process targeting school as well as competitive exams
                </div>

                {/* <div>
                    <img src="https://motion.ac.in/storage/uploads/banner/1669785977699141.jpg" alt="" className='w-[800px]' />
                </div> */}

                <div className='flex items-center'>

                    <div className='px-5 py-2 border-2 rounded-xl mx-2 bg-red-700 text-white cursor-pointer'>
                        JEE
                    </div>

                    <div className='px-5 py-2 border-2 rounded-xl mx-2 cursor-pointer'>
                        NEET
                    </div>

                    <div className='px-5 py-2 border-2 rounded-xl mx-2 cursor-pointer'>
                        Foundation
                    </div>

                    <div className='px-5 py-2 border-2 rounded-xl mx-2 cursor-pointer'>
                        MyBizKid
                    </div>

                </div>

                <div className='py-10 flex items-center'>

                    <div className='mx-2 p-5 border-2 rounded-xl w-[450px] h-[500px] '>
                        <div className='w-full h-[290px] bg-red-200 rounded-xl'></div>
                        <div className='py-2 text-lg font-bold'>JEE Mega Nurture Batch</div>
                        <div className='text-sm'>Class 11th Students</div>
                        <div className='text-sm'>Batch Date - 21 Jun 2023</div>
                        <div className='text-sm'>Target Year - 2025</div>
                        <div className='px-2 py-2 mt-4 text-white bg-yellow-500 w-[120px] rounded-lg cursor-pointer'>Explore More</div>
                    </div>

                    <div className='mx-2 p-5 border-2 rounded-xl w-[450px] h-[500px] '>
                        <div className='w-full h-[290px] bg-red-200 rounded-xl'></div>
                        <div className='py-2 text-lg font-bold'>JEE Mega Nurture Batch</div>
                        <div className='text-sm'>Class 11th Students</div>
                        <div className='text-sm'>Batch Date - 21 Jun 2023</div>
                        <div className='text-sm'>Target Year - 2025</div>
                        <div className='px-2 py-2 mt-4 text-white bg-yellow-500 w-[120px] rounded-lg cursor-pointer'>Explore More</div>
                    </div>

                    <div className='mx-2 p-5 border-2 rounded-xl w-[450px] h-[500px] '>
                        <div className='w-full h-[290px] bg-red-200 rounded-xl'></div>
                        <div className='py-2 text-lg font-bold'>JEE Mega Nurture Batch</div>
                        <div className='text-sm'>Class 11th Students</div>
                        <div className='text-sm'>Batch Date - 21 Jun 2023</div>
                        <div className='text-sm'>Target Year - 2025</div>
                        <div className='px-2 py-2 mt-4 text-white bg-yellow-500 w-[120px] rounded-lg cursor-pointer'>Explore More</div>
                    </div>

                </div>

            </div>

            <div className='pt-20'>
                <img src="https://motion.ac.in/storage/uploads/banner/1677222215360073.jpg" alt="" className='w-full' />
            </div>

            <div className='pb-10'>
                <div className='flex flex-col items-center py-16'>

                    <div className='text-3xl font-bold text-red-700'>
                        Performance Booster Courses
                    </div>
                    <div className='text-lg py-5'>
                        For long-term success, stay up to date on short-term courses. Find out what new initiatives will help you all perform better on exams as well.
                    </div>

                </div>

                <div className='flex items-center justify-center'>

                    <div className='mx-2 p-5 border-2 rounded-xl w-[450px] h-[500px] '>
                        <div className='w-full h-[290px] bg-red-200 rounded-xl'></div>
                        <div className='py-2 text-lg font-bold'>JEE Mega Nurture Batch</div>
                        <div className='text-sm'>Class 11th Students</div>
                        <div className='text-sm'>Batch Date - 21 Jun 2023</div>
                        <div className='text-sm'>Target Year - 2025</div>
                        <div className='px-2 py-2 mt-4 text-white bg-yellow-500 w-[120px] rounded-lg cursor-pointer'>Explore More</div>
                    </div>

                    <div className='mx-2 p-5 border-2 rounded-xl w-[450px] h-[500px] '>
                        <div className='w-full h-[290px] bg-red-200 rounded-xl'></div>
                        <div className='py-2 text-lg font-bold'>JEE Mega Nurture Batch</div>
                        <div className='text-sm'>Class 11th Students</div>
                        <div className='text-sm'>Batch Date - 21 Jun 2023</div>
                        <div className='text-sm'>Target Year - 2025</div>
                        <div className='px-2 py-2 mt-4 text-white bg-yellow-500 w-[120px] rounded-lg cursor-pointer'>Explore More</div>
                    </div>

                    <div className='mx-2 p-5 border-2 rounded-xl w-[450px] h-[500px] '>
                        <div className='w-full h-[290px] bg-red-200 rounded-xl'></div>
                        <div className='py-2 text-lg font-bold'>JEE Mega Nurture Batch</div>
                        <div className='text-sm'>Class 11th Students</div>
                        <div className='text-sm'>Batch Date - 21 Jun 2023</div>
                        <div className='text-sm'>Target Year - 2025</div>
                        <div className='px-2 py-2 mt-4 text-white bg-yellow-500 w-[120px] rounded-lg cursor-pointer'>Explore More</div>
                    </div>

                </div>
            </div>

            <div>

                <div className='flex flex-col items-center py-16'>

                    <div className='text-3xl font-bold text-red-700'>
                        Latest Announcements
                    </div>
                    <div className='text-sm py-5'>
                        Get the latest update regarding JEE, NEET, NTSE, CBSE & Olympiad Exams and stay ahead with all-round performance in your chosen stream
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='px-3 py-2 mx-1 border-2 bg-red-700 text-white rounded-xl cursor-pointer'>New Courses & Announcement</div>
                        <div className='px-3 py-2 mx-1 border-2 cursor-pointer hover:text-white hover:bg-red-700 duration-300 rounded-xl'>Previous Year Ques. & Answer</div>
                    </div>

                </div>

                <div className='flex items-center justify-center'>

                    <div className='border-2 px-5 py-3 mx-2 rounded-xl cursor-pointer hover:bg-red-700 hover:text-white duration-100'>
                        <div className='font-bold mb-10'>
                            NEET Prayas Batch
                        </div>
                        <div className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptates?</div>
                    </div>
                    <div className='border-2 px-5 py-3 mx-2 rounded-xl cursor-pointer hover:bg-red-700 hover:text-white duration-100'>
                        <div className='font-bold mb-10'>
                            NEET Prayas Batch
                        </div>
                        <div className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptates?</div>
                    </div>
                    <div className='border-2 px-5 py-3 mx-2 rounded-xl cursor-pointer hover:bg-red-700 hover:text-white duration-100'>
                        <div className='font-bold mb-10'>
                            NEET Prayas Batch
                        </div>
                        <div className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptates?</div>
                    </div>

                </div>

            </div>

            <div className='p-5 my-20 bg-[rgba(45,0,0,1)] flex justify-evenly'>

                <div className='text-white'>
                    <div className=' font-bold text-3xl leading-[70px]'>Curious to know what makes us unique?</div>
                    <div>
                        <ul className='list-disc'>
                            <li className='leading-[60px] text-lg'>16+ Year of legacy in JEE/NEET Coaching</li>
                            <li className='leading-[60px] text-lg'>16+ Year of legacy in JEE/NEET Coaching</li>
                            <li className='leading-[60px] text-lg'>16+ Year of legacy in JEE/NEET Coaching</li>
                            <li className='leading-[60px] text-lg'>16+ Year of legacy in JEE/NEET Coaching</li>
                            <li className='leading-[60px] text-lg'>16+ Year of legacy in JEE/NEET Coaching</li>
                            <li className='leading-[60px] text-lg'>16+ Year of legacy in JEE/NEET Coaching</li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <img src="https://motion.ac.in/website/images/image_Curious.png" alt="" className='w-[700px]' />
                </div>

            </div>

            <div>

                <div className='pb-10'>
                    <div className='flex flex-col items-center py-16'>

                        <div className='text-3xl font-bold text-red-700'>
                            Our Latest Sessions Will Motivate You!!
                        </div>
                        <div className='text-lg py-5'>
                            Motion ensures to provide quality education for the optimum results and success of students, so far, we have acquired remarkable selection ratios in competitive exams.
                        </div>

                    </div>

                    <div className='flex items-center justify-center'>

                        <div className='mx-2 p-5 border-2 rounded-xl w-[450px] h-[500px] '>
                            <div className='w-full h-[290px] bg-red-200 rounded-xl'></div>
                            <div className='py-2 text-lg font-bold'>JEE Mega Nurture Batch</div>
                            <div className='text-sm'>Class 11th Students</div>
                            <div className='text-sm'>Batch Date - 21 Jun 2023</div>
                            <div className='text-sm'>Target Year - 2025</div>
                            <div className='px-2 py-2 mt-4 text-white bg-yellow-500 w-[120px] rounded-lg cursor-pointer'>Explore More</div>
                        </div>

                        <div className='mx-2 p-5 border-2 rounded-xl w-[450px] h-[500px] '>
                            <div className='w-full h-[290px] bg-red-200 rounded-xl'></div>
                            <div className='py-2 text-lg font-bold'>JEE Mega Nurture Batch</div>
                            <div className='text-sm'>Class 11th Students</div>
                            <div className='text-sm'>Batch Date - 21 Jun 2023</div>
                            <div className='text-sm'>Target Year - 2025</div>
                            <div className='px-2 py-2 mt-4 text-white bg-yellow-500 w-[120px] rounded-lg cursor-pointer'>Explore More</div>
                        </div>

                        <div className='mx-2 p-5 border-2 rounded-xl w-[450px] h-[500px] '>
                            <div className='w-full h-[290px] bg-red-200 rounded-xl'></div>
                            <div className='py-2 text-lg font-bold'>JEE Mega Nurture Batch</div>
                            <div className='text-sm'>Class 11th Students</div>
                            <div className='text-sm'>Batch Date - 21 Jun 2023</div>
                            <div className='text-sm'>Target Year - 2025</div>
                            <div className='px-2 py-2 mt-4 text-white bg-yellow-500 w-[120px] rounded-lg cursor-pointer'>Explore More</div>
                        </div>

                    </div>
                </div>

            </div>


            <div className='h-screen'>

            </div>

        </div>
    )
}

export default HomePage