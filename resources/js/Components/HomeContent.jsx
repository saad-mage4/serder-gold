import React, { useState } from 'react'
import CurrencyList from './CurrencyList'
import { Chart } from '.'

const HomeContent = () => {
    const [valLeft, setvalLeft] = useState("");
    const [valRight, setvalRight] = useState("");
    const showChangeRight = (e) => {
        console.log("ttt", e.target.value);
        setvalRight(e.target.value);
    };

    const showChange = (e) => {
        console.log("valyue", e.target.value);
        setvalLeft(e.target.value);
    };

    const handleValues = (e) => {
        console.log(e.target.value);

    }
    return (
        <>
            <div className="my-3">
                <Chart />
            </div>
            <table className="table d-none">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Brim</th>
                        <th scope="col">Acilis</th>
                        <th scope="col">Alis</th>
                        <th scope="col">Satris</th>
                        <th scope="col">Degisim</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-danger-bg">
                        <th scope="row">
                            <i className="fa-solid fa-arrow-down-long"></i>
                        </th>
                        <td
                            data-label="Brim"
                            className="content-tab"
                        >
                            <span className="coin-bg"></span>
                            <span>
                                <h4>Gram Altin</h4>
                                <p>Gram Altin</p>
                            </span>
                        </td>
                        <td data-label="Acilis">
                            2459, 265 TL
                        </td>
                        <td data-label="Alis">
                            2459, 265 TL
                        </td>
                        <td data-label="Satris">
                            2459, 265 TL
                        </td>
                        <td data-label="Degisim">%0,9</td>
                    </tr>
                    <tr className="table-danger-bg">
                        <th scope="row">
                            <i className="fa-solid fa-arrow-down-long"></i>
                        </th>
                        <td className="content-tab">
                            <span className="coin-bg"></span>
                            <span>
                                <h4>Gram Altin</h4>
                                <p>Gram Altin</p>
                            </span>
                        </td>
                        <td>2459, 265 TL</td>
                        <td>2459, 265 TL</td>
                        <td>2459, 265 TL</td>
                        <td>%0,9</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <i className="fa-solid fa-minus"></i>
                        </th>
                        <td className="content-tab">
                            <span className="coin-bg"></span>
                            <span>
                                <h4>Yarim Altin</h4>
                                <p>Yarim Altin</p>
                            </span>
                        </td>
                        <td>2459, 265 TL</td>
                        <td>2459, 265 TL</td>
                        <td>2459, 265 TL</td>
                        <td>%0,9</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <i className="fa-solid fa-minus"></i>
                        </th>
                        <td className="content-tab">
                            <span className="coin-bg"></span>
                            <span>
                                <h4>Tam Altin</h4>
                                <p>Tam Altin</p>
                            </span>
                        </td>
                        <td>2459, 265 TL</td>
                        <td>2459, 265 TL</td>
                        <td>2459, 265 TL</td>
                        <td>%0,9</td>
                    </tr>
                    <tr className="table-success-bg">
                        <th scope="row">
                            <i className="fa-solid fa-arrow-up-long"></i>
                        </th>
                        <td className="content-tab">
                            <span className="coin-bg"></span>
                            <span>
                                <h4>Gremese Altin</h4>
                                <p>Gremese Altin</p>
                            </span>
                        </td>
                        <td>2459, 265 TL</td>
                        <td>2459, 265 TL</td>
                        <td>2459, 265 TL</td>
                        <td>%0,9</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <i className="fa-solid fa-arrow-down-long"></i>
                        </th>
                        <td className="content-tab">
                            <span className="coin-bg"></span>
                            <span>
                                <h4>Onis Altin</h4>
                                <p>Onis Altin</p>
                            </span>
                        </td>
                        <td>2459, 265 TL</td>
                        <td>2459, 265 TL</td>
                        <td>2459, 265 TL</td>
                        <td>%0,9</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-4 row">
                <div className="col-lg-7 col-sm-6 col-sm-12 black-box-col">
                    <div className="black-inn-wrap">
                        <h3 className="black-bg-head">
                            Altin Fiyati Hesaplama
                        </h3>
                        <hr className="blag-bg-hr" />
                        <div className="select-dd-wrap">
                            <input className="selected-val" type="text" onChange={handleValues} />
                            <div className="drop-down">
                                {/* <span
                                                        className="selected-val"
                                                    >
                                                        {valLeft}
                                                    </span> */}

                                <select
                                    name=""
                                    onChange={(e) => { showChange(e) }}
                                >
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram">
                                        Gram
                                    </option>
                                    <option value="lsdjf">
                                        lsdjf
                                    </option>
                                    <option value="lskdjfiowe">
                                        lskdjfiowe
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                </select>
                            </div>
                            <input className="selected-val" type="text" onChange={handleValues} />
                            <div className="drop-down">
                                {/* <span
                                                        className="selected-val"
                                                        id="selected-val-right"
                                                    >
                                                        {valRight}
                                                    </span> */}
                                <select
                                    name=""
                                    id="val-right"
                                    onChange={
                                        (e) => { showChangeRight(e) }
                                    }
                                >
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Turk Lirasi">
                                        Turk Lirasi
                                    </option>
                                    <option value="Altin">
                                        Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                    <option value="Gram Altin">
                                        Gram Altin
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-5 col-lg-5 col-sm-12 col-md-6 my-md-0 my-lg-0">
                    <h3 className="mb-4 black-bg-head">
                        DOVIZ
                    </h3>

                    <div className="country-est-list">
                        <ul>
                            <CurrencyList />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContent
