


function ShowSchedule({sch}) {
    const style = {
        backgroundColor: getColor(sch.color),
        right: getPosition(sch.startTime),
        width: getWidth(sch.startTime,sch.endTime)
    }
    function getColor(color){
        if(color === 'آبی'){
            return '#52AD9C'
        }else if(color === 'سبز'){
            return '#96C99C'
        }else if(color === 'زرد'){
            return '#FFC857'
        }else if(color === 'خاکستری'){
            return '#A6A6A8'
        }else if(color === 'قرمز'){
            return '#FF8484'
        }else if(color === 'بنفش'){
            return '#AC92FA'
        }else if(color === 'نارنجی'){
            return '#F1935C'
        }else if(color === 'کرمی'){
            return '#F3DCAD'
        }else if(color === 'آبی تیره'){
            return '#55829C'
        }else if(color === 'سبز روشن'){
            return '#B0CAC7'
        }else if(color === 'صورتی'){
            return '#D7C1E0'
        }
    }
    function getPosition(number){
        if(number == 8){
            return 0;
        }else if(number == 9){
            return '90px';
        }else if(number == 10){
            return '180px';
        }else if(number == 11){
            return '270px';
        }else if(number == 12){
            return '360px';
        }else if(number == 13){
            return '450px';
        }else if(number == 14){
            return '540px';
        }else if(number == 15){
            return '630px';
        }else if(number == 16){
            return '720px';
        }else if(number == 17){
            return '810px';
        }else if(number == 18){
            return '900px';
        }else if(number == 19){
            return '990px';
        }else return '1080px';
    }
    function getWidth(number1,number2){
        let result = (number2 - number1)*90;
        return `${result}px`
    }

  return (
    <div className="task" style={style}>
        {sch.lesson}
    </div>
  )
}

export default ShowSchedule