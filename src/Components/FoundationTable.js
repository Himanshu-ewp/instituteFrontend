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
                        <tbody className='border-2'>
                            <tr>
                                <th rowspan="2" className='border-2'>Class</th>
                                <th rowspan="2" className='border-2'>Total Fees</th>
                            </tr>
                            <tr>
                                <td className="border-2">11th</td>
                                <td className="border-2">17,000</td>
                            </tr>
                            <tr>
                                <td className="border-2">12th</td>
                                <td className="border-2">18,000</td>
                            </tr>
                            <tr>
                                <td className="border-2">JEE</td>
                                <td className="border-2">45,000</td>
                            </tr>
                            <tr>
                                <td className="border-2">NEET</td>
                                <td className="border-2">45,000</td>
                            </tr>
                            <tr>
                                <td className="px-20 border-r-2">Polytechnique</td>
                                <td className='px-20 border-l-2'>25,000</td>
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