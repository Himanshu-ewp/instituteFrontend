import React from 'react'

function FoundationTable() {
    return (
        <div className=''>

            <div className='text-3xl font-bold text-red-900'>
                Fee Structure
            </div>
            <div className='text-sm py-2'>
                A Yearlong Classroom Courses Fees For Boards/ NTSE/ IOQJS/ OLYMPIADS
            </div>

            <div className='py-2 h-[450p]'>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody><tr>
                            <th rowspan="2">Class</th>
                            <th rowspan="2">Course Name</th>
                            <th rowspan="2">Total Fees</th>
                            <th colspan="4">Installment  Scheme</th>
                            <th rowspan="2">Course Syllabus</th>
                        </tr>
                            <tr>
                                <th>1st Installment</th>
                                <th>2nd Installment</th>
                                <th>3rd Installment</th>
                                <th>Lumpsum</th>
                            </tr>
                            <tr>
                                <td>10th</td>
                                <td>School Integrated</td>
                                <td>60,000</td>
                                <td>30,000</td>
                                <td>15,000</td>
                                <td>15,000</td>
                                <td>57,000</td>
                                <td><a href="#">Download</a></td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td>School Integrated</td>
                                <td>55,000</td>
                                <td>25,000</td>
                                <td>15,000</td>
                                <td>15,000</td>
                                <td>52,250</td>
                                <td><a href="#">Download</a></td>
                            </tr>
                            <tr>
                                <td>8th</td>
                                <td>School Integrated</td>
                                <td>50,000</td>
                                <td>25,000</td>
                                <td>15,000</td>
                                <td>10,000</td>
                                <td>47,500</td>
                                <td><a href="#">Download</a></td>
                            </tr>
                            <tr>
                                <td>7th</td>
                                <td>School Integrated</td>
                                <td>40,000</td>
                                <td>20,000</td>
                                <td>10,000</td>
                                <td>10,000</td>
                                <td>38,000</td>
                                <td><a href="#">Download</a></td>
                            </tr>
                            <tr>
                                <td>6th</td>
                                <td>School Integrated</td>
                                <td>35,000</td>
                                <td>20,000</td>
                                <td>7,500</td>
                                <td>7,500</td>
                                <td>33,250</td>
                                <td><a href="#">Download</a></td>
                            </tr>
                        </tbody></table>
                </div>
            </div>

            <div className='p-2 bg-yellow-400 rounded-lg max-w-max m-auto cursor-pointer'>
                Fee Payment
            </div>

        </div>
    )
}

export default FoundationTable