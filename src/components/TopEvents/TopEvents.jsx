import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { history } from '../../History';
import style from "./TopEvents.module.scss";
import {getEventFirstName, getEventLastName, getStartTime } from "../../utils/events";
import { getPopularEvents, fetchEventInfo } from "../../Actions/event.actions";
import AppLoader from '../appLoader/appLoader';


class TopEvents extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularEventIDs:[],
            eventInfo:[],
            setEvent: false,
        }
    };

    componentDidMount(){
        const { getPopularEvents, eventInfo } = this.props;
        if(eventInfo.length === 0){
            getPopularEvents(this.onSuccess);
        }
    }

    onSuccess = () => {
        const { popularIds, fetchEventInfo } = this.props;
        const eventIds = popularIds.join(",");
        fetchEventInfo(eventIds, this.onFetchSuccess);
    }

    onFetchSuccess = () => {
        const { eventInfo } = this.props;
        this.setState({eventInfo: eventInfo})
    }

    render(){
        const { eventInfo } = this.props;
        return(
            <div className={style.mainContent}>
                <div className={style.topEventsContainer}>
                    <div className={style.title}>FootBall</div>
                    <div className={style.desc}>
                        Trade and bet on a variety of football betting markets, including those on the Premier League, Champions League, La Liga, Bundesliga and MLS.
                    </div>
                    <div className={style.heading}>
                        Popular
                    </div>
                    <div className={style.eventListSection}>
                        {eventInfo.length > 0 ?
                        <ul>
                            {eventInfo.map((event) => (
                                <Link
                                key={event.id}
                                to={`/event/${event.id}`}>
                                <li>
                                    
                                    <div>{getEventFirstName(event.name)}</div>
                                    <div>{getStartTime(event.start_datetime)}</div>
                                    <div>{getEventLastName(event.name)}</div>
                                </li>
                                </Link>
                            ))}
                        </ul>: <AppLoader />}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    popularIds: state.eventStore.popularIds,
    eventInfo: state.eventStore.eventInfo,
});

const mapDispatchToProps = (dispatch) => ({
    getPopularEvents: (successCallback) => dispatch(getPopularEvents(successCallback)),
    fetchEventInfo: (eventIds, successCallback) => dispatch(fetchEventInfo(eventIds, successCallback))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopEvents);