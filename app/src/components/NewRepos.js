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
            <section class="repos-wrapper">
                <h3>>_Repos</h3>
                <section class='calender-repos-con'>
                    <div class="calender-con">
                        <h4>
                            <a href="https://github.com/aricrepp" class="github-link">
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
                    <div class="repo-card-list-con">
                        {currentItems.map((item, index) => {
                            return (
                                <div key={index} class="repo-card-container">
                                    <section class="repo-card">
                                        <h7 class='repo-card-title'>
                                            {item.name}
                                        </h7>
                                        <div class="repo-card-content">
                                            <p>
                                                {item.description
                                                ? item.description
                                                : 'No default description, check out the README in the repo!'}
                                            </p>
                                        </div>
                                        <footer class="repo-footer">
                                            <a href={item.html_url} class="repo-link">
                                                Repo 
                                            </a>
                                        </footer>
                                    </section>
                                </div>
                            )
                        })}
                    </div>
                    <div class='pagination-con'>
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
            <section class="repos_con">
                <section class='calendar-repos-con'>
                    <div class="calender-con">
                        <h3>
                            <a href="https://github.com/aricrepp" class="github-link">
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