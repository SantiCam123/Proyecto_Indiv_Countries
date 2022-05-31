import React from "react";
import {Link} from 'react-router-dom';
import { getAllCountries } from "../Redux/Actions";
import { useDispatch } from "react-redux";

export default function Nav() {
    const dispatch = useDispatch();

    return (
        <div>
            <Link to='/home'>Henry´s Travel</Link>
            <select>
                <option value=''>Sort alphabetically</option>
                <option value='asc'>A-Z</option>
                <option value='des'>Z-A</option>
            </select>
            <select>
                <option value=''>Filter by Continent</option>
                <option value='America'>America</option>
                <option value='Europe'>Europe</option>
                <option value='Africa'>Africa</option>
                <option value='Asia'>Asia</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctic'>Antarctic</option>
            </select>
            <select>
                <option value=''>Filter by Activity</option>
            </select>
            <select>
                <option value=''>Filter by Population</option>
                <option value='Highest'>Highest</option>
                <option value='Lowerest'>Lowerest</option>
            </select>
            <Link to='/activity'>Create a new activity!</Link>
            <form>
                <input type='text' placeholder="Search for..." />
            </form>
        </div>
    )
}