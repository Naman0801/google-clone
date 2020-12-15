import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css'
// icons
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TelegramIcon from '@material-ui/icons/Telegram';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    // LIVE API CALL
    const { data } = useGoogleSearch(term);

    console.log(data);
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to='/'>
                    <img className='searchPage__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png' alt='google-logo' />                                
                </Link>

                <div className='searchPage__headerBody'>
                    <Search />
                    <div className='searchPage__options'>
                        <div className='searchPage__optionLeft'>
                            <div className='searchPage__option'>
                                <Link to='/all'><SearchIcon /> All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/news'><DescriptionIcon /> News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/images'><ImageIcon /> Images</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/shopping'><LocalOfferIcon /> Shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/maps'><RoomIcon /> Maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/more'><MoreVertIcon /> more</Link>
                            </div>
                        </div>

                        <div className='searchPage__optionRight'>
                            <div className='searchPage__option'>
                                <Link to='/settings'>Settings</Link>
                            </div><div className='searchPage__option'>
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {true && (
                <div className='searchPage__results'>
                    <p className='searchPage__resultCount'>
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a href={item.link} target='_blank' className='searchPage__resultLink'>
                                {item.pagemap?.cse_image?.length > 0 && (
                                    <img className='searchPage__resultImage' src={item.pagemap?.cse_image[0]?.src} />
                                )}
                                {item.displayLink} <TelegramIcon />
                            </a>
                            <a href={item.link} target='_blank' className='searchPage__resultTitle'>
                                <h2>{item.title}</h2>
                            </a>              
                            <p className='searchPage__resultSnippet'>
                                {item.snippet}
                            </p>            
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
