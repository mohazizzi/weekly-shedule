import './schedule.css'
import ShowSchedule from '../ShowSchedule';

const Schedule = ({schedule})=>{

    return(
        <div className="schedule" id='print'>
            <div className="schedule_header">
                <div className="schedule_header_weekdays">
                    <p>
                        روز هفته
                    </p>
                </div>
                <div className="schedule_header_hours">
                    <span className="span1">۸</span>
                    <span className="span2">۹</span>
                    <span className="span3">۱۰</span>
                    <span className="span4">۱۱</span>
                    <span className="span5">۱۲</span>
                    <span className="span6">۱۳</span>
                    <span className="span7">۱۴</span>
                    <span className="span8">۱۵</span>
                    <span className="span9">۱۶</span>
                    <span className="span10">۱۷</span>
                    <span className="span11">۱۸</span>
                    <span className="span12">۱۹</span>
                </div>
            </div>
            <div className="schedule-day">
                <div className="schedule_body">
                    <div className="schedule_body_weekdays">
                        <p>
                            شنبه
                        </p>
                    </div>
                    <div className="schedule_body_hours">
                        {
                            schedule.map(sch =>(
                                sch.day === 'شنبه' && <ShowSchedule key={sch.id} sch={sch}/>
                            ))   
                        }
                    </div>
                </div>
            </div>
            <div className="schedule-day">
                <div className="schedule_body">
                    <div className="schedule_body_weekdays">
                        <p>
                            یک شنبه
                        </p>
                    </div>
                    <div className="schedule_body_hours">
                        {
                            schedule.map(sch =>(
                                sch.day === 'یک شنبه' && <ShowSchedule key={sch.id} sch={sch}/>
                            ))   
                        }
                    </div>
                </div>
            </div>
            <div className="schedule-day">
                <div className="schedule_body">
                    <div className="schedule_body_weekdays">
                        <p>
                            دوشنبه
                        </p>
                    </div>
                    <div className="schedule_body_hours">
                        {
                            schedule.map(sch =>(
                                sch.day === 'دوشنبه' && <ShowSchedule key={sch.id} sch={sch}/>
                            ))   
                        }
                    </div>
                </div>
            </div>
            <div className="schedule-day">
                <div className="schedule_body">
                    <div className="schedule_body_weekdays">
                        <p>
                            سه شنبه
                        </p>
                    </div>
                    <div className="schedule_body_hours">
                        {
                            schedule.map(sch =>(
                                sch.day === 'سه شنبه' && <ShowSchedule key={sch.id} sch={sch}/>
                            ))   
                        }
                    </div>
                </div>
            </div>
            <div className="schedule-day">
                <div className="schedule_body">
                    <div className="schedule_body_weekdays">
                        <p>
                            چهارشنبه
                        </p>
                    </div>
                    <div className="schedule_body_hours">
                        {
                            schedule.map(sch =>(
                                sch.day === 'چهارشنبه' && <ShowSchedule key={sch.id} sch={sch}/>
                            ))   
                        }
                    </div>
                </div>
            </div>
            <div className="schedule-day">
                <div className="schedule_body">
                    <div className="schedule_body_weekdays">
                        <p>
                            پنجشنبه
                        </p>
                    </div>
                    <div className="schedule_body_hours">
                        {
                            schedule.map(sch =>(
                                sch.day === 'پنج شنبه' && <ShowSchedule key={sch.id} sch={sch}/>
                            ))   
                        }
                    </div>
                </div>
            </div>
            <div className="schedule-day">
                <div className="schedule_body">
                    <div className="schedule_body_weekdays">
                        <p>
                            جمعه
                        </p>
                    </div>
                    <div className="schedule_body_hours">
                        {
                            schedule.map(sch =>(
                                sch.day === 'جمعه' && <ShowSchedule key={sch.id} sch={sch}/>
                            ))   
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Schedule