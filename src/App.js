import { useState } from 'react';
import ScheduleIiput from './components/schedule-inputs/ScheduleInputs';
import ScheduleList from './components/schedule-list/ScheduleList';
import Schedule from './components/schedule/Schedule';
import html2canvas from 'html2canvas';

function App() {
  const [formData, setFormData] = useState(
    {
      id: null,
      lesson: "",
      day: "",
      startTime: "",
      endTime: "",
      color: ""
    }
  );
  const [schedule, setSchedule] = useState([]);

  const handleImageDownload = () => {
    const element = document.getElementById('print');
    html2canvas(element).then((canvas)=>{
      const imgData = canvas.toDataURL('image/jpg');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'my-shedule.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
  };

  return (
    <div className="container">
      <ScheduleIiput 
        formData={formData} 
        setFormData={setFormData} 
        setSchedule={setSchedule}
        handleImageDownload={handleImageDownload}/>
      <ScheduleList 
        schedule={schedule}
        setSchedule={setSchedule}/>
      <Schedule schedule={schedule}/>
    </div>
  );
}

export default App;