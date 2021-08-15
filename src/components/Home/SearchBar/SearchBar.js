import React from 'react'
import './SearchBar.css'
export default function SearchBar() {
    return (
        <>
            <div class="search-container container" aria-label="Mini form">
                <form >
                    <div className="d-flex align-items-center justify-content-center checkRate">
                        <select
                            className="form-select me-2 "
                            aria-label="Default select example"
                        >
                            <option selected>Check In</option>

                        </select>
                        <select

                            className="form-select me-2"
                            aria-label="Default select example"
                        >
                            <option selected>Check Out</option>

                        </select>
                        <select

                            className="form-select me-2"
                            aria-label="Default select example"
                        >
                            <option selected>Guest</option>
                        </select>
                        <button className="check-btn " type="submit">CHECK RATES</button>
                    </div>
                </form>
            </div>
        </>
    )
}
