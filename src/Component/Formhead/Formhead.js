import "./Formhead.css"
import Form from "../Form/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Formhead() {
    return (
        <div className="container">
        <div className="header"> 
        
        <div className="form-head">
        <small style={{fontSize:"11px"}}>Projects {'>'} ... {'>'} Project Information</small>
        <h5 className="request-software"style={{fontSize:"20px"}}>Request for Software</h5>
        <h5 className="request-software"style={{fontSize:"11px"}}><FontAwesomeIcon icon={faCalendarAlt} />  12 October - 26 October, 2022</h5>
       
        {/* <form>
          <label htmlFor="start-date"><FontAwesomeIcon icon={faCalendarAlt} /></label>
          <input type="date" id="start-date" name="start-date" style={{fontSize:"11px"}}/>

          <label htmlFor="completion-date"></label>
          <input type="date" id="completion-date" name="completion-date" style={{fontSize:"11px"}}/>
        </form> */}
    
</div>

      <div className="center"  style={{margin:"45px"}}>
        <ul>
          <li>
          <div className="pre-evaluation-feedback" >
          <h2 style={{fontSize:"13px"}}>Pre-Evaluation Feedback</h2>
          <h2 style={{fontSize:"10px"}}>12 October, 2022</h2>
           
          <div className="progress">
        <div class="progress-bar" role="progressbar" style={{width: '100%', margin:"6px"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
      </div>
        </div>

          </li>
          <li>
          <div className="intake-form">
          <h2 style={{fontSize:"13px"}}>Intake Form</h2>
          <h2 style={{fontSize:"10px"}}>16 October, 2022</h2>
          <div className="progress">
        <div class="progress-bar" role="progressbar" style={{width: '50%', margin:"6px"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
      </div>
        </div>
          </li>
        </ul>
        
        
      </div>

      <div className="project-overview">
        <button>Project Overview {'>'}</button>
      </div>
      </div>
      
        <div className="main-container">
        <div className="main main1" style={{flexGrow: 1, border:0 }}>
            <br></br>
            <br></br>
            <br></br>
            <section >General Information</section>
            <section >Security & Privacy</section>
            <section >Upload Documnets </section></div>
        <div className="main main2" style={{flexGrow: 3, border:0}}><Form/>
        
           </div>
        </div>
      </div>
      );
}

export default Formhead;