import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ showButtons }) {    
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search');
    }

    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon'/>
                <input placeholder='Search Google or type a URL' value={input} onChange={e => setInput(e.target.value)} /> 
                <MicIcon />
            </div>

            {showButtons ? (
                <div className='search__buttons'>
                    <Button type='submit' variant='outlined' onClick={search}>Google Search</Button>
                    <Button variant='outlined'>I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className='search__buttons search__buttons__hidden'>
                    <Button type='submit' variant='outlined' onClick={search}>Google Search</Button>
                    <Button variant='outlined'>I'm Feeling Lucky</Button>
                </div>
            )}
        </form>
    )
}

export default Search
