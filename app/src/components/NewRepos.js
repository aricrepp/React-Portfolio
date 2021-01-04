import React, {useState} from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import Pagination from 'react-js-pagination';
import './styles/NewRepos.css';

const NewRepos = (props) => {
    const itemsPerPage = 3;
    const [activePage, setActivePage] = useState(1);
    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const handlePageChange = (pageNum) => {
        setActivePage(pageNum);
    }

    if (props.isFetching) {

        const currentItems = props.repo.slice(indexOfFirstItem, indexOfLastItem)

        return (
            <section id='repos' className="repos-wrapper">
                <h3>>_Repos</h3>
                <section className='calender-repos-con'>
                    <div className="calender-con">
                        <h4>
                            <a href="https://github.com/aricrepp" className="github-link">
                                @aricrepp
                            </a>{' '}
                            on Github!
                        </h4>
                        <GitHubCalendar
                        username="aricrepp"
                        fullYear={false}
                        color="#68b7d4"
                        fontSize={16}
                        >
                            <ReactTooltip delayShow={20} html />
                        </GitHubCalendar>
                    </div>

                    <h5>List of Repos:</h5>
                    <div className="repo-card-list-con">
                        {currentItems.map((item, index) => {
                            return (
                                <div key={index} className="repo-card-container">
                                    <section className="repo-card">
                                        <h6 className='repo-card-title'>
                                            {item.name}
                                        </h6>
                                        <div className="repo-card-content">
                                            <p>
                                                {item.description
                                                ? item.description
                                                : 'No default description, check out the README in the repo!'}
                                            </p>
                                        </div>
                                        <footer className="repo-footer">
                                            <a href={item.html_url} className="repo-link">
                                                Repo 
                                            </a>
                                        </footer>
                                    </section>
                                </div>
                            )
                        })}
                    </div>
                    <div className='pagination-con'>
                        <Pagination
                            itemClass='pagination-tabs'
                            itemClassLast='pagination-tabs-last'
                            itemClassFirst='pagination-tabs-first'
                            activeLinkClass='pagination-tabs-a'
                            activeClass='pagination-tabs-active'
                            activePage={activePage} 
                            itemsCountPerPage={3} 
                            totalItemsCount={props.repo.length} 
                            pageRangeDisplay={3}
                            onChange={handlePageChange}
                            breakLabel={'...'}
                            />
                    </div>
                </section>
            </section>
        );
    } else {
        return (
            <section className="repos_con">
                <section className='calendar-repos-con'>
                    <div className="calender-con">
                        <h3>
                            <a href="https://github.com/aricrepp" className="github-link">
                                @aricrepp
                            </a>{' '}
                            on Github!
                        </h3>
                        <GitHubCalendar
                        username="aricrepp"
                        fullYear={false}
                        color="hsl(174,82%,48%)"
                        fontSize={16}
                        >
                            <ReactTooltip delayShow={20} html />
                        </GitHubCalendar>
                    </div>
                    <div>
                        <h3>Loading...</h3>
                    </div>
                </section>
            </section>
        );
    }
}

export default NewRepos;