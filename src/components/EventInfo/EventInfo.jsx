import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "./EventInfo.module.scss";
import { history } from '../../History';
import {getEventFirstName, getEventLastName, getStartTime, getFullDate} from "../../utils/events";
import { getPopularEvents, fetchEventInfo, getParentEventInfo } from "../../Actions/event.actions";
import AppLoader from '../appLoader/appLoader';


class EventInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventInfo:[],
            parentEventInfo:[],
        }
    };

    componentDidMount(){
        const { getPopularEvents, eventInfo, getParentEventInfo } = this.props;
        const { id } = this.props.match.params;
        if(eventInfo.length > 0){
            const filterData = eventInfo.filter((event) => event.id === id);
            this.setState({eventInfo: filterData[0]}, () => {
                getParentEventInfo(filterData[0].parent_id, this.onParentInfoSuccess);
            })
        }
        else{
            getPopularEvents(this.onSuccess);
        }

    }

    onSuccess = () => {
        const { popularIds, fetchEventInfo } = this.props;
        const eventIds = popularIds.join(",");
        fetchEventInfo(eventIds, this.onFetchSuccess);
    }

    onFetchSuccess = () => {
        const { eventInfo, getParentEventInfo } = this.props;
        const { id } = this.props.match.params;
        const filterData = eventInfo.filter((event) => event.id === id);
        this.setState({eventInfo: filterData[0]}, () => {
            getParentEventInfo(filterData[0].parent_id, this.onParentInfoSuccess);
        })
    }

    onParentInfoSuccess = () => {
        const { parentEventInfo } = this.props;
        this.setState({parentEventInfo: parentEventInfo})
    }

    render(){
        const { parentEventInfo } = this.props;
        const { eventInfo } = this.state;
        return(
            <div className={style.inFoMainContainer}>
                <div className={style.backArrow}><Link
                                to={`/`}>&#8592;</Link></div>
                {parentEventInfo.length > 0 && Object.keys(eventInfo).length > 0 ? 
                <div className={style.eventInfoContainer}>
                    <div className={style.league}>{parentEventInfo.length > 0 ? parentEventInfo[0].name: ""}</div>
                    <div className={style.eventDetailsSection}>
                        <div>{getEventFirstName(eventInfo.name)}</div>
                        <div className={style.eventTime}>{getStartTime(eventInfo.start_datetime)}</div>
                        <div>{getEventLastName(eventInfo.name)}</div>
                    </div>
                    <div className={style.eventDate}>{getFullDate(eventInfo.start_datetime)}</div> 
                </div>:<AppLoader />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    popularIds: state.eventStore.popularIds,
    eventInfo: state.eventStore.eventInfo,
    parentEventInfo: state.eventStore.parentEventInfo,
});

const mapDispatchToProps = (dispatch) => ({
    getPopularEvents: (successCallback) => dispatch(getPopularEvents(successCallback)),
    fetchEventInfo: (eventIds, successCallback) => dispatch(fetchEventInfo(eventIds, successCallback)),
    getParentEventInfo: (eventId, successCallback) => dispatch(getParentEventInfo(eventId, successCallback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventInfo);