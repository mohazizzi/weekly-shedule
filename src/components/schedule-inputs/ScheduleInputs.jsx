import uuid from 'react-uuid';
import './schedule-inputs.css';

const scheduleInputs = ({formData, setFormData, setSchedule, handleImageDownload})=>{

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [name]: value,
                id: uuid()
            }
        })    
    }

    function handleSubmit(e){
        e.preventDefault();
        setSchedule(prevSchedule =>{
            return[...prevSchedule, formData] 
        });
    }

    return(
        <div className="schedule-maker">
            <form action="#">
                <input 
                    type="text" 
                    placeholder="نام درس..."
                    name='lesson'
                    value={formData.lesson}
                    onChange={handleChange}/>
                <div className='select-inputs'>
                    <div className="select-group select1">
                        <label htmlFor="week">
                            انتخاب روز:
                        </label>
                        <select 
                            id="week"
                            name='day'
                            value={formData.day}
                            onChange={handleChange}>
                            <option value=''>---</option>
                            <option value="شنبه">
                                شنبه
                            </option>
                            <option value="یک شنبه">
                                یک شنبه
                            </option>
                            <option value="دوشنبه">
                                دوشنبه
                            </option>
                            <option value="سه شنبه">
                                سه شنبه
                            </option>
                            <option value="چهارشنبه">
                                چهارشنبه
                            </option>
                            <option value="پنج شنبه">
                                پنجشنبه
                            </option>
                            <option value="جمعه">
                                جمعه
                            </option>
                        </select>
                    </div>
                    <div className="select-group select2">
                        <label htmlFor="time-start">
                            ساعت شروع:
                        </label>
                        <select 
                            id="time-start"
                            name='startTime'
                            value={formData.startTime}
                            onChange={handleChange}>
                            <option value=''>---</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className="select-group select3">
                        <label htmlFor="time-end">
                            ساعت پایان:
                        </label>
                        <select 
                            id="time-end"
                            name='endTime'
                            value={formData.endTime}
                            onChange={handleChange}>
                            <option value=''>---</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className="select-group select4">
                        <label htmlFor="color">
                            رنگ:
                        </label>
                        <select
                            id="color"
                            name='color'
                            value={formData.color}
                            onChange={handleChange}>
                            <option value=''>---</option>
                            <option value="آبی">
                                آبی
                            </option>
                            <option value="سبز">
                                سبز
                            </option>
                            <option value="زرد">
                                زرد
                            </option>
                            <option value="خاکستری">
                                خاکستری
                            </option>
                            <option value="قرمز">
                                قرمز
                            </option>
                            <option value="بنفش">
                                بنفش
                            </option>
                            <option value="نارنجی">
                                نارنجی
                            </option>
                            <option value="کرمی">
                                کرمی
                            </option>
                            <option value="آبی تیره">
                                آبی تیره
                            </option>
                            <option value="سبز روشن">
                                سبز روشن
                            </option>
                            <option value="صورتی">
                                صورتی
                            </option>
                        </select>
                    </div>
                </div>
                <button onClick={handleSubmit} type="submit" className='add-new-btn'>
                    اضافه کردن
                </button>
                <button onClick={handleImageDownload} className="make-schedule-btn" type='button'>
                    دانلود برنامه
                </button>
            </form>
        </div>
    );
}
export default scheduleInputs;