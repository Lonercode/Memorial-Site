import {Outlet, Link} from 'react-router-dom'

function Biography(){
    return (
        <>
        <div className = "bio">
        <h3>BIOGRAPHY OF A GREAT MAN <br/>
        ENGR. MATTHIAS UGWU ADOYI</h3>
        <p>Engr Mathias Ugwu Adoyi (who preferred to be referred to as ‘Mayas’) was a prolific, 
            ingenious and outspoken Civil Engineer and Public Servant. He was born to late Mr. Adoyi
             Abah and Mrs. Martha Idenyi Adoyi Abah  in Ugbugbu Owukpa, Ogbadigbo LGA of Benue State on 
             the 27th of July, 1965. He attended St. Francis College, Otukpo in June 1980. He never knew 
             what second position was from the first day he stepped into a classroom; he excelled above 
             his peers. He successfully concluded his West African School Certificate (WASC). 
             He attended the University of Benin, Benin City in September 1987, obtaining his 
             Bachelor of Engineering B. Eng (Civil) in the institution.  By August, 1996 he secured his 
             Master of Business Administration (MBA) in Management at the University of Nigeria, Nsukka. 
             He became a registered engineer with COREN(R.7834) in October 1999, a member of Nigerian 
             Society of Engineers (08285) in September 1997, a member of Nigerian Institute of Management, 
             MNIM(37348) in November 1998 and a fellow of the Nigerian Society of Engineers ,FNSE 
             in September 2013. He was also a chattered professional manager: Nigerian 
             Institute of Management (NIM). He obtained his Ph.D degree in Civil Engineering from MUST
              University Hollywood, FL, United States in September 2015.</p>
        <h3>WORK EXPERIENCE IN CHRONOLOGICAL SEQUENCE </h3>
        <p>
        He worked with the Council for the Regulation of Engineering in Nigeria as the only Director of Engineering, 
        Head, Engineering Regulation/Deputy Registrar from July 2013 till date and Head Professional Development from 
        February 2013 to July 2013. 
        He worked with Nigerian Coal Corporation as Manager (operations) from August 2002 to February 2003, 
        Head Research and Training from June 2001 to August 2002 and also Manager (Operations) June 1998 to 
        July 2001.
        Daddy also worked with Management of Civil Engineering Infrastructure where he was the senior civil 
        engineer and head of department of civil engineering (became a management staff) and also a special 
        assistant (technical) to managing director from October 1994- July 1998. At Benue State Polytechnic 
        Ugbokolo, Daddy worked as Lecturer 1 from May 1988-1990. He had special responsibilities which included: 
        Team leader accreditation visitation to over 20 polytechnics nationwide from 2004-date, member 
        accreditation visitation to engineering programs in Nigerian universities from 2004 till date, 
        secretary presidential implementation Committee where he supervised industrial training scheme in 
        Engineering (SITSIE) from 2005-2006, secretary Education and training committee of the Council of
         the Regulation of Engineering in Nigeria from 2003-date, secretary committee of Deans of Engineering and 
         Technology, CODET from 2005-date, Auditor Nigerian Society of Engineers NSE (2006-2007), secretary 
         COREN Engineering Assembly (2004-date), Technical Secretary Nigerian Society of Engineers, Enugu 
         (1997-2004), member committee of review of NSE Graduateship exam(2010-2011), secretary committee 
         on Reviews of Registrable qualifications by COREN (2005-date), Editor in chief “Coal News”; an 
         industrial magazines of the Nigerian coal corporation(1996-2004),  Editor ‘coal city news’- 
         a newsletter of the council for the regulation of engineering in Nigeria (2004-date) he was the editor 
         in chief before he became the editor and also chairman Coal Community Relations Committee.	<br/><br/>He enjoyed 
         playing football, reading, travelling and shopping. In his own words “shopping is my hobby, 
         I love shopping”. Engineer Matthias Adoyi lived a beautiful life and was a great philanthropist, 
         with a large number of people who continue to benefit from his good works.	He surived by his loving wife
         Mrs. Helen Adoyi and his children; Dr. Kevin Adoyi, Amanda Adoyi and Evans Adoyi.
        </p>

        </div>
        <Outlet/>
        </>
        
    )
}


export default Biography