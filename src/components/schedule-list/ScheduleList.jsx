import './schedule-list.css'
import Lesson from '../Lesson'

const ScheduleList = ({schedule, setSchedule}) => {
  return (
    <div className="list-container">
      <div className="list-container_header">
          <div className="list-container_header_title title-delete">
            حذف
          </div>
          <div className="list-container_header_title title-name">
              نام درس
          </div>
          <div className="list-container_header_title title-date">
              روز
          </div>
          <div className="list-container_header_title title-start">
             شروع
          </div>
          <div className="list-container_header_title title-end">
             پایان
          </div>
          <div className="list-container_header_title title-color">
            رنگ
          </div>
      </div>
      <div className="list-container_body">
        {schedule.map(sch =>(
          <Lesson 
            key={sch.id} 
            sch={sch}
            schedule={schedule}
            setSchedule={setSchedule}/>
        ))}
      </div>
    </div> 
  )
}

export default ScheduleList