import { BsTrashFill } from "react-icons/bs";

const Lesson = ({schedule, setSchedule, sch})=>{

    function handleDelete(){
        setSchedule(schedule.filter((el) => el.id !== sch.id ));
    }

    return(
        <div className='list-container_body_lists'>
            <button onClick={handleDelete} className="list-container_body_title title-delete">
                <BsTrashFill className='title-delete-icon'/>
            </button>
            <p className="list-container_body_title title-name">
                {sch.lesson}
            </p>
            <p className="list-container_body_title title-date">
                {sch.day}
            </p>
            <p className="list-container_body_title title-start">
                {sch.startTime}
            </p>
            <p className="list-container_body_title title-end">
                {sch.endTime}
            </p>
            <p className="list-container_body_title title-color">
                {sch.color}
            </p>
        </div>
    );
}
export default Lesson