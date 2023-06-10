import React from 'react'

function FoundationTable({ }) {
    return (
        <div className='mb-10'>

            <div className='text-3xl font-bold text-red-900'>
                Fee Structure
            </div>
            <div className='text-md py-2'>
                A Yearlong Classroom Courses Fees For Boards/ JEE/ NEET/ POLYTECHNIQUE & PARAMEDICAL
            </div>

            <div className='pb-10 pt-5 h-[450p]'>
                <div className="table-responsive">
                    <table className="table table-bordered  m-auto">
                        <tbody>
                            <tr>
                                <th rowspan="2">Class</th>
                                <th rowspan="2">Course Name</th>
                                <th rowspan="2">Total Fees</th>
                                {/* <th colspan="4">Installment  Scheme</th> */}
                                {/* <th rowspan="2">Course Syllabus</th> */}
                            </tr>
                            <tr>
                                {/* <th>1st Installment</th>
                                <th>2nd Installment</th>
                                <th>3rd Installment</th>
                                <th>Lumpsum</th> */}
                            </tr>
                            <tr>
                                <td className="">11th</td>
                                <td>School Integrated</td>
                                <td>17,000</td>
                                {/* <td>30,000</td>
                                <td>15,000</td>
                                <td>15,000</td>
                                <td>57,000</td> */}
                                {/* <td><a href="#">Download</a></td> */}
                            </tr>
                            <tr>
                                <td className="">12th</td>
                                <td>School Integrated</td>
                                <td>18,000</td>
                                {/* <td>25,000</td>
                                <td>15,000</td>
                                <td>15,000</td>
                                <td>52,250</td> */}
                                {/* <td><a href="#">Download</a></td> */}
                            </tr>
                            <tr>
                                <td className="">JEE</td>
                                <td>School Integrated</td>
                                <td>45,000</td>
                                {/* <td>25,000</td>
                                <td>15,000</td>
                                <td>10,000</td>
                                <td>47,500</td> */}
                                {/* <td><a href="#">Download</a></td> */}
                            </tr>
                            <tr>
                                <td className="">NEET</td>
                                <td>School Integrated</td>
                                <td>45,000</td>
                                {/* <td>20,000</td>
                                <td>10,000</td>
                                <td>10,000</td>
                                <td>38,000</td> */}
                                {/* <td><a href="#">Download</a></td> */}
                            </tr>
                            <tr>
                                <td className="px-20">Polytechnique</td>
                                <td>School Integrated</td>
                                <td className='px-20'>25,000</td>
                                {/* <td>20,000</td>
                                <td>7,500</td>
                                <td>7,500</td>
                                <td>33,250</td> */}
                                {/* <td><a href="#">Download</a></td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='p-2 bg-yellow-400 rounded-lg max-w-max m-auto cursor-pointer'>
                Fee Payment
            </div>

        </div>
    )
}

export default FoundationTable