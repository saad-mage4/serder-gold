
import { formatDate } from '@/lib/formatDate';
import React, { useState } from 'react'

const Table = ({ ExchangeRates }) => {
    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }


    const filteredData = ExchangeRates?.data?.filter((item) =>
        item.ShortName.toLowerCase().includes(search.toLowerCase()) ||
        item.FullName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <table className="table d-none">
            <thead>
                <tr>
                    <th scope="col">
                        <input type="text" placeholder='Search for Gold' onChange={handleSearch} />
                    </th>
                    <th scope="col">Latest Price</th>
                    <th scope="col">Buying</th>
                    <th scope="col">Selling</th>
                    <th scope="col">Change</th>
                    <th scope="col">Time</th>
                </tr>
            </thead>
            <tbody>
                {filteredData?.length > 0 ? filteredData?.map((item, index) => (
                    <tr
                        key={index}
                    // className={
                    //     item.changeRate > 0 ? 'table-success-bg' :
                    //         item.changeRate < 0 ? 'table-danger-bg' : ''
                    // }
                    >
                        {/* <th scope="row">
                            {item.changeRate > 0 ? (
                                <i className="fa-solid fa-arrow-up-long"></i>
                            ) : item.changeRate < 0 ? (
                                <i className="fa-solid fa-arrow-down-long"></i>
                            ) : (
                                <i className="fa-solid fa-minus"></i>
                            )}
                        </th> */}
                        <td className="content-tab">
                            <span className="coin-bg"></span>
                            <span>
                                <h4 className='black-bg-head'>{item?.FullName}</h4>
                            </span>
                        </td>
                        <td>{item?.latest.toFixed(2)}</td>
                        <td>{item?.buying.toFixed(2)}</td>
                        <td>{item?.selling.toFixed(2)}</td>
                        <td
                            style={{
                                color: item.changeRate >= 0 ? 'green' : item.changeRate < 0 ? 'red' : '',
                                fontWeight: 'bold'
                            }}
                        >{(item.changeRate).toFixed(2)}%</td>
                        <td>{formatDate(item.lastupdate)}</td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="6">No data found</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table
